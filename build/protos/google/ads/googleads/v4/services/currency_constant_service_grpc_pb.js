"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_currency_constant_service_pb=require("../../../../../google/ads/googleads/v4/services/currency_constant_service_pb.js"),google_ads_googleads_v4_resources_currency_constant_pb=require("../../../../../google/ads/googleads/v4/resources/currency_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_CurrencyConstant(e){if(!(e instanceof google_ads_googleads_v4_resources_currency_constant_pb.CurrencyConstant))throw new Error("Expected argument of type google.ads.googleads.v4.resources.CurrencyConstant");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_CurrencyConstant(e){return google_ads_googleads_v4_resources_currency_constant_pb.CurrencyConstant.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetCurrencyConstantRequest(e){if(!(e instanceof google_ads_googleads_v4_services_currency_constant_service_pb.GetCurrencyConstantRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetCurrencyConstantRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetCurrencyConstantRequest(e){return google_ads_googleads_v4_services_currency_constant_service_pb.GetCurrencyConstantRequest.deserializeBinary(new Uint8Array(e))}var CurrencyConstantServiceService=exports.CurrencyConstantServiceService={getCurrencyConstant:{path:"/google.ads.googleads.v4.services.CurrencyConstantService/GetCurrencyConstant",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_currency_constant_service_pb.GetCurrencyConstantRequest,responseType:google_ads_googleads_v4_resources_currency_constant_pb.CurrencyConstant,requestSerialize:serialize_google_ads_googleads_v4_services_GetCurrencyConstantRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetCurrencyConstantRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_CurrencyConstant,responseDeserialize:deserialize_google_ads_googleads_v4_resources_CurrencyConstant}};exports.CurrencyConstantServiceClient=grpc.makeGenericClientConstructor(CurrencyConstantServiceService);