var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.AdGroupFeedError",null,global),proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.displayName="proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum;return proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.AdGroupFeedErrorEnum.AdGroupFeedError={UNSPECIFIED:0,UNKNOWN:1,FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE:2,CANNOT_CREATE_FOR_REMOVED_FEED:3,ADGROUP_FEED_ALREADY_EXISTS:4,CANNOT_OPERATE_ON_REMOVED_ADGROUP_FEED:5,INVALID_PLACEHOLDER_TYPE:6,MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE:7,NO_EXISTING_LOCATION_CUSTOMER_FEED:8},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);