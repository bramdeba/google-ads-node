var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ProductConditionEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ProductConditionEnum.ProductCondition",null,global),proto.google.ads.googleads.v4.enums.ProductConditionEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ProductConditionEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ProductConditionEnum.displayName="proto.google.ads.googleads.v4.enums.ProductConditionEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ProductConditionEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ProductConditionEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ProductConditionEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.ProductConditionEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.ProductConditionEnum;return proto.google.ads.googleads.v4.enums.ProductConditionEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.ProductConditionEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.ProductConditionEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ProductConditionEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ProductConditionEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.ProductConditionEnum.ProductCondition={UNSPECIFIED:0,UNKNOWN:1,NEW:3,REFURBISHED:4,USED:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);