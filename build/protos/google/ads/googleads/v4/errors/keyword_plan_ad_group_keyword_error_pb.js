var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.KeywordPlanAdGroupKeywordError",null,global),proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.displayName="proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum;return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupKeywordErrorEnum.KeywordPlanAdGroupKeywordError={UNSPECIFIED:0,UNKNOWN:1,INVALID_KEYWORD_MATCH_TYPE:2,DUPLICATE_KEYWORD:3,KEYWORD_TEXT_TOO_LONG:4,KEYWORD_HAS_INVALID_CHARS:5,KEYWORD_HAS_TOO_MANY_WORDS:6,INVALID_KEYWORD_TEXT:7,NEGATIVE_KEYWORD_HAS_CPC_BID:8},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);