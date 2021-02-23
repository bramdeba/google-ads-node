var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_product_bidding_category_level_pb=require("../../../../../google/ads/googleads/v4/enums/product_bidding_category_level_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_product_bidding_category_level_pb);var google_ads_googleads_v4_enums_product_bidding_category_status_pb=require("../../../../../google/ads/googleads/v4/enums/product_bidding_category_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_product_bidding_category_status_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant",null,global),proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.displayName="proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.toObject=function(o){return proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.toObject(o,this)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.toObject=function(o,e){var t,r={resourceName:jspb.Message.getFieldWithDefault(e,1,""),id:(t=e.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(o,t),countryCode:(t=e.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t),productBiddingCategoryConstantParent:(t=e.getProductBiddingCategoryConstantParent())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t),level:jspb.Message.getFieldWithDefault(e,5,0),status:jspb.Message.getFieldWithDefault(e,6,0),languageCode:(t=e.getLanguageCode())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t),localizedName:(t=e.getLocalizedName())&&google_protobuf_wrappers_pb.StringValue.toObject(o,t)};return o&&(r.$jspbMessageInstance=e),r}),proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant;return proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var t=e.readString();o.setResourceName(t);break;case 2:t=new google_protobuf_wrappers_pb.Int64Value;e.readMessage(t,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),o.setId(t);break;case 3:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setCountryCode(t);break;case 4:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setProductBiddingCategoryConstantParent(t);break;case 5:t=e.readEnum();o.setLevel(t);break;case 6:t=e.readEnum();o.setStatus(t);break;case 7:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setLanguageCode(t);break;case 8:t=new google_protobuf_wrappers_pb.StringValue;e.readMessage(t,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setLocalizedName(t);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.serializeBinaryToWriter=function(o,e){var t=void 0;0<(t=o.getResourceName()).length&&e.writeString(1,t),null!=(t=o.getId())&&e.writeMessage(2,t,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(t=o.getCountryCode())&&e.writeMessage(3,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=o.getProductBiddingCategoryConstantParent())&&e.writeMessage(4,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(t=o.getLevel())&&e.writeEnum(5,t),0!==(t=o.getStatus())&&e.writeEnum(6,t),null!=(t=o.getLanguageCode())&&e.writeMessage(7,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(t=o.getLocalizedName())&&e.writeMessage(8,t,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setResourceName=function(o){return jspb.Message.setProto3StringField(this,1,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setId=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setCountryCode=function(o){return jspb.Message.setWrapperField(this,3,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.clearCountryCode=function(){return this.setCountryCode(void 0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getProductBiddingCategoryConstantParent=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setProductBiddingCategoryConstantParent=function(o){return jspb.Message.setWrapperField(this,4,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.clearProductBiddingCategoryConstantParent=function(){return this.setProductBiddingCategoryConstantParent(void 0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.hasProductBiddingCategoryConstantParent=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getLevel=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setLevel=function(o){return jspb.Message.setProto3EnumField(this,5,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setStatus=function(o){return jspb.Message.setProto3EnumField(this,6,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getLanguageCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setLanguageCode=function(o){return jspb.Message.setWrapperField(this,7,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.clearLanguageCode=function(){return this.setLanguageCode(void 0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.hasLanguageCode=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.getLocalizedName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,8)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.setLocalizedName=function(o){return jspb.Message.setWrapperField(this,8,o)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.clearLocalizedName=function(){return this.setLocalizedName(void 0)},proto.google.ads.googleads.v4.resources.ProductBiddingCategoryConstant.prototype.hasLocalizedName=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);