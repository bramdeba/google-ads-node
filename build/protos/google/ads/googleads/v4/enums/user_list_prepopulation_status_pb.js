var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.UserListPrepopulationStatus",null,global),proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.displayName="proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.toObject=function(o,e){var s={};return o&&(s.$jspbMessageInstance=e),s}),proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),s=new proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum;return proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.deserializeBinaryFromReader(s,e)},proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.UserListPrepopulationStatusEnum.UserListPrepopulationStatus={UNSPECIFIED:0,UNKNOWN:1,REQUESTED:2,FINISHED:3,FAILED:4},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);