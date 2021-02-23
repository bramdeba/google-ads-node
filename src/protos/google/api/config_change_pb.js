var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.Advice",null,global),goog.exportSymbol("proto.google.api.ChangeType",null,global),goog.exportSymbol("proto.google.api.ConfigChange",null,global),proto.google.api.ConfigChange=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.api.ConfigChange.repeatedFields_,null)},goog.inherits(proto.google.api.ConfigChange,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.ConfigChange.displayName="proto.google.api.ConfigChange"),proto.google.api.Advice=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.api.Advice,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Advice.displayName="proto.google.api.Advice"),proto.google.api.ConfigChange.repeatedFields_=[5],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.ConfigChange.prototype.toObject=function(e){return proto.google.api.ConfigChange.toObject(e,this)},proto.google.api.ConfigChange.toObject=function(e,o){var t={element:jspb.Message.getFieldWithDefault(o,1,""),oldValue:jspb.Message.getFieldWithDefault(o,2,""),newValue:jspb.Message.getFieldWithDefault(o,3,""),changeType:jspb.Message.getFieldWithDefault(o,4,0),advicesList:jspb.Message.toObjectList(o.getAdvicesList(),proto.google.api.Advice.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.api.ConfigChange.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.api.ConfigChange;return proto.google.api.ConfigChange.deserializeBinaryFromReader(t,o)},proto.google.api.ConfigChange.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setElement(t);break;case 2:t=o.readString();e.setOldValue(t);break;case 3:t=o.readString();e.setNewValue(t);break;case 4:t=o.readEnum();e.setChangeType(t);break;case 5:t=new proto.google.api.Advice;o.readMessage(t,proto.google.api.Advice.deserializeBinaryFromReader),e.addAdvices(t);break;default:o.skipField()}}return e},proto.google.api.ConfigChange.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.api.ConfigChange.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.api.ConfigChange.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getElement()).length&&o.writeString(1,t),0<(t=e.getOldValue()).length&&o.writeString(2,t),0<(t=e.getNewValue()).length&&o.writeString(3,t),0!==(t=e.getChangeType())&&o.writeEnum(4,t),0<(t=e.getAdvicesList()).length&&o.writeRepeatedMessage(5,t,proto.google.api.Advice.serializeBinaryToWriter)},proto.google.api.ConfigChange.prototype.getElement=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.ConfigChange.prototype.setElement=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.api.ConfigChange.prototype.getOldValue=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.ConfigChange.prototype.setOldValue=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.api.ConfigChange.prototype.getNewValue=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.ConfigChange.prototype.setNewValue=function(e){return jspb.Message.setProto3StringField(this,3,e)},proto.google.api.ConfigChange.prototype.getChangeType=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.api.ConfigChange.prototype.setChangeType=function(e){return jspb.Message.setProto3EnumField(this,4,e)},proto.google.api.ConfigChange.prototype.getAdvicesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.Advice,5)},proto.google.api.ConfigChange.prototype.setAdvicesList=function(e){return jspb.Message.setRepeatedWrapperField(this,5,e)},proto.google.api.ConfigChange.prototype.addAdvices=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,5,e,proto.google.api.Advice,o)},proto.google.api.ConfigChange.prototype.clearAdvicesList=function(){return this.setAdvicesList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Advice.prototype.toObject=function(e){return proto.google.api.Advice.toObject(e,this)},proto.google.api.Advice.toObject=function(e,o){var t={description:jspb.Message.getFieldWithDefault(o,2,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.api.Advice.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.api.Advice;return proto.google.api.Advice.deserializeBinaryFromReader(t,o)},proto.google.api.Advice.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 2:var t=o.readString();e.setDescription(t);break;default:o.skipField()}}return e},proto.google.api.Advice.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.api.Advice.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.api.Advice.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getDescription()).length&&o.writeString(2,t)},proto.google.api.Advice.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.Advice.prototype.setDescription=function(e){return jspb.Message.setProto3StringField(this,2,e)},proto.google.api.ChangeType={CHANGE_TYPE_UNSPECIFIED:0,ADDED:1,REMOVED:2,MODIFIED:3},goog.object.extend(exports,proto.google.api);