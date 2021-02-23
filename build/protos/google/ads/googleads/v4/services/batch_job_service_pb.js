var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_batch_job_pb=require("../../../../../google/ads/googleads/v4/resources/batch_job_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_batch_job_pb);var google_ads_googleads_v4_services_google_ads_service_pb=require("../../../../../google/ads/googleads/v4/services/google_ads_service_pb.js");goog.object.extend(proto,google_ads_googleads_v4_services_google_ads_service_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_longrunning_operations_pb=require("../../../../../google/longrunning/operations_pb.js");goog.object.extend(proto,google_longrunning_operations_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.BatchJobOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.BatchJobOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.BatchJobResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetBatchJobRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateBatchJobRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateBatchJobResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateBatchJobResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.RunBatchJobRequest",null,global),proto.google.ads.googleads.v4.services.MutateBatchJobRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateBatchJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateBatchJobRequest.displayName="proto.google.ads.googleads.v4.services.MutateBatchJobRequest"),proto.google.ads.googleads.v4.services.BatchJobOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.BatchJobOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.BatchJobOperation.displayName="proto.google.ads.googleads.v4.services.BatchJobOperation"),proto.google.ads.googleads.v4.services.MutateBatchJobResponse=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateBatchJobResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateBatchJobResponse.displayName="proto.google.ads.googleads.v4.services.MutateBatchJobResponse"),proto.google.ads.googleads.v4.services.MutateBatchJobResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateBatchJobResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateBatchJobResult.displayName="proto.google.ads.googleads.v4.services.MutateBatchJobResult"),proto.google.ads.googleads.v4.services.GetBatchJobRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetBatchJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetBatchJobRequest.displayName="proto.google.ads.googleads.v4.services.GetBatchJobRequest"),proto.google.ads.googleads.v4.services.RunBatchJobRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.RunBatchJobRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.RunBatchJobRequest.displayName="proto.google.ads.googleads.v4.services.RunBatchJobRequest"),proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.displayName="proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest"),proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.displayName="proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse"),proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.displayName="proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest"),proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.displayName="proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse"),proto.google.ads.googleads.v4.services.BatchJobResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.BatchJobResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.BatchJobResult.displayName="proto.google.ads.googleads.v4.services.BatchJobResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateBatchJobRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.toObject=function(e,o){var s,t={customerId:jspb.Message.getFieldWithDefault(o,1,""),operation:(s=o.getOperation())&&proto.google.ads.googleads.v4.services.BatchJobOperation.toObject(e,s)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateBatchJobRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateBatchJobRequest;return proto.google.ads.googleads.v4.services.MutateBatchJobRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 2:s=new proto.google.ads.googleads.v4.services.BatchJobOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.BatchJobOperation.deserializeBinaryFromReader),e.setOperation(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateBatchJobRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),null!=(s=e.getOperation())&&o.writeMessage(2,s,proto.google.ads.googleads.v4.services.BatchJobOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.getOperation=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.services.BatchJobOperation,2)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.setOperation=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.clearOperation=function(){return this.setOperation(void 0)},proto.google.ads.googleads.v4.services.MutateBatchJobRequest.prototype.hasOperation=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_=[[1,3]],proto.google.ads.googleads.v4.services.BatchJobOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:3},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.BatchJobOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.BatchJobOperation.toObject=function(e,o){var s,t={create:(s=o.getCreate())&&google_ads_googleads_v4_resources_batch_job_pb.BatchJob.toObject(e,s),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.BatchJobOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.BatchJobOperation;return proto.google.ads.googleads.v4.services.BatchJobOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.BatchJobOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new google_ads_googleads_v4_resources_batch_job_pb.BatchJob;o.readMessage(s,google_ads_googleads_v4_resources_batch_job_pb.BatchJob.deserializeBinaryFromReader),e.setCreate(s);break;case 3:s=o.readString();e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.BatchJobOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.BatchJobOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_resources_batch_job_pb.BatchJob.serializeBinaryToWriter),null!=(s=jspb.Message.getField(e,3))&&o.writeString(3,s)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_batch_job_pb.BatchJob,1)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.BatchJobOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.BatchJobOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateBatchJobResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.toObject=function(e,o){var s,t={result:(s=o.getResult())&&proto.google.ads.googleads.v4.services.MutateBatchJobResult.toObject(e,s)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.MutateBatchJobResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateBatchJobResponse;return proto.google.ads.googleads.v4.services.MutateBatchJobResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new proto.google.ads.googleads.v4.services.MutateBatchJobResult;o.readMessage(s,proto.google.ads.googleads.v4.services.MutateBatchJobResult.deserializeBinaryFromReader),e.setResult(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateBatchJobResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getResult())&&o.writeMessage(1,s,proto.google.ads.googleads.v4.services.MutateBatchJobResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.getResult=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v4.services.MutateBatchJobResult,1)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.setResult=function(e){return jspb.Message.setWrapperField(this,1,e)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.clearResult=function(){return this.setResult(void 0)},proto.google.ads.googleads.v4.services.MutateBatchJobResponse.prototype.hasResult=function(){return null!=jspb.Message.getField(this,1)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateBatchJobResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateBatchJobResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateBatchJobResult.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateBatchJobResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.MutateBatchJobResult;return proto.google.ads.googleads.v4.services.MutateBatchJobResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.MutateBatchJobResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateBatchJobResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateBatchJobResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateBatchJobResult.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.MutateBatchJobResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateBatchJobResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetBatchJobRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetBatchJobRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetBatchJobRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.GetBatchJobRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.GetBatchJobRequest;return proto.google.ads.googleads.v4.services.GetBatchJobRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.GetBatchJobRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetBatchJobRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetBatchJobRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetBatchJobRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.GetBatchJobRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetBatchJobRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.RunBatchJobRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.RunBatchJobRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.RunBatchJobRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.RunBatchJobRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.RunBatchJobRequest;return proto.google.ads.googleads.v4.services.RunBatchJobRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.RunBatchJobRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.RunBatchJobRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.RunBatchJobRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.RunBatchJobRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s)},proto.google.ads.googleads.v4.services.RunBatchJobRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.RunBatchJobRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),sequenceToken:jspb.Message.getFieldWithDefault(o,2,""),mutateOperationsList:jspb.Message.toObjectList(o.getMutateOperationsList(),google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation.toObject,e)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest;return proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;case 2:s=o.readString();e.setSequenceToken(s);break;case 3:s=new google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation;o.readMessage(s,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation.deserializeBinaryFromReader),e.addMutateOperations(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s),0<(s=e.getSequenceToken()).length&&o.writeString(2,s),0<(s=e.getMutateOperationsList()).length&&o.writeRepeatedMessage(3,s,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.getSequenceToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.setSequenceToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.getMutateOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation,3)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.setMutateOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.addMutateOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,3,e,proto.google.ads.googleads.v4.services.MutateOperation,o)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsRequest.prototype.clearMutateOperationsList=function(){return this.setMutateOperationsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.toObject=function(e,o){var s={totalOperations:jspb.Message.getFieldWithDefault(o,1,0),nextSequenceToken:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse;return proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readInt64();e.setTotalOperations(s);break;case 2:s=o.readString();e.setNextSequenceToken(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;0!==(s=e.getTotalOperations())&&o.writeInt64(1,s),0<(s=e.getNextSequenceToken()).length&&o.writeString(2,s)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.getTotalOperations=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.setTotalOperations=function(e){return jspb.Message.setProto3IntField(this,1,e)},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.getNextSequenceToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.AddBatchJobOperationsResponse.prototype.setNextSequenceToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.toObject=function(e,o){var s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),pageToken:jspb.Message.getFieldWithDefault(o,2,""),pageSize:jspb.Message.getFieldWithDefault(o,3,0)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest;return proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;case 2:s=o.readString();e.setPageToken(s);break;case 3:s=o.readInt32();e.setPageSize(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s),0<(s=e.getPageToken()).length&&o.writeString(2,s),0!==(s=e.getPageSize())&&o.writeInt32(3,s)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.getPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.setPageToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.getPageSize=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v4.services.ListBatchJobResultsRequest.prototype.setPageSize=function(e){return jspb.Message.setProto3IntField(this,3,e)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.toObject=function(e,o){var s={resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.BatchJobResult.toObject,e),nextPageToken:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse;return proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new proto.google.ads.googleads.v4.services.BatchJobResult;o.readMessage(s,proto.google.ads.googleads.v4.services.BatchJobResult.deserializeBinaryFromReader),e.addResults(s);break;case 2:s=o.readString();e.setNextPageToken(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResultsList()).length&&o.writeRepeatedMessage(1,s,proto.google.ads.googleads.v4.services.BatchJobResult.serializeBinaryToWriter),0<(s=e.getNextPageToken()).length&&o.writeString(2,s)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.BatchJobResult,1)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,1,e)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,1,e,proto.google.ads.googleads.v4.services.BatchJobResult,o)},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.getNextPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.ads.googleads.v4.services.ListBatchJobResultsResponse.prototype.setNextPageToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.BatchJobResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.BatchJobResult.toObject(e,this)},proto.google.ads.googleads.v4.services.BatchJobResult.toObject=function(e,o){var s,t={operationIndex:jspb.Message.getFieldWithDefault(o,1,0),mutateOperationResponse:(s=o.getMutateOperationResponse())&&google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse.toObject(e,s),status:(s=o.getStatus())&&google_rpc_status_pb.Status.toObject(e,s)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.BatchJobResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.BatchJobResult;return proto.google.ads.googleads.v4.services.BatchJobResult.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.BatchJobResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readInt64();e.setOperationIndex(s);break;case 2:s=new google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse;o.readMessage(s,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse.deserializeBinaryFromReader),e.setMutateOperationResponse(s);break;case 3:s=new google_rpc_status_pb.Status;o.readMessage(s,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setStatus(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.BatchJobResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.BatchJobResult.serializeBinaryToWriter=function(e,o){var s=void 0;0!==(s=e.getOperationIndex())&&o.writeInt64(1,s),null!=(s=e.getMutateOperationResponse())&&o.writeMessage(2,s,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse.serializeBinaryToWriter),null!=(s=e.getStatus())&&o.writeMessage(3,s,google_rpc_status_pb.Status.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.getOperationIndex=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.setOperationIndex=function(e){return jspb.Message.setProto3IntField(this,1,e)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.getMutateOperationResponse=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse,2)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.setMutateOperationResponse=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.clearMutateOperationResponse=function(){return this.setMutateOperationResponse(void 0)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.hasMutateOperationResponse=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.getStatus=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.setStatus=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.clearStatus=function(){return this.setStatus(void 0)},proto.google.ads.googleads.v4.services.BatchJobResult.prototype.hasStatus=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);