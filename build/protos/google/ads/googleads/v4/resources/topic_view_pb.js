var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.TopicView",null,global),proto.google.ads.googleads.v4.resources.TopicView=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.TopicView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.TopicView.displayName="proto.google.ads.googleads.v4.resources.TopicView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.TopicView.prototype.toObject=function(o){return proto.google.ads.googleads.v4.resources.TopicView.toObject(o,this)},proto.google.ads.googleads.v4.resources.TopicView.toObject=function(o,e){var r={resourceName:jspb.Message.getFieldWithDefault(e,1,"")};return o&&(r.$jspbMessageInstance=e),r}),proto.google.ads.googleads.v4.resources.TopicView.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),r=new proto.google.ads.googleads.v4.resources.TopicView;return proto.google.ads.googleads.v4.resources.TopicView.deserializeBinaryFromReader(r,e)},proto.google.ads.googleads.v4.resources.TopicView.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();o.setResourceName(r);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.resources.TopicView.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.TopicView.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.resources.TopicView.serializeBinaryToWriter=function(o,e){var r=void 0;0<(r=o.getResourceName()).length&&e.writeString(1,r)},proto.google.ads.googleads.v4.resources.TopicView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.TopicView.prototype.setResourceName=function(o){return jspb.Message.setProto3StringField(this,1,o)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);