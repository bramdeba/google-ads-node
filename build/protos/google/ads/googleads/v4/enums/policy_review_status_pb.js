var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.PolicyReviewStatus",null,global),proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.displayName="proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.toObject=function(o,e){var s={};return o&&(s.$jspbMessageInstance=e),s}),proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),s=new proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum;return proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.deserializeBinaryFromReader(s,e)},proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.PolicyReviewStatusEnum.PolicyReviewStatus={UNSPECIFIED:0,UNKNOWN:1,REVIEW_IN_PROGRESS:2,REVIEWED:3,UNDER_APPEAL:4,ELIGIBLE_MAY_SERVE:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);