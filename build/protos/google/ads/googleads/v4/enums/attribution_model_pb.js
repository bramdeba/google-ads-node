var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AttributionModelEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AttributionModelEnum.AttributionModel",null,global),proto.google.ads.googleads.v4.enums.AttributionModelEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AttributionModelEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AttributionModelEnum.displayName="proto.google.ads.googleads.v4.enums.AttributionModelEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AttributionModelEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AttributionModelEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AttributionModelEnum.toObject=function(o,e){var t={};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.enums.AttributionModelEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.enums.AttributionModelEnum;return proto.google.ads.googleads.v4.enums.AttributionModelEnum.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.enums.AttributionModelEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.AttributionModelEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AttributionModelEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AttributionModelEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.AttributionModelEnum.AttributionModel={UNSPECIFIED:0,UNKNOWN:1,EXTERNAL:100,GOOGLE_ADS_LAST_CLICK:101,GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK:102,GOOGLE_SEARCH_ATTRIBUTION_LINEAR:103,GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY:104,GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED:105,GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN:106},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);