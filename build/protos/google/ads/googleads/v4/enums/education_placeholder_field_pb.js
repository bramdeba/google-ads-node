var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.EducationPlaceholderField",null,global),proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.toObject=function(o,e){var l={};return o&&(l.$jspbMessageInstance=e),l}),proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),l=new proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum;return proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.deserializeBinaryFromReader(l,e)},proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.EducationPlaceholderFieldEnum.EducationPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,PROGRAM_ID:2,LOCATION_ID:3,PROGRAM_NAME:4,AREA_OF_STUDY:5,PROGRAM_DESCRIPTION:6,SCHOOL_NAME:7,ADDRESS:8,THUMBNAIL_IMAGE_URL:9,ALTERNATIVE_THUMBNAIL_IMAGE_URL:10,FINAL_URLS:11,FINAL_MOBILE_URLS:12,TRACKING_URL:13,CONTEXTUAL_KEYWORDS:14,ANDROID_APP_LINK:15,SIMILAR_PROGRAM_IDS:16,IOS_APP_LINK:17,IOS_APP_STORE_ID:18},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);