"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb=require("../../../../../google/ads/googleads/v4/services/conversion_adjustment_upload_service_pb.js"),google_ads_googleads_v4_enums_conversion_adjustment_type_pb=require("../../../../../google/ads/googleads/v4/enums/conversion_adjustment_type_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadConversionAdjustmentsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsRequest(e){return google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadConversionAdjustmentsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsResponse(e){return google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse.deserializeBinary(new Uint8Array(e))}var ConversionAdjustmentUploadServiceService=exports.ConversionAdjustmentUploadServiceService={uploadConversionAdjustments:{path:"/google.ads.googleads.v4.services.ConversionAdjustmentUploadService/UploadConversionAdjustments",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest,responseType:google_ads_googleads_v4_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_UploadConversionAdjustmentsResponse}};exports.ConversionAdjustmentUploadServiceClient=grpc.makeGenericClientConstructor(ConversionAdjustmentUploadServiceService);