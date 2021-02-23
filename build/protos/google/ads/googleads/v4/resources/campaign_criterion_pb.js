var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_criteria_pb=require("../../../../../google/ads/googleads/v4/common/criteria_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_criteria_pb);var google_ads_googleads_v4_enums_campaign_criterion_status_pb=require("../../../../../google/ads/googleads/v4/enums/campaign_criterion_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_campaign_criterion_status_pb);var google_ads_googleads_v4_enums_criterion_type_pb=require("../../../../../google/ads/googleads/v4/enums/criterion_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_criterion_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CampaignCriterion",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CampaignCriterion.CriterionCase",null,global),proto.google.ads.googleads.v4.resources.CampaignCriterion=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.resources.CampaignCriterion,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CampaignCriterion.displayName="proto.google.ads.googleads.v4.resources.CampaignCriterion"),proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_=[[8,9,10,11,12,13,15,16,17,18,19,22,20,21,23,24,25,26,27,28,29,30,31,32,33,34,36]],proto.google.ads.googleads.v4.resources.CampaignCriterion.CriterionCase={CRITERION_NOT_SET:0,KEYWORD:8,PLACEMENT:9,MOBILE_APP_CATEGORY:10,MOBILE_APPLICATION:11,LOCATION:12,DEVICE:13,AD_SCHEDULE:15,AGE_RANGE:16,GENDER:17,INCOME_RANGE:18,PARENTAL_STATUS:19,USER_LIST:22,YOUTUBE_VIDEO:20,YOUTUBE_CHANNEL:21,PROXIMITY:23,TOPIC:24,LISTING_SCOPE:25,LANGUAGE:26,IP_BLOCK:27,CONTENT_LABEL:28,CARRIER:29,USER_INTEREST:30,WEBPAGE:31,OPERATING_SYSTEM_VERSION:32,MOBILE_DEVICE:33,LOCATION_GROUP:34,CUSTOM_AFFINITY:36},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getCriterionCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CampaignCriterion.toObject(e,this)},proto.google.ads.googleads.v4.resources.CampaignCriterion.toObject=function(e,o){var r,a={resourceName:jspb.Message.getFieldWithDefault(o,1,""),campaign:(r=o.getCampaign())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),criterionId:(r=o.getCriterionId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),bidModifier:(r=o.getBidModifier())&&google_protobuf_wrappers_pb.FloatValue.toObject(e,r),negative:(r=o.getNegative())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),type:jspb.Message.getFieldWithDefault(o,6,0),status:jspb.Message.getFieldWithDefault(o,35,0),keyword:(r=o.getKeyword())&&google_ads_googleads_v4_common_criteria_pb.KeywordInfo.toObject(e,r),placement:(r=o.getPlacement())&&google_ads_googleads_v4_common_criteria_pb.PlacementInfo.toObject(e,r),mobileAppCategory:(r=o.getMobileAppCategory())&&google_ads_googleads_v4_common_criteria_pb.MobileAppCategoryInfo.toObject(e,r),mobileApplication:(r=o.getMobileApplication())&&google_ads_googleads_v4_common_criteria_pb.MobileApplicationInfo.toObject(e,r),location:(r=o.getLocation())&&google_ads_googleads_v4_common_criteria_pb.LocationInfo.toObject(e,r),device:(r=o.getDevice())&&google_ads_googleads_v4_common_criteria_pb.DeviceInfo.toObject(e,r),adSchedule:(r=o.getAdSchedule())&&google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.toObject(e,r),ageRange:(r=o.getAgeRange())&&google_ads_googleads_v4_common_criteria_pb.AgeRangeInfo.toObject(e,r),gender:(r=o.getGender())&&google_ads_googleads_v4_common_criteria_pb.GenderInfo.toObject(e,r),incomeRange:(r=o.getIncomeRange())&&google_ads_googleads_v4_common_criteria_pb.IncomeRangeInfo.toObject(e,r),parentalStatus:(r=o.getParentalStatus())&&google_ads_googleads_v4_common_criteria_pb.ParentalStatusInfo.toObject(e,r),userList:(r=o.getUserList())&&google_ads_googleads_v4_common_criteria_pb.UserListInfo.toObject(e,r),youtubeVideo:(r=o.getYoutubeVideo())&&google_ads_googleads_v4_common_criteria_pb.YouTubeVideoInfo.toObject(e,r),youtubeChannel:(r=o.getYoutubeChannel())&&google_ads_googleads_v4_common_criteria_pb.YouTubeChannelInfo.toObject(e,r),proximity:(r=o.getProximity())&&google_ads_googleads_v4_common_criteria_pb.ProximityInfo.toObject(e,r),topic:(r=o.getTopic())&&google_ads_googleads_v4_common_criteria_pb.TopicInfo.toObject(e,r),listingScope:(r=o.getListingScope())&&google_ads_googleads_v4_common_criteria_pb.ListingScopeInfo.toObject(e,r),language:(r=o.getLanguage())&&google_ads_googleads_v4_common_criteria_pb.LanguageInfo.toObject(e,r),ipBlock:(r=o.getIpBlock())&&google_ads_googleads_v4_common_criteria_pb.IpBlockInfo.toObject(e,r),contentLabel:(r=o.getContentLabel())&&google_ads_googleads_v4_common_criteria_pb.ContentLabelInfo.toObject(e,r),carrier:(r=o.getCarrier())&&google_ads_googleads_v4_common_criteria_pb.CarrierInfo.toObject(e,r),userInterest:(r=o.getUserInterest())&&google_ads_googleads_v4_common_criteria_pb.UserInterestInfo.toObject(e,r),webpage:(r=o.getWebpage())&&google_ads_googleads_v4_common_criteria_pb.WebpageInfo.toObject(e,r),operatingSystemVersion:(r=o.getOperatingSystemVersion())&&google_ads_googleads_v4_common_criteria_pb.OperatingSystemVersionInfo.toObject(e,r),mobileDevice:(r=o.getMobileDevice())&&google_ads_googleads_v4_common_criteria_pb.MobileDeviceInfo.toObject(e,r),locationGroup:(r=o.getLocationGroup())&&google_ads_googleads_v4_common_criteria_pb.LocationGroupInfo.toObject(e,r),customAffinity:(r=o.getCustomAffinity())&&google_ads_googleads_v4_common_criteria_pb.CustomAffinityInfo.toObject(e,r)};return e&&(a.$jspbMessageInstance=o),a}),proto.google.ads.googleads.v4.resources.CampaignCriterion.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.CampaignCriterion;return proto.google.ads.googleads.v4.resources.CampaignCriterion.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.CampaignCriterion.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 4:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setCampaign(r);break;case 5:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setCriterionId(r);break;case 14:r=new google_protobuf_wrappers_pb.FloatValue;o.readMessage(r,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader),e.setBidModifier(r);break;case 7:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setNegative(r);break;case 6:r=o.readEnum();e.setType(r);break;case 35:r=o.readEnum();e.setStatus(r);break;case 8:r=new google_ads_googleads_v4_common_criteria_pb.KeywordInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.KeywordInfo.deserializeBinaryFromReader),e.setKeyword(r);break;case 9:r=new google_ads_googleads_v4_common_criteria_pb.PlacementInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.PlacementInfo.deserializeBinaryFromReader),e.setPlacement(r);break;case 10:r=new google_ads_googleads_v4_common_criteria_pb.MobileAppCategoryInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.MobileAppCategoryInfo.deserializeBinaryFromReader),e.setMobileAppCategory(r);break;case 11:r=new google_ads_googleads_v4_common_criteria_pb.MobileApplicationInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.MobileApplicationInfo.deserializeBinaryFromReader),e.setMobileApplication(r);break;case 12:r=new google_ads_googleads_v4_common_criteria_pb.LocationInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.LocationInfo.deserializeBinaryFromReader),e.setLocation(r);break;case 13:r=new google_ads_googleads_v4_common_criteria_pb.DeviceInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.DeviceInfo.deserializeBinaryFromReader),e.setDevice(r);break;case 15:r=new google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.deserializeBinaryFromReader),e.setAdSchedule(r);break;case 16:r=new google_ads_googleads_v4_common_criteria_pb.AgeRangeInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.AgeRangeInfo.deserializeBinaryFromReader),e.setAgeRange(r);break;case 17:r=new google_ads_googleads_v4_common_criteria_pb.GenderInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.GenderInfo.deserializeBinaryFromReader),e.setGender(r);break;case 18:r=new google_ads_googleads_v4_common_criteria_pb.IncomeRangeInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.IncomeRangeInfo.deserializeBinaryFromReader),e.setIncomeRange(r);break;case 19:r=new google_ads_googleads_v4_common_criteria_pb.ParentalStatusInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.ParentalStatusInfo.deserializeBinaryFromReader),e.setParentalStatus(r);break;case 22:r=new google_ads_googleads_v4_common_criteria_pb.UserListInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.UserListInfo.deserializeBinaryFromReader),e.setUserList(r);break;case 20:r=new google_ads_googleads_v4_common_criteria_pb.YouTubeVideoInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.YouTubeVideoInfo.deserializeBinaryFromReader),e.setYoutubeVideo(r);break;case 21:r=new google_ads_googleads_v4_common_criteria_pb.YouTubeChannelInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.YouTubeChannelInfo.deserializeBinaryFromReader),e.setYoutubeChannel(r);break;case 23:r=new google_ads_googleads_v4_common_criteria_pb.ProximityInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.ProximityInfo.deserializeBinaryFromReader),e.setProximity(r);break;case 24:r=new google_ads_googleads_v4_common_criteria_pb.TopicInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.TopicInfo.deserializeBinaryFromReader),e.setTopic(r);break;case 25:r=new google_ads_googleads_v4_common_criteria_pb.ListingScopeInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.ListingScopeInfo.deserializeBinaryFromReader),e.setListingScope(r);break;case 26:r=new google_ads_googleads_v4_common_criteria_pb.LanguageInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.LanguageInfo.deserializeBinaryFromReader),e.setLanguage(r);break;case 27:r=new google_ads_googleads_v4_common_criteria_pb.IpBlockInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.IpBlockInfo.deserializeBinaryFromReader),e.setIpBlock(r);break;case 28:r=new google_ads_googleads_v4_common_criteria_pb.ContentLabelInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.ContentLabelInfo.deserializeBinaryFromReader),e.setContentLabel(r);break;case 29:r=new google_ads_googleads_v4_common_criteria_pb.CarrierInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.CarrierInfo.deserializeBinaryFromReader),e.setCarrier(r);break;case 30:r=new google_ads_googleads_v4_common_criteria_pb.UserInterestInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.UserInterestInfo.deserializeBinaryFromReader),e.setUserInterest(r);break;case 31:r=new google_ads_googleads_v4_common_criteria_pb.WebpageInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.WebpageInfo.deserializeBinaryFromReader),e.setWebpage(r);break;case 32:r=new google_ads_googleads_v4_common_criteria_pb.OperatingSystemVersionInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.OperatingSystemVersionInfo.deserializeBinaryFromReader),e.setOperatingSystemVersion(r);break;case 33:r=new google_ads_googleads_v4_common_criteria_pb.MobileDeviceInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.MobileDeviceInfo.deserializeBinaryFromReader),e.setMobileDevice(r);break;case 34:r=new google_ads_googleads_v4_common_criteria_pb.LocationGroupInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.LocationGroupInfo.deserializeBinaryFromReader),e.setLocationGroup(r);break;case 36:r=new google_ads_googleads_v4_common_criteria_pb.CustomAffinityInfo;o.readMessage(r,google_ads_googleads_v4_common_criteria_pb.CustomAffinityInfo.deserializeBinaryFromReader),e.setCustomAffinity(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CampaignCriterion.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CampaignCriterion.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getCampaign())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getCriterionId())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getBidModifier())&&o.writeMessage(14,r,google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter),null!=(r=e.getNegative())&&o.writeMessage(7,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),0!==(r=e.getType())&&o.writeEnum(6,r),0!==(r=e.getStatus())&&o.writeEnum(35,r),null!=(r=e.getKeyword())&&o.writeMessage(8,r,google_ads_googleads_v4_common_criteria_pb.KeywordInfo.serializeBinaryToWriter),null!=(r=e.getPlacement())&&o.writeMessage(9,r,google_ads_googleads_v4_common_criteria_pb.PlacementInfo.serializeBinaryToWriter),null!=(r=e.getMobileAppCategory())&&o.writeMessage(10,r,google_ads_googleads_v4_common_criteria_pb.MobileAppCategoryInfo.serializeBinaryToWriter),null!=(r=e.getMobileApplication())&&o.writeMessage(11,r,google_ads_googleads_v4_common_criteria_pb.MobileApplicationInfo.serializeBinaryToWriter),null!=(r=e.getLocation())&&o.writeMessage(12,r,google_ads_googleads_v4_common_criteria_pb.LocationInfo.serializeBinaryToWriter),null!=(r=e.getDevice())&&o.writeMessage(13,r,google_ads_googleads_v4_common_criteria_pb.DeviceInfo.serializeBinaryToWriter),null!=(r=e.getAdSchedule())&&o.writeMessage(15,r,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo.serializeBinaryToWriter),null!=(r=e.getAgeRange())&&o.writeMessage(16,r,google_ads_googleads_v4_common_criteria_pb.AgeRangeInfo.serializeBinaryToWriter),null!=(r=e.getGender())&&o.writeMessage(17,r,google_ads_googleads_v4_common_criteria_pb.GenderInfo.serializeBinaryToWriter),null!=(r=e.getIncomeRange())&&o.writeMessage(18,r,google_ads_googleads_v4_common_criteria_pb.IncomeRangeInfo.serializeBinaryToWriter),null!=(r=e.getParentalStatus())&&o.writeMessage(19,r,google_ads_googleads_v4_common_criteria_pb.ParentalStatusInfo.serializeBinaryToWriter),null!=(r=e.getUserList())&&o.writeMessage(22,r,google_ads_googleads_v4_common_criteria_pb.UserListInfo.serializeBinaryToWriter),null!=(r=e.getYoutubeVideo())&&o.writeMessage(20,r,google_ads_googleads_v4_common_criteria_pb.YouTubeVideoInfo.serializeBinaryToWriter),null!=(r=e.getYoutubeChannel())&&o.writeMessage(21,r,google_ads_googleads_v4_common_criteria_pb.YouTubeChannelInfo.serializeBinaryToWriter),null!=(r=e.getProximity())&&o.writeMessage(23,r,google_ads_googleads_v4_common_criteria_pb.ProximityInfo.serializeBinaryToWriter),null!=(r=e.getTopic())&&o.writeMessage(24,r,google_ads_googleads_v4_common_criteria_pb.TopicInfo.serializeBinaryToWriter),null!=(r=e.getListingScope())&&o.writeMessage(25,r,google_ads_googleads_v4_common_criteria_pb.ListingScopeInfo.serializeBinaryToWriter),null!=(r=e.getLanguage())&&o.writeMessage(26,r,google_ads_googleads_v4_common_criteria_pb.LanguageInfo.serializeBinaryToWriter),null!=(r=e.getIpBlock())&&o.writeMessage(27,r,google_ads_googleads_v4_common_criteria_pb.IpBlockInfo.serializeBinaryToWriter),null!=(r=e.getContentLabel())&&o.writeMessage(28,r,google_ads_googleads_v4_common_criteria_pb.ContentLabelInfo.serializeBinaryToWriter),null!=(r=e.getCarrier())&&o.writeMessage(29,r,google_ads_googleads_v4_common_criteria_pb.CarrierInfo.serializeBinaryToWriter),null!=(r=e.getUserInterest())&&o.writeMessage(30,r,google_ads_googleads_v4_common_criteria_pb.UserInterestInfo.serializeBinaryToWriter),null!=(r=e.getWebpage())&&o.writeMessage(31,r,google_ads_googleads_v4_common_criteria_pb.WebpageInfo.serializeBinaryToWriter),null!=(r=e.getOperatingSystemVersion())&&o.writeMessage(32,r,google_ads_googleads_v4_common_criteria_pb.OperatingSystemVersionInfo.serializeBinaryToWriter),null!=(r=e.getMobileDevice())&&o.writeMessage(33,r,google_ads_googleads_v4_common_criteria_pb.MobileDeviceInfo.serializeBinaryToWriter),null!=(r=e.getLocationGroup())&&o.writeMessage(34,r,google_ads_googleads_v4_common_criteria_pb.LocationGroupInfo.serializeBinaryToWriter),null!=(r=e.getCustomAffinity())&&o.writeMessage(36,r,google_ads_googleads_v4_common_criteria_pb.CustomAffinityInfo.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getCampaign=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setCampaign=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearCampaign=function(){return this.setCampaign(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasCampaign=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getCriterionId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setCriterionId=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearCriterionId=function(){return this.setCriterionId(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasCriterionId=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getBidModifier=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.FloatValue,14)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setBidModifier=function(e){return jspb.Message.setWrapperField(this,14,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearBidModifier=function(){return this.setBidModifier(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasBidModifier=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getNegative=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setNegative=function(e){return jspb.Message.setWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearNegative=function(){return this.setNegative(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasNegative=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setType=function(e){return jspb.Message.setProto3EnumField(this,6,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,35,0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,35,e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getKeyword=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.KeywordInfo,8)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setKeyword=function(e){return jspb.Message.setOneofWrapperField(this,8,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearKeyword=function(){return this.setKeyword(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasKeyword=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getPlacement=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.PlacementInfo,9)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setPlacement=function(e){return jspb.Message.setOneofWrapperField(this,9,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearPlacement=function(){return this.setPlacement(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasPlacement=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getMobileAppCategory=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.MobileAppCategoryInfo,10)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setMobileAppCategory=function(e){return jspb.Message.setOneofWrapperField(this,10,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearMobileAppCategory=function(){return this.setMobileAppCategory(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasMobileAppCategory=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getMobileApplication=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.MobileApplicationInfo,11)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setMobileApplication=function(e){return jspb.Message.setOneofWrapperField(this,11,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearMobileApplication=function(){return this.setMobileApplication(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasMobileApplication=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getLocation=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.LocationInfo,12)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setLocation=function(e){return jspb.Message.setOneofWrapperField(this,12,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearLocation=function(){return this.setLocation(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasLocation=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getDevice=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.DeviceInfo,13)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setDevice=function(e){return jspb.Message.setOneofWrapperField(this,13,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearDevice=function(){return this.setDevice(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasDevice=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getAdSchedule=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.AdScheduleInfo,15)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setAdSchedule=function(e){return jspb.Message.setOneofWrapperField(this,15,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearAdSchedule=function(){return this.setAdSchedule(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasAdSchedule=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getAgeRange=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.AgeRangeInfo,16)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setAgeRange=function(e){return jspb.Message.setOneofWrapperField(this,16,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearAgeRange=function(){return this.setAgeRange(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasAgeRange=function(){return null!=jspb.Message.getField(this,16)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getGender=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.GenderInfo,17)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setGender=function(e){return jspb.Message.setOneofWrapperField(this,17,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearGender=function(){return this.setGender(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasGender=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getIncomeRange=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.IncomeRangeInfo,18)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setIncomeRange=function(e){return jspb.Message.setOneofWrapperField(this,18,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearIncomeRange=function(){return this.setIncomeRange(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasIncomeRange=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getParentalStatus=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.ParentalStatusInfo,19)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setParentalStatus=function(e){return jspb.Message.setOneofWrapperField(this,19,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearParentalStatus=function(){return this.setParentalStatus(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasParentalStatus=function(){return null!=jspb.Message.getField(this,19)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.UserListInfo,22)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setUserList=function(e){return jspb.Message.setOneofWrapperField(this,22,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearUserList=function(){return this.setUserList(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasUserList=function(){return null!=jspb.Message.getField(this,22)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getYoutubeVideo=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.YouTubeVideoInfo,20)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setYoutubeVideo=function(e){return jspb.Message.setOneofWrapperField(this,20,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearYoutubeVideo=function(){return this.setYoutubeVideo(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasYoutubeVideo=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getYoutubeChannel=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.YouTubeChannelInfo,21)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setYoutubeChannel=function(e){return jspb.Message.setOneofWrapperField(this,21,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearYoutubeChannel=function(){return this.setYoutubeChannel(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasYoutubeChannel=function(){return null!=jspb.Message.getField(this,21)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getProximity=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.ProximityInfo,23)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setProximity=function(e){return jspb.Message.setOneofWrapperField(this,23,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearProximity=function(){return this.setProximity(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasProximity=function(){return null!=jspb.Message.getField(this,23)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getTopic=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.TopicInfo,24)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setTopic=function(e){return jspb.Message.setOneofWrapperField(this,24,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearTopic=function(){return this.setTopic(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasTopic=function(){return null!=jspb.Message.getField(this,24)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getListingScope=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.ListingScopeInfo,25)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setListingScope=function(e){return jspb.Message.setOneofWrapperField(this,25,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearListingScope=function(){return this.setListingScope(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasListingScope=function(){return null!=jspb.Message.getField(this,25)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getLanguage=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.LanguageInfo,26)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setLanguage=function(e){return jspb.Message.setOneofWrapperField(this,26,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearLanguage=function(){return this.setLanguage(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasLanguage=function(){return null!=jspb.Message.getField(this,26)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getIpBlock=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.IpBlockInfo,27)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setIpBlock=function(e){return jspb.Message.setOneofWrapperField(this,27,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearIpBlock=function(){return this.setIpBlock(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasIpBlock=function(){return null!=jspb.Message.getField(this,27)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getContentLabel=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.ContentLabelInfo,28)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setContentLabel=function(e){return jspb.Message.setOneofWrapperField(this,28,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearContentLabel=function(){return this.setContentLabel(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasContentLabel=function(){return null!=jspb.Message.getField(this,28)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getCarrier=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.CarrierInfo,29)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setCarrier=function(e){return jspb.Message.setOneofWrapperField(this,29,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearCarrier=function(){return this.setCarrier(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasCarrier=function(){return null!=jspb.Message.getField(this,29)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getUserInterest=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.UserInterestInfo,30)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setUserInterest=function(e){return jspb.Message.setOneofWrapperField(this,30,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearUserInterest=function(){return this.setUserInterest(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasUserInterest=function(){return null!=jspb.Message.getField(this,30)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getWebpage=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.WebpageInfo,31)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setWebpage=function(e){return jspb.Message.setOneofWrapperField(this,31,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearWebpage=function(){return this.setWebpage(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasWebpage=function(){return null!=jspb.Message.getField(this,31)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getOperatingSystemVersion=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.OperatingSystemVersionInfo,32)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setOperatingSystemVersion=function(e){return jspb.Message.setOneofWrapperField(this,32,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearOperatingSystemVersion=function(){return this.setOperatingSystemVersion(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasOperatingSystemVersion=function(){return null!=jspb.Message.getField(this,32)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getMobileDevice=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.MobileDeviceInfo,33)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setMobileDevice=function(e){return jspb.Message.setOneofWrapperField(this,33,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearMobileDevice=function(){return this.setMobileDevice(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasMobileDevice=function(){return null!=jspb.Message.getField(this,33)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getLocationGroup=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.LocationGroupInfo,34)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setLocationGroup=function(e){return jspb.Message.setOneofWrapperField(this,34,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearLocationGroup=function(){return this.setLocationGroup(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasLocationGroup=function(){return null!=jspb.Message.getField(this,34)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.getCustomAffinity=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_common_criteria_pb.CustomAffinityInfo,36)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.setCustomAffinity=function(e){return jspb.Message.setOneofWrapperField(this,36,proto.google.ads.googleads.v4.resources.CampaignCriterion.oneofGroups_[0],e)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.clearCustomAffinity=function(){return this.setCustomAffinity(void 0)},proto.google.ads.googleads.v4.resources.CampaignCriterion.prototype.hasCustomAffinity=function(){return null!=jspb.Message.getField(this,36)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);