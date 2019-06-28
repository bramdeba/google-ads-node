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
goog.exportSymbol('proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.ConversionLagBucket', null, global);

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
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.displayName = 'proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum';
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
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum}
 */
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum;
  return proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum}
 */
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.enums.ConversionLagBucketEnum.ConversionLagBucket = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  LESS_THAN_ONE_DAY: 2,
  ONE_TO_TWO_DAYS: 3,
  TWO_TO_THREE_DAYS: 4,
  THREE_TO_FOUR_DAYS: 5,
  FOUR_TO_FIVE_DAYS: 6,
  FIVE_TO_SIX_DAYS: 7,
  SIX_TO_SEVEN_DAYS: 8,
  SEVEN_TO_EIGHT_DAYS: 9,
  EIGHT_TO_NINE_DAYS: 10,
  NINE_TO_TEN_DAYS: 11,
  TEN_TO_ELEVEN_DAYS: 12,
  ELEVEN_TO_TWELVE_DAYS: 13,
  TWELVE_TO_THIRTEEN_DAYS: 14,
  THIRTEEN_TO_FOURTEEN_DAYS: 15,
  FOURTEEN_TO_TWENTY_ONE_DAYS: 16,
  TWENTY_ONE_TO_THIRTY_DAYS: 17,
  THIRTY_TO_FORTY_FIVE_DAYS: 18,
  FORTY_FIVE_TO_SIXTY_DAYS: 19,
  SIXTY_TO_NINETY_DAYS: 20
};

goog.object.extend(exports, proto.google.ads.googleads.v2.enums);
