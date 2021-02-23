var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.Value",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.common.Value.ValueCase",null,global),proto.google.ads.googleads.v4.common.Value=function(o){jspb.Message.initialize(this,o,0,-1,null,proto.google.ads.googleads.v4.common.Value.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.common.Value,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.Value.displayName="proto.google.ads.googleads.v4.common.Value"),proto.google.ads.googleads.v4.common.Value.oneofGroups_=[[1,2,3,4,5]],proto.google.ads.googleads.v4.common.Value.ValueCase={VALUE_NOT_SET:0,BOOLEAN_VALUE:1,INT64_VALUE:2,FLOAT_VALUE:3,DOUBLE_VALUE:4,STRING_VALUE:5},proto.google.ads.googleads.v4.common.Value.prototype.getValueCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.Value.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.Value.toObject(o,this)},proto.google.ads.googleads.v4.common.Value.toObject=function(o,e){var a={booleanValue:jspb.Message.getBooleanFieldWithDefault(e,1,!1),int64Value:jspb.Message.getFieldWithDefault(e,2,0),floatValue:jspb.Message.getFloatingPointFieldWithDefault(e,3,0),doubleValue:jspb.Message.getFloatingPointFieldWithDefault(e,4,0),stringValue:jspb.Message.getFieldWithDefault(e,5,"")};return o&&(a.$jspbMessageInstance=e),a}),proto.google.ads.googleads.v4.common.Value.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),a=new proto.google.ads.googleads.v4.common.Value;return proto.google.ads.googleads.v4.common.Value.deserializeBinaryFromReader(a,e)},proto.google.ads.googleads.v4.common.Value.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var a=e.readBool();o.setBooleanValue(a);break;case 2:a=e.readInt64();o.setInt64Value(a);break;case 3:a=e.readFloat();o.setFloatValue(a);break;case 4:a=e.readDouble();o.setDoubleValue(a);break;case 5:a=e.readString();o.setStringValue(a);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.Value.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.Value.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.Value.serializeBinaryToWriter=function(o,e){var a=void 0;null!=(a=jspb.Message.getField(o,1))&&e.writeBool(1,a),null!=(a=jspb.Message.getField(o,2))&&e.writeInt64(2,a),null!=(a=jspb.Message.getField(o,3))&&e.writeFloat(3,a),null!=(a=jspb.Message.getField(o,4))&&e.writeDouble(4,a),null!=(a=jspb.Message.getField(o,5))&&e.writeString(5,a)},proto.google.ads.googleads.v4.common.Value.prototype.getBooleanValue=function(){return jspb.Message.getBooleanFieldWithDefault(this,1,!1)},proto.google.ads.googleads.v4.common.Value.prototype.setBooleanValue=function(o){return jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],o)},proto.google.ads.googleads.v4.common.Value.prototype.clearBooleanValue=function(){return jspb.Message.setOneofField(this,1,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.common.Value.prototype.hasBooleanValue=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.common.Value.prototype.getInt64Value=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v4.common.Value.prototype.setInt64Value=function(o){return jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],o)},proto.google.ads.googleads.v4.common.Value.prototype.clearInt64Value=function(){return jspb.Message.setOneofField(this,2,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.common.Value.prototype.hasInt64Value=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.common.Value.prototype.getFloatValue=function(){return jspb.Message.getFloatingPointFieldWithDefault(this,3,0)},proto.google.ads.googleads.v4.common.Value.prototype.setFloatValue=function(o){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],o)},proto.google.ads.googleads.v4.common.Value.prototype.clearFloatValue=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.common.Value.prototype.hasFloatValue=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.common.Value.prototype.getDoubleValue=function(){return jspb.Message.getFloatingPointFieldWithDefault(this,4,0)},proto.google.ads.googleads.v4.common.Value.prototype.setDoubleValue=function(o){return jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],o)},proto.google.ads.googleads.v4.common.Value.prototype.clearDoubleValue=function(){return jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.common.Value.prototype.hasDoubleValue=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.common.Value.prototype.getStringValue=function(){return jspb.Message.getFieldWithDefault(this,5,"")},proto.google.ads.googleads.v4.common.Value.prototype.setStringValue=function(o){return jspb.Message.setOneofField(this,5,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],o)},proto.google.ads.googleads.v4.common.Value.prototype.clearStringValue=function(){return jspb.Message.setOneofField(this,5,proto.google.ads.googleads.v4.common.Value.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.common.Value.prototype.hasStringValue=function(){return null!=jspb.Message.getField(this,5)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);