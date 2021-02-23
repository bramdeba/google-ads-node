var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_campaign_draft_pb=require("../../../../../google/ads/googleads/v4/resources/campaign_draft_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_campaign_draft_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_longrunning_operations_pb=require("../../../../../google/longrunning/operations_pb.js");goog.object.extend(proto,google_longrunning_operations_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignDraftOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.CampaignDraftOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetCampaignDraftRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignDraftResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest",null,global),proto.google.ads.googleads.v4.services.GetCampaignDraftRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetCampaignDraftRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.displayName="proto.google.ads.googleads.v4.services.GetCampaignDraftRequest"),proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.displayName="proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest"),proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.displayName="proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest"),proto.google.ads.googleads.v4.services.CampaignDraftOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.CampaignDraftOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.CampaignDraftOperation.displayName="proto.google.ads.googleads.v4.services.CampaignDraftOperation"),proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.displayName="proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse"),proto.google.ads.googleads.v4.services.MutateCampaignDraftResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateCampaignDraftResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.displayName="proto.google.ads.googleads.v4.services.MutateCampaignDraftResult"),proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.displayName="proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest"),proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.displayName="proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetCampaignDraftRequest;return proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetCampaignDraftRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.toObject=function(e,o){var s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.CampaignDraftOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest;return proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.CampaignDraftOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.CampaignDraftOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 3:s=o.readBool();e.setPartialFailure(s);break;case 4:s=o.readBool();e.setValidateOnly(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.CampaignDraftOperation.serializeBinaryToWriter),(s=e.getPartialFailure())&&o.writeBool(3,s),(s=e.getValidateOnly())&&o.writeBool(4,s)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.CampaignDraftOperation,2)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.CampaignDraftOperation,o)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.toObject=function(e,o){var s={campaignDraft:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest;return proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCampaignDraft(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCampaignDraft()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.prototype.getCampaignDraft=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.PromoteCampaignDraftRequest.prototype.setCampaignDraft=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.CampaignDraftOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.CampaignDraftOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.toObject=function(e,o){var s,a={updateMask:(s=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,s),create:(s=o.getCreate())&&google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.toObject(e,s),update:(s=o.getUpdate())&&google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.CampaignDraftOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.CampaignDraftOperation;return proto.google.ads.googleads.v4.services.CampaignDraftOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var s=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(s,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(s);break;case 1:s=new google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft;o.readMessage(s,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft;o.readMessage(s,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.deserializeBinaryFromReader),e.setUpdate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.CampaignDraftOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.CampaignDraftOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUpdateMask())&&o.writeMessage(4,s,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.serializeBinaryToWriter),null!=(s=e.getUpdate())&&o.writeMessage(2,s,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft,1)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_campaign_draft_pb.CampaignDraft,2)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.CampaignDraftOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.CampaignDraftOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.toObject=function(e,o){var s,a={partialFailureError:(s=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,s),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.toObject,e)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse;return proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(s);break;case 2:s=new proto.google.ads.googleads.v4.services.MutateCampaignDraftResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.deserializeBinaryFromReader),e.addResults(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getPartialFailureError())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(2,s,proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateCampaignDraftResult,2)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateCampaignDraftResult,o)},proto.google.ads.googleads.v4.services.MutateCampaignDraftsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateCampaignDraftResult;return proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateCampaignDraftResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),pageToken:jspb.Message.getFieldWithDefault(o,2,""),pageSize:jspb.Message.getFieldWithDefault(o,3,0)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest;return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;case 2:s=o.readString();e.setPageToken(s);break;case 3:s=o.readInt32();e.setPageSize(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s),0<(s=e.getPageToken()).length&&o.writeString(2,s),0!==(s=e.getPageSize())&&o.writeInt32(3,s)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.getPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.setPageToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.getPageSize=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsRequest.prototype.setPageSize=function(e){return jspb.Message.setProto3IntField(this,3,e)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.toObject=function(e,o){var s={errorsList:jspb.Message.toObjectList(o.getErrorsList(),google_rpc_status_pb.Status.toObject,e),nextPageToken:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse;return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.addErrors(s);break;case 2:s=o.readString();e.setNextPageToken(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getErrorsList()).length&&o.writeRepeatedMessage(1,s,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(s=e.getNextPageToken()).length&&o.writeString(2,s)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.getErrorsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_rpc_status_pb.Status,1)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.setErrorsList=function(e){return jspb.Message.setRepeatedWrapperField(this,1,e)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.addErrors=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,1,e,proto.google.rpc.Status,o)},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.clearErrorsList=function(){return this.setErrorsList([])},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.getNextPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.ListCampaignDraftAsyncErrorsResponse.prototype.setNextPageToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);