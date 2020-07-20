var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_campaign_draft_status_pb=require("../../../../../google/ads/googleads/v4/enums/campaign_draft_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_campaign_draft_status_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CampaignDraft",null,global),proto.google.ads.googleads.v4.resources.CampaignDraft=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.CampaignDraft,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CampaignDraft.displayName="proto.google.ads.googleads.v4.resources.CampaignDraft"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CampaignDraft.toObject(e,this)},proto.google.ads.googleads.v4.resources.CampaignDraft.toObject=function(e,o){var r,a={resourceName:jspb.Message.getFieldWithDefault(o,1,""),draftId:(r=o.getDraftId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),baseCampaign:(r=o.getBaseCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),name:(r=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),draftCampaign:(r=o.getDraftCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),status:jspb.Message.getFieldWithDefault(o,6,0),hasExperimentRunning:(r=o.getHasExperimentRunning())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),longRunningOperation:(r=o.getLongRunningOperation())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.resources.CampaignDraft.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.CampaignDraft;return proto.google.ads.googleads.v4.resources.CampaignDraft.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.CampaignDraft.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setDraftId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setBaseCampaign(r);break;case 4:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(r);break;case 5:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setDraftCampaign(r);break;case 6:r=o.readEnum();e.setStatus(r);break;case 7:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHasExperimentRunning(r);break;case 8:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setLongRunningOperation(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CampaignDraft.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CampaignDraft.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getDraftId())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getBaseCampaign())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getName())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getDraftCampaign())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(r=e.getStatus())&&o.writeEnum(6,r),null!=(r=e.getHasExperimentRunning())&&o.writeMessage(7,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(r=e.getLongRunningOperation())&&o.writeMessage(8,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getDraftId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setDraftId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearDraftId=function(){return this.setDraftId(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasDraftId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getBaseCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setBaseCampaign=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearBaseCampaign=function(){return this.setBaseCampaign(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasBaseCampaign=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setName=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getDraftCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setDraftCampaign=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearDraftCampaign=function(){return this.setDraftCampaign(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasDraftCampaign=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,6,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getHasExperimentRunning=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setHasExperimentRunning=function(e){return jspb.Message.setWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearHasExperimentRunning=function(){return this.setHasExperimentRunning(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasHasExperimentRunning=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.getLongRunningOperation=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,8)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.setLongRunningOperation=function(e){return jspb.Message.setWrapperField(this,8,e)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.clearLongRunningOperation=function(){return this.setLongRunningOperation(void 0)},proto.google.ads.googleads.v4.resources.CampaignDraft.prototype.hasLongRunningOperation=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);