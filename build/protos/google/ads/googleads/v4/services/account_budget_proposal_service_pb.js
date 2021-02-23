var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_account_budget_proposal_pb=require("../../../../../google/ads/googleads/v4/resources/account_budget_proposal_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_account_budget_proposal_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult",null,global),proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.displayName="proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest"),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.displayName="proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest"),proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.displayName="proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation"),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.displayName="proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse"),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.displayName="proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.toObject=function(e,o){var t={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest;return proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setResourceName(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getResourceName()).length&&o.writeString(1,t)},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAccountBudgetProposalRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.toObject=function(e,o){var t,s={customerId:jspb.Message.getFieldWithDefault(o,1,""),operation:(t=o.getOperation())&&proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.toObject(e,t),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,3,!1)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setCustomerId(t);break;case 2:t=new proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation;o.readMessage(t,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.deserializeBinaryFromReader),e.setOperation(t);break;case 3:t=o.readBool();e.setValidateOnly(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getCustomerId()).length&&o.writeString(1,t),null!=(t=e.getOperation())&&o.writeMessage(2,t,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.serializeBinaryToWriter),(t=e.getValidateOnly())&&o.writeBool(3,t)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.getOperation=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation,2)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.setOperation=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.clearOperation=function(){return this.setOperation(void 0)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.hasOperation=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_=[[2,1]],proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:2,REMOVE:1},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.toObject=function(e,o){var t,s={updateMask:(t=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,t),create:(t=o.getCreate())&&google_ads_googleads_v4_resources_account_budget_proposal_pb.AccountBudgetProposal.toObject(e,t),remove:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation;return proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var t=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(t,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(t);break;case 2:t=new google_ads_googleads_v4_resources_account_budget_proposal_pb.AccountBudgetProposal;o.readMessage(t,google_ads_googleads_v4_resources_account_budget_proposal_pb.AccountBudgetProposal.deserializeBinaryFromReader),e.setCreate(t);break;case 1:t=o.readString();e.setRemove(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.serializeBinaryToWriter=function(e,o){var t=void 0;null!=(t=e.getUpdateMask())&&o.writeMessage(3,t,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(t=e.getCreate())&&o.writeMessage(2,t,google_ads_googleads_v4_resources_account_budget_proposal_pb.AccountBudgetProposal.serializeBinaryToWriter),null!=(t=jspb.Message.getField(e,1))&&o.writeString(1,t)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,3)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_account_budget_proposal_pb.AccountBudgetProposal,2)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.AccountBudgetProposalOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,1)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.toObject=function(e,o){var t,s={result:(t=o.getResult())&&proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.toObject(e,t)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 2:var t=new proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult;o.readMessage(t,proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.deserializeBinaryFromReader),e.setResult(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.serializeBinaryToWriter=function(e,o){var t=void 0;null!=(t=e.getResult())&&o.writeMessage(2,t,proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.getResult=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult,2)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.setResult=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.clearResult=function(){return this.setResult(void 0)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResponse.prototype.hasResult=function(){return null!=jspb.Message.getField(this,2)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.toObject=function(e,o){var t={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setResourceName(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getResourceName()).length&&o.writeString(1,t)},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAccountBudgetProposalResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);