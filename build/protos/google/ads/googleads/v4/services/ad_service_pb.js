var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_ad_pb=require("../../../../../google/ads/googleads/v4/resources/ad_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_ad_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAdRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdsResponse",null,global),proto.google.ads.googleads.v4.services.GetAdRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAdRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAdRequest.displayName="proto.google.ads.googleads.v4.services.GetAdRequest"),proto.google.ads.googleads.v4.services.MutateAdsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdsRequest.displayName="proto.google.ads.googleads.v4.services.MutateAdsRequest"),proto.google.ads.googleads.v4.services.AdOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.AdOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.AdOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AdOperation.displayName="proto.google.ads.googleads.v4.services.AdOperation"),proto.google.ads.googleads.v4.services.MutateAdsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdsResponse.displayName="proto.google.ads.googleads.v4.services.MutateAdsResponse"),proto.google.ads.googleads.v4.services.MutateAdResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdResult.displayName="proto.google.ads.googleads.v4.services.MutateAdResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAdRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAdRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAdRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetAdRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetAdRequest;return proto.google.ads.googleads.v4.services.GetAdRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetAdRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAdRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAdRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAdRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetAdRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAdRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.AdOperation.toObject,e)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdsRequest;return proto.google.ads.googleads.v4.services.MutateAdsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.AdOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.AdOperation.deserializeBinaryFromReader),e.addOperations(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.AdOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.AdOperation,2)},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.AdOperation,o)},proto.google.ads.googleads.v4.services.MutateAdsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.AdOperation.oneofGroups_=[[1]],proto.google.ads.googleads.v4.services.AdOperation.OperationCase={OPERATION_NOT_SET:0,UPDATE:1},proto.google.ads.googleads.v4.services.AdOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.AdOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AdOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AdOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.AdOperation.toObject=function(e,o){var s,t={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_ad_pb.Ad.toObject(e,s)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.AdOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.AdOperation;return proto.google.ads.googleads.v4.services.AdOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.AdOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 2:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 1:s=new google_ads_googleads_v4_resources_ad_pb.Ad;o.readMessage(s,google_ads_googleads_v4_resources_ad_pb.Ad.deserializeBinaryFromReader),e.setUpdate(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AdOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AdOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AdOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(2,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_ad_pb.Ad.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.AdOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,2)},proto.google.ads.googleads.v4.services.AdOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.AdOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.AdOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.AdOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_ad_pb.Ad,1)},proto.google.ads.googleads.v4.services.AdOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.AdOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.AdOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.MutateAdsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdsResponse.toObject=function(e,o){var s={resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateAdResult.toObject,e)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdsResponse;return proto.google.ads.googleads.v4.services.MutateAdsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 2:var s=new proto.google.ads.googleads.v4.services.MutateAdResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateAdResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateAdResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateAdResult,2)},proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateAdResult,o)},proto.google.ads.googleads.v4.services.MutateAdsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdResult;return proto.google.ads.googleads.v4.services.MutateAdResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateAdResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);