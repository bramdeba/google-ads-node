var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.HotelRateTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.HotelRateType",null,global),proto.google.ads.googleads.v4.enums.HotelRateTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.HotelRateTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.displayName="proto.google.ads.googleads.v4.enums.HotelRateTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.toObject=function(o,e){var t={};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.enums.HotelRateTypeEnum;return proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.HotelRateTypeEnum.HotelRateType={UNSPECIFIED:0,UNKNOWN:1,UNAVAILABLE:2,PUBLIC_RATE:3,QUALIFIED_RATE:4,PRIVATE_RATE:5},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);