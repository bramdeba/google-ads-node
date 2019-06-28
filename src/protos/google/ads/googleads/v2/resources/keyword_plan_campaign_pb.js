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

var google_ads_googleads_v2_enums_keyword_plan_network_pb = require('../../../../../google/ads/googleads/v2/enums/keyword_plan_network_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v2.resources.KeywordPlanCampaign', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget', null, global);

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
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.KeywordPlanCampaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.displayName = 'proto.google.ads.googleads.v2.resources.KeywordPlanCampaign';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.repeatedFields_ = [5,8];



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
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanCampaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keywordPlan: (f = msg.getKeywordPlan()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    languageConstantsList: jspb.Message.toObjectList(msg.getLanguageConstantsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    keywordPlanNetwork: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cpcBidMicros: (f = msg.getCpcBidMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    geoTargetsList: jspb.Message.toObjectList(msg.getGeoTargetsList(),
    proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanCampaign}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.KeywordPlanCampaign;
  return proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanCampaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanCampaign}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setKeywordPlan(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addLanguageConstants(value);
      break;
    case 6:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork} */ (reader.readEnum());
      msg.setKeywordPlanNetwork(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCpcBidMicros(value);
      break;
    case 8:
      var value = new proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget;
      reader.readMessage(value,proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader);
      msg.addGeoTargets(value);
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
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanCampaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeywordPlan();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLanguageConstantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getKeywordPlanNetwork();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCpcBidMicros();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue keyword_plan = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getKeywordPlan = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setKeywordPlan = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearKeywordPlan = function() {
  this.setKeywordPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.hasKeywordPlan = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated google.protobuf.StringValue language_constants = 5;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getLanguageConstantsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/** @param {!Array<!proto.google.protobuf.StringValue>} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setLanguageConstantsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.addLanguageConstants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.StringValue, opt_index);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearLanguageConstantsList = function() {
  this.setLanguageConstantsList([]);
};


/**
 * optional google.ads.googleads.v2.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork keyword_plan_network = 6;
 * @return {!proto.google.ads.googleads.v2.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getKeywordPlanNetwork = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.KeywordPlanNetworkEnum.KeywordPlanNetwork} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setKeywordPlanNetwork = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Int64Value cpc_bid_micros = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getCpcBidMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setCpcBidMicros = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearCpcBidMicros = function() {
  this.setCpcBidMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.hasCpcBidMicros = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated KeywordPlanGeoTarget geo_targets = 8;
 * @return {!Array<!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget>}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.getGeoTargetsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget, 8));
};


/** @param {!Array<!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget>} value */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.setGeoTargetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.addGeoTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget, opt_index);
};


proto.google.ads.googleads.v2.resources.KeywordPlanCampaign.prototype.clearGeoTargetsList = function() {
  this.setGeoTargetsList([]);
};



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
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.displayName = 'proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget';
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
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    geoTargetConstant: (f = msg.getGeoTargetConstant()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget;
  return proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetConstant(value);
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
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeoTargetConstant();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue geo_target_constant = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.getGeoTargetConstant = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.setGeoTargetConstant = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.clearGeoTargetConstant = function() {
  this.setGeoTargetConstant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanGeoTarget.prototype.hasGeoTargetConstant = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);
