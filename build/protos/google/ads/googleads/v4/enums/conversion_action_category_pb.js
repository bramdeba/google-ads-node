var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.ConversionActionCategory",null,global),proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.displayName="proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum;return proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.ConversionActionCategoryEnum.ConversionActionCategory={UNSPECIFIED:0,UNKNOWN:1,DEFAULT:2,PAGE_VIEW:3,PURCHASE:4,SIGNUP:5,LEAD:6,DOWNLOAD:7,ADD_TO_CART:8,BEGIN_CHECKOUT:9,SUBSCRIBE_PAID:10,PHONE_CALL_LEAD:11,IMPORTED_LEAD:12,SUBMIT_LEAD_FORM:13,BOOK_APPOINTMENT:14,REQUEST_QUOTE:15,GET_DIRECTIONS:16,OUTBOUND_CLICK:17,CONTACT:18,ENGAGEMENT:19,STORE_VISIT:20,STORE_SALE:21},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);