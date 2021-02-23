"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_click_view_service_pb=require("../../../../../google/ads/googleads/v4/services/click_view_service_pb.js"),google_ads_googleads_v4_resources_click_view_pb=require("../../../../../google/ads/googleads/v4/resources/click_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_ClickView(e){if(!(e instanceof google_ads_googleads_v4_resources_click_view_pb.ClickView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.ClickView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_ClickView(e){return google_ads_googleads_v4_resources_click_view_pb.ClickView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetClickViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_click_view_service_pb.GetClickViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetClickViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetClickViewRequest(e){return google_ads_googleads_v4_services_click_view_service_pb.GetClickViewRequest.deserializeBinary(new Uint8Array(e))}var ClickViewServiceService=exports.ClickViewServiceService={getClickView:{path:"/google.ads.googleads.v4.services.ClickViewService/GetClickView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_click_view_service_pb.GetClickViewRequest,responseType:google_ads_googleads_v4_resources_click_view_pb.ClickView,requestSerialize:serialize_google_ads_googleads_v4_services_GetClickViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetClickViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_ClickView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_ClickView}};exports.ClickViewServiceClient=grpc.makeGenericClientConstructor(ClickViewServiceService);