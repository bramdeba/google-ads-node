var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.AssetFieldType",null,global),proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.displayName="proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.toObject=function(e,o){var s={};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum;return proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.AssetFieldTypeEnum.AssetFieldType={UNSPECIFIED:0,UNKNOWN:1,HEADLINE:2,DESCRIPTION:3,MANDATORY_AD_TEXT:4,MARKETING_IMAGE:5,MEDIA_BUNDLE:6,YOUTUBE_VIDEO:7},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);