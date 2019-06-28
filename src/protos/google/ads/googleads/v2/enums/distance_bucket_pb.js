/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v2.enums.DistanceBucketEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.enums.DistanceBucketEnum.DistanceBucket', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.enums.DistanceBucketEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.enums.DistanceBucketEnum.displayName = 'proto.google.ads.googleads.v2.enums.DistanceBucketEnum';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.enums.DistanceBucketEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.enums.DistanceBucketEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v2.enums.DistanceBucketEnum}
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.enums.DistanceBucketEnum;
  return proto.google.ads.googleads.v2.enums.DistanceBucketEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.enums.DistanceBucketEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.enums.DistanceBucketEnum}
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.enums.DistanceBucketEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.enums.DistanceBucketEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.enums.DistanceBucketEnum.DistanceBucket = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  WITHIN_700M: 2,
  WITHIN_1KM: 3,
  WITHIN_5KM: 4,
  WITHIN_10KM: 5,
  WITHIN_15KM: 6,
  WITHIN_20KM: 7,
  WITHIN_25KM: 8,
  WITHIN_30KM: 9,
  WITHIN_35KM: 10,
  WITHIN_40KM: 11,
  WITHIN_45KM: 12,
  WITHIN_50KM: 13,
  WITHIN_55KM: 14,
  WITHIN_60KM: 15,
  WITHIN_65KM: 16,
  BEYOND_65KM: 17,
  WITHIN_0_7MILES: 18,
  WITHIN_1MILE: 19,
  WITHIN_5MILES: 20,
  WITHIN_10MILES: 21,
  WITHIN_15MILES: 22,
  WITHIN_20MILES: 23,
  WITHIN_25MILES: 24,
  WITHIN_30MILES: 25,
  WITHIN_35MILES: 26,
  WITHIN_40MILES: 27,
  BEYOND_40MILES: 28
};

goog.object.extend(exports, proto.google.ads.googleads.v2.enums);
