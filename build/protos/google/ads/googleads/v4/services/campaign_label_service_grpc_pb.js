"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_campaign_label_service_pb=require("../../../../../google/ads/googleads/v4/services/campaign_label_service_pb.js"),google_ads_googleads_v4_resources_campaign_label_pb=require("../../../../../google/ads/googleads/v4/resources/campaign_label_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_CampaignLabel(e){if(!(e instanceof google_ads_googleads_v4_resources_campaign_label_pb.CampaignLabel))throw new Error("Expected argument of type google.ads.googleads.v4.resources.CampaignLabel");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_CampaignLabel(e){return google_ads_googleads_v4_resources_campaign_label_pb.CampaignLabel.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetCampaignLabelRequest(e){if(!(e instanceof google_ads_googleads_v4_services_campaign_label_service_pb.GetCampaignLabelRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetCampaignLabelRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetCampaignLabelRequest(e){return google_ads_googleads_v4_services_campaign_label_service_pb.GetCampaignLabelRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateCampaignLabelsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateCampaignLabelsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateCampaignLabelsRequest(e){return google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateCampaignLabelsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateCampaignLabelsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateCampaignLabelsResponse(e){return google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsResponse.deserializeBinary(new Uint8Array(e))}var CampaignLabelServiceService=exports.CampaignLabelServiceService={getCampaignLabel:{path:"/google.ads.googleads.v4.services.CampaignLabelService/GetCampaignLabel",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_campaign_label_service_pb.GetCampaignLabelRequest,responseType:google_ads_googleads_v4_resources_campaign_label_pb.CampaignLabel,requestSerialize:serialize_google_ads_googleads_v4_services_GetCampaignLabelRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetCampaignLabelRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_CampaignLabel,responseDeserialize:deserialize_google_ads_googleads_v4_resources_CampaignLabel},mutateCampaignLabels:{path:"/google.ads.googleads.v4.services.CampaignLabelService/MutateCampaignLabels",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsRequest,responseType:google_ads_googleads_v4_services_campaign_label_service_pb.MutateCampaignLabelsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateCampaignLabelsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateCampaignLabelsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateCampaignLabelsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateCampaignLabelsResponse}};exports.CampaignLabelServiceClient=grpc.makeGenericClientConstructor(CampaignLabelServiceService);