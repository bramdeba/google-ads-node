var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.CampaignDraftStatus",null,global),proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.displayName="proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.toObject=function(o,a){var e={};return o&&(e.$jspbMessageInstance=a),e}),proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.deserializeBinary=function(o){var a=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum;return proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.deserializeBinaryFromReader(e,a)},proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.deserializeBinaryFromReader=function(o,a){for(;a.nextField()&&!a.isEndGroup();){a.getFieldNumber();a.skipField()}return o},proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.serializeBinaryToWriter=function(o,a){},proto.google.ads.googleads.v4.enums.CampaignDraftStatusEnum.CampaignDraftStatus={UNSPECIFIED:0,UNKNOWN:1,PROPOSED:2,REMOVED:3,PROMOTING:5,PROMOTED:4,PROMOTE_FAILED:6},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);