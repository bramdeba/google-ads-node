"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_ad_group_ad_asset_view_service_pb=require("../../../../../google/ads/googleads/v4/services/ad_group_ad_asset_view_service_pb.js"),google_ads_googleads_v4_resources_ad_group_ad_asset_view_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_ad_asset_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_AdGroupAdAssetView(e){if(!(e instanceof google_ads_googleads_v4_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.AdGroupAdAssetView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_AdGroupAdAssetView(e){return google_ads_googleads_v4_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetAdGroupAdAssetViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetAdGroupAdAssetViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetAdGroupAdAssetViewRequest(e){return google_ads_googleads_v4_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest.deserializeBinary(new Uint8Array(e))}var AdGroupAdAssetViewServiceService=exports.AdGroupAdAssetViewServiceService={getAdGroupAdAssetView:{path:"/google.ads.googleads.v4.services.AdGroupAdAssetViewService/GetAdGroupAdAssetView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest,responseType:google_ads_googleads_v4_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView,requestSerialize:serialize_google_ads_googleads_v4_services_GetAdGroupAdAssetViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetAdGroupAdAssetViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_AdGroupAdAssetView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_AdGroupAdAssetView}};exports.AdGroupAdAssetViewServiceClient=grpc.makeGenericClientConstructor(AdGroupAdAssetViewServiceService);