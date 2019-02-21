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

var google_ads_googleads_v0_common_criteria_pb = require('../../../../../google/ads/googleads/v0/common/criteria_pb.js');
var google_ads_googleads_v0_enums_bid_modifier_source_pb = require('../../../../../google/ads/googleads/v0/enums/bid_modifier_source_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v0.resources.AdGroupBidModifier', null, global);

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
proto.google.ads.googleads.v0.resources.AdGroupBidModifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v0.resources.AdGroupBidModifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v0.resources.AdGroupBidModifier.displayName = 'proto.google.ads.googleads.v0.resources.AdGroupBidModifier';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_ = [[5,6,7,8,11,12]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.CriterionCase = {
  CRITERION_NOT_SET: 0,
  HOTEL_DATE_SELECTION_TYPE: 5,
  HOTEL_ADVANCE_BOOKING_WINDOW: 6,
  HOTEL_LENGTH_OF_STAY: 7,
  HOTEL_CHECK_IN_DAY: 8,
  DEVICE: 11,
  PREFERRED_CONTENT: 12
};

/**
 * @return {proto.google.ads.googleads.v0.resources.AdGroupBidModifier.CriterionCase}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getCriterionCase = function() {
  return /** @type {proto.google.ads.googleads.v0.resources.AdGroupBidModifier.CriterionCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0]));
};



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
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.resources.AdGroupBidModifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupBidModifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    adGroup: (f = msg.getAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    criterionId: (f = msg.getCriterionId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    bidModifier: (f = msg.getBidModifier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    baseAdGroup: (f = msg.getBaseAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    bidModifierSource: jspb.Message.getFieldWithDefault(msg, 10, 0),
    hotelDateSelectionType: (f = msg.getHotelDateSelectionType()) && google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo.toObject(includeInstance, f),
    hotelAdvanceBookingWindow: (f = msg.getHotelAdvanceBookingWindow()) && google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo.toObject(includeInstance, f),
    hotelLengthOfStay: (f = msg.getHotelLengthOfStay()) && google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo.toObject(includeInstance, f),
    hotelCheckInDay: (f = msg.getHotelCheckInDay()) && google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && google_ads_googleads_v0_common_criteria_pb.DeviceInfo.toObject(includeInstance, f),
    preferredContent: (f = msg.getPreferredContent()) && google_ads_googleads_v0_common_criteria_pb.PreferredContentInfo.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupBidModifier}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.resources.AdGroupBidModifier;
  return proto.google.ads.googleads.v0.resources.AdGroupBidModifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupBidModifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupBidModifier}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAdGroup(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCriterionId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBidModifier(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setBaseAdGroup(value);
      break;
    case 10:
      var value = /** @type {!proto.google.ads.googleads.v0.enums.BidModifierSourceEnum.BidModifierSource} */ (reader.readEnum());
      msg.setBidModifierSource(value);
      break;
    case 5:
      var value = new google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo.deserializeBinaryFromReader);
      msg.setHotelDateSelectionType(value);
      break;
    case 6:
      var value = new google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo.deserializeBinaryFromReader);
      msg.setHotelAdvanceBookingWindow(value);
      break;
    case 7:
      var value = new google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo.deserializeBinaryFromReader);
      msg.setHotelLengthOfStay(value);
      break;
    case 8:
      var value = new google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo.deserializeBinaryFromReader);
      msg.setHotelCheckInDay(value);
      break;
    case 11:
      var value = new google_ads_googleads_v0_common_criteria_pb.DeviceInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.DeviceInfo.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 12:
      var value = new google_ads_googleads_v0_common_criteria_pb.PreferredContentInfo;
      reader.readMessage(value,google_ads_googleads_v0_common_criteria_pb.PreferredContentInfo.deserializeBinaryFromReader);
      msg.setPreferredContent(value);
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
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.resources.AdGroupBidModifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupBidModifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCriterionId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getBidModifier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBaseAdGroup();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getBidModifierSource();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getHotelDateSelectionType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo.serializeBinaryToWriter
    );
  }
  f = message.getHotelAdvanceBookingWindow();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo.serializeBinaryToWriter
    );
  }
  f = message.getHotelLengthOfStay();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo.serializeBinaryToWriter
    );
  }
  f = message.getHotelCheckInDay();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_ads_googleads_v0_common_criteria_pb.DeviceInfo.serializeBinaryToWriter
    );
  }
  f = message.getPreferredContent();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_ads_googleads_v0_common_criteria_pb.PreferredContentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue ad_group = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setAdGroup = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearAdGroup = function() {
  this.setAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasAdGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value criterion_id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getCriterionId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setCriterionId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearCriterionId = function() {
  this.setCriterionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasCriterionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue bid_modifier = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getBidModifier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setBidModifier = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearBidModifier = function() {
  this.setBidModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasBidModifier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue base_ad_group = 9;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getBaseAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setBaseAdGroup = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearBaseAdGroup = function() {
  this.setBaseAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasBaseAdGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.ads.googleads.v0.enums.BidModifierSourceEnum.BidModifierSource bid_modifier_source = 10;
 * @return {!proto.google.ads.googleads.v0.enums.BidModifierSourceEnum.BidModifierSource}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getBidModifierSource = function() {
  return /** @type {!proto.google.ads.googleads.v0.enums.BidModifierSourceEnum.BidModifierSource} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.google.ads.googleads.v0.enums.BidModifierSourceEnum.BidModifierSource} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setBidModifierSource = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional google.ads.googleads.v0.common.HotelDateSelectionTypeInfo hotel_date_selection_type = 5;
 * @return {?proto.google.ads.googleads.v0.common.HotelDateSelectionTypeInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getHotelDateSelectionType = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.HotelDateSelectionTypeInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.HotelDateSelectionTypeInfo, 5));
};


/** @param {?proto.google.ads.googleads.v0.common.HotelDateSelectionTypeInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setHotelDateSelectionType = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearHotelDateSelectionType = function() {
  this.setHotelDateSelectionType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasHotelDateSelectionType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.ads.googleads.v0.common.HotelAdvanceBookingWindowInfo hotel_advance_booking_window = 6;
 * @return {?proto.google.ads.googleads.v0.common.HotelAdvanceBookingWindowInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getHotelAdvanceBookingWindow = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.HotelAdvanceBookingWindowInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.HotelAdvanceBookingWindowInfo, 6));
};


/** @param {?proto.google.ads.googleads.v0.common.HotelAdvanceBookingWindowInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setHotelAdvanceBookingWindow = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearHotelAdvanceBookingWindow = function() {
  this.setHotelAdvanceBookingWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasHotelAdvanceBookingWindow = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.ads.googleads.v0.common.HotelLengthOfStayInfo hotel_length_of_stay = 7;
 * @return {?proto.google.ads.googleads.v0.common.HotelLengthOfStayInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getHotelLengthOfStay = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.HotelLengthOfStayInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.HotelLengthOfStayInfo, 7));
};


/** @param {?proto.google.ads.googleads.v0.common.HotelLengthOfStayInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setHotelLengthOfStay = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearHotelLengthOfStay = function() {
  this.setHotelLengthOfStay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasHotelLengthOfStay = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.ads.googleads.v0.common.HotelCheckInDayInfo hotel_check_in_day = 8;
 * @return {?proto.google.ads.googleads.v0.common.HotelCheckInDayInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getHotelCheckInDay = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.HotelCheckInDayInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.HotelCheckInDayInfo, 8));
};


/** @param {?proto.google.ads.googleads.v0.common.HotelCheckInDayInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setHotelCheckInDay = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearHotelCheckInDay = function() {
  this.setHotelCheckInDay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasHotelCheckInDay = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.ads.googleads.v0.common.DeviceInfo device = 11;
 * @return {?proto.google.ads.googleads.v0.common.DeviceInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getDevice = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.DeviceInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.DeviceInfo, 11));
};


/** @param {?proto.google.ads.googleads.v0.common.DeviceInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setDevice = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.ads.googleads.v0.common.PreferredContentInfo preferred_content = 12;
 * @return {?proto.google.ads.googleads.v0.common.PreferredContentInfo}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.getPreferredContent = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.PreferredContentInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_criteria_pb.PreferredContentInfo, 12));
};


/** @param {?proto.google.ads.googleads.v0.common.PreferredContentInfo|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.setPreferredContent = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.google.ads.googleads.v0.resources.AdGroupBidModifier.oneofGroups_[0], value);
};


proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.clearPreferredContent = function() {
  this.setPreferredContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupBidModifier.prototype.hasPreferredContent = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v0.resources);