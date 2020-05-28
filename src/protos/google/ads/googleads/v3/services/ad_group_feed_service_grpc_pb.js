"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_ad_group_feed_service_pb=require("../../../../../google/ads/googleads/v3/services/ad_group_feed_service_pb.js"),google_ads_googleads_v3_resources_ad_group_feed_pb=require("../../../../../google/ads/googleads/v3/resources/ad_group_feed_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v3_resources_AdGroupFeed(arg){if(!(arg instanceof google_ads_googleads_v3_resources_ad_group_feed_pb.AdGroupFeed))throw new Error("Expected argument of type google.ads.googleads.v3.resources.AdGroupFeed");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_AdGroupFeed(buffer_arg){return google_ads_googleads_v3_resources_ad_group_feed_pb.AdGroupFeed.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetAdGroupFeedRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_ad_group_feed_service_pb.GetAdGroupFeedRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetAdGroupFeedRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetAdGroupFeedRequest(buffer_arg){return google_ads_googleads_v3_services_ad_group_feed_service_pb.GetAdGroupFeedRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateAdGroupFeedsRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateAdGroupFeedsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateAdGroupFeedsRequest(buffer_arg){return google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_MutateAdGroupFeedsResponse(arg){if(!(arg instanceof google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse))throw new Error("Expected argument of type google.ads.googleads.v3.services.MutateAdGroupFeedsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_MutateAdGroupFeedsResponse(buffer_arg){return google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var AdGroupFeedServiceService=exports.AdGroupFeedServiceService={getAdGroupFeed:{path:"/google.ads.googleads.v3.services.AdGroupFeedService/GetAdGroupFeed",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_ad_group_feed_service_pb.GetAdGroupFeedRequest,responseType:google_ads_googleads_v3_resources_ad_group_feed_pb.AdGroupFeed,requestSerialize:serialize_google_ads_googleads_v3_services_GetAdGroupFeedRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetAdGroupFeedRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_AdGroupFeed,responseDeserialize:deserialize_google_ads_googleads_v3_resources_AdGroupFeed},mutateAdGroupFeeds:{path:"/google.ads.googleads.v3.services.AdGroupFeedService/MutateAdGroupFeeds",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest,responseType:google_ads_googleads_v3_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse,requestSerialize:serialize_google_ads_googleads_v3_services_MutateAdGroupFeedsRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_MutateAdGroupFeedsRequest,responseSerialize:serialize_google_ads_googleads_v3_services_MutateAdGroupFeedsResponse,responseDeserialize:deserialize_google_ads_googleads_v3_services_MutateAdGroupFeedsResponse}};exports.AdGroupFeedServiceClient=grpc.makeGenericClientConstructor(AdGroupFeedServiceService);