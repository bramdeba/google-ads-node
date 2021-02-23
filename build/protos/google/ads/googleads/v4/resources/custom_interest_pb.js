var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_custom_interest_member_type_pb=require("../../../../../google/ads/googleads/v4/enums/custom_interest_member_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_custom_interest_member_type_pb);var google_ads_googleads_v4_enums_custom_interest_status_pb=require("../../../../../google/ads/googleads/v4/enums/custom_interest_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_custom_interest_status_pb);var google_ads_googleads_v4_enums_custom_interest_type_pb=require("../../../../../google/ads/googleads/v4/enums/custom_interest_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_custom_interest_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CustomInterest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CustomInterestMember",null,global),proto.google.ads.googleads.v4.resources.CustomInterest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.resources.CustomInterest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.resources.CustomInterest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CustomInterest.displayName="proto.google.ads.googleads.v4.resources.CustomInterest"),proto.google.ads.googleads.v4.resources.CustomInterestMember=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.CustomInterestMember,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CustomInterestMember.displayName="proto.google.ads.googleads.v4.resources.CustomInterestMember"),proto.google.ads.googleads.v4.resources.CustomInterest.repeatedFields_=[7],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CustomInterest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CustomInterest.toObject(e,this)},proto.google.ads.googleads.v4.resources.CustomInterest.toObject=function(e,o){var s,r={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(s=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,s),status:jspb.Message.getFieldWithDefault(o,3,0),name:(s=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,s),type:jspb.Message.getFieldWithDefault(o,5,0),description:(s=o.getDescription())&&google_protobuf_wrappers_pb.StringValue.toObject(e,s),membersList:jspb.Message.toObjectList(o.getMembersList(),proto.google.ads.googleads.v4.resources.CustomInterestMember.toObject,e)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.resources.CustomInterest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.resources.CustomInterest;return proto.google.ads.googleads.v4.resources.CustomInterest.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.resources.CustomInterest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readString();e.setResourceName(s);break;case 2:s=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(s,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(s);break;case 3:s=o.readEnum();e.setStatus(s);break;case 4:s=new google_protobuf_wrappers_pb.StringValue;o.readMessage(s,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(s);break;case 5:s=o.readEnum();e.setType(s);break;case 6:s=new google_protobuf_wrappers_pb.StringValue;o.readMessage(s,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setDescription(s);break;case 7:s=new proto.google.ads.googleads.v4.resources.CustomInterestMember;o.readMessage(s,proto.google.ads.googleads.v4.resources.CustomInterestMember.deserializeBinaryFromReader),e.addMembers(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CustomInterest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CustomInterest.serializeBinaryToWriter=function(e,o){var s=void 0;0<(s=e.getResourceName()).length&&o.writeString(1,s),null!=(s=e.getId())&&o.writeMessage(2,s,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(s=e.getStatus())&&o.writeEnum(3,s),null!=(s=e.getName())&&o.writeMessage(4,s,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(s=e.getType())&&o.writeEnum(5,s),null!=(s=e.getDescription())&&o.writeMessage(6,s,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(s=e.getMembersList()).length&&o.writeRepeatedMessage(7,s,proto.google.ads.googleads.v4.resources.CustomInterestMember.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,3,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setName=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setType=function(e){return jspb.Message.setProto3EnumField(this,5,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getDescription=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setDescription=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.clearDescription=function(){return this.setDescription(void 0)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.hasDescription=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.getMembersList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.resources.CustomInterestMember,7)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.setMembersList=function(e){return jspb.Message.setRepeatedWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.addMembers=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,7,e,proto.google.ads.googleads.v4.resources.CustomInterestMember,o)},proto.google.ads.googleads.v4.resources.CustomInterest.prototype.clearMembersList=function(){return this.setMembersList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CustomInterestMember.toObject(e,this)},proto.google.ads.googleads.v4.resources.CustomInterestMember.toObject=function(e,o){var s,r={memberType:jspb.Message.getFieldWithDefault(o,1,0),parameter:(s=o.getParameter())&&google_protobuf_wrappers_pb.StringValue.toObject(e,s)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.resources.CustomInterestMember.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),s=new proto.google.ads.googleads.v4.resources.CustomInterestMember;return proto.google.ads.googleads.v4.resources.CustomInterestMember.deserializeBinaryFromReader(s,o)},proto.google.ads.googleads.v4.resources.CustomInterestMember.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var s=o.readEnum();e.setMemberType(s);break;case 2:s=new google_protobuf_wrappers_pb.StringValue;o.readMessage(s,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setParameter(s);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CustomInterestMember.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CustomInterestMember.serializeBinaryToWriter=function(e,o){var s=void 0;0!==(s=e.getMemberType())&&o.writeEnum(1,s),null!=(s=e.getParameter())&&o.writeMessage(2,s,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.getMemberType=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.setMemberType=function(e){return jspb.Message.setProto3EnumField(this,1,e)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.getParameter=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.setParameter=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.clearParameter=function(){return this.setParameter(void 0)},proto.google.ads.googleads.v4.resources.CustomInterestMember.prototype.hasParameter=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);