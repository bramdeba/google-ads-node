var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator",null,global),proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.displayName="proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.toObject=function(e,o){var r={};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum;return proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator={UNSPECIFIED:0,UNKNOWN:1,CONTAINS:2,EQUALS:3,STARTS_WITH:4,ENDS_WITH:5,NOT_EQUALS:6,NOT_CONTAINS:7,NOT_STARTS_WITH:8,NOT_ENDS_WITH:9},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);