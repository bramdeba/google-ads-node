"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_ad_group_service_pb=require("../../../../../google/ads/googleads/v4/services/ad_group_service_pb.js"),google_ads_googleads_v4_resources_ad_group_pb=require("../../../../../google/ads/googleads/v4/resources/ad_group_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_AdGroup(e){if(!(e instanceof google_ads_googleads_v4_resources_ad_group_pb.AdGroup))throw new Error("Expected argument of type google.ads.googleads.v4.resources.AdGroup");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_AdGroup(e){return google_ads_googleads_v4_resources_ad_group_pb.AdGroup.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetAdGroupRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_service_pb.GetAdGroupRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetAdGroupRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetAdGroupRequest(e){return google_ads_googleads_v4_services_ad_group_service_pb.GetAdGroupRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupsRequest(e){return google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateAdGroupsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateAdGroupsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateAdGroupsResponse(e){return google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsResponse.deserializeBinary(new Uint8Array(e))}var AdGroupServiceService=exports.AdGroupServiceService={getAdGroup:{path:"/google.ads.googleads.v4.services.AdGroupService/GetAdGroup",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_service_pb.GetAdGroupRequest,responseType:google_ads_googleads_v4_resources_ad_group_pb.AdGroup,requestSerialize:serialize_google_ads_googleads_v4_services_GetAdGroupRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetAdGroupRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_AdGroup,responseDeserialize:deserialize_google_ads_googleads_v4_resources_AdGroup},mutateAdGroups:{path:"/google.ads.googleads.v4.services.AdGroupService/MutateAdGroups",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsRequest,responseType:google_ads_googleads_v4_services_ad_group_service_pb.MutateAdGroupsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateAdGroupsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateAdGroupsResponse}};exports.AdGroupServiceClient=grpc.makeGenericClientConstructor(AdGroupServiceService);