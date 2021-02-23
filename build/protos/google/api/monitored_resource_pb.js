var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_label_pb=require("../../google/api/label_pb.js");goog.object.extend(proto,google_api_label_pb);var google_api_launch_stage_pb=require("../../google/api/launch_stage_pb.js");goog.object.extend(proto,google_api_launch_stage_pb);var google_protobuf_struct_pb=require("google-protobuf/google/protobuf/struct_pb.js");goog.object.extend(proto,google_protobuf_struct_pb),goog.exportSymbol("proto.google.api.MonitoredResource",null,global),goog.exportSymbol("proto.google.api.MonitoredResourceDescriptor",null,global),goog.exportSymbol("proto.google.api.MonitoredResourceMetadata",null,global),proto.google.api.MonitoredResourceDescriptor=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.api.MonitoredResourceDescriptor.repeatedFields_,null)},goog.inherits(proto.google.api.MonitoredResourceDescriptor,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResourceDescriptor.displayName="proto.google.api.MonitoredResourceDescriptor"),proto.google.api.MonitoredResource=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.api.MonitoredResource,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResource.displayName="proto.google.api.MonitoredResource"),proto.google.api.MonitoredResourceMetadata=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.api.MonitoredResourceMetadata,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.MonitoredResourceMetadata.displayName="proto.google.api.MonitoredResourceMetadata"),proto.google.api.MonitoredResourceDescriptor.repeatedFields_=[4],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResourceDescriptor.prototype.toObject=function(e){return proto.google.api.MonitoredResourceDescriptor.toObject(e,this)},proto.google.api.MonitoredResourceDescriptor.toObject=function(e,o){var t={name:jspb.Message.getFieldWithDefault(o,5,""),type:jspb.Message.getFieldWithDefault(o,1,""),displayName:jspb.Message.getFieldWithDefault(o,2,""),description:jspb.Message.getFieldWithDefault(o,3,""),labelsList:jspb.Message.toObjectList(o.getLabelsList(),google_api_label_pb.LabelDescriptor.toObject,e),launchStage:jspb.Message.getFieldWithDefault(o,7,0)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.api.MonitoredResourceDescriptor.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.api.MonitoredResourceDescriptor;return proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader(t,o)},proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 5:var t=o.readString();e.setName(t);break;case 1:t=o.readString();e.setType(t);break;case 2:t=o.readString();e.setDisplayName(t);break;case 3:t=o.readString();e.setDescription(t);break;case 4:t=new google_api_label_pb.LabelDescriptor;o.readMessage(t,google_api_label_pb.LabelDescriptor.deserializeBinaryFromReader),e.addLabels(t);break;case 7:t=o.readEnum();e.setLaunchStage(t);break;default:o.skipField()}}return e},proto.google.api.MonitoredResourceDescriptor.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getName()).length&&o.writeString(5,t),0<(t=e.getType()).length&&o.writeString(1,t),0<(t=e.getDisplayName()).length&&o.writeString(2,t),0<(t=e.getDescription()).length&&o.writeString(3,t),0<(t=e.getLabelsList()).length&&o.writeRepeatedMessage(4,t,google_api_label_pb.LabelDescriptor.serializeBinaryToWriter),0!==(t=e.getLaunchStage())&&o.writeEnum(7,t)},proto.google.api.MonitoredResourceDescriptor.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,5,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setName=function(e){return jspb.Message.setProto3StringField(this,5,e)},proto.google.api.MonitoredResourceDescriptor.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setType=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.api.MonitoredResourceDescriptor.prototype.getDisplayName=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setDisplayName=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.api.MonitoredResourceDescriptor.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.MonitoredResourceDescriptor.prototype.setDescription=function(e){return jspb.Message.setProto3StringField(this,3,e)},proto.google.api.MonitoredResourceDescriptor.prototype.getLabelsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_api_label_pb.LabelDescriptor,4)},proto.google.api.MonitoredResourceDescriptor.prototype.setLabelsList=function(e){return jspb.Message.setRepeatedWrapperField(this,4,e)},proto.google.api.MonitoredResourceDescriptor.prototype.addLabels=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,4,e,proto.google.api.LabelDescriptor,o)},proto.google.api.MonitoredResourceDescriptor.prototype.clearLabelsList=function(){return this.setLabelsList([])},proto.google.api.MonitoredResourceDescriptor.prototype.getLaunchStage=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.api.MonitoredResourceDescriptor.prototype.setLaunchStage=function(e){return jspb.Message.setProto3EnumField(this,7,e)},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResource.prototype.toObject=function(e){return proto.google.api.MonitoredResource.toObject(e,this)},proto.google.api.MonitoredResource.toObject=function(e,o){var t,r={type:jspb.Message.getFieldWithDefault(o,1,""),labelsMap:(t=o.getLabelsMap())?t.toObject(e,void 0):[]};return e&&(r.$jspbMessageInstance=o),r}),proto.google.api.MonitoredResource.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.api.MonitoredResource;return proto.google.api.MonitoredResource.deserializeBinaryFromReader(t,o)},proto.google.api.MonitoredResource.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setType(t);break;case 2:t=e.getLabelsMap();o.readMessage(t,function(e,o){jspb.Map.deserializeBinary(e,o,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readString,null,"","")});break;default:o.skipField()}}return e},proto.google.api.MonitoredResource.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.api.MonitoredResource.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.api.MonitoredResource.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getType()).length&&o.writeString(1,t),(t=e.getLabelsMap(!0))&&0<t.getLength()&&t.serializeBinary(2,o,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeString)},proto.google.api.MonitoredResource.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.MonitoredResource.prototype.setType=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.api.MonitoredResource.prototype.getLabelsMap=function(e){return jspb.Message.getMapField(this,2,e,null)},proto.google.api.MonitoredResource.prototype.clearLabelsMap=function(){return this.getLabelsMap().clear(),this},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.MonitoredResourceMetadata.prototype.toObject=function(e){return proto.google.api.MonitoredResourceMetadata.toObject(e,this)},proto.google.api.MonitoredResourceMetadata.toObject=function(e,o){var t,r={systemLabels:(t=o.getSystemLabels())&&google_protobuf_struct_pb.Struct.toObject(e,t),userLabelsMap:(t=o.getUserLabelsMap())?t.toObject(e,void 0):[]};return e&&(r.$jspbMessageInstance=o),r}),proto.google.api.MonitoredResourceMetadata.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.api.MonitoredResourceMetadata;return proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader(t,o)},proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=new google_protobuf_struct_pb.Struct;o.readMessage(t,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader),e.setSystemLabels(t);break;case 2:t=e.getUserLabelsMap();o.readMessage(t,function(e,o){jspb.Map.deserializeBinary(e,o,jspb.BinaryReader.prototype.readString,jspb.BinaryReader.prototype.readString,null,"","")});break;default:o.skipField()}}return e},proto.google.api.MonitoredResourceMetadata.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter=function(e,o){var t=void 0;null!=(t=e.getSystemLabels())&&o.writeMessage(1,t,google_protobuf_struct_pb.Struct.serializeBinaryToWriter),(t=e.getUserLabelsMap(!0))&&0<t.getLength()&&t.serializeBinary(2,o,jspb.BinaryWriter.prototype.writeString,jspb.BinaryWriter.prototype.writeString)},proto.google.api.MonitoredResourceMetadata.prototype.getSystemLabels=function(){return jspb.Message.getWrapperField(this,google_protobuf_struct_pb.Struct,1)},proto.google.api.MonitoredResourceMetadata.prototype.setSystemLabels=function(e){return jspb.Message.setWrapperField(this,1,e)},proto.google.api.MonitoredResourceMetadata.prototype.clearSystemLabels=function(){return this.setSystemLabels(void 0)},proto.google.api.MonitoredResourceMetadata.prototype.hasSystemLabels=function(){return null!=jspb.Message.getField(this,1)},proto.google.api.MonitoredResourceMetadata.prototype.getUserLabelsMap=function(e){return jspb.Message.getMapField(this,2,e,null)},proto.google.api.MonitoredResourceMetadata.prototype.clearUserLabelsMap=function(){return this.getUserLabelsMap().clear(),this},goog.object.extend(exports,proto.google.api);