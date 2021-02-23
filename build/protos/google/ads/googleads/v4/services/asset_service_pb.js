var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_asset_pb=require("../../../../../google/ads/googleads/v4/resources/asset_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_asset_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.AssetOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.AssetOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetAssetRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAssetResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAssetsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateAssetsResponse",null,global),proto.google.ads.googleads.v4.services.GetAssetRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetAssetRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetAssetRequest.displayName="proto.google.ads.googleads.v4.services.GetAssetRequest"),proto.google.ads.googleads.v4.services.MutateAssetsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAssetsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAssetsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAssetsRequest.displayName="proto.google.ads.googleads.v4.services.MutateAssetsRequest"),proto.google.ads.googleads.v4.services.AssetOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.AssetOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.AssetOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.AssetOperation.displayName="proto.google.ads.googleads.v4.services.AssetOperation"),proto.google.ads.googleads.v4.services.MutateAssetsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateAssetsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAssetsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAssetsResponse.displayName="proto.google.ads.googleads.v4.services.MutateAssetsResponse"),proto.google.ads.googleads.v4.services.MutateAssetResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateAssetResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateAssetResult.displayName="proto.google.ads.googleads.v4.services.MutateAssetResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetAssetRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetAssetRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetAssetRequest.toObject=function(e,s){var o={resourceName:jspb.Message.getFieldWithDefault(s,1,"")};return e&&(o.$jspbMessageInstance=s),o}),proto.google.ads.googleads.v4.services.GetAssetRequest.deserializeBinary=function(e){var s=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.services.GetAssetRequest;return proto.google.ads.googleads.v4.services.GetAssetRequest.deserializeBinaryFromReader(o,s)},proto.google.ads.googleads.v4.services.GetAssetRequest.deserializeBinaryFromReader=function(e,s){for(;s.nextField()&&!s.isEndGroup();){switch(s.getFieldNumber()){case 1:var o=s.readString();e.setResourceName(o);break;default:s.skipField()}}return e},proto.google.ads.googleads.v4.services.GetAssetRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetAssetRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetAssetRequest.serializeBinaryToWriter=function(e,s){var o=void 0;0<(o=e.getResourceName()).length&&s.writeString(1,o)},proto.google.ads.googleads.v4.services.GetAssetRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetAssetRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAssetsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.toObject=function(e,s){var o={customerId:jspb.Message.getFieldWithDefault(s,1,""),operationsList:jspb.Message.toObjectList(s.getOperationsList(),proto.google.ads.googleads.v4.services.AssetOperation.toObject,e)};return e&&(o.$jspbMessageInstance=s),o}),proto.google.ads.googleads.v4.services.MutateAssetsRequest.deserializeBinary=function(e){var s=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.services.MutateAssetsRequest;return proto.google.ads.googleads.v4.services.MutateAssetsRequest.deserializeBinaryFromReader(o,s)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.deserializeBinaryFromReader=function(e,s){for(;s.nextField()&&!s.isEndGroup();){switch(s.getFieldNumber()){case 1:var o=s.readString();e.setCustomerId(o);break;case 2:o=new proto.google.ads.googleads.v4.services.AssetOperation;s.readMessage(o,proto.google.ads.googleads.v4.services.AssetOperation.deserializeBinaryFromReader),e.addOperations(o);break;default:s.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAssetsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAssetsRequest.serializeBinaryToWriter=function(e,s){var o=void 0;0<(o=e.getCustomerId()).length&&s.writeString(1,o),0<(o=e.getOperationsList()).length&&s.writeRepeatedMessage(2,o,proto.google.ads.googleads.v4.services.AssetOperation.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.AssetOperation,2)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.addOperations=function(e,s){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.AssetOperation,s)},proto.google.ads.googleads.v4.services.MutateAssetsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.AssetOperation.oneofGroups_=[[1]],proto.google.ads.googleads.v4.services.AssetOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1},proto.google.ads.googleads.v4.services.AssetOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.AssetOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.AssetOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.AssetOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.AssetOperation.toObject=function(e,s){var o,t={create:(o=s.getCreate())&&google_ads_googleads_v4_resources_asset_pb.Asset.toObject(e,o)};return e&&(t.$jspbMessageInstance=s),t}),proto.google.ads.googleads.v4.services.AssetOperation.deserializeBinary=function(e){var s=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.services.AssetOperation;return proto.google.ads.googleads.v4.services.AssetOperation.deserializeBinaryFromReader(o,s)},proto.google.ads.googleads.v4.services.AssetOperation.deserializeBinaryFromReader=function(e,s){for(;s.nextField()&&!s.isEndGroup();){switch(s.getFieldNumber()){case 1:var o=new google_ads_googleads_v4_resources_asset_pb.Asset;s.readMessage(o,google_ads_googleads_v4_resources_asset_pb.Asset.deserializeBinaryFromReader),e.setCreate(o);break;default:s.skipField()}}return e},proto.google.ads.googleads.v4.services.AssetOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.AssetOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.AssetOperation.serializeBinaryToWriter=function(e,s){var o=void 0;null!=(o=e.getCreate())&&s.writeMessage(1,o,google_ads_googleads_v4_resources_asset_pb.Asset.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.AssetOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_asset_pb.Asset,1)},proto.google.ads.googleads.v4.services.AssetOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.AssetOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.AssetOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.AssetOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAssetsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.toObject=function(e,s){var o={resultsList:jspb.Message.toObjectList(s.getResultsList(),proto.google.ads.googleads.v4.services.MutateAssetResult.toObject,e)};return e&&(o.$jspbMessageInstance=s),o}),proto.google.ads.googleads.v4.services.MutateAssetsResponse.deserializeBinary=function(e){var s=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.services.MutateAssetsResponse;return proto.google.ads.googleads.v4.services.MutateAssetsResponse.deserializeBinaryFromReader(o,s)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.deserializeBinaryFromReader=function(e,s){for(;s.nextField()&&!s.isEndGroup();){switch(s.getFieldNumber()){case 2:var o=new proto.google.ads.googleads.v4.services.MutateAssetResult;s.readMessage(o,proto.google.ads.googleads.v4.services.MutateAssetResult.deserializeBinaryFromReader),e.addResults(o);break;default:s.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAssetsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAssetsResponse.serializeBinaryToWriter=function(e,s){var o=void 0;0<(o=e.getResultsList()).length&&s.writeRepeatedMessage(2,o,proto.google.ads.googleads.v4.services.MutateAssetResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateAssetResult,2)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.addResults=function(e,s){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateAssetResult,s)},proto.google.ads.googleads.v4.services.MutateAssetsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateAssetResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateAssetResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateAssetResult.toObject=function(e,s){var o={resourceName:jspb.Message.getFieldWithDefault(s,1,"")};return e&&(o.$jspbMessageInstance=s),o}),proto.google.ads.googleads.v4.services.MutateAssetResult.deserializeBinary=function(e){var s=new jspb.BinaryReader(e),o=new proto.google.ads.googleads.v4.services.MutateAssetResult;return proto.google.ads.googleads.v4.services.MutateAssetResult.deserializeBinaryFromReader(o,s)},proto.google.ads.googleads.v4.services.MutateAssetResult.deserializeBinaryFromReader=function(e,s){for(;s.nextField()&&!s.isEndGroup();){switch(s.getFieldNumber()){case 1:var o=s.readString();e.setResourceName(o);break;default:s.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateAssetResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateAssetResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateAssetResult.serializeBinaryToWriter=function(e,s){var o=void 0;0<(o=e.getResourceName()).length&&s.writeString(1,o)},proto.google.ads.googleads.v4.services.MutateAssetResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateAssetResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);