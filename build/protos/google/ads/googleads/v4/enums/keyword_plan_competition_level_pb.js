var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel",null,global),proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.displayName="proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum;return proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel={UNSPECIFIED:0,UNKNOWN:1,LOW:2,MEDIUM:3,HIGH:4},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);