var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_tag_snippet_pb=require("../../../../../google/ads/googleads/v4/common/tag_snippet_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_tag_snippet_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.RemarketingAction",null,global),proto.google.ads.googleads.v4.resources.RemarketingAction=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.resources.RemarketingAction.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.resources.RemarketingAction,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.RemarketingAction.displayName="proto.google.ads.googleads.v4.resources.RemarketingAction"),proto.google.ads.googleads.v4.resources.RemarketingAction.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.RemarketingAction.toObject(e,this)},proto.google.ads.googleads.v4.resources.RemarketingAction.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),id:(r=o.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),name:(r=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),tagSnippetsList:jspb.Message.toObjectList(o.getTagSnippetsList(),google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.RemarketingAction.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.RemarketingAction;return proto.google.ads.googleads.v4.resources.RemarketingAction.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.RemarketingAction.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(r);break;case 4:r=new google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet;o.readMessage(r,google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet.deserializeBinaryFromReader),e.addTagSnippets(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.RemarketingAction.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.RemarketingAction.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getId())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getName())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(r=e.getTagSnippetsList()).length&&o.writeRepeatedMessage(4,r,google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.setId=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.setName=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.getTagSnippetsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet,4)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.setTagSnippetsList=function(e){return jspb.Message.setRepeatedWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.addTagSnippets=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,4,e,proto.google.ads.googleads.v4.common.TagSnippet,o)},proto.google.ads.googleads.v4.resources.RemarketingAction.prototype.clearTagSnippetsList=function(){return this.setTagSnippetsList([])},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);