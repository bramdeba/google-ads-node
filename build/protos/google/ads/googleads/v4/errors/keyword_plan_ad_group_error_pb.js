var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError",null,global),proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.displayName="proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum;return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError={UNSPECIFIED:0,UNKNOWN:1,INVALID_NAME:2,DUPLICATE_NAME:3},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);