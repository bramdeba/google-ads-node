var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_offline_user_data_pb=require("../../../../../google/ads/googleads/v4/common/offline_user_data_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_offline_user_data_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.UploadUserDataRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.UploadUserDataRequest.MetadataCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.UploadUserDataResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.UserDataOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.UserDataOperation.OperationCase",null,global),proto.google.ads.googleads.v4.services.UploadUserDataRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.UploadUserDataRequest.repeatedFields_,proto.google.ads.googleads.v4.services.UploadUserDataRequest.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.UploadUserDataRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.UploadUserDataRequest.displayName="proto.google.ads.googleads.v4.services.UploadUserDataRequest"),proto.google.ads.googleads.v4.services.UserDataOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.UserDataOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.UserDataOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.UserDataOperation.displayName="proto.google.ads.googleads.v4.services.UserDataOperation"),proto.google.ads.googleads.v4.services.UploadUserDataResponse=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.UploadUserDataResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.UploadUserDataResponse.displayName="proto.google.ads.googleads.v4.services.UploadUserDataResponse"),proto.google.ads.googleads.v4.services.UploadUserDataRequest.repeatedFields_=[3],proto.google.ads.googleads.v4.services.UploadUserDataRequest.oneofGroups_=[[2]],proto.google.ads.googleads.v4.services.UploadUserDataRequest.MetadataCase={METADATA_NOT_SET:0,CUSTOMER_MATCH_USER_LIST_METADATA:2},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.getMetadataCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.UploadUserDataRequest.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.UploadUserDataRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.toObject=function(e,o){var s,a={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.UserDataOperation.toObject,e),customerMatchUserListMetadata:(s=o.getCustomerMatchUserListMetadata())&&google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.toObject(e,s)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.UploadUserDataRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.UploadUserDataRequest;return proto.google.ads.googleads.v4.services.UploadUserDataRequest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setCustomerId(s);break;case 3:s=new proto.google.ads.googleads.v4.services.UserDataOperation;o.readMessage(s,proto.google.ads.googleads.v4.services.UserDataOperation.deserializeBinaryFromReader),e.addOperations(s);break;case 2:s=new google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata;o.readMessage(s,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.deserializeBinaryFromReader),e.setCustomerMatchUserListMetadata(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.UploadUserDataRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.UploadUserDataRequest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getCustomerId()).length&&o.writeString(1,s),0<(s=e.getOperationsList()).length&&o.writeRepeatedMessage(3,s,proto.google.ads.googleads.v4.services.UserDataOperation.serializeBinaryToWriter),null!=(s=e.getCustomerMatchUserListMetadata())&&o.writeMessage(2,s,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.UserDataOperation,3)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,3,e,proto.google.ads.googleads.v4.services.UserDataOperation,o)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.getCustomerMatchUserListMetadata=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata,2)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.setCustomerMatchUserListMetadata=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.UploadUserDataRequest.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.clearCustomerMatchUserListMetadata=function(){return this.setCustomerMatchUserListMetadata(void 0)},proto.google.ads.googleads.v4.services.UploadUserDataRequest.prototype.hasCustomerMatchUserListMetadata=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.UserDataOperation.oneofGroups_=[[1,2]],proto.google.ads.googleads.v4.services.UserDataOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,REMOVE:2},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.UserDataOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.UserDataOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.UserDataOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.UserDataOperation.toObject=function(e,o){var s,a={create:(s=o.getCreate())&&google_ads_googleads_v4_common_offline_user_data_pb.UserData.toObject(e,s),remove:(s=o.getRemove())&&google_ads_googleads_v4_common_offline_user_data_pb.UserData.toObject(e,s)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.UserDataOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.UserDataOperation;return proto.google.ads.googleads.v4.services.UserDataOperation.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.UserDataOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new google_ads_googleads_v4_common_offline_user_data_pb.UserData;o.readMessage(s,google_ads_googleads_v4_common_offline_user_data_pb.UserData.deserializeBinaryFromReader),e.setCreate(s);break;case 2:s=new google_ads_googleads_v4_common_offline_user_data_pb.UserData;o.readMessage(s,google_ads_googleads_v4_common_offline_user_data_pb.UserData.deserializeBinaryFromReader),e.setRemove(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.UserDataOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.UserDataOperation.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getCreate())&&o.writeMessage(1,s,google_ads_googleads_v4_common_offline_user_data_pb.UserData.serializeBinaryToWriter),null!=(s=e.getRemove())&&o.writeMessage(2,s,google_ads_googleads_v4_common_offline_user_data_pb.UserData.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_offline_user_data_pb.UserData,1)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.UserDataOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.getRemove=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_offline_user_data_pb.UserData,2)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.setRemove=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.UserDataOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.clearRemove=function(){return this.setRemove(void 0)},proto.google.ads.googleads.v4.services.UserDataOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,2)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.UploadUserDataResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.toObject=function(e,o){var s,a={uploadDateTime:(s=o.getUploadDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(e,s),receivedOperationsCount:(s=o.getReceivedOperationsCount())&&google_protobuf_wrappers_pb.Int32Value.toObject(e,s)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.services.UploadUserDataResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.services.UploadUserDataResponse;return proto.google.ads.googleads.v4.services.UploadUserDataResponse.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=new google_protobuf_wrappers_pb.StringValue;o.readMessage(s,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setUploadDateTime(s);break;case 2:s=new google_protobuf_wrappers_pb.Int32Value;o.readMessage(s,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),e.setReceivedOperationsCount(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.UploadUserDataResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.UploadUserDataResponse.serializeBinaryToWriter=function(e,o){var s=void 0;null!=(s=e.getUploadDateTime())&&o.writeMessage(1,s,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(s=e.getReceivedOperationsCount())&&o.writeMessage(2,s,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.getUploadDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.setUploadDateTime=function(e){return jspb.Message.setWrapperField(this,1,e)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.clearUploadDateTime=function(){return this.setUploadDateTime(void 0)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.hasUploadDateTime=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.getReceivedOperationsCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,2)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.setReceivedOperationsCount=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.clearReceivedOperationsCount=function(){return this.setReceivedOperationsCount(void 0)},proto.google.ads.googleads.v4.services.UploadUserDataResponse.prototype.hasReceivedOperationsCount=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);