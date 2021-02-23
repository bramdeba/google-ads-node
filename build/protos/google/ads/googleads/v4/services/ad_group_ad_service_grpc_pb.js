"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_ad_group_ad_service_pb=require("../../../../../google/ads/googleads/v4/services/ad_group_ad_service_pb.js"),google_ads_googleads_v4_common_policy_pb=require("../../../../../google/ads/googleads/v4/common/policy_pb.js"),google_ads_googleads_v4_resources_ad_group_ad_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_ad_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_AdGroupAd(e){if(!(e instanceof google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd))throw new Error("Expected argument of type google.ads.googleads.v4.resources.AdGroupAd");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_AdGroupAd(e){return google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetAdGroupAdRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_ad_service_pb.GetAdGroupAdRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetAdGroupAdRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetAdGroupAdRequest(e){return google_ads_googleads_v4_services_ad_group_ad_service_pb.GetAdGroupAdRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupAdsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupAdsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupAdsRequest(e){return google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupAdsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupAdsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupAdsResponse(e){return google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse.deserializeBinary(new Uint8Array(e))}var AdGroupAdServiceService=exports.AdGroupAdServiceService={getAdGroupAd:{path:"/google.ads.googleads.v4.services.AdGroupAdService/GetAdGroupAd",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_ad_service_pb.GetAdGroupAdRequest,responseType:google_ads_googleads_v4_resources_ad_group_ad_pb.AdGroupAd,requestSerialize:serialize_google_ads_googleads_v4_services_GetAdGroupAdRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetAdGroupAdRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_AdGroupAd,responseDeserialize:deserialize_google_ads_googleads_v4_resources_AdGroupAd},mutateAdGroupAds:{path:"/google.ads.googleads.v4.services.AdGroupAdService/MutateAdGroupAds",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest,responseType:google_ads_googleads_v4_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupAdsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupAdsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupAdsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupAdsResponse}};exports.AdGroupAdServiceClient=grpc.makeGenericClientConstructor(AdGroupAdServiceService);