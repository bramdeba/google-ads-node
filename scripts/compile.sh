#!/bin/bash

# Protocol buffer directories
WORK_DIR=/usr/local/gads
PROTO_ROOT_DIR=/opt/include/google
PROTO_SRC_DIR=ads/googleads/$GOOGLE_ADS_VERSION/**/*.proto
PROTO_SRC_DEPENDENCIES=$PROTO_ROOT_DIR/**/*.proto

PROTO_COMMON_ONLY=$PROTO_ROOT_DIR/ads/googleads/$GOOGLE_ADS_VERSION/common/*.proto
PROTO_ERRORS_ONLY=$PROTO_ROOT_DIR/ads/googleads/$GOOGLE_ADS_VERSION/errors/*.proto
PROTO_ENUMS_ONLY=$PROTO_ROOT_DIR/ads/googleads/$GOOGLE_ADS_VERSION/enums/*.proto
PROTO_RESOURCES_ONLY=$PROTO_ROOT_DIR/ads/googleads/$GOOGLE_ADS_VERSION/resources/*.proto
PROTO_SERVICES_ONLY=$PROTO_ROOT_DIR/ads/googleads/$GOOGLE_ADS_VERSION/services/*.proto

PROTO_GOOGLE_DEPENDENCIES="$PROTO_ROOT_DIR/api/*.proto $PROTO_ROOT_DIR/rpc/*.proto $PROTO_ROOT_DIR/longrunning/*.proto"
ALL_PROTOBUFS="$PROTO_GOOGLE_DEPENDENCIES $PROTO_COMMON_ONLY $PROTO_ERRORS_ONLY $PROTO_ENUMS_ONLY $PROTO_RESOURCES_ONLY $PROTO_SERVICES_ONLY"

# Protobuf compiled resources
OUT_COMPILED_ENUMS=$WORK_DIR/compiled-enums.json
OUT_COMPILED_RESOURCES=compiled-resources.js
OUT_COMPILED_RESOURCES_JSON=$WORK_DIR/compiled-resources.json

OUT_STATIC_TS_ENUMS=$WORK_DIR/compiled-ts-files/enums.ts
OUT_STATIC_TS_RESOURCES=$WORK_DIR/compiled-ts-files/resources.ts
OUT_STATIC_TS_ENUM_MAPPING=$WORK_DIR/compiled-ts-files/mapping.ts
OUT_STATIC_TS_ENUM_STRUCT=$WORK_DIR/compiled-ts-files/struct.ts

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR=$WORK_DIR/compiled-protos

# Protoc plugin paths
PROTOC_GEN_TS_PATH=/usr/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts
PROTOC_GEN_GRPC_PATH=/usr/lib/node_modules/grpc-tools/bin/grpc_node_plugin

# Setup directories
if [ -d "$OUT_DIR" ]; then
    rm -rf $OUT_DIR
fi
mkdir $OUT_DIR
mkdir compiled-ts-files

# Compile Google dependencies
# Temporary workaround for https://github.com/protocolbuffers/protobuf/issues/5318
for file in $PROTO_GOOGLE_DEPENDENCIES; do
    echo "compiling dependency $(basename $file)";
    protoc \
        -I=/opt/include \
        -I=$PROTO_ROOT_DIR \
        --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
        --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
        --grpc_out=$OUT_DIR \
        --js_out=import_style=commonjs,binary:$OUT_DIR \
        --ts_out=$OUT_DIR \
        $file
done

# Compile Google Ads protocol buffers
for file in $PROTO_ROOT_DIR/$PROTO_SRC_DIR; do
    echo "compiling proto $(basename $file)";
    protoc \
        -I=/opt/include \
        -I=$PROTO_ROOT_DIR \
        --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
        --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
        --grpc_out=$OUT_DIR \
        --js_out=import_style=commonjs,binary:$OUT_DIR \
        --ts_out=$OUT_DIR \
        $file
done
echo "## Autogenerated Files! Do Not Edit" > $OUT_DIR/README.md

# Compile types

## Enums
echo "Generating enums.."
pbjs -t json $PROTO_ENUMS_ONLY $PROTO_ERRORS_ONLY $PROTO_COMMON_ONLY > $OUT_COMPILED_ENUMS
node $WORK_DIR/scripts/generate-enums.js $OUT_COMPILED_ENUMS $GOOGLE_ADS_VERSION $OUT_STATIC_TS_ENUMS
rm $OUT_COMPILED_ENUMS

## Resources
echo "Generating resources.."
pbjs -t json $ALL_PROTOBUFS > $OUT_COMPILED_RESOURCES_JSON
pbjs -t static-module -w commonjs -o $OUT_COMPILED_RESOURCES $ALL_PROTOBUFS

echo "Generating interfaces.."
node ./scripts/generate-interfaces.js \
    $OUT_COMPILED_RESOURCES_JSON \
    $GOOGLE_ADS_VERSION \
    $OUT_STATIC_TS_RESOURCES \
    $OUT_STATIC_TS_ENUM_MAPPING

echo "Generating structs.."
node ./scripts/generate-structs.js \
    $OUT_COMPILED_RESOURCES_JSON \
    $GOOGLE_ADS_VERSION \
    $OUT_STATIC_TS_ENUM_STRUCT

# Prettify generated ts files
echo "Done, prettifying compiled files.."
prettier --write $OUT_STATIC_TS_ENUMS
prettier --write $OUT_STATIC_TS_RESOURCES
prettier --write $OUT_STATIC_TS_ENUM_MAPPING
prettier --write $OUT_STATIC_TS_ENUM_STRUCT
echo "Finished generating types"

# Compress generated protobuf files
echo "Compressing generated protobuf files.. (this may take a few minutes)"
uglifyjs $OUT_COMPILED_RESOURCES -o $OUT_COMPILED_RESOURCES --compress --mangle

for file in $OUT_DIR/google/ads/googleads/$GOOGLE_ADS_VERSION/**/*.js; do
    echo "compressing $(basename $file)";
    uglifyjs $file -o $file --compress --mangle;
done

for file in $OUT_DIR/google/**/*.js; do
    echo "compressing $(basename $file)";
    uglifyjs $file -o $file --compress --mangle;
done

echo "Removing empty files.."
find $OUT_DIR -size 0 -delete
echo "Finished compressing protos"

echo "Finished ALL"