var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.AdGroupLabel",null,global),proto.google.ads.googleads.v4.resources.AdGroupLabel=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.AdGroupLabel,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.AdGroupLabel.displayName="proto.google.ads.googleads.v4.resources.AdGroupLabel"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.AdGroupLabel.toObject(e,this)},proto.google.ads.googleads.v4.resources.AdGroupLabel.toObject=function(e,o){var r,s={resourceName:jspb.Message.getFieldWithDefault(o,1,""),adGroup:(r=o.getAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),label:(r=o.getLabel())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.resources.AdGroupLabel.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.AdGroupLabel;return proto.google.ads.googleads.v4.resources.AdGroupLabel.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.AdGroupLabel.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setAdGroup(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setLabel(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.AdGroupLabel.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.AdGroupLabel.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getAdGroup())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getLabel())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.getAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.setAdGroup=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.clearAdGroup=function(){return this.setAdGroup(void 0)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.hasAdGroup=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.getLabel=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.setLabel=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.clearLabel=function(){return this.setLabel(void 0)},proto.google.ads.googleads.v4.resources.AdGroupLabel.prototype.hasLabel=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);