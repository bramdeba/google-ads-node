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
goog.exportSymbol('proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.LocalPlaceholderField', null, global);

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
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.displayName = 'proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum';
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
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum}
 */
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum;
  return proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum}
 */
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.enums.LocalPlaceholderFieldEnum.LocalPlaceholderField = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  DEAL_ID: 2,
  DEAL_NAME: 3,
  SUBTITLE: 4,
  DESCRIPTION: 5,
  PRICE: 6,
  FORMATTED_PRICE: 7,
  SALE_PRICE: 8,
  FORMATTED_SALE_PRICE: 9,
  IMAGE_URL: 10,
  ADDRESS: 11,
  CATEGORY: 12,
  CONTEXTUAL_KEYWORDS: 13,
  FINAL_URLS: 14,
  FINAL_MOBILE_URLS: 15,
  TRACKING_URL: 16,
  ANDROID_APP_LINK: 17,
  SIMILAR_DEAL_IDS: 18,
  IOS_APP_LINK: 19,
  IOS_APP_STORE_ID: 20
};

goog.object.extend(exports, proto.google.ads.googleads.v2.enums);
