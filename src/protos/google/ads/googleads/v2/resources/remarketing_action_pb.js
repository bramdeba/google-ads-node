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

var google_ads_googleads_v2_common_tag_snippet_pb = require('../../../../../google/ads/googleads/v2/common/tag_snippet_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v2.resources.RemarketingAction', null, global);

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
proto.google.ads.googleads.v2.resources.RemarketingAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.resources.RemarketingAction.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.RemarketingAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.resources.RemarketingAction.displayName = 'proto.google.ads.googleads.v2.resources.RemarketingAction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.repeatedFields_ = [4];



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
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.RemarketingAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.RemarketingAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    tagSnippetsList: jspb.Message.toObjectList(msg.getTagSnippetsList(),
    google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v2.resources.RemarketingAction}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.RemarketingAction;
  return proto.google.ads.googleads.v2.resources.RemarketingAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.RemarketingAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.RemarketingAction}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = new google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet;
      reader.readMessage(value,google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.deserializeBinaryFromReader);
      msg.addTagSnippets(value);
      break;
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
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.RemarketingAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.RemarketingAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTagSnippetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue name = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated google.ads.googleads.v2.common.TagSnippet tag_snippets = 4;
 * @return {!Array<!proto.google.ads.googleads.v2.common.TagSnippet>}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.getTagSnippetsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.common.TagSnippet>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet, 4));
};


/** @param {!Array<!proto.google.ads.googleads.v2.common.TagSnippet>} value */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.setTagSnippetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.common.TagSnippet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.common.TagSnippet}
 */
proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.addTagSnippets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.ads.googleads.v2.common.TagSnippet, opt_index);
};


proto.google.ads.googleads.v2.resources.RemarketingAction.prototype.clearTagSnippetsList = function() {
  this.setTagSnippetsList([]);
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);
