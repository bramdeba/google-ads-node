var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_policy_pb=require("../../../../../google/ads/googleads/v4/common/policy_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_policy_pb);var google_ads_googleads_v4_resources_ad_group_ad_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_ad_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_ad_group_ad_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdGroupAdOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AdGroupAdOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAdGroupAdRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupAdResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse",null,global),proto.google.ads.googleads.v4.services.GetAdGroupAdRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAdGroupAdRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.displayName="proto.google.ads.googleads.v4.services.GetAdGroupAdRequest"),proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest"),proto.google.ads.googleads.v4.services.AdGroupAdOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.AdGroupAdOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AdGroupAdOperation.displayName="proto.google.ads.googleads.v4.services.AdGroupAdOperation"),proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse"),proto.google.ads.googleads.v4.services.MutateAdGroupAdResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAdGroupAdResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.displayName="proto.google.ads.googleads.v4.services.MutateAdGroupAdResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetAdGroupAdRequest;return proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAdGroupAdRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.AdGroupAdOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest;return proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.AdGroupAdOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.AdGroupAdOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.AdGroupAdOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.AdGroupAdOperation,2)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.AdGroupAdOperation,o)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.AdGroupAdOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AdGroupAdOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.toObject=function(e,o){var s,r={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),policyValidationParameter:(s=o.getPolicyValidationParameter())&&google_ads_googleads_v4_common_policy_pb.PolicyValidationParameter.toObject(e,s),create:(s=o.getCreate())&&google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.AdGroupAdOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.AdGroupAdOperation;return proto.google.ads.googleads.v4.services.AdGroupAdOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 5:s=new google_ads_googleads_v4_common_policy_pb.PolicyValidationParameter;o.readMessage(s,google_ads_googleads_v4_common_policy_pb.PolicyValidationParameter.deserializeBinaryFromReader),e.setPolicyValidationParameter(s);break;case 1:s=new google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd;o.readMessage(s,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd;o.readMessage(s,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.deserializeBinaryFromReader),e.setUpdate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AdGroupAdOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AdGroupAdOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(4,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getPolicyValidationParameter())&&o.writeMessage(5,s,google_ads_googleads_v4_common_policy_pb.PolicyValidationParameter.serializeBinaryToWriter),null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(2,s,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getPolicyValidationParameter=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_policy_pb.PolicyValidationParameter,5)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.setPolicyValidationParameter=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.clearPolicyValidationParameter=function(){return this.setPolicyValidationParameter(void 0)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.hasPolicyValidationParameter=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd,1)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd,2)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.AdGroupAdOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.AdGroupAdOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.toObject=function(e,o){var s,r={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.toObject,e)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse;return proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateAdGroupAdResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateAdGroupAdResult,2)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateAdGroupAdResult,o)},proto.google.ads.googleads.v4.services.MutateAdGroupAdsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateAdGroupAdResult;return proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAdGroupAdResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);