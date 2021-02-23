var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_protobuf_any_pb=require("google-protobuf/google/protobuf/any_pb.js");goog.object.extend(proto,google_protobuf_any_pb);var google_protobuf_duration_pb=require("google-protobuf/google/protobuf/duration_pb.js");goog.object.extend(proto,google_protobuf_duration_pb);var google_protobuf_empty_pb=require("google-protobuf/google/protobuf/empty_pb.js");goog.object.extend(proto,google_protobuf_empty_pb);var google_rpc_status_pb=require("../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb);var google_protobuf_descriptor_pb=require("google-protobuf/google/protobuf/descriptor_pb.js");goog.object.extend(proto,google_protobuf_descriptor_pb),goog.exportSymbol("proto.google.longrunning.CancelOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.DeleteOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.GetOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.ListOperationsRequest",null,global),goog.exportSymbol("proto.google.longrunning.ListOperationsResponse",null,global),goog.exportSymbol("proto.google.longrunning.Operation",null,global),goog.exportSymbol("proto.google.longrunning.Operation.ResultCase",null,global),goog.exportSymbol("proto.google.longrunning.OperationInfo",null,global),goog.exportSymbol("proto.google.longrunning.WaitOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.operationInfo",null,global),proto.google.longrunning.Operation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.longrunning.Operation.oneofGroups_)},goog.inherits(proto.google.longrunning.Operation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.Operation.displayName="proto.google.longrunning.Operation"),proto.google.longrunning.GetOperationRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.GetOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.GetOperationRequest.displayName="proto.google.longrunning.GetOperationRequest"),proto.google.longrunning.ListOperationsRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.ListOperationsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.ListOperationsRequest.displayName="proto.google.longrunning.ListOperationsRequest"),proto.google.longrunning.ListOperationsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.longrunning.ListOperationsResponse.repeatedFields_,null)},goog.inherits(proto.google.longrunning.ListOperationsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.ListOperationsResponse.displayName="proto.google.longrunning.ListOperationsResponse"),proto.google.longrunning.CancelOperationRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.CancelOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.CancelOperationRequest.displayName="proto.google.longrunning.CancelOperationRequest"),proto.google.longrunning.DeleteOperationRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.DeleteOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.DeleteOperationRequest.displayName="proto.google.longrunning.DeleteOperationRequest"),proto.google.longrunning.WaitOperationRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.WaitOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.WaitOperationRequest.displayName="proto.google.longrunning.WaitOperationRequest"),proto.google.longrunning.OperationInfo=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.longrunning.OperationInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.OperationInfo.displayName="proto.google.longrunning.OperationInfo"),proto.google.longrunning.Operation.oneofGroups_=[[4,5]],proto.google.longrunning.Operation.ResultCase={RESULT_NOT_SET:0,ERROR:4,RESPONSE:5},proto.google.longrunning.Operation.prototype.getResultCase=function(){return jspb.Message.computeOneofCase(this,proto.google.longrunning.Operation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.Operation.prototype.toObject=function(e){return proto.google.longrunning.Operation.toObject(e,this)},proto.google.longrunning.Operation.toObject=function(e,o){var n,t={name:jspb.Message.getFieldWithDefault(o,1,""),metadata:(n=o.getMetadata())&&google_protobuf_any_pb.Any.toObject(e,n),done:jspb.Message.getBooleanFieldWithDefault(o,3,!1),error:(n=o.getError())&&google_rpc_status_pb.Status.toObject(e,n),response:(n=o.getResponse())&&google_protobuf_any_pb.Any.toObject(e,n)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.longrunning.Operation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.Operation;return proto.google.longrunning.Operation.deserializeBinaryFromReader(n,o)},proto.google.longrunning.Operation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setName(n);break;case 2:n=new google_protobuf_any_pb.Any;o.readMessage(n,google_protobuf_any_pb.Any.deserializeBinaryFromReader),e.setMetadata(n);break;case 3:n=o.readBool();e.setDone(n);break;case 4:n=new google_rpc_status_pb.Status;o.readMessage(n,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setError(n);break;case 5:n=new google_protobuf_any_pb.Any;o.readMessage(n,google_protobuf_any_pb.Any.deserializeBinaryFromReader),e.setResponse(n);break;default:o.skipField()}}return e},proto.google.longrunning.Operation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.Operation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.Operation.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(1,n),null!=(n=e.getMetadata())&&o.writeMessage(2,n,google_protobuf_any_pb.Any.serializeBinaryToWriter),(n=e.getDone())&&o.writeBool(3,n),null!=(n=e.getError())&&o.writeMessage(4,n,google_rpc_status_pb.Status.serializeBinaryToWriter),null!=(n=e.getResponse())&&o.writeMessage(5,n,google_protobuf_any_pb.Any.serializeBinaryToWriter)},proto.google.longrunning.Operation.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.Operation.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.longrunning.Operation.prototype.getMetadata=function(){return jspb.Message.getWrapperField(this,google_protobuf_any_pb.Any,2)},proto.google.longrunning.Operation.prototype.setMetadata=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.longrunning.Operation.prototype.clearMetadata=function(){return this.setMetadata(void 0)},proto.google.longrunning.Operation.prototype.hasMetadata=function(){return null!=jspb.Message.getField(this,2)},proto.google.longrunning.Operation.prototype.getDone=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.longrunning.Operation.prototype.setDone=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.longrunning.Operation.prototype.getError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,4)},proto.google.longrunning.Operation.prototype.setError=function(e){return jspb.Message.setOneofWrapperField(this,4,proto.google.longrunning.Operation.oneofGroups_[0],e)},proto.google.longrunning.Operation.prototype.clearError=function(){return this.setError(void 0)},proto.google.longrunning.Operation.prototype.hasError=function(){return null!=jspb.Message.getField(this,4)},proto.google.longrunning.Operation.prototype.getResponse=function(){return jspb.Message.getWrapperField(this,google_protobuf_any_pb.Any,5)},proto.google.longrunning.Operation.prototype.setResponse=function(e){return jspb.Message.setOneofWrapperField(this,5,proto.google.longrunning.Operation.oneofGroups_[0],e)},proto.google.longrunning.Operation.prototype.clearResponse=function(){return this.setResponse(void 0)},proto.google.longrunning.Operation.prototype.hasResponse=function(){return null!=jspb.Message.getField(this,5)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.GetOperationRequest.prototype.toObject=function(e){return proto.google.longrunning.GetOperationRequest.toObject(e,this)},proto.google.longrunning.GetOperationRequest.toObject=function(e,o){var n={name:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.GetOperationRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.GetOperationRequest;return proto.google.longrunning.GetOperationRequest.deserializeBinaryFromReader(n,o)},proto.google.longrunning.GetOperationRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setName(n);break;default:o.skipField()}}return e},proto.google.longrunning.GetOperationRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.GetOperationRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.GetOperationRequest.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(1,n)},proto.google.longrunning.GetOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.GetOperationRequest.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.ListOperationsRequest.prototype.toObject=function(e){return proto.google.longrunning.ListOperationsRequest.toObject(e,this)},proto.google.longrunning.ListOperationsRequest.toObject=function(e,o){var n={name:jspb.Message.getFieldWithDefault(o,4,""),filter:jspb.Message.getFieldWithDefault(o,1,""),pageSize:jspb.Message.getFieldWithDefault(o,2,0),pageToken:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.ListOperationsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.ListOperationsRequest;return proto.google.longrunning.ListOperationsRequest.deserializeBinaryFromReader(n,o)},proto.google.longrunning.ListOperationsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var n=o.readString();e.setName(n);break;case 1:n=o.readString();e.setFilter(n);break;case 2:n=o.readInt32();e.setPageSize(n);break;case 3:n=o.readString();e.setPageToken(n);break;default:o.skipField()}}return e},proto.google.longrunning.ListOperationsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.ListOperationsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.ListOperationsRequest.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(4,n),0<(n=e.getFilter()).length&&o.writeString(1,n),0!==(n=e.getPageSize())&&o.writeInt32(2,n),0<(n=e.getPageToken()).length&&o.writeString(3,n)},proto.google.longrunning.ListOperationsRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,4,"")},proto.google.longrunning.ListOperationsRequest.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,4,e)},proto.google.longrunning.ListOperationsRequest.prototype.getFilter=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.ListOperationsRequest.prototype.setFilter=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.longrunning.ListOperationsRequest.prototype.getPageSize=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.longrunning.ListOperationsRequest.prototype.setPageSize=function(e){return jspb.Message.setProto3IntField(this,2,e)},proto.google.longrunning.ListOperationsRequest.prototype.getPageToken=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.longrunning.ListOperationsRequest.prototype.setPageToken=function(e){return jspb.Message.setProto3StringField(this,3,e)},proto.google.longrunning.ListOperationsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.ListOperationsResponse.prototype.toObject=function(e){return proto.google.longrunning.ListOperationsResponse.toObject(e,this)},proto.google.longrunning.ListOperationsResponse.toObject=function(e,o){var n={operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.longrunning.Operation.toObject,e),nextPageToken:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.ListOperationsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.ListOperationsResponse;return proto.google.longrunning.ListOperationsResponse.deserializeBinaryFromReader(n,o)},proto.google.longrunning.ListOperationsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=new proto.google.longrunning.Operation;o.readMessage(n,proto.google.longrunning.Operation.deserializeBinaryFromReader),e.addOperations(n);break;case 2:n=o.readString();e.setNextPageToken(n);break;default:o.skipField()}}return e},proto.google.longrunning.ListOperationsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.ListOperationsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.ListOperationsResponse.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getOperationsList()).length&&o.writeRepeatedMessage(1,n,proto.google.longrunning.Operation.serializeBinaryToWriter),0<(n=e.getNextPageToken()).length&&o.writeString(2,n)},proto.google.longrunning.ListOperationsResponse.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.longrunning.Operation,1)},proto.google.longrunning.ListOperationsResponse.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,1,e)},proto.google.longrunning.ListOperationsResponse.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,1,e,proto.google.longrunning.Operation,o)},proto.google.longrunning.ListOperationsResponse.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.longrunning.ListOperationsResponse.prototype.getNextPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.longrunning.ListOperationsResponse.prototype.setNextPageToken=function(e){return jspb.Message.setProto3StringField(this,2,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.CancelOperationRequest.prototype.toObject=function(e){return proto.google.longrunning.CancelOperationRequest.toObject(e,this)},proto.google.longrunning.CancelOperationRequest.toObject=function(e,o){var n={name:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.CancelOperationRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.CancelOperationRequest;return proto.google.longrunning.CancelOperationRequest.deserializeBinaryFromReader(n,o)},proto.google.longrunning.CancelOperationRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setName(n);break;default:o.skipField()}}return e},proto.google.longrunning.CancelOperationRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.CancelOperationRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.CancelOperationRequest.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(1,n)},proto.google.longrunning.CancelOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.CancelOperationRequest.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.DeleteOperationRequest.prototype.toObject=function(e){return proto.google.longrunning.DeleteOperationRequest.toObject(e,this)},proto.google.longrunning.DeleteOperationRequest.toObject=function(e,o){var n={name:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.DeleteOperationRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.DeleteOperationRequest;return proto.google.longrunning.DeleteOperationRequest.deserializeBinaryFromReader(n,o)},proto.google.longrunning.DeleteOperationRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setName(n);break;default:o.skipField()}}return e},proto.google.longrunning.DeleteOperationRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.DeleteOperationRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.DeleteOperationRequest.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(1,n)},proto.google.longrunning.DeleteOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.DeleteOperationRequest.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,1,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.WaitOperationRequest.prototype.toObject=function(e){return proto.google.longrunning.WaitOperationRequest.toObject(e,this)},proto.google.longrunning.WaitOperationRequest.toObject=function(e,o){var n,t={name:jspb.Message.getFieldWithDefault(o,1,""),timeout:(n=o.getTimeout())&&google_protobuf_duration_pb.Duration.toObject(e,n)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.longrunning.WaitOperationRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.WaitOperationRequest;return proto.google.longrunning.WaitOperationRequest.deserializeBinaryFromReader(n,o)},proto.google.longrunning.WaitOperationRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setName(n);break;case 2:n=new google_protobuf_duration_pb.Duration;o.readMessage(n,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader),e.setTimeout(n);break;default:o.skipField()}}return e},proto.google.longrunning.WaitOperationRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.WaitOperationRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.WaitOperationRequest.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getName()).length&&o.writeString(1,n),null!=(n=e.getTimeout())&&o.writeMessage(2,n,google_protobuf_duration_pb.Duration.serializeBinaryToWriter)},proto.google.longrunning.WaitOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.WaitOperationRequest.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.longrunning.WaitOperationRequest.prototype.getTimeout=function(){return jspb.Message.getWrapperField(this,google_protobuf_duration_pb.Duration,2)},proto.google.longrunning.WaitOperationRequest.prototype.setTimeout=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.longrunning.WaitOperationRequest.prototype.clearTimeout=function(){return this.setTimeout(void 0)},proto.google.longrunning.WaitOperationRequest.prototype.hasTimeout=function(){return null!=jspb.Message.getField(this,2)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.OperationInfo.prototype.toObject=function(e){return proto.google.longrunning.OperationInfo.toObject(e,this)},proto.google.longrunning.OperationInfo.toObject=function(e,o){var n={responseType:jspb.Message.getFieldWithDefault(o,1,""),metadataType:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(n.$jspbMessageInstance=o),n}),proto.google.longrunning.OperationInfo.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),n=new proto.google.longrunning.OperationInfo;return proto.google.longrunning.OperationInfo.deserializeBinaryFromReader(n,o)},proto.google.longrunning.OperationInfo.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var n=o.readString();e.setResponseType(n);break;case 2:n=o.readString();e.setMetadataType(n);break;default:o.skipField()}}return e},proto.google.longrunning.OperationInfo.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.longrunning.OperationInfo.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.longrunning.OperationInfo.serializeBinaryToWriter=function(e,o){var n=void 0;0<(n=e.getResponseType()).length&&o.writeString(1,n),0<(n=e.getMetadataType()).length&&o.writeString(2,n)},proto.google.longrunning.OperationInfo.prototype.getResponseType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.OperationInfo.prototype.setResponseType=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.longrunning.OperationInfo.prototype.getMetadataType=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.longrunning.OperationInfo.prototype.setMetadataType=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.longrunning.operationInfo=new jspb.ExtensionFieldInfo(1049,{operationInfo:0},proto.google.longrunning.OperationInfo,proto.google.longrunning.OperationInfo.toObject,0),google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[1049]=new jspb.ExtensionFieldBinaryInfo(proto.google.longrunning.operationInfo,jspb.BinaryReader.prototype.readMessage,jspb.BinaryWriter.prototype.writeMessage,proto.google.longrunning.OperationInfo.serializeBinaryToWriter,proto.google.longrunning.OperationInfo.deserializeBinaryFromReader,!1),google_protobuf_descriptor_pb.MethodOptions.extensions[1049]=proto.google.longrunning.operationInfo,goog.object.extend(exports,proto.google.longrunning);