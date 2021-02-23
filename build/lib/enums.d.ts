/**
 * @name AccessReasonEnum.AccessReason
 */
export declare enum AccessReason {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OWNED" = 2,
    "SHARED" = 3,
    "LICENSED" = 4,
    "SUBSCRIBED" = 5,
    "AFFILIATED" = 6
}
/**
 * @name AccessRoleEnum.AccessRole
 */
export declare enum AccessRole {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ADMIN" = 2,
    "STANDARD" = 3,
    "READ_ONLY" = 4
}
/**
 * @name AccountBudgetProposalStatusEnum.AccountBudgetProposalStatus
 */
export declare enum AccountBudgetProposalStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "APPROVED_HELD" = 3,
    "APPROVED" = 4,
    "CANCELLED" = 5,
    "REJECTED" = 6
}
/**
 * @name AccountBudgetProposalTypeEnum.AccountBudgetProposalType
 */
export declare enum AccountBudgetProposalType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CREATE" = 2,
    "UPDATE" = 3,
    "END" = 4,
    "REMOVE" = 5
}
/**
 * @name AccountBudgetStatusEnum.AccountBudgetStatus
 */
export declare enum AccountBudgetStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "APPROVED" = 3,
    "CANCELLED" = 4
}
/**
 * @name AccountLinkStatusEnum.AccountLinkStatus
 */
export declare enum AccountLinkStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField
 */
export declare enum AdCustomizerPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INTEGER" = 2,
    "PRICE" = 3,
    "DATE" = 4,
    "STRING" = 5
}
/**
 * @name AdGroupAdRotationModeEnum.AdGroupAdRotationMode
 */
export declare enum AdGroupAdRotationMode {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPTIMIZE" = 2,
    "ROTATE_FOREVER" = 3
}
/**
 * @name AdGroupAdStatusEnum.AdGroupAdStatus
 */
export declare enum AdGroupAdStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PAUSED" = 3,
    "REMOVED" = 4
}
/**
 * @name AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus
 */
export declare enum AdGroupCriterionApprovalStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPROVED" = 2,
    "DISAPPROVED" = 3,
    "PENDING_REVIEW" = 4,
    "UNDER_REVIEW" = 5
}
/**
 * @name AdGroupCriterionStatusEnum.AdGroupCriterionStatus
 */
export declare enum AdGroupCriterionStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PAUSED" = 3,
    "REMOVED" = 4
}
/**
 * @name AdGroupStatusEnum.AdGroupStatus
 */
export declare enum AdGroupStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PAUSED" = 3,
    "REMOVED" = 4
}
/**
 * @name AdGroupTypeEnum.AdGroupType
 */
export declare enum AdGroupType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEARCH_STANDARD" = 2,
    "DISPLAY_STANDARD" = 3,
    "SHOPPING_PRODUCT_ADS" = 4,
    "HOTEL_ADS" = 6,
    "SHOPPING_SMART_ADS" = 7,
    "VIDEO_BUMPER" = 8,
    "VIDEO_TRUE_VIEW_IN_STREAM" = 9,
    "VIDEO_TRUE_VIEW_IN_DISPLAY" = 10,
    "VIDEO_NON_SKIPPABLE_IN_STREAM" = 11,
    "VIDEO_OUTSTREAM" = 12,
    "SEARCH_DYNAMIC_ADS" = 13,
    "SHOPPING_COMPARISON_LISTING_ADS" = 14,
    "PROMOTED_HOTEL_ADS" = 15,
    "VIDEO_RESPONSIVE" = 16
}
/**
 * @name AdNetworkTypeEnum.AdNetworkType
 */
export declare enum AdNetworkType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEARCH" = 2,
    "SEARCH_PARTNERS" = 3,
    "CONTENT" = 4,
    "YOUTUBE_SEARCH" = 5,
    "YOUTUBE_WATCH" = 6,
    "MIXED" = 7
}
/**
 * @name AdServingOptimizationStatusEnum.AdServingOptimizationStatus
 */
export declare enum AdServingOptimizationStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPTIMIZE" = 2,
    "CONVERSION_OPTIMIZE" = 3,
    "ROTATE" = 4,
    "ROTATE_INDEFINITELY" = 5,
    "UNAVAILABLE" = 6
}
/**
 * @name AdStrengthEnum.AdStrength
 */
export declare enum AdStrength {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "NO_ADS" = 3,
    "POOR" = 4,
    "AVERAGE" = 5,
    "GOOD" = 6,
    "EXCELLENT" = 7
}
/**
 * @name AdTypeEnum.AdType
 */
export declare enum AdType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TEXT_AD" = 2,
    "EXPANDED_TEXT_AD" = 3,
    "CALL_ONLY_AD" = 6,
    "EXPANDED_DYNAMIC_SEARCH_AD" = 7,
    "HOTEL_AD" = 8,
    "SHOPPING_SMART_AD" = 9,
    "SHOPPING_PRODUCT_AD" = 10,
    "VIDEO_AD" = 12,
    "GMAIL_AD" = 13,
    "IMAGE_AD" = 14,
    "RESPONSIVE_SEARCH_AD" = 15,
    "LEGACY_RESPONSIVE_DISPLAY_AD" = 16,
    "APP_AD" = 17,
    "LEGACY_APP_INSTALL_AD" = 18,
    "RESPONSIVE_DISPLAY_AD" = 19,
    "LOCAL_AD" = 20,
    "HTML5_UPLOAD_AD" = 21,
    "DYNAMIC_HTML5_AD" = 22,
    "APP_ENGAGEMENT_AD" = 23,
    "SHOPPING_COMPARISON_LISTING_AD" = 24,
    "VIDEO_BUMPER_AD" = 25,
    "VIDEO_NON_SKIPPABLE_IN_STREAM_AD" = 26,
    "VIDEO_OUTSTREAM_AD" = 27,
    "VIDEO_TRUEVIEW_DISCOVERY_AD" = 28,
    "VIDEO_TRUEVIEW_IN_STREAM_AD" = 29,
    "VIDEO_RESPONSIVE_AD" = 30
}
/**
 * @name AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType
 */
export declare enum AdvertisingChannelSubType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEARCH_MOBILE_APP" = 2,
    "DISPLAY_MOBILE_APP" = 3,
    "SEARCH_EXPRESS" = 4,
    "DISPLAY_EXPRESS" = 5,
    "SHOPPING_SMART_ADS" = 6,
    "DISPLAY_GMAIL_AD" = 7,
    "DISPLAY_SMART_CAMPAIGN" = 8,
    "VIDEO_OUTSTREAM" = 9,
    "VIDEO_ACTION" = 10,
    "VIDEO_NON_SKIPPABLE" = 11,
    "APP_CAMPAIGN" = 12,
    "APP_CAMPAIGN_FOR_ENGAGEMENT" = 13,
    "LOCAL_CAMPAIGN" = 14,
    "SHOPPING_COMPARISON_LISTING_ADS" = 15
}
/**
 * @name AdvertisingChannelTypeEnum.AdvertisingChannelType
 */
export declare enum AdvertisingChannelType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEARCH" = 2,
    "DISPLAY" = 3,
    "SHOPPING" = 4,
    "HOTEL" = 5,
    "VIDEO" = 6,
    "MULTI_CHANNEL" = 7,
    "LOCAL" = 8,
    "SMART" = 9
}
/**
 * @name AffiliateLocationFeedRelationshipTypeEnum.AffiliateLocationFeedRelationshipType
 */
export declare enum AffiliateLocationFeedRelationshipType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "GENERAL_RETAILER" = 2
}
/**
 * @name AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField
 */
export declare enum AffiliateLocationPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BUSINESS_NAME" = 2,
    "ADDRESS_LINE_1" = 3,
    "ADDRESS_LINE_2" = 4,
    "CITY" = 5,
    "PROVINCE" = 6,
    "POSTAL_CODE" = 7,
    "COUNTRY_CODE" = 8,
    "PHONE_NUMBER" = 9,
    "LANGUAGE_CODE" = 10,
    "CHAIN_ID" = 11,
    "CHAIN_NAME" = 12
}
/**
 * @name AgeRangeTypeEnum.AgeRangeType
 */
export declare enum AgeRangeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AGE_RANGE_18_24" = 503001,
    "AGE_RANGE_25_34" = 503002,
    "AGE_RANGE_35_44" = 503003,
    "AGE_RANGE_45_54" = 503004,
    "AGE_RANGE_55_64" = 503005,
    "AGE_RANGE_65_UP" = 503006,
    "AGE_RANGE_UNDETERMINED" = 503999
}
/**
 * @name AppCampaignAppStoreEnum.AppCampaignAppStore
 */
export declare enum AppCampaignAppStore {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPLE_APP_STORE" = 2,
    "GOOGLE_APP_STORE" = 3
}
/**
 * @name AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType
 */
export declare enum AppCampaignBiddingStrategyGoalType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPTIMIZE_INSTALLS_TARGET_INSTALL_COST" = 2,
    "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST" = 3,
    "OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST" = 4,
    "OPTIMIZE_RETURN_ON_ADVERTISING_SPEND" = 5
}
/**
 * @name AppPaymentModelTypeEnum.AppPaymentModelType
 */
export declare enum AppPaymentModelType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PAID" = 30
}
/**
 * @name AppPlaceholderFieldEnum.AppPlaceholderField
 */
export declare enum AppPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STORE" = 2,
    "ID" = 3,
    "LINK_TEXT" = 4,
    "URL" = 5,
    "FINAL_URLS" = 6,
    "FINAL_MOBILE_URLS" = 7,
    "TRACKING_URL" = 8,
    "FINAL_URL_SUFFIX" = 9
}
/**
 * @name AppStoreEnum.AppStore
 */
export declare enum AppStore {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPLE_ITUNES" = 2,
    "GOOGLE_PLAY" = 3
}
/**
 * @name AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType
 */
export declare enum AppUrlOperatingSystemType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IOS" = 2,
    "ANDROID" = 3
}
/**
 * @name AssetFieldTypeEnum.AssetFieldType
 */
export declare enum AssetFieldType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HEADLINE" = 2,
    "DESCRIPTION" = 3,
    "MANDATORY_AD_TEXT" = 4,
    "MARKETING_IMAGE" = 5,
    "MEDIA_BUNDLE" = 6,
    "YOUTUBE_VIDEO" = 7
}
/**
 * @name AssetPerformanceLabelEnum.AssetPerformanceLabel
 */
export declare enum AssetPerformanceLabel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "LEARNING" = 3,
    "LOW" = 4,
    "GOOD" = 5,
    "BEST" = 6
}
/**
 * @name AssetTypeEnum.AssetType
 */
export declare enum AssetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "YOUTUBE_VIDEO" = 2,
    "MEDIA_BUNDLE" = 3,
    "IMAGE" = 4,
    "TEXT" = 5,
    "BOOK_ON_GOOGLE" = 7
}
/**
 * @name AttributionModelEnum.AttributionModel
 */
export declare enum AttributionModel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EXTERNAL" = 100,
    "GOOGLE_ADS_LAST_CLICK" = 101,
    "GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK" = 102,
    "GOOGLE_SEARCH_ATTRIBUTION_LINEAR" = 103,
    "GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY" = 104,
    "GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED" = 105,
    "GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN" = 106
}
/**
 * @name BatchJobStatusEnum.BatchJobStatus
 */
export declare enum BatchJobStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "RUNNING" = 3,
    "DONE" = 4
}
/**
 * @name BidModifierSourceEnum.BidModifierSource
 */
export declare enum BidModifierSource {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN" = 2,
    "AD_GROUP" = 3
}
/**
 * @name BiddingSourceEnum.BiddingSource
 */
export declare enum BiddingSource {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN_BIDDING_STRATEGY" = 5,
    "AD_GROUP" = 6,
    "AD_GROUP_CRITERION" = 7
}
/**
 * @name BiddingStrategyStatusEnum.BiddingStrategyStatus
 */
export declare enum BiddingStrategyStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 4
}
/**
 * @name BiddingStrategyTypeEnum.BiddingStrategyType
 */
export declare enum BiddingStrategyType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "COMMISSION" = 16,
    "ENHANCED_CPC" = 2,
    "MANUAL_CPC" = 3,
    "MANUAL_CPM" = 4,
    "MANUAL_CPV" = 13,
    "MAXIMIZE_CONVERSIONS" = 10,
    "MAXIMIZE_CONVERSION_VALUE" = 11,
    "PAGE_ONE_PROMOTED" = 5,
    "PERCENT_CPC" = 12,
    "TARGET_CPA" = 6,
    "TARGET_CPM" = 14,
    "TARGET_IMPRESSION_SHARE" = 15,
    "TARGET_OUTRANK_SHARE" = 7,
    "TARGET_ROAS" = 8,
    "TARGET_SPEND" = 9
}
/**
 * @name BillingSetupStatusEnum.BillingSetupStatus
 */
export declare enum BillingSetupStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "APPROVED_HELD" = 3,
    "APPROVED" = 4,
    "CANCELLED" = 5
}
/**
 * @name BrandSafetySuitabilityEnum.BrandSafetySuitability
 */
export declare enum BrandSafetySuitability {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EXPANDED_INVENTORY" = 2,
    "STANDARD_INVENTORY" = 3,
    "LIMITED_INVENTORY" = 4
}
/**
 * @name BudgetDeliveryMethodEnum.BudgetDeliveryMethod
 */
export declare enum BudgetDeliveryMethod {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STANDARD" = 2,
    "ACCELERATED" = 3
}
/**
 * @name BudgetPeriodEnum.BudgetPeriod
 */
export declare enum BudgetPeriod {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DAILY" = 2
}
/**
 * @name BudgetStatusEnum.BudgetStatus
 */
export declare enum BudgetStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name BudgetTypeEnum.BudgetType
 */
export declare enum BudgetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STANDARD" = 2,
    "HOTEL_ADS_COMMISSION" = 3,
    "FIXED_CPA" = 4
}
/**
 * @name CallConversionReportingStateEnum.CallConversionReportingState
 */
export declare enum CallConversionReportingState {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DISABLED" = 2,
    "USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION" = 3,
    "USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION" = 4
}
/**
 * @name CallPlaceholderFieldEnum.CallPlaceholderField
 */
export declare enum CallPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PHONE_NUMBER" = 2,
    "COUNTRY_CODE" = 3,
    "TRACKED" = 4,
    "CONVERSION_TYPE_ID" = 5,
    "CONVERSION_REPORTING_STATE" = 6
}
/**
 * @name CalloutPlaceholderFieldEnum.CalloutPlaceholderField
 */
export declare enum CalloutPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CALLOUT_TEXT" = 2
}
/**
 * @name CampaignCriterionStatusEnum.CampaignCriterionStatus
 */
export declare enum CampaignCriterionStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PAUSED" = 3,
    "REMOVED" = 4
}
/**
 * @name CampaignDraftStatusEnum.CampaignDraftStatus
 */
export declare enum CampaignDraftStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PROPOSED" = 2,
    "REMOVED" = 3,
    "PROMOTING" = 5,
    "PROMOTED" = 4,
    "PROMOTE_FAILED" = 6
}
/**
 * @name CampaignExperimentStatusEnum.CampaignExperimentStatus
 */
export declare enum CampaignExperimentStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INITIALIZING" = 2,
    "INITIALIZATION_FAILED" = 8,
    "ENABLED" = 3,
    "GRADUATED" = 4,
    "REMOVED" = 5,
    "PROMOTING" = 6,
    "PROMOTION_FAILED" = 9,
    "PROMOTED" = 7,
    "ENDED_MANUALLY" = 10
}
/**
 * @name CampaignExperimentTrafficSplitTypeEnum.CampaignExperimentTrafficSplitType
 */
export declare enum CampaignExperimentTrafficSplitType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RANDOM_QUERY" = 2,
    "COOKIE" = 3
}
/**
 * @name CampaignExperimentTypeEnum.CampaignExperimentType
 */
export declare enum CampaignExperimentType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BASE" = 2,
    "DRAFT" = 3,
    "EXPERIMENT" = 4
}
/**
 * @name CampaignServingStatusEnum.CampaignServingStatus
 */
export declare enum CampaignServingStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SERVING" = 2,
    "NONE" = 3,
    "ENDED" = 4,
    "PENDING" = 5,
    "SUSPENDED" = 6
}
/**
 * @name CampaignSharedSetStatusEnum.CampaignSharedSetStatus
 */
export declare enum CampaignSharedSetStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name CampaignStatusEnum.CampaignStatus
 */
export declare enum CampaignStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PAUSED" = 3,
    "REMOVED" = 4
}
/**
 * @name ChangeStatusOperationEnum.ChangeStatusOperation
 */
export declare enum ChangeStatusOperation {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ADDED" = 2,
    "CHANGED" = 3,
    "REMOVED" = 4
}
/**
 * @name ChangeStatusResourceTypeEnum.ChangeStatusResourceType
 */
export declare enum ChangeStatusResourceType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP" = 3,
    "AD_GROUP_AD" = 4,
    "AD_GROUP_CRITERION" = 5,
    "CAMPAIGN" = 6,
    "CAMPAIGN_CRITERION" = 7,
    "FEED" = 9,
    "FEED_ITEM" = 10,
    "AD_GROUP_FEED" = 11,
    "CAMPAIGN_FEED" = 12,
    "AD_GROUP_BID_MODIFIER" = 13
}
/**
 * @name ClickTypeEnum.ClickType
 */
export declare enum ClickType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APP_DEEPLINK" = 2,
    "BREADCRUMBS" = 3,
    "BROADBAND_PLAN" = 4,
    "CALL_TRACKING" = 5,
    "CALLS" = 6,
    "CLICK_ON_ENGAGEMENT_AD" = 7,
    "GET_DIRECTIONS" = 8,
    "LOCATION_EXPANSION" = 9,
    "LOCATION_FORMAT_CALL" = 10,
    "LOCATION_FORMAT_DIRECTIONS" = 11,
    "LOCATION_FORMAT_IMAGE" = 12,
    "LOCATION_FORMAT_LANDING_PAGE" = 13,
    "LOCATION_FORMAT_MAP" = 14,
    "LOCATION_FORMAT_STORE_INFO" = 15,
    "LOCATION_FORMAT_TEXT" = 16,
    "MOBILE_CALL_TRACKING" = 17,
    "OFFER_PRINTS" = 18,
    "OTHER" = 19,
    "PRODUCT_EXTENSION_CLICKS" = 20,
    "PRODUCT_LISTING_AD_CLICKS" = 21,
    "SITELINKS" = 22,
    "STORE_LOCATOR" = 23,
    "URL_CLICKS" = 25,
    "VIDEO_APP_STORE_CLICKS" = 26,
    "VIDEO_CALL_TO_ACTION_CLICKS" = 27,
    "VIDEO_CARD_ACTION_HEADLINE_CLICKS" = 28,
    "VIDEO_END_CAP_CLICKS" = 29,
    "VIDEO_WEBSITE_CLICKS" = 30,
    "VISUAL_SITELINKS" = 31,
    "WIRELESS_PLAN" = 32,
    "PRODUCT_LISTING_AD_LOCAL" = 33,
    "PRODUCT_LISTING_AD_MULTICHANNEL_LOCAL" = 34,
    "PRODUCT_LISTING_AD_MULTICHANNEL_ONLINE" = 35,
    "PRODUCT_LISTING_ADS_COUPON" = 36,
    "PRODUCT_LISTING_AD_TRANSACTABLE" = 37,
    "PRODUCT_AD_APP_DEEPLINK" = 38,
    "SHOWCASE_AD_CATEGORY_LINK" = 39,
    "SHOWCASE_AD_LOCAL_STOREFRONT_LINK" = 40,
    "SHOWCASE_AD_ONLINE_PRODUCT_LINK" = 42,
    "SHOWCASE_AD_LOCAL_PRODUCT_LINK" = 43,
    "PROMOTION_EXTENSION" = 44,
    "SWIPEABLE_GALLERY_AD_HEADLINE" = 45,
    "SWIPEABLE_GALLERY_AD_SWIPES" = 46,
    "SWIPEABLE_GALLERY_AD_SEE_MORE" = 47,
    "SWIPEABLE_GALLERY_AD_SITELINK_ONE" = 48,
    "SWIPEABLE_GALLERY_AD_SITELINK_TWO" = 49,
    "SWIPEABLE_GALLERY_AD_SITELINK_THREE" = 50,
    "SWIPEABLE_GALLERY_AD_SITELINK_FOUR" = 51,
    "SWIPEABLE_GALLERY_AD_SITELINK_FIVE" = 52,
    "HOTEL_PRICE" = 53,
    "PRICE_EXTENSION" = 54,
    "HOTEL_BOOK_ON_GOOGLE_ROOM_SELECTION" = 55,
    "SHOPPING_COMPARISON_LISTING" = 56
}
/**
 * @name ContentLabelTypeEnum.ContentLabelType
 */
export declare enum ContentLabelType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEXUALLY_SUGGESTIVE" = 2,
    "BELOW_THE_FOLD" = 3,
    "PARKED_DOMAIN" = 4,
    "JUVENILE" = 6,
    "PROFANITY" = 7,
    "TRAGEDY" = 8,
    "VIDEO" = 9,
    "VIDEO_RATING_DV_G" = 10,
    "VIDEO_RATING_DV_PG" = 11,
    "VIDEO_RATING_DV_T" = 12,
    "VIDEO_RATING_DV_MA" = 13,
    "VIDEO_NOT_YET_RATED" = 14,
    "EMBEDDED_VIDEO" = 15,
    "LIVE_STREAMING_VIDEO" = 16,
    "SOCIAL_ISSUES" = 17
}
/**
 * @name ConversionActionCategoryEnum.ConversionActionCategory
 */
export declare enum ConversionActionCategory {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DEFAULT" = 2,
    "PAGE_VIEW" = 3,
    "PURCHASE" = 4,
    "SIGNUP" = 5,
    "LEAD" = 6,
    "DOWNLOAD" = 7,
    "ADD_TO_CART" = 8,
    "BEGIN_CHECKOUT" = 9,
    "SUBSCRIBE_PAID" = 10,
    "PHONE_CALL_LEAD" = 11,
    "IMPORTED_LEAD" = 12,
    "SUBMIT_LEAD_FORM" = 13,
    "BOOK_APPOINTMENT" = 14,
    "REQUEST_QUOTE" = 15,
    "GET_DIRECTIONS" = 16,
    "OUTBOUND_CLICK" = 17,
    "CONTACT" = 18,
    "ENGAGEMENT" = 19,
    "STORE_VISIT" = 20,
    "STORE_SALE" = 21
}
/**
 * @name ConversionActionCountingTypeEnum.ConversionActionCountingType
 */
export declare enum ConversionActionCountingType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ONE_PER_CLICK" = 2,
    "MANY_PER_CLICK" = 3
}
/**
 * @name ConversionActionStatusEnum.ConversionActionStatus
 */
export declare enum ConversionActionStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3,
    "HIDDEN" = 4
}
/**
 * @name ConversionActionTypeEnum.ConversionActionType
 */
export declare enum ConversionActionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_CALL" = 2,
    "CLICK_TO_CALL" = 3,
    "GOOGLE_PLAY_DOWNLOAD" = 4,
    "GOOGLE_PLAY_IN_APP_PURCHASE" = 5,
    "UPLOAD_CALLS" = 6,
    "UPLOAD_CLICKS" = 7,
    "WEBPAGE" = 8,
    "WEBSITE_CALL" = 9,
    "STORE_SALES_DIRECT_UPLOAD" = 10,
    "STORE_SALES" = 11,
    "FIREBASE_ANDROID_FIRST_OPEN" = 12,
    "FIREBASE_ANDROID_IN_APP_PURCHASE" = 13,
    "FIREBASE_ANDROID_CUSTOM" = 14,
    "FIREBASE_IOS_FIRST_OPEN" = 15,
    "FIREBASE_IOS_IN_APP_PURCHASE" = 16,
    "FIREBASE_IOS_CUSTOM" = 17,
    "THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN" = 18,
    "THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE" = 19,
    "THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM" = 20,
    "THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN" = 21,
    "THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE" = 22,
    "THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM" = 23
}
/**
 * @name ConversionAdjustmentTypeEnum.ConversionAdjustmentType
 */
export declare enum ConversionAdjustmentType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RETRACTION" = 2,
    "RESTATEMENT" = 3
}
/**
 * @name ConversionAttributionEventTypeEnum.ConversionAttributionEventType
 */
export declare enum ConversionAttributionEventType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IMPRESSION" = 2,
    "INTERACTION" = 3
}
/**
 * @name ConversionLagBucketEnum.ConversionLagBucket
 */
export declare enum ConversionLagBucket {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LESS_THAN_ONE_DAY" = 2,
    "ONE_TO_TWO_DAYS" = 3,
    "TWO_TO_THREE_DAYS" = 4,
    "THREE_TO_FOUR_DAYS" = 5,
    "FOUR_TO_FIVE_DAYS" = 6,
    "FIVE_TO_SIX_DAYS" = 7,
    "SIX_TO_SEVEN_DAYS" = 8,
    "SEVEN_TO_EIGHT_DAYS" = 9,
    "EIGHT_TO_NINE_DAYS" = 10,
    "NINE_TO_TEN_DAYS" = 11,
    "TEN_TO_ELEVEN_DAYS" = 12,
    "ELEVEN_TO_TWELVE_DAYS" = 13,
    "TWELVE_TO_THIRTEEN_DAYS" = 14,
    "THIRTEEN_TO_FOURTEEN_DAYS" = 15,
    "FOURTEEN_TO_TWENTY_ONE_DAYS" = 16,
    "TWENTY_ONE_TO_THIRTY_DAYS" = 17,
    "THIRTY_TO_FORTY_FIVE_DAYS" = 18,
    "FORTY_FIVE_TO_SIXTY_DAYS" = 19,
    "SIXTY_TO_NINETY_DAYS" = 20
}
/**
 * @name ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket
 */
export declare enum ConversionOrAdjustmentLagBucket {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONVERSION_LESS_THAN_ONE_DAY" = 2,
    "CONVERSION_ONE_TO_TWO_DAYS" = 3,
    "CONVERSION_TWO_TO_THREE_DAYS" = 4,
    "CONVERSION_THREE_TO_FOUR_DAYS" = 5,
    "CONVERSION_FOUR_TO_FIVE_DAYS" = 6,
    "CONVERSION_FIVE_TO_SIX_DAYS" = 7,
    "CONVERSION_SIX_TO_SEVEN_DAYS" = 8,
    "CONVERSION_SEVEN_TO_EIGHT_DAYS" = 9,
    "CONVERSION_EIGHT_TO_NINE_DAYS" = 10,
    "CONVERSION_NINE_TO_TEN_DAYS" = 11,
    "CONVERSION_TEN_TO_ELEVEN_DAYS" = 12,
    "CONVERSION_ELEVEN_TO_TWELVE_DAYS" = 13,
    "CONVERSION_TWELVE_TO_THIRTEEN_DAYS" = 14,
    "CONVERSION_THIRTEEN_TO_FOURTEEN_DAYS" = 15,
    "CONVERSION_FOURTEEN_TO_TWENTY_ONE_DAYS" = 16,
    "CONVERSION_TWENTY_ONE_TO_THIRTY_DAYS" = 17,
    "CONVERSION_THIRTY_TO_FORTY_FIVE_DAYS" = 18,
    "CONVERSION_FORTY_FIVE_TO_SIXTY_DAYS" = 19,
    "CONVERSION_SIXTY_TO_NINETY_DAYS" = 20,
    "ADJUSTMENT_LESS_THAN_ONE_DAY" = 21,
    "ADJUSTMENT_ONE_TO_TWO_DAYS" = 22,
    "ADJUSTMENT_TWO_TO_THREE_DAYS" = 23,
    "ADJUSTMENT_THREE_TO_FOUR_DAYS" = 24,
    "ADJUSTMENT_FOUR_TO_FIVE_DAYS" = 25,
    "ADJUSTMENT_FIVE_TO_SIX_DAYS" = 26,
    "ADJUSTMENT_SIX_TO_SEVEN_DAYS" = 27,
    "ADJUSTMENT_SEVEN_TO_EIGHT_DAYS" = 28,
    "ADJUSTMENT_EIGHT_TO_NINE_DAYS" = 29,
    "ADJUSTMENT_NINE_TO_TEN_DAYS" = 30,
    "ADJUSTMENT_TEN_TO_ELEVEN_DAYS" = 31,
    "ADJUSTMENT_ELEVEN_TO_TWELVE_DAYS" = 32,
    "ADJUSTMENT_TWELVE_TO_THIRTEEN_DAYS" = 33,
    "ADJUSTMENT_THIRTEEN_TO_FOURTEEN_DAYS" = 34,
    "ADJUSTMENT_FOURTEEN_TO_TWENTY_ONE_DAYS" = 35,
    "ADJUSTMENT_TWENTY_ONE_TO_THIRTY_DAYS" = 36,
    "ADJUSTMENT_THIRTY_TO_FORTY_FIVE_DAYS" = 37,
    "ADJUSTMENT_FORTY_FIVE_TO_SIXTY_DAYS" = 38,
    "ADJUSTMENT_SIXTY_TO_NINETY_DAYS" = 39,
    "ADJUSTMENT_NINETY_TO_ONE_HUNDRED_AND_FORTY_FIVE_DAYS" = 40,
    "CONVERSION_UNKNOWN" = 41,
    "ADJUSTMENT_UNKNOWN" = 42
}
/**
 * @name CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode
 */
export declare enum CriterionCategoryChannelAvailabilityMode {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ALL_CHANNELS" = 2,
    "CHANNEL_TYPE_AND_ALL_SUBTYPES" = 3,
    "CHANNEL_TYPE_AND_SUBSET_SUBTYPES" = 4
}
/**
 * @name CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode
 */
export declare enum CriterionCategoryLocaleAvailabilityMode {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ALL_LOCALES" = 2,
    "COUNTRY_AND_ALL_LANGUAGES" = 3,
    "LANGUAGE_AND_ALL_COUNTRIES" = 4,
    "COUNTRY_AND_LANGUAGE" = 5
}
/**
 * @name CriterionSystemServingStatusEnum.CriterionSystemServingStatus
 */
export declare enum CriterionSystemServingStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ELIGIBLE" = 2,
    "RARELY_SERVED" = 3
}
/**
 * @name CriterionTypeEnum.CriterionType
 */
export declare enum CriterionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "KEYWORD" = 2,
    "PLACEMENT" = 3,
    "MOBILE_APP_CATEGORY" = 4,
    "MOBILE_APPLICATION" = 5,
    "DEVICE" = 6,
    "LOCATION" = 7,
    "LISTING_GROUP" = 8,
    "AD_SCHEDULE" = 9,
    "AGE_RANGE" = 10,
    "GENDER" = 11,
    "INCOME_RANGE" = 12,
    "PARENTAL_STATUS" = 13,
    "YOUTUBE_VIDEO" = 14,
    "YOUTUBE_CHANNEL" = 15,
    "USER_LIST" = 16,
    "PROXIMITY" = 17,
    "TOPIC" = 18,
    "LISTING_SCOPE" = 19,
    "LANGUAGE" = 20,
    "IP_BLOCK" = 21,
    "CONTENT_LABEL" = 22,
    "CARRIER" = 23,
    "USER_INTEREST" = 24,
    "WEBPAGE" = 25,
    "OPERATING_SYSTEM_VERSION" = 26,
    "APP_PAYMENT_MODEL" = 27,
    "MOBILE_DEVICE" = 28,
    "CUSTOM_AFFINITY" = 29,
    "CUSTOM_INTENT" = 30,
    "LOCATION_GROUP" = 31
}
/**
 * @name CustomInterestMemberTypeEnum.CustomInterestMemberType
 */
export declare enum CustomInterestMemberType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "KEYWORD" = 2,
    "URL" = 3
}
/**
 * @name CustomInterestStatusEnum.CustomInterestStatus
 */
export declare enum CustomInterestStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name CustomInterestTypeEnum.CustomInterestType
 */
export declare enum CustomInterestType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CUSTOM_AFFINITY" = 2,
    "CUSTOM_INTENT" = 3
}
/**
 * @name CustomPlaceholderFieldEnum.CustomPlaceholderField
 */
export declare enum CustomPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ID" = 2,
    "ID2" = 3,
    "ITEM_TITLE" = 4,
    "ITEM_SUBTITLE" = 5,
    "ITEM_DESCRIPTION" = 6,
    "ITEM_ADDRESS" = 7,
    "PRICE" = 8,
    "FORMATTED_PRICE" = 9,
    "SALE_PRICE" = 10,
    "FORMATTED_SALE_PRICE" = 11,
    "IMAGE_URL" = 12,
    "ITEM_CATEGORY" = 13,
    "FINAL_URLS" = 14,
    "FINAL_MOBILE_URLS" = 15,
    "TRACKING_URL" = 16,
    "CONTEXTUAL_KEYWORDS" = 17,
    "ANDROID_APP_LINK" = 18,
    "SIMILAR_IDS" = 19,
    "IOS_APP_LINK" = 20,
    "IOS_APP_STORE_ID" = 21
}
/**
 * @name CustomerMatchUploadKeyTypeEnum.CustomerMatchUploadKeyType
 */
export declare enum CustomerMatchUploadKeyType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONTACT_INFO" = 2,
    "CRM_ID" = 3,
    "MOBILE_ADVERTISING_ID" = 4
}
/**
 * @name CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason
 */
export declare enum CustomerPayPerConversionEligibilityFailureReason {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NOT_ENOUGH_CONVERSIONS" = 2,
    "CONVERSION_LAG_TOO_HIGH" = 3,
    "HAS_CAMPAIGN_WITH_SHARED_BUDGET" = 4,
    "HAS_UPLOAD_CLICKS_CONVERSION" = 5,
    "AVERAGE_DAILY_SPEND_TOO_HIGH" = 6,
    "ANALYSIS_NOT_COMPLETE" = 7,
    "OTHER" = 8
}
/**
 * @name DataDrivenModelStatusEnum.DataDrivenModelStatus
 */
export declare enum DataDrivenModelStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AVAILABLE" = 2,
    "STALE" = 3,
    "EXPIRED" = 4,
    "NEVER_GENERATED" = 5
}
/**
 * @name DayOfWeekEnum.DayOfWeek
 */
export declare enum DayOfWeek {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MONDAY" = 2,
    "TUESDAY" = 3,
    "WEDNESDAY" = 4,
    "THURSDAY" = 5,
    "FRIDAY" = 6,
    "SATURDAY" = 7,
    "SUNDAY" = 8
}
/**
 * @name DeviceEnum.Device
 */
export declare enum Device {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MOBILE" = 2,
    "TABLET" = 3,
    "DESKTOP" = 4,
    "CONNECTED_TV" = 6,
    "OTHER" = 5
}
/**
 * @name DisplayAdFormatSettingEnum.DisplayAdFormatSetting
 */
export declare enum DisplayAdFormatSetting {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ALL_FORMATS" = 2,
    "NON_NATIVE" = 3,
    "NATIVE" = 4
}
/**
 * @name DisplayUploadProductTypeEnum.DisplayUploadProductType
 */
export declare enum DisplayUploadProductType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HTML5_UPLOAD_AD" = 2,
    "DYNAMIC_HTML5_EDUCATION_AD" = 3,
    "DYNAMIC_HTML5_FLIGHT_AD" = 4,
    "DYNAMIC_HTML5_HOTEL_RENTAL_AD" = 5,
    "DYNAMIC_HTML5_JOB_AD" = 6,
    "DYNAMIC_HTML5_LOCAL_AD" = 7,
    "DYNAMIC_HTML5_REAL_ESTATE_AD" = 8,
    "DYNAMIC_HTML5_CUSTOM_AD" = 9,
    "DYNAMIC_HTML5_TRAVEL_AD" = 10,
    "DYNAMIC_HTML5_HOTEL_AD" = 11
}
/**
 * @name DistanceBucketEnum.DistanceBucket
 */
export declare enum DistanceBucket {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "WITHIN_700M" = 2,
    "WITHIN_1KM" = 3,
    "WITHIN_5KM" = 4,
    "WITHIN_10KM" = 5,
    "WITHIN_15KM" = 6,
    "WITHIN_20KM" = 7,
    "WITHIN_25KM" = 8,
    "WITHIN_30KM" = 9,
    "WITHIN_35KM" = 10,
    "WITHIN_40KM" = 11,
    "WITHIN_45KM" = 12,
    "WITHIN_50KM" = 13,
    "WITHIN_55KM" = 14,
    "WITHIN_60KM" = 15,
    "WITHIN_65KM" = 16,
    "BEYOND_65KM" = 17,
    "WITHIN_0_7MILES" = 18,
    "WITHIN_1MILE" = 19,
    "WITHIN_5MILES" = 20,
    "WITHIN_10MILES" = 21,
    "WITHIN_15MILES" = 22,
    "WITHIN_20MILES" = 23,
    "WITHIN_25MILES" = 24,
    "WITHIN_30MILES" = 25,
    "WITHIN_35MILES" = 26,
    "WITHIN_40MILES" = 27,
    "BEYOND_40MILES" = 28
}
/**
 * @name DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionField
 */
export declare enum DsaPageFeedCriterionField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PAGE_URL" = 2,
    "LABEL" = 3
}
/**
 * @name EducationPlaceholderFieldEnum.EducationPlaceholderField
 */
export declare enum EducationPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PROGRAM_ID" = 2,
    "LOCATION_ID" = 3,
    "PROGRAM_NAME" = 4,
    "AREA_OF_STUDY" = 5,
    "PROGRAM_DESCRIPTION" = 6,
    "SCHOOL_NAME" = 7,
    "ADDRESS" = 8,
    "THUMBNAIL_IMAGE_URL" = 9,
    "ALTERNATIVE_THUMBNAIL_IMAGE_URL" = 10,
    "FINAL_URLS" = 11,
    "FINAL_MOBILE_URLS" = 12,
    "TRACKING_URL" = 13,
    "CONTEXTUAL_KEYWORDS" = 14,
    "ANDROID_APP_LINK" = 15,
    "SIMILAR_PROGRAM_IDS" = 16,
    "IOS_APP_LINK" = 17,
    "IOS_APP_STORE_ID" = 18
}
/**
 * @name ExtensionSettingDeviceEnum.ExtensionSettingDevice
 */
export declare enum ExtensionSettingDevice {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MOBILE" = 2,
    "DESKTOP" = 3
}
/**
 * @name ExtensionTypeEnum.ExtensionType
 */
export declare enum ExtensionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NONE" = 2,
    "APP" = 3,
    "CALL" = 4,
    "CALLOUT" = 5,
    "MESSAGE" = 6,
    "PRICE" = 7,
    "PROMOTION" = 8,
    "SITELINK" = 10,
    "STRUCTURED_SNIPPET" = 11,
    "LOCATION" = 12,
    "AFFILIATE_LOCATION" = 13,
    "HOTEL_CALLOUT" = 15
}
/**
 * @name ExternalConversionSourceEnum.ExternalConversionSource
 */
export declare enum ExternalConversionSource {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "WEBPAGE" = 2,
    "ANALYTICS" = 3,
    "UPLOAD" = 4,
    "AD_CALL_METRICS" = 5,
    "WEBSITE_CALL_METRICS" = 6,
    "STORE_VISITS" = 7,
    "ANDROID_IN_APP" = 8,
    "IOS_IN_APP" = 9,
    "IOS_FIRST_OPEN" = 10,
    "APP_UNSPECIFIED" = 11,
    "ANDROID_FIRST_OPEN" = 12,
    "UPLOAD_CALLS" = 13,
    "FIREBASE" = 14,
    "CLICK_TO_CALL" = 15,
    "SALESFORCE" = 16,
    "STORE_SALES_CRM" = 17,
    "STORE_SALES_PAYMENT_NETWORK" = 18,
    "GOOGLE_PLAY" = 19,
    "THIRD_PARTY_APP_ANALYTICS" = 20,
    "GOOGLE_ATTRIBUTION" = 21,
    "STORE_SALES_DIRECT_UPLOAD" = 23,
    "STORE_SALES" = 24
}
/**
 * @name FeedAttributeTypeEnum.FeedAttributeType
 */
export declare enum FeedAttributeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INT64" = 2,
    "DOUBLE" = 3,
    "STRING" = 4,
    "BOOLEAN" = 5,
    "URL" = 6,
    "DATE_TIME" = 7,
    "INT64_LIST" = 8,
    "DOUBLE_LIST" = 9,
    "STRING_LIST" = 10,
    "BOOLEAN_LIST" = 11,
    "URL_LIST" = 12,
    "DATE_TIME_LIST" = 13,
    "PRICE" = 14
}
/**
 * @name FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatus
 */
export declare enum FeedItemQualityApprovalStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPROVED" = 2,
    "DISAPPROVED" = 3
}
/**
 * @name FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReason
 */
export declare enum FeedItemQualityDisapprovalReason {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PRICE_TABLE_REPETITIVE_HEADERS" = 2,
    "PRICE_TABLE_REPETITIVE_DESCRIPTION" = 3,
    "PRICE_TABLE_INCONSISTENT_ROWS" = 4,
    "PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS" = 5,
    "PRICE_UNSUPPORTED_LANGUAGE" = 6,
    "PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH" = 7,
    "PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT" = 8,
    "PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT" = 9,
    "PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT" = 10,
    "PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE" = 11,
    "PRICE_TABLE_ROW_UNRATEABLE" = 12,
    "PRICE_TABLE_ROW_PRICE_INVALID" = 13,
    "PRICE_TABLE_ROW_URL_INVALID" = 14,
    "PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE" = 15,
    "STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED" = 16,
    "STRUCTURED_SNIPPETS_REPEATED_VALUES" = 17,
    "STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES" = 18,
    "STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT" = 19
}
/**
 * @name FeedItemStatusEnum.FeedItemStatus
 */
export declare enum FeedItemStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name FeedItemTargetDeviceEnum.FeedItemTargetDevice
 */
export declare enum FeedItemTargetDevice {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MOBILE" = 2
}
/**
 * @name FeedItemTargetStatusEnum.FeedItemTargetStatus
 */
export declare enum FeedItemTargetStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name FeedItemTargetTypeEnum.FeedItemTargetType
 */
export declare enum FeedItemTargetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN" = 2,
    "AD_GROUP" = 3,
    "CRITERION" = 4
}
/**
 * @name FeedItemValidationStatusEnum.FeedItemValidationStatus
 */
export declare enum FeedItemValidationStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "INVALID" = 3,
    "VALID" = 4
}
/**
 * @name FeedLinkStatusEnum.FeedLinkStatus
 */
export declare enum FeedLinkStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name FeedMappingCriterionTypeEnum.FeedMappingCriterionType
 */
export declare enum FeedMappingCriterionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LOCATION_EXTENSION_TARGETING" = 4,
    "DSA_PAGE_FEED" = 3
}
/**
 * @name FeedMappingStatusEnum.FeedMappingStatus
 */
export declare enum FeedMappingStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name FeedOriginEnum.FeedOrigin
 */
export declare enum FeedOrigin {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "USER" = 2,
    "GOOGLE" = 3
}
/**
 * @name FeedStatusEnum.FeedStatus
 */
export declare enum FeedStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name FlightPlaceholderFieldEnum.FlightPlaceholderField
 */
export declare enum FlightPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DESTINATION_ID" = 2,
    "ORIGIN_ID" = 3,
    "FLIGHT_DESCRIPTION" = 4,
    "ORIGIN_NAME" = 5,
    "DESTINATION_NAME" = 6,
    "FLIGHT_PRICE" = 7,
    "FORMATTED_PRICE" = 8,
    "FLIGHT_SALE_PRICE" = 9,
    "FORMATTED_SALE_PRICE" = 10,
    "IMAGE_URL" = 11,
    "FINAL_URLS" = 12,
    "FINAL_MOBILE_URLS" = 13,
    "TRACKING_URL" = 14,
    "ANDROID_APP_LINK" = 15,
    "SIMILAR_DESTINATION_IDS" = 16,
    "IOS_APP_LINK" = 17,
    "IOS_APP_STORE_ID" = 18
}
/**
 * @name FrequencyCapEventTypeEnum.FrequencyCapEventType
 */
export declare enum FrequencyCapEventType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IMPRESSION" = 2,
    "VIDEO_VIEW" = 3
}
/**
 * @name FrequencyCapLevelEnum.FrequencyCapLevel
 */
export declare enum FrequencyCapLevel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP_AD" = 2,
    "AD_GROUP" = 3,
    "CAMPAIGN" = 4
}
/**
 * @name FrequencyCapTimeUnitEnum.FrequencyCapTimeUnit
 */
export declare enum FrequencyCapTimeUnit {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DAY" = 2,
    "WEEK" = 3,
    "MONTH" = 4
}
/**
 * @name GenderTypeEnum.GenderType
 */
export declare enum GenderType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MALE" = 10,
    "FEMALE" = 11,
    "UNDETERMINED" = 20
}
/**
 * @name GeoTargetConstantStatusEnum.GeoTargetConstantStatus
 */
export declare enum GeoTargetConstantStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVAL_PLANNED" = 3
}
/**
 * @name GeoTargetingRestrictionEnum.GeoTargetingRestriction
 */
export declare enum GeoTargetingRestriction {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LOCATION_OF_PRESENCE" = 2
}
/**
 * @name GeoTargetingTypeEnum.GeoTargetingType
 */
export declare enum GeoTargetingType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AREA_OF_INTEREST" = 2,
    "LOCATION_OF_PRESENCE" = 3
}
/**
 * @name GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory
 */
export declare enum GoogleAdsFieldCategory {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RESOURCE" = 2,
    "ATTRIBUTE" = 3,
    "SEGMENT" = 5,
    "METRIC" = 6
}
/**
 * @name GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType
 */
export declare enum GoogleAdsFieldDataType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BOOLEAN" = 2,
    "DATE" = 3,
    "DOUBLE" = 4,
    "ENUM" = 5,
    "FLOAT" = 6,
    "INT32" = 7,
    "INT64" = 8,
    "MESSAGE" = 9,
    "RESOURCE_NAME" = 10,
    "STRING" = 11,
    "UINT64" = 12
}
/**
 * @name HotelDateSelectionTypeEnum.HotelDateSelectionType
 */
export declare enum HotelDateSelectionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DEFAULT_SELECTION" = 50,
    "USER_SELECTED" = 51
}
/**
 * @name HotelPlaceholderFieldEnum.HotelPlaceholderField
 */
export declare enum HotelPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PROPERTY_ID" = 2,
    "PROPERTY_NAME" = 3,
    "DESTINATION_NAME" = 4,
    "DESCRIPTION" = 5,
    "ADDRESS" = 6,
    "PRICE" = 7,
    "FORMATTED_PRICE" = 8,
    "SALE_PRICE" = 9,
    "FORMATTED_SALE_PRICE" = 10,
    "IMAGE_URL" = 11,
    "CATEGORY" = 12,
    "STAR_RATING" = 13,
    "CONTEXTUAL_KEYWORDS" = 14,
    "FINAL_URLS" = 15,
    "FINAL_MOBILE_URLS" = 16,
    "TRACKING_URL" = 17,
    "ANDROID_APP_LINK" = 18,
    "SIMILAR_PROPERTY_IDS" = 19,
    "IOS_APP_LINK" = 20,
    "IOS_APP_STORE_ID" = 21
}
/**
 * @name HotelPriceBucketEnum.HotelPriceBucket
 */
export declare enum HotelPriceBucket {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LOWEST_TIED" = 3,
    "NOT_LOWEST" = 4
}
/**
 * @name HotelRateTypeEnum.HotelRateType
 */
export declare enum HotelRateType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNAVAILABLE" = 2,
    "PUBLIC_RATE" = 3,
    "QUALIFIED_RATE" = 4,
    "PRIVATE_RATE" = 5
}
/**
 * @name IncomeRangeTypeEnum.IncomeRangeType
 */
export declare enum IncomeRangeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INCOME_RANGE_0_50" = 510001,
    "INCOME_RANGE_50_60" = 510002,
    "INCOME_RANGE_60_70" = 510003,
    "INCOME_RANGE_70_80" = 510004,
    "INCOME_RANGE_80_90" = 510005,
    "INCOME_RANGE_90_UP" = 510006,
    "INCOME_RANGE_UNDETERMINED" = 510000
}
/**
 * @name InteractionEventTypeEnum.InteractionEventType
 */
export declare enum InteractionEventType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CLICK" = 2,
    "ENGAGEMENT" = 3,
    "VIDEO_VIEW" = 4,
    "NONE" = 5
}
/**
 * @name InteractionTypeEnum.InteractionType
 */
export declare enum InteractionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CALLS" = 8000
}
/**
 * @name InvoiceTypeEnum.InvoiceType
 */
export declare enum InvoiceType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CREDIT_MEMO" = 2,
    "INVOICE" = 3
}
/**
 * @name JobPlaceholderFieldEnum.JobPlaceholderField
 */
export declare enum JobPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "JOB_ID" = 2,
    "LOCATION_ID" = 3,
    "TITLE" = 4,
    "SUBTITLE" = 5,
    "DESCRIPTION" = 6,
    "IMAGE_URL" = 7,
    "CATEGORY" = 8,
    "CONTEXTUAL_KEYWORDS" = 9,
    "ADDRESS" = 10,
    "SALARY" = 11,
    "FINAL_URLS" = 12,
    "FINAL_MOBILE_URLS" = 14,
    "TRACKING_URL" = 15,
    "ANDROID_APP_LINK" = 16,
    "SIMILAR_JOB_IDS" = 17,
    "IOS_APP_LINK" = 18,
    "IOS_APP_STORE_ID" = 19
}
/**
 * @name KeywordMatchTypeEnum.KeywordMatchType
 */
export declare enum KeywordMatchType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EXACT" = 2,
    "PHRASE" = 3,
    "BROAD" = 4
}
/**
 * @name KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel
 */
export declare enum KeywordPlanCompetitionLevel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LOW" = 2,
    "MEDIUM" = 3,
    "HIGH" = 4
}
/**
 * @name KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval
 */
export declare enum KeywordPlanForecastInterval {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NEXT_WEEK" = 3,
    "NEXT_MONTH" = 4,
    "NEXT_QUARTER" = 5
}
/**
 * @name KeywordPlanNetworkEnum.KeywordPlanNetwork
 */
export declare enum KeywordPlanNetwork {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "GOOGLE_SEARCH" = 2,
    "GOOGLE_SEARCH_AND_PARTNERS" = 3
}
/**
 * @name LabelStatusEnum.LabelStatus
 */
export declare enum LabelStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore
 */
export declare enum LegacyAppInstallAdAppStore {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPLE_APP_STORE" = 2,
    "GOOGLE_PLAY" = 3,
    "WINDOWS_STORE" = 4,
    "WINDOWS_PHONE_STORE" = 5,
    "CN_APP_STORE" = 6
}
/**
 * @name LinkedAccountTypeEnum.LinkedAccountType
 */
export declare enum LinkedAccountType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "THIRD_PARTY_APP_ANALYTICS" = 2
}
/**
 * @name ListingGroupTypeEnum.ListingGroupType
 */
export declare enum ListingGroupType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SUBDIVISION" = 2,
    "UNIT" = 3
}
/**
 * @name LocalPlaceholderFieldEnum.LocalPlaceholderField
 */
export declare enum LocalPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DEAL_ID" = 2,
    "DEAL_NAME" = 3,
    "SUBTITLE" = 4,
    "DESCRIPTION" = 5,
    "PRICE" = 6,
    "FORMATTED_PRICE" = 7,
    "SALE_PRICE" = 8,
    "FORMATTED_SALE_PRICE" = 9,
    "IMAGE_URL" = 10,
    "ADDRESS" = 11,
    "CATEGORY" = 12,
    "CONTEXTUAL_KEYWORDS" = 13,
    "FINAL_URLS" = 14,
    "FINAL_MOBILE_URLS" = 15,
    "TRACKING_URL" = 16,
    "ANDROID_APP_LINK" = 17,
    "SIMILAR_DEAL_IDS" = 18,
    "IOS_APP_LINK" = 19,
    "IOS_APP_STORE_ID" = 20
}
/**
 * @name LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionField
 */
export declare enum LocationExtensionTargetingCriterionField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ADDRESS_LINE_1" = 2,
    "ADDRESS_LINE_2" = 3,
    "CITY" = 4,
    "PROVINCE" = 5,
    "POSTAL_CODE" = 6,
    "COUNTRY_CODE" = 7
}
/**
 * @name LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits
 */
export declare enum LocationGroupRadiusUnits {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "METERS" = 2,
    "MILES" = 3
}
/**
 * @name LocationPlaceholderFieldEnum.LocationPlaceholderField
 */
export declare enum LocationPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BUSINESS_NAME" = 2,
    "ADDRESS_LINE_1" = 3,
    "ADDRESS_LINE_2" = 4,
    "CITY" = 5,
    "PROVINCE" = 6,
    "POSTAL_CODE" = 7,
    "COUNTRY_CODE" = 8,
    "PHONE_NUMBER" = 9
}
/**
 * @name LocationSourceTypeEnum.LocationSourceType
 */
export declare enum LocationSourceType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "GOOGLE_MY_BUSINESS" = 2,
    "AFFILIATE" = 3
}
/**
 * @name ManagerLinkStatusEnum.ManagerLinkStatus
 */
export declare enum ManagerLinkStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ACTIVE" = 2,
    "INACTIVE" = 3,
    "PENDING" = 4,
    "REFUSED" = 5,
    "CANCELED" = 6
}
/**
 * @name MatchingFunctionContextTypeEnum.MatchingFunctionContextType
 */
export declare enum MatchingFunctionContextType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FEED_ITEM_ID" = 2,
    "DEVICE_NAME" = 3
}
/**
 * @name MatchingFunctionOperatorEnum.MatchingFunctionOperator
 */
export declare enum MatchingFunctionOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IN" = 2,
    "IDENTITY" = 3,
    "EQUALS" = 4,
    "AND" = 5,
    "CONTAINS_ANY" = 6
}
/**
 * @name MediaTypeEnum.MediaType
 */
export declare enum MediaType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IMAGE" = 2,
    "ICON" = 3,
    "MEDIA_BUNDLE" = 4,
    "AUDIO" = 5,
    "VIDEO" = 6,
    "DYNAMIC_IMAGE" = 7
}
/**
 * @name MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus
 */
export declare enum MerchantCenterLinkStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "PENDING" = 3
}
/**
 * @name MessagePlaceholderFieldEnum.MessagePlaceholderField
 */
export declare enum MessagePlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BUSINESS_NAME" = 2,
    "COUNTRY_CODE" = 3,
    "PHONE_NUMBER" = 4,
    "MESSAGE_EXTENSION_TEXT" = 5,
    "MESSAGE_TEXT" = 6
}
/**
 * @name MimeTypeEnum.MimeType
 */
export declare enum MimeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "IMAGE_JPEG" = 2,
    "IMAGE_GIF" = 3,
    "IMAGE_PNG" = 4,
    "FLASH" = 5,
    "TEXT_HTML" = 6,
    "PDF" = 7,
    "MSWORD" = 8,
    "MSEXCEL" = 9,
    "RTF" = 10,
    "AUDIO_WAV" = 11,
    "AUDIO_MP3" = 12,
    "HTML5_AD_ZIP" = 13
}
/**
 * @name MinuteOfHourEnum.MinuteOfHour
 */
export declare enum MinuteOfHour {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ZERO" = 2,
    "FIFTEEN" = 3,
    "THIRTY" = 4,
    "FORTY_FIVE" = 5
}
/**
 * @name MobileAppVendorEnum.MobileAppVendor
 */
export declare enum MobileAppVendor {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "APPLE_APP_STORE" = 2,
    "GOOGLE_APP_STORE" = 3
}
/**
 * @name MobileDeviceTypeEnum.MobileDeviceType
 */
export declare enum MobileDeviceType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MOBILE" = 2,
    "TABLET" = 3
}
/**
 * @name MonthOfYearEnum.MonthOfYear
 */
export declare enum MonthOfYear {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "JANUARY" = 2,
    "FEBRUARY" = 3,
    "MARCH" = 4,
    "APRIL" = 5,
    "MAY" = 6,
    "JUNE" = 7,
    "JULY" = 8,
    "AUGUST" = 9,
    "SEPTEMBER" = 10,
    "OCTOBER" = 11,
    "NOVEMBER" = 12,
    "DECEMBER" = 13
}
/**
 * @name NegativeGeoTargetTypeEnum.NegativeGeoTargetType
 */
export declare enum NegativeGeoTargetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PRESENCE_OR_INTEREST" = 4,
    "PRESENCE" = 5
}
/**
 * @name OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReason
 */
export declare enum OfflineUserDataJobFailureReason {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INSUFFICIENT_MATCHED_TRANSACTIONS" = 2,
    "INSUFFICIENT_TRANSACTIONS" = 3
}
/**
 * @name OfflineUserDataJobStatusEnum.OfflineUserDataJobStatus
 */
export declare enum OfflineUserDataJobStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PENDING" = 2,
    "RUNNING" = 3,
    "SUCCESS" = 4,
    "FAILED" = 5
}
/**
 * @name OfflineUserDataJobTypeEnum.OfflineUserDataJobType
 */
export declare enum OfflineUserDataJobType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STORE_SALES_UPLOAD_FIRST_PARTY" = 2,
    "STORE_SALES_UPLOAD_THIRD_PARTY" = 3,
    "CUSTOMER_MATCH_USER_LIST" = 4
}
/**
 * @name OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType
 */
export declare enum OperatingSystemVersionOperatorType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EQUALS_TO" = 2,
    "GREATER_THAN_EQUALS_TO" = 4
}
/**
 * @name OptimizationGoalTypeEnum.OptimizationGoalType
 */
export declare enum OptimizationGoalType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CALL_CLICKS" = 2,
    "DRIVING_DIRECTIONS" = 3
}
/**
 * @name ParentalStatusTypeEnum.ParentalStatusType
 */
export declare enum ParentalStatusType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PARENT" = 300,
    "NOT_A_PARENT" = 301,
    "UNDETERMINED" = 302
}
/**
 * @name PaymentModeEnum.PaymentMode
 */
export declare enum PaymentMode {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CLICKS" = 4,
    "CONVERSION_VALUE" = 5,
    "CONVERSIONS" = 6,
    "GUEST_STAY" = 7
}
/**
 * @name PlaceholderTypeEnum.PlaceholderType
 */
export declare enum PlaceholderType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SITELINK" = 2,
    "CALL" = 3,
    "APP" = 4,
    "LOCATION" = 5,
    "AFFILIATE_LOCATION" = 6,
    "CALLOUT" = 7,
    "STRUCTURED_SNIPPET" = 8,
    "MESSAGE" = 9,
    "PRICE" = 10,
    "PROMOTION" = 11,
    "AD_CUSTOMIZER" = 12,
    "DYNAMIC_EDUCATION" = 13,
    "DYNAMIC_FLIGHT" = 14,
    "DYNAMIC_CUSTOM" = 15,
    "DYNAMIC_HOTEL" = 16,
    "DYNAMIC_REAL_ESTATE" = 17,
    "DYNAMIC_TRAVEL" = 18,
    "DYNAMIC_LOCAL" = 19,
    "DYNAMIC_JOB" = 20
}
/**
 * @name PlacementTypeEnum.PlacementType
 */
export declare enum PlacementType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "WEBSITE" = 2,
    "MOBILE_APP_CATEGORY" = 3,
    "MOBILE_APPLICATION" = 4,
    "YOUTUBE_VIDEO" = 5,
    "YOUTUBE_CHANNEL" = 6
}
/**
 * @name PolicyApprovalStatusEnum.PolicyApprovalStatus
 */
export declare enum PolicyApprovalStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DISAPPROVED" = 2,
    "APPROVED_LIMITED" = 3,
    "APPROVED" = 4,
    "AREA_OF_INTEREST_ONLY" = 5
}
/**
 * @name PolicyReviewStatusEnum.PolicyReviewStatus
 */
export declare enum PolicyReviewStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REVIEW_IN_PROGRESS" = 2,
    "REVIEWED" = 3,
    "UNDER_APPEAL" = 4,
    "ELIGIBLE_MAY_SERVE" = 5
}
/**
 * @name PolicyTopicEntryTypeEnum.PolicyTopicEntryType
 */
export declare enum PolicyTopicEntryType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PROHIBITED" = 2,
    "LIMITED" = 4,
    "FULLY_LIMITED" = 8,
    "DESCRIPTIVE" = 5,
    "BROADENING" = 6,
    "AREA_OF_INTEREST_ONLY" = 7
}
/**
 * @name PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType
 */
export declare enum PolicyTopicEvidenceDestinationMismatchUrlType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DISPLAY_URL" = 2,
    "FINAL_URL" = 3,
    "FINAL_MOBILE_URL" = 4,
    "TRACKING_URL" = 5,
    "MOBILE_TRACKING_URL" = 6
}
/**
 * @name PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.PolicyTopicEvidenceDestinationNotWorkingDevice
 */
export declare enum PolicyTopicEvidenceDestinationNotWorkingDevice {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DESKTOP" = 2,
    "ANDROID" = 3,
    "IOS" = 4
}
/**
 * @name PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
 */
export declare enum PolicyTopicEvidenceDestinationNotWorkingDnsErrorType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HOSTNAME_NOT_FOUND" = 2,
    "GOOGLE_CRAWLER_DNS_ISSUE" = 3
}
/**
 * @name PositiveGeoTargetTypeEnum.PositiveGeoTargetType
 */
export declare enum PositiveGeoTargetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PRESENCE_OR_INTEREST" = 5,
    "SEARCH_INTEREST" = 6,
    "PRESENCE" = 7
}
/**
 * @name PreferredContentTypeEnum.PreferredContentType
 */
export declare enum PreferredContentType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "YOUTUBE_TOP_CONTENT" = 400
}
/**
 * @name PriceExtensionPriceQualifierEnum.PriceExtensionPriceQualifier
 */
export declare enum PriceExtensionPriceQualifier {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FROM" = 2,
    "UP_TO" = 3,
    "AVERAGE" = 4
}
/**
 * @name PriceExtensionPriceUnitEnum.PriceExtensionPriceUnit
 */
export declare enum PriceExtensionPriceUnit {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PER_HOUR" = 2,
    "PER_DAY" = 3,
    "PER_WEEK" = 4,
    "PER_MONTH" = 5,
    "PER_YEAR" = 6,
    "PER_NIGHT" = 7
}
/**
 * @name PriceExtensionTypeEnum.PriceExtensionType
 */
export declare enum PriceExtensionType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BRANDS" = 2,
    "EVENTS" = 3,
    "LOCATIONS" = 4,
    "NEIGHBORHOODS" = 5,
    "PRODUCT_CATEGORIES" = 6,
    "PRODUCT_TIERS" = 7,
    "SERVICES" = 8,
    "SERVICE_CATEGORIES" = 9,
    "SERVICE_TIERS" = 10
}
/**
 * @name PricePlaceholderFieldEnum.PricePlaceholderField
 */
export declare enum PricePlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TYPE" = 2,
    "PRICE_QUALIFIER" = 3,
    "TRACKING_TEMPLATE" = 4,
    "LANGUAGE" = 5,
    "FINAL_URL_SUFFIX" = 6,
    "ITEM_1_HEADER" = 100,
    "ITEM_1_DESCRIPTION" = 101,
    "ITEM_1_PRICE" = 102,
    "ITEM_1_UNIT" = 103,
    "ITEM_1_FINAL_URLS" = 104,
    "ITEM_1_FINAL_MOBILE_URLS" = 105,
    "ITEM_2_HEADER" = 200,
    "ITEM_2_DESCRIPTION" = 201,
    "ITEM_2_PRICE" = 202,
    "ITEM_2_UNIT" = 203,
    "ITEM_2_FINAL_URLS" = 204,
    "ITEM_2_FINAL_MOBILE_URLS" = 205,
    "ITEM_3_HEADER" = 300,
    "ITEM_3_DESCRIPTION" = 301,
    "ITEM_3_PRICE" = 302,
    "ITEM_3_UNIT" = 303,
    "ITEM_3_FINAL_URLS" = 304,
    "ITEM_3_FINAL_MOBILE_URLS" = 305,
    "ITEM_4_HEADER" = 400,
    "ITEM_4_DESCRIPTION" = 401,
    "ITEM_4_PRICE" = 402,
    "ITEM_4_UNIT" = 403,
    "ITEM_4_FINAL_URLS" = 404,
    "ITEM_4_FINAL_MOBILE_URLS" = 405,
    "ITEM_5_HEADER" = 500,
    "ITEM_5_DESCRIPTION" = 501,
    "ITEM_5_PRICE" = 502,
    "ITEM_5_UNIT" = 503,
    "ITEM_5_FINAL_URLS" = 504,
    "ITEM_5_FINAL_MOBILE_URLS" = 505,
    "ITEM_6_HEADER" = 600,
    "ITEM_6_DESCRIPTION" = 601,
    "ITEM_6_PRICE" = 602,
    "ITEM_6_UNIT" = 603,
    "ITEM_6_FINAL_URLS" = 604,
    "ITEM_6_FINAL_MOBILE_URLS" = 605,
    "ITEM_7_HEADER" = 700,
    "ITEM_7_DESCRIPTION" = 701,
    "ITEM_7_PRICE" = 702,
    "ITEM_7_UNIT" = 703,
    "ITEM_7_FINAL_URLS" = 704,
    "ITEM_7_FINAL_MOBILE_URLS" = 705,
    "ITEM_8_HEADER" = 800,
    "ITEM_8_DESCRIPTION" = 801,
    "ITEM_8_PRICE" = 802,
    "ITEM_8_UNIT" = 803,
    "ITEM_8_FINAL_URLS" = 804,
    "ITEM_8_FINAL_MOBILE_URLS" = 805
}
/**
 * @name ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel
 */
export declare enum ProductBiddingCategoryLevel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LEVEL1" = 2,
    "LEVEL2" = 3,
    "LEVEL3" = 4,
    "LEVEL4" = 5,
    "LEVEL5" = 6
}
/**
 * @name ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatus
 */
export declare enum ProductBiddingCategoryStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ACTIVE" = 2,
    "OBSOLETE" = 3
}
/**
 * @name ProductChannelEnum.ProductChannel
 */
export declare enum ProductChannel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ONLINE" = 2,
    "LOCAL" = 3
}
/**
 * @name ProductChannelExclusivityEnum.ProductChannelExclusivity
 */
export declare enum ProductChannelExclusivity {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SINGLE_CHANNEL" = 2,
    "MULTI_CHANNEL" = 3
}
/**
 * @name ProductConditionEnum.ProductCondition
 */
export declare enum ProductCondition {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NEW" = 3,
    "REFURBISHED" = 4,
    "USED" = 5
}
/**
 * @name ProductCustomAttributeIndexEnum.ProductCustomAttributeIndex
 */
export declare enum ProductCustomAttributeIndex {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INDEX0" = 7,
    "INDEX1" = 8,
    "INDEX2" = 9,
    "INDEX3" = 10,
    "INDEX4" = 11
}
/**
 * @name ProductTypeLevelEnum.ProductTypeLevel
 */
export declare enum ProductTypeLevel {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LEVEL1" = 7,
    "LEVEL2" = 8,
    "LEVEL3" = 9,
    "LEVEL4" = 10,
    "LEVEL5" = 11
}
/**
 * @name PromotionExtensionDiscountModifierEnum.PromotionExtensionDiscountModifier
 */
export declare enum PromotionExtensionDiscountModifier {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UP_TO" = 2
}
/**
 * @name PromotionExtensionOccasionEnum.PromotionExtensionOccasion
 */
export declare enum PromotionExtensionOccasion {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NEW_YEARS" = 2,
    "CHINESE_NEW_YEAR" = 3,
    "VALENTINES_DAY" = 4,
    "EASTER" = 5,
    "MOTHERS_DAY" = 6,
    "FATHERS_DAY" = 7,
    "LABOR_DAY" = 8,
    "BACK_TO_SCHOOL" = 9,
    "HALLOWEEN" = 10,
    "BLACK_FRIDAY" = 11,
    "CYBER_MONDAY" = 12,
    "CHRISTMAS" = 13,
    "BOXING_DAY" = 14,
    "INDEPENDENCE_DAY" = 15,
    "NATIONAL_DAY" = 16,
    "END_OF_SEASON" = 17,
    "WINTER_SALE" = 18,
    "SUMMER_SALE" = 19,
    "FALL_SALE" = 20,
    "SPRING_SALE" = 21,
    "RAMADAN" = 22,
    "EID_AL_FITR" = 23,
    "EID_AL_ADHA" = 24,
    "SINGLES_DAY" = 25,
    "WOMENS_DAY" = 26,
    "HOLI" = 27,
    "PARENTS_DAY" = 28,
    "ST_NICHOLAS_DAY" = 29,
    "CARNIVAL" = 30,
    "EPIPHANY" = 31,
    "ROSH_HASHANAH" = 32,
    "PASSOVER" = 33,
    "HANUKKAH" = 34,
    "DIWALI" = 35,
    "NAVRATRI" = 36,
    "SONGKRAN" = 37,
    "YEAR_END_GIFT" = 38
}
/**
 * @name PromotionPlaceholderFieldEnum.PromotionPlaceholderField
 */
export declare enum PromotionPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PROMOTION_TARGET" = 2,
    "DISCOUNT_MODIFIER" = 3,
    "PERCENT_OFF" = 4,
    "MONEY_AMOUNT_OFF" = 5,
    "PROMOTION_CODE" = 6,
    "ORDERS_OVER_AMOUNT" = 7,
    "PROMOTION_START" = 8,
    "PROMOTION_END" = 9,
    "OCCASION" = 10,
    "FINAL_URLS" = 11,
    "FINAL_MOBILE_URLS" = 12,
    "TRACKING_URL" = 13,
    "LANGUAGE" = 14,
    "FINAL_URL_SUFFIX" = 15
}
/**
 * @name ProximityRadiusUnitsEnum.ProximityRadiusUnits
 */
export declare enum ProximityRadiusUnits {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MILES" = 2,
    "KILOMETERS" = 3
}
/**
 * @name QualityScoreBucketEnum.QualityScoreBucket
 */
export declare enum QualityScoreBucket {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BELOW_AVERAGE" = 2,
    "AVERAGE" = 3,
    "ABOVE_AVERAGE" = 4
}
/**
 * @name ReachPlanAdLengthEnum.ReachPlanAdLength
 */
export declare enum ReachPlanAdLength {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SIX_SECONDS" = 2,
    "FIFTEEN_OR_TWENTY_SECONDS" = 3,
    "TWENTY_SECONDS_OR_MORE" = 4
}
/**
 * @name ReachPlanAgeRangeEnum.ReachPlanAgeRange
 */
export declare enum ReachPlanAgeRange {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AGE_RANGE_18_24" = 503001,
    "AGE_RANGE_18_34" = 2,
    "AGE_RANGE_18_44" = 3,
    "AGE_RANGE_18_49" = 4,
    "AGE_RANGE_18_54" = 5,
    "AGE_RANGE_18_64" = 6,
    "AGE_RANGE_18_65_UP" = 7,
    "AGE_RANGE_21_34" = 8,
    "AGE_RANGE_25_34" = 503002,
    "AGE_RANGE_25_44" = 9,
    "AGE_RANGE_25_49" = 10,
    "AGE_RANGE_25_54" = 11,
    "AGE_RANGE_25_64" = 12,
    "AGE_RANGE_25_65_UP" = 13,
    "AGE_RANGE_35_44" = 503003,
    "AGE_RANGE_35_49" = 14,
    "AGE_RANGE_35_54" = 15,
    "AGE_RANGE_35_64" = 16,
    "AGE_RANGE_35_65_UP" = 17,
    "AGE_RANGE_45_54" = 503004,
    "AGE_RANGE_45_64" = 18,
    "AGE_RANGE_45_65_UP" = 19,
    "AGE_RANGE_50_65_UP" = 20,
    "AGE_RANGE_55_64" = 503005,
    "AGE_RANGE_55_65_UP" = 21,
    "AGE_RANGE_65_UP" = 503006
}
/**
 * @name ReachPlanNetworkEnum.ReachPlanNetwork
 */
export declare enum ReachPlanNetwork {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "YOUTUBE" = 2,
    "GOOGLE_VIDEO_PARTNERS" = 3,
    "YOUTUBE_AND_GOOGLE_VIDEO_PARTNERS" = 4
}
/**
 * @name RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField
 */
export declare enum RealEstatePlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LISTING_ID" = 2,
    "LISTING_NAME" = 3,
    "CITY_NAME" = 4,
    "DESCRIPTION" = 5,
    "ADDRESS" = 6,
    "PRICE" = 7,
    "FORMATTED_PRICE" = 8,
    "IMAGE_URL" = 9,
    "PROPERTY_TYPE" = 10,
    "LISTING_TYPE" = 11,
    "CONTEXTUAL_KEYWORDS" = 12,
    "FINAL_URLS" = 13,
    "FINAL_MOBILE_URLS" = 14,
    "TRACKING_URL" = 15,
    "ANDROID_APP_LINK" = 16,
    "SIMILAR_LISTING_IDS" = 17,
    "IOS_APP_LINK" = 18,
    "IOS_APP_STORE_ID" = 19
}
/**
 * @name RecommendationTypeEnum.RecommendationType
 */
export declare enum RecommendationType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN_BUDGET" = 2,
    "KEYWORD" = 3,
    "TEXT_AD" = 4,
    "TARGET_CPA_OPT_IN" = 5,
    "MAXIMIZE_CONVERSIONS_OPT_IN" = 6,
    "ENHANCED_CPC_OPT_IN" = 7,
    "SEARCH_PARTNERS_OPT_IN" = 8,
    "MAXIMIZE_CLICKS_OPT_IN" = 9,
    "OPTIMIZE_AD_ROTATION" = 10,
    "CALLOUT_EXTENSION" = 11,
    "SITELINK_EXTENSION" = 12,
    "CALL_EXTENSION" = 13,
    "KEYWORD_MATCH_TYPE" = 14,
    "MOVE_UNUSED_BUDGET" = 15
}
/**
 * @name SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType
 */
export declare enum SearchEngineResultsPageType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ADS_ONLY" = 2,
    "ORGANIC_ONLY" = 3,
    "ADS_AND_ORGANIC" = 4
}
/**
 * @name SearchTermMatchTypeEnum.SearchTermMatchType
 */
export declare enum SearchTermMatchType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BROAD" = 2,
    "EXACT" = 3,
    "PHRASE" = 4,
    "NEAR_EXACT" = 5,
    "NEAR_PHRASE" = 6
}
/**
 * @name SearchTermTargetingStatusEnum.SearchTermTargetingStatus
 */
export declare enum SearchTermTargetingStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ADDED" = 2,
    "EXCLUDED" = 3,
    "ADDED_EXCLUDED" = 4,
    "NONE" = 5
}
/**
 * @name ServedAssetFieldTypeEnum.ServedAssetFieldType
 */
export declare enum ServedAssetFieldType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HEADLINE_1" = 2,
    "HEADLINE_2" = 3,
    "HEADLINE_3" = 4,
    "DESCRIPTION_1" = 5,
    "DESCRIPTION_2" = 6
}
/**
 * @name SharedSetStatusEnum.SharedSetStatus
 */
export declare enum SharedSetStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "REMOVED" = 3
}
/**
 * @name SharedSetTypeEnum.SharedSetType
 */
export declare enum SharedSetType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NEGATIVE_KEYWORDS" = 2,
    "NEGATIVE_PLACEMENTS" = 3
}
/**
 * @name SimulationModificationMethodEnum.SimulationModificationMethod
 */
export declare enum SimulationModificationMethod {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNIFORM" = 2,
    "DEFAULT" = 3
}
/**
 * @name SimulationTypeEnum.SimulationType
 */
export declare enum SimulationType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CPC_BID" = 2,
    "CPV_BID" = 3,
    "TARGET_CPA" = 4,
    "BID_MODIFIER" = 5,
    "TARGET_ROAS" = 6
}
/**
 * @name SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField
 */
export declare enum SitelinkPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TEXT" = 2,
    "LINE_1" = 3,
    "LINE_2" = 4,
    "FINAL_URLS" = 5,
    "FINAL_MOBILE_URLS" = 6,
    "TRACKING_URL" = 7,
    "FINAL_URL_SUFFIX" = 8
}
/**
 * @name SlotEnum.Slot
 */
export declare enum Slot {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SEARCH_SIDE" = 2,
    "SEARCH_TOP" = 3,
    "SEARCH_OTHER" = 4,
    "CONTENT" = 5,
    "SEARCH_PARTNER_TOP" = 6,
    "SEARCH_PARTNER_OTHER" = 7,
    "MIXED" = 8
}
/**
 * @name SpendingLimitTypeEnum.SpendingLimitType
 */
export declare enum SpendingLimitType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INFINITE" = 2
}
/**
 * @name StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField
 */
export declare enum StructuredSnippetPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HEADER" = 2,
    "SNIPPETS" = 3
}
/**
 * @name SummaryRowSettingEnum.SummaryRowSetting
 */
export declare enum SummaryRowSetting {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NO_SUMMARY_ROW" = 2,
    "SUMMARY_ROW_WITH_RESULTS" = 3,
    "SUMMARY_ROW_ONLY" = 4
}
/**
 * @name SystemManagedResourceSourceEnum.SystemManagedResourceSource
 */
export declare enum SystemManagedResourceSource {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_VARIATIONS" = 2
}
/**
 * @name TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal
 */
export declare enum TargetCpaOptInRecommendationGoal {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SAME_COST" = 2,
    "SAME_CONVERSIONS" = 3,
    "SAME_CPA" = 4,
    "CLOSEST_CPA" = 5
}
/**
 * @name TargetImpressionShareLocationEnum.TargetImpressionShareLocation
 */
export declare enum TargetImpressionShareLocation {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ANYWHERE_ON_PAGE" = 2,
    "TOP_OF_PAGE" = 3,
    "ABSOLUTE_TOP_OF_PAGE" = 4
}
/**
 * @name TargetingDimensionEnum.TargetingDimension
 */
export declare enum TargetingDimension {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "KEYWORD" = 2,
    "AUDIENCE" = 3,
    "TOPIC" = 4,
    "GENDER" = 5,
    "AGE_RANGE" = 6,
    "PLACEMENT" = 7,
    "PARENTAL_STATUS" = 8,
    "INCOME_RANGE" = 9
}
/**
 * @name TimeTypeEnum.TimeType
 */
export declare enum TimeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NOW" = 2,
    "FOREVER" = 3
}
/**
 * @name TrackingCodePageFormatEnum.TrackingCodePageFormat
 */
export declare enum TrackingCodePageFormat {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "HTML" = 2,
    "AMP" = 3
}
/**
 * @name TrackingCodeTypeEnum.TrackingCodeType
 */
export declare enum TrackingCodeType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "WEBPAGE" = 2,
    "WEBPAGE_ONCLICK" = 3,
    "CLICK_TO_CALL" = 4,
    "WEBSITE_CALL" = 5
}
/**
 * @name TravelPlaceholderFieldEnum.TravelPlaceholderField
 */
export declare enum TravelPlaceholderField {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DESTINATION_ID" = 2,
    "ORIGIN_ID" = 3,
    "TITLE" = 4,
    "DESTINATION_NAME" = 5,
    "ORIGIN_NAME" = 6,
    "PRICE" = 7,
    "FORMATTED_PRICE" = 8,
    "SALE_PRICE" = 9,
    "FORMATTED_SALE_PRICE" = 10,
    "IMAGE_URL" = 11,
    "CATEGORY" = 12,
    "CONTEXTUAL_KEYWORDS" = 13,
    "DESTINATION_ADDRESS" = 14,
    "FINAL_URL" = 15,
    "FINAL_MOBILE_URLS" = 16,
    "TRACKING_URL" = 17,
    "ANDROID_APP_LINK" = 18,
    "SIMILAR_DESTINATION_IDS" = 19,
    "IOS_APP_LINK" = 20,
    "IOS_APP_STORE_ID" = 21
}
/**
 * @name UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType
 */
export declare enum UserInterestTaxonomyType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AFFINITY" = 2,
    "IN_MARKET" = 3,
    "MOBILE_APP_INSTALL_USER" = 4,
    "VERTICAL_GEO" = 5,
    "NEW_SMART_PHONE_USER" = 6
}
/**
 * @name UserListAccessStatusEnum.UserListAccessStatus
 */
export declare enum UserListAccessStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENABLED" = 2,
    "DISABLED" = 3
}
/**
 * @name UserListClosingReasonEnum.UserListClosingReason
 */
export declare enum UserListClosingReason {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNUSED" = 2
}
/**
 * @name UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator
 */
export declare enum UserListCombinedRuleOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AND" = 2,
    "AND_NOT" = 3
}
/**
 * @name UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType
 */
export declare enum UserListCrmDataSourceType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FIRST_PARTY" = 2,
    "THIRD_PARTY_CREDIT_BUREAU" = 3,
    "THIRD_PARTY_VOTER_FILE" = 4
}
/**
 * @name UserListDateRuleItemOperatorEnum.UserListDateRuleItemOperator
 */
export declare enum UserListDateRuleItemOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EQUALS" = 2,
    "NOT_EQUALS" = 3,
    "BEFORE" = 4,
    "AFTER" = 5
}
/**
 * @name UserListLogicalRuleOperatorEnum.UserListLogicalRuleOperator
 */
export declare enum UserListLogicalRuleOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ALL" = 2,
    "ANY" = 3,
    "NONE" = 4
}
/**
 * @name UserListMembershipStatusEnum.UserListMembershipStatus
 */
export declare enum UserListMembershipStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPEN" = 2,
    "CLOSED" = 3
}
/**
 * @name UserListNumberRuleItemOperatorEnum.UserListNumberRuleItemOperator
 */
export declare enum UserListNumberRuleItemOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "GREATER_THAN" = 2,
    "GREATER_THAN_OR_EQUAL" = 3,
    "EQUALS" = 4,
    "NOT_EQUALS" = 5,
    "LESS_THAN" = 6,
    "LESS_THAN_OR_EQUAL" = 7
}
/**
 * @name UserListPrepopulationStatusEnum.UserListPrepopulationStatus
 */
export declare enum UserListPrepopulationStatus {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REQUESTED" = 2,
    "FINISHED" = 3,
    "FAILED" = 4
}
/**
 * @name UserListRuleTypeEnum.UserListRuleType
 */
export declare enum UserListRuleType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AND_OF_ORS" = 2,
    "OR_OF_ANDS" = 3
}
/**
 * @name UserListSizeRangeEnum.UserListSizeRange
 */
export declare enum UserListSizeRange {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LESS_THAN_FIVE_HUNDRED" = 2,
    "LESS_THAN_ONE_THOUSAND" = 3,
    "ONE_THOUSAND_TO_TEN_THOUSAND" = 4,
    "TEN_THOUSAND_TO_FIFTY_THOUSAND" = 5,
    "FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND" = 6,
    "ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND" = 7,
    "THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND" = 8,
    "FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION" = 9,
    "ONE_MILLION_TO_TWO_MILLION" = 10,
    "TWO_MILLION_TO_THREE_MILLION" = 11,
    "THREE_MILLION_TO_FIVE_MILLION" = 12,
    "FIVE_MILLION_TO_TEN_MILLION" = 13,
    "TEN_MILLION_TO_TWENTY_MILLION" = 14,
    "TWENTY_MILLION_TO_THIRTY_MILLION" = 15,
    "THIRTY_MILLION_TO_FIFTY_MILLION" = 16,
    "OVER_FIFTY_MILLION" = 17
}
/**
 * @name UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator
 */
export declare enum UserListStringRuleItemOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONTAINS" = 2,
    "EQUALS" = 3,
    "STARTS_WITH" = 4,
    "ENDS_WITH" = 5,
    "NOT_EQUALS" = 6,
    "NOT_CONTAINS" = 7,
    "NOT_STARTS_WITH" = 8,
    "NOT_ENDS_WITH" = 9
}
/**
 * @name UserListTypeEnum.UserListType
 */
export declare enum UserListType {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REMARKETING" = 2,
    "LOGICAL" = 3,
    "EXTERNAL_REMARKETING" = 4,
    "RULE_BASED" = 5,
    "SIMILAR" = 6,
    "CRM_BASED" = 7
}
/**
 * @name VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode
 */
export declare enum VanityPharmaDisplayUrlMode {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MANUFACTURER_WEBSITE_URL" = 2,
    "WEBSITE_DESCRIPTION" = 3
}
/**
 * @name VanityPharmaTextEnum.VanityPharmaText
 */
export declare enum VanityPharmaText {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PRESCRIPTION_TREATMENT_WEBSITE_EN" = 2,
    "PRESCRIPTION_TREATMENT_WEBSITE_ES" = 3,
    "PRESCRIPTION_DEVICE_WEBSITE_EN" = 4,
    "PRESCRIPTION_DEVICE_WEBSITE_ES" = 5,
    "MEDICAL_DEVICE_WEBSITE_EN" = 6,
    "MEDICAL_DEVICE_WEBSITE_ES" = 7,
    "PREVENTATIVE_TREATMENT_WEBSITE_EN" = 8,
    "PREVENTATIVE_TREATMENT_WEBSITE_ES" = 9,
    "PRESCRIPTION_CONTRACEPTION_WEBSITE_EN" = 10,
    "PRESCRIPTION_CONTRACEPTION_WEBSITE_ES" = 11,
    "PRESCRIPTION_VACCINE_WEBSITE_EN" = 12,
    "PRESCRIPTION_VACCINE_WEBSITE_ES" = 13
}
/**
 * @name WebpageConditionOperandEnum.WebpageConditionOperand
 */
export declare enum WebpageConditionOperand {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "URL" = 2,
    "CATEGORY" = 3,
    "PAGE_TITLE" = 4,
    "PAGE_CONTENT" = 5,
    "CUSTOM_LABEL" = 6
}
/**
 * @name WebpageConditionOperatorEnum.WebpageConditionOperator
 */
export declare enum WebpageConditionOperator {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EQUALS" = 2,
    "CONTAINS" = 3
}
/**
 * @name AccessInvitationErrorEnum.AccessInvitationError
 */
export declare enum AccessInvitationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_EMAIL_ADDRESS" = 2,
    "EMAIL_ADDRESS_ALREADY_HAS_ACCESS" = 3
}
/**
 * @name AccountBudgetProposalErrorEnum.AccountBudgetProposalError
 */
export declare enum AccountBudgetProposalError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FIELD_MASK_NOT_ALLOWED" = 2,
    "IMMUTABLE_FIELD" = 3,
    "REQUIRED_FIELD_MISSING" = 4,
    "CANNOT_CANCEL_APPROVED_PROPOSAL" = 5,
    "CANNOT_REMOVE_UNAPPROVED_BUDGET" = 6,
    "CANNOT_REMOVE_RUNNING_BUDGET" = 7,
    "CANNOT_END_UNAPPROVED_BUDGET" = 8,
    "CANNOT_END_INACTIVE_BUDGET" = 9,
    "BUDGET_NAME_REQUIRED" = 10,
    "CANNOT_UPDATE_OLD_BUDGET" = 11,
    "CANNOT_END_IN_PAST" = 12,
    "CANNOT_EXTEND_END_TIME" = 13,
    "PURCHASE_ORDER_NUMBER_REQUIRED" = 14,
    "PENDING_UPDATE_PROPOSAL_EXISTS" = 15,
    "MULTIPLE_BUDGETS_NOT_ALLOWED_FOR_UNAPPROVED_BILLING_SETUP" = 16,
    "CANNOT_UPDATE_START_TIME_FOR_STARTED_BUDGET" = 17,
    "SPENDING_LIMIT_LOWER_THAN_ACCRUED_COST_NOT_ALLOWED" = 18,
    "UPDATE_IS_NO_OP" = 19,
    "END_TIME_MUST_FOLLOW_START_TIME" = 20,
    "BUDGET_DATE_RANGE_INCOMPATIBLE_WITH_BILLING_SETUP" = 21,
    "NOT_AUTHORIZED" = 22,
    "INVALID_BILLING_SETUP" = 23,
    "OVERLAPS_EXISTING_BUDGET" = 24,
    "CANNOT_CREATE_BUDGET_THROUGH_API" = 25
}
/**
 * @name AdCustomizerErrorEnum.AdCustomizerError
 */
export declare enum AdCustomizerError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "COUNTDOWN_INVALID_DATE_FORMAT" = 2,
    "COUNTDOWN_DATE_IN_PAST" = 3,
    "COUNTDOWN_INVALID_LOCALE" = 4,
    "COUNTDOWN_INVALID_START_DAYS_BEFORE" = 5,
    "UNKNOWN_USER_LIST" = 6
}
/**
 * @name AdErrorEnum.AdError
 */
export declare enum AdError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_CUSTOMIZERS_NOT_SUPPORTED_FOR_AD_TYPE" = 2,
    "APPROXIMATELY_TOO_LONG" = 3,
    "APPROXIMATELY_TOO_SHORT" = 4,
    "BAD_SNIPPET" = 5,
    "CANNOT_MODIFY_AD" = 6,
    "CANNOT_SET_BUSINESS_NAME_IF_URL_SET" = 7,
    "CANNOT_SET_FIELD" = 8,
    "CANNOT_SET_FIELD_WITH_ORIGIN_AD_ID_SET" = 9,
    "CANNOT_SET_FIELD_WITH_AD_ID_SET_FOR_SHARING" = 10,
    "CANNOT_SET_ALLOW_FLEXIBLE_COLOR_FALSE" = 11,
    "CANNOT_SET_COLOR_CONTROL_WHEN_NATIVE_FORMAT_SETTING" = 12,
    "CANNOT_SET_URL" = 13,
    "CANNOT_SET_WITHOUT_FINAL_URLS" = 14,
    "CANNOT_SET_WITH_FINAL_URLS" = 15,
    "CANNOT_SET_WITH_URL_DATA" = 17,
    "CANNOT_USE_AD_SUBCLASS_FOR_OPERATOR" = 18,
    "CUSTOMER_NOT_APPROVED_MOBILEADS" = 19,
    "CUSTOMER_NOT_APPROVED_THIRDPARTY_ADS" = 20,
    "CUSTOMER_NOT_APPROVED_THIRDPARTY_REDIRECT_ADS" = 21,
    "CUSTOMER_NOT_ELIGIBLE" = 22,
    "CUSTOMER_NOT_ELIGIBLE_FOR_UPDATING_BEACON_URL" = 23,
    "DIMENSION_ALREADY_IN_UNION" = 24,
    "DIMENSION_MUST_BE_SET" = 25,
    "DIMENSION_NOT_IN_UNION" = 26,
    "DISPLAY_URL_CANNOT_BE_SPECIFIED" = 27,
    "DOMESTIC_PHONE_NUMBER_FORMAT" = 28,
    "EMERGENCY_PHONE_NUMBER" = 29,
    "EMPTY_FIELD" = 30,
    "FEED_ATTRIBUTE_MUST_HAVE_MAPPING_FOR_TYPE_ID" = 31,
    "FEED_ATTRIBUTE_MAPPING_TYPE_MISMATCH" = 32,
    "ILLEGAL_AD_CUSTOMIZER_TAG_USE" = 33,
    "ILLEGAL_TAG_USE" = 34,
    "INCONSISTENT_DIMENSIONS" = 35,
    "INCONSISTENT_STATUS_IN_TEMPLATE_UNION" = 36,
    "INCORRECT_LENGTH" = 37,
    "INELIGIBLE_FOR_UPGRADE" = 38,
    "INVALID_AD_ADDRESS_CAMPAIGN_TARGET" = 39,
    "INVALID_AD_TYPE" = 40,
    "INVALID_ATTRIBUTES_FOR_MOBILE_IMAGE" = 41,
    "INVALID_ATTRIBUTES_FOR_MOBILE_TEXT" = 42,
    "INVALID_CALL_TO_ACTION_TEXT" = 43,
    "INVALID_CHARACTER_FOR_URL" = 44,
    "INVALID_COUNTRY_CODE" = 45,
    "INVALID_EXPANDED_DYNAMIC_SEARCH_AD_TAG" = 47,
    "INVALID_INPUT" = 48,
    "INVALID_MARKUP_LANGUAGE" = 49,
    "INVALID_MOBILE_CARRIER" = 50,
    "INVALID_MOBILE_CARRIER_TARGET" = 51,
    "INVALID_NUMBER_OF_ELEMENTS" = 52,
    "INVALID_PHONE_NUMBER_FORMAT" = 53,
    "INVALID_RICH_MEDIA_CERTIFIED_VENDOR_FORMAT_ID" = 54,
    "INVALID_TEMPLATE_DATA" = 55,
    "INVALID_TEMPLATE_ELEMENT_FIELD_TYPE" = 56,
    "INVALID_TEMPLATE_ID" = 57,
    "LINE_TOO_WIDE" = 58,
    "MISSING_AD_CUSTOMIZER_MAPPING" = 59,
    "MISSING_ADDRESS_COMPONENT" = 60,
    "MISSING_ADVERTISEMENT_NAME" = 61,
    "MISSING_BUSINESS_NAME" = 62,
    "MISSING_DESCRIPTION1" = 63,
    "MISSING_DESCRIPTION2" = 64,
    "MISSING_DESTINATION_URL_TAG" = 65,
    "MISSING_LANDING_PAGE_URL_TAG" = 66,
    "MISSING_DIMENSION" = 67,
    "MISSING_DISPLAY_URL" = 68,
    "MISSING_HEADLINE" = 69,
    "MISSING_HEIGHT" = 70,
    "MISSING_IMAGE" = 71,
    "MISSING_MARKETING_IMAGE_OR_PRODUCT_VIDEOS" = 72,
    "MISSING_MARKUP_LANGUAGES" = 73,
    "MISSING_MOBILE_CARRIER" = 74,
    "MISSING_PHONE" = 75,
    "MISSING_REQUIRED_TEMPLATE_FIELDS" = 76,
    "MISSING_TEMPLATE_FIELD_VALUE" = 77,
    "MISSING_TEXT" = 78,
    "MISSING_VISIBLE_URL" = 79,
    "MISSING_WIDTH" = 80,
    "MULTIPLE_DISTINCT_FEEDS_UNSUPPORTED" = 81,
    "MUST_USE_TEMP_AD_UNION_ID_ON_ADD" = 82,
    "TOO_LONG" = 83,
    "TOO_SHORT" = 84,
    "UNION_DIMENSIONS_CANNOT_CHANGE" = 85,
    "UNKNOWN_ADDRESS_COMPONENT" = 86,
    "UNKNOWN_FIELD_NAME" = 87,
    "UNKNOWN_UNIQUE_NAME" = 88,
    "UNSUPPORTED_DIMENSIONS" = 89,
    "URL_INVALID_SCHEME" = 90,
    "URL_INVALID_TOP_LEVEL_DOMAIN" = 91,
    "URL_MALFORMED" = 92,
    "URL_NO_HOST" = 93,
    "URL_NOT_EQUIVALENT" = 94,
    "URL_HOST_NAME_TOO_LONG" = 95,
    "URL_NO_SCHEME" = 96,
    "URL_NO_TOP_LEVEL_DOMAIN" = 97,
    "URL_PATH_NOT_ALLOWED" = 98,
    "URL_PORT_NOT_ALLOWED" = 99,
    "URL_QUERY_NOT_ALLOWED" = 100,
    "URL_SCHEME_BEFORE_EXPANDED_DYNAMIC_SEARCH_AD_TAG" = 102,
    "USER_DOES_NOT_HAVE_ACCESS_TO_TEMPLATE" = 103,
    "INCONSISTENT_EXPANDABLE_SETTINGS" = 104,
    "INVALID_FORMAT" = 105,
    "INVALID_FIELD_TEXT" = 106,
    "ELEMENT_NOT_PRESENT" = 107,
    "IMAGE_ERROR" = 108,
    "VALUE_NOT_IN_RANGE" = 109,
    "FIELD_NOT_PRESENT" = 110,
    "ADDRESS_NOT_COMPLETE" = 111,
    "ADDRESS_INVALID" = 112,
    "VIDEO_RETRIEVAL_ERROR" = 113,
    "AUDIO_ERROR" = 114,
    "INVALID_YOUTUBE_DISPLAY_URL" = 115,
    "TOO_MANY_PRODUCT_IMAGES" = 116,
    "TOO_MANY_PRODUCT_VIDEOS" = 117,
    "INCOMPATIBLE_AD_TYPE_AND_DEVICE_PREFERENCE" = 118,
    "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" = 119,
    "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" = 120,
    "DISALLOWED_NUMBER_TYPE" = 121,
    "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" = 122,
    "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" = 123,
    "PREMIUM_RATE_NUMBER_NOT_ALLOWED" = 124,
    "VANITY_PHONE_NUMBER_NOT_ALLOWED" = 125,
    "INVALID_CALL_CONVERSION_TYPE_ID" = 126,
    "CANNOT_DISABLE_CALL_CONVERSION_AND_SET_CONVERSION_TYPE_ID" = 127,
    "CANNOT_SET_PATH2_WITHOUT_PATH1" = 128,
    "MISSING_DYNAMIC_SEARCH_ADS_SETTING_DOMAIN_NAME" = 129,
    "INCOMPATIBLE_WITH_RESTRICTION_TYPE" = 130,
    "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" = 131,
    "MISSING_IMAGE_OR_MEDIA_BUNDLE" = 132,
    "PRODUCT_TYPE_NOT_SUPPORTED_IN_THIS_CAMPAIGN" = 133,
    "PLACEHOLDER_CANNOT_HAVE_EMPTY_DEFAULT_VALUE" = 134,
    "PLACEHOLDER_COUNTDOWN_FUNCTION_CANNOT_HAVE_DEFAULT_VALUE" = 135,
    "PLACEHOLDER_DEFAULT_VALUE_MISSING" = 136,
    "UNEXPECTED_PLACEHOLDER_DEFAULT_VALUE" = 137,
    "AD_CUSTOMIZERS_MAY_NOT_BE_ADJACENT" = 138,
    "UPDATING_AD_WITH_NO_ENABLED_ASSOCIATION" = 139,
    "TOO_MANY_AD_CUSTOMIZERS" = 141,
    "INVALID_AD_CUSTOMIZER_FORMAT" = 142,
    "NESTED_AD_CUSTOMIZER_SYNTAX" = 143,
    "UNSUPPORTED_AD_CUSTOMIZER_SYNTAX" = 144,
    "UNPAIRED_BRACE_IN_AD_CUSTOMIZER_TAG" = 145,
    "MORE_THAN_ONE_COUNTDOWN_TAG_TYPE_EXISTS" = 146,
    "DATE_TIME_IN_COUNTDOWN_TAG_IS_INVALID" = 147,
    "DATE_TIME_IN_COUNTDOWN_TAG_IS_PAST" = 148,
    "UNRECOGNIZED_AD_CUSTOMIZER_TAG_FOUND" = 149
}
/**
 * @name AdGroupAdErrorEnum.AdGroupAdError
 */
export declare enum AdGroupAdError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP_AD_LABEL_DOES_NOT_EXIST" = 2,
    "AD_GROUP_AD_LABEL_ALREADY_EXISTS" = 3,
    "AD_NOT_UNDER_ADGROUP" = 4,
    "CANNOT_OPERATE_ON_REMOVED_ADGROUPAD" = 5,
    "CANNOT_CREATE_DEPRECATED_ADS" = 6,
    "CANNOT_CREATE_TEXT_ADS" = 7,
    "EMPTY_FIELD" = 8,
    "RESOURCE_REFERENCED_IN_MULTIPLE_OPS" = 9,
    "AD_TYPE_CANNOT_BE_PAUSED" = 10,
    "AD_TYPE_CANNOT_BE_REMOVED" = 11
}
/**
 * @name AdGroupBidModifierErrorEnum.AdGroupBidModifierError
 */
export declare enum AdGroupBidModifierError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CRITERION_ID_NOT_SUPPORTED" = 2,
    "CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER" = 3
}
/**
 * @name AdGroupCriterionErrorEnum.AdGroupCriterionError
 */
export declare enum AdGroupCriterionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP_CRITERION_LABEL_DOES_NOT_EXIST" = 2,
    "AD_GROUP_CRITERION_LABEL_ALREADY_EXISTS" = 3,
    "CANNOT_ADD_LABEL_TO_NEGATIVE_CRITERION" = 4,
    "TOO_MANY_OPERATIONS" = 5,
    "CANT_UPDATE_NEGATIVE" = 6,
    "CONCRETE_TYPE_REQUIRED" = 7,
    "BID_INCOMPATIBLE_WITH_ADGROUP" = 8,
    "CANNOT_TARGET_AND_EXCLUDE" = 9,
    "ILLEGAL_URL" = 10,
    "INVALID_KEYWORD_TEXT" = 11,
    "INVALID_DESTINATION_URL" = 12,
    "MISSING_DESTINATION_URL_TAG" = 13,
    "KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM" = 14,
    "INVALID_USER_STATUS" = 15,
    "CANNOT_ADD_CRITERIA_TYPE" = 16,
    "CANNOT_EXCLUDE_CRITERIA_TYPE" = 17,
    "CAMPAIGN_TYPE_NOT_COMPATIBLE_WITH_PARTIAL_FAILURE" = 27,
    "OPERATIONS_FOR_TOO_MANY_SHOPPING_ADGROUPS" = 28,
    "CANNOT_MODIFY_URL_FIELDS_WITH_DUPLICATE_ELEMENTS" = 29,
    "CANNOT_SET_WITHOUT_FINAL_URLS" = 30,
    "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_MOBILE_URLS_EXIST" = 31,
    "CANNOT_CLEAR_FINAL_URLS_IF_FINAL_APP_URLS_EXIST" = 32,
    "CANNOT_CLEAR_FINAL_URLS_IF_TRACKING_URL_TEMPLATE_EXISTS" = 33,
    "CANNOT_CLEAR_FINAL_URLS_IF_URL_CUSTOM_PARAMETERS_EXIST" = 34,
    "CANNOT_SET_BOTH_DESTINATION_URL_AND_FINAL_URLS" = 35,
    "CANNOT_SET_BOTH_DESTINATION_URL_AND_TRACKING_URL_TEMPLATE" = 36,
    "FINAL_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE" = 37,
    "FINAL_MOBILE_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE" = 38
}
/**
 * @name AdGroupErrorEnum.AdGroupError
 */
export declare enum AdGroupError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_ADGROUP_NAME" = 2,
    "INVALID_ADGROUP_NAME" = 3,
    "ADVERTISER_NOT_ON_CONTENT_NETWORK" = 5,
    "BID_TOO_BIG" = 6,
    "BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH" = 7,
    "MISSING_ADGROUP_NAME" = 8,
    "ADGROUP_LABEL_DOES_NOT_EXIST" = 9,
    "ADGROUP_LABEL_ALREADY_EXISTS" = 10,
    "INVALID_CONTENT_BID_CRITERION_TYPE_GROUP" = 11,
    "AD_GROUP_TYPE_NOT_VALID_FOR_ADVERTISING_CHANNEL_TYPE" = 12,
    "ADGROUP_TYPE_NOT_SUPPORTED_FOR_CAMPAIGN_SALES_COUNTRY" = 13,
    "CANNOT_ADD_ADGROUP_OF_TYPE_DSA_TO_CAMPAIGN_WITHOUT_DSA_SETTING" = 14,
    "PROMOTED_HOTEL_AD_GROUPS_NOT_AVAILABLE_FOR_CUSTOMER" = 15
}
/**
 * @name AdGroupFeedErrorEnum.AdGroupFeedError
 */
export declare enum AdGroupFeedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 2,
    "CANNOT_CREATE_FOR_REMOVED_FEED" = 3,
    "ADGROUP_FEED_ALREADY_EXISTS" = 4,
    "CANNOT_OPERATE_ON_REMOVED_ADGROUP_FEED" = 5,
    "INVALID_PLACEHOLDER_TYPE" = 6,
    "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" = 7,
    "NO_EXISTING_LOCATION_CUSTOMER_FEED" = 8
}
/**
 * @name AdParameterErrorEnum.AdParameterError
 */
export declare enum AdParameterError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP_CRITERION_MUST_BE_KEYWORD" = 2,
    "INVALID_INSERTION_TEXT_FORMAT" = 3
}
/**
 * @name AdSharingErrorEnum.AdSharingError
 */
export declare enum AdSharingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AD_GROUP_ALREADY_CONTAINS_AD" = 2,
    "INCOMPATIBLE_AD_UNDER_AD_GROUP" = 3,
    "CANNOT_SHARE_INACTIVE_AD" = 4
}
/**
 * @name AdxErrorEnum.AdxError
 */
export declare enum AdxError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNSUPPORTED_FEATURE" = 2
}
/**
 * @name AssetErrorEnum.AssetError
 */
export declare enum AssetError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CUSTOMER_NOT_WHITELISTED_FOR_ASSET_TYPE" = 2,
    "DUPLICATE_ASSET" = 3,
    "DUPLICATE_ASSET_NAME" = 4,
    "ASSET_DATA_IS_MISSING" = 5,
    "CANNOT_MODIFY_ASSET_NAME" = 6
}
/**
 * @name AssetLinkErrorEnum.AssetLinkError
 */
export declare enum AssetLinkError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PINNING_UNSUPPORTED" = 2
}
/**
 * @name AuthenticationErrorEnum.AuthenticationError
 */
export declare enum AuthenticationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "AUTHENTICATION_ERROR" = 2,
    "CLIENT_CUSTOMER_ID_INVALID" = 5,
    "CUSTOMER_NOT_FOUND" = 8,
    "GOOGLE_ACCOUNT_DELETED" = 9,
    "GOOGLE_ACCOUNT_COOKIE_INVALID" = 10,
    "GOOGLE_ACCOUNT_AUTHENTICATION_FAILED" = 25,
    "GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH" = 12,
    "LOGIN_COOKIE_REQUIRED" = 13,
    "NOT_ADS_USER" = 14,
    "OAUTH_TOKEN_INVALID" = 15,
    "OAUTH_TOKEN_EXPIRED" = 16,
    "OAUTH_TOKEN_DISABLED" = 17,
    "OAUTH_TOKEN_REVOKED" = 18,
    "OAUTH_TOKEN_HEADER_INVALID" = 19,
    "LOGIN_COOKIE_INVALID" = 20,
    "USER_ID_INVALID" = 22,
    "TWO_STEP_VERIFICATION_NOT_ENROLLED" = 23,
    "ADVANCED_PROTECTION_NOT_ENROLLED" = 24
}
/**
 * @name AuthorizationErrorEnum.AuthorizationError
 */
export declare enum AuthorizationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "USER_PERMISSION_DENIED" = 2,
    "DEVELOPER_TOKEN_NOT_WHITELISTED" = 3,
    "DEVELOPER_TOKEN_PROHIBITED" = 4,
    "PROJECT_DISABLED" = 5,
    "AUTHORIZATION_ERROR" = 6,
    "ACTION_NOT_PERMITTED" = 7,
    "INCOMPLETE_SIGNUP" = 8,
    "CUSTOMER_NOT_ENABLED" = 24,
    "MISSING_TOS" = 9,
    "DEVELOPER_TOKEN_NOT_APPROVED" = 10,
    "INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION" = 11,
    "SERVICE_ACCESS_DENIED" = 12
}
/**
 * @name BatchJobErrorEnum.BatchJobError
 */
export declare enum BatchJobError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING" = 2,
    "EMPTY_OPERATIONS" = 3,
    "INVALID_SEQUENCE_TOKEN" = 4,
    "RESULTS_NOT_READY" = 5,
    "INVALID_PAGE_SIZE" = 6,
    "CAN_ONLY_REMOVE_PENDING_JOB" = 7
}
/**
 * @name BiddingErrorEnum.BiddingError
 */
export declare enum BiddingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED" = 2,
    "CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN" = 7,
    "INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE" = 10,
    "INVALID_BIDDING_STRATEGY_TYPE" = 14,
    "INVALID_BID" = 17,
    "BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE" = 18,
    "CONVERSION_TRACKING_NOT_ENABLED" = 19,
    "NOT_ENOUGH_CONVERSIONS" = 20,
    "CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY" = 21,
    "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY" = 23,
    "BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE" = 24,
    "PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER" = 25,
    "PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA" = 26,
    "BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS" = 27,
    "BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS" = 28,
    "BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION" = 29,
    "BID_TOO_SMALL" = 30,
    "BID_TOO_BIG" = 31,
    "BID_TOO_MANY_FRACTIONAL_DIGITS" = 32,
    "INVALID_DOMAIN_NAME" = 33,
    "NOT_COMPATIBLE_WITH_PAYMENT_MODE" = 34,
    "NOT_COMPATIBLE_WITH_BUDGET_TYPE" = 35,
    "NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE" = 36,
    "BIDDING_STRATEGY_TYPE_INCOMPATIBLE_WITH_SHARED_BUDGET" = 37
}
/**
 * @name BiddingStrategyErrorEnum.BiddingStrategyError
 */
export declare enum BiddingStrategyError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_NAME" = 2,
    "CANNOT_CHANGE_BIDDING_STRATEGY_TYPE" = 3,
    "CANNOT_REMOVE_ASSOCIATED_STRATEGY" = 4,
    "BIDDING_STRATEGY_NOT_SUPPORTED" = 5,
    "INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE" = 6
}
/**
 * @name BillingSetupErrorEnum.BillingSetupError
 */
export declare enum BillingSetupError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_USE_EXISTING_AND_NEW_ACCOUNT" = 2,
    "CANNOT_REMOVE_STARTED_BILLING_SETUP" = 3,
    "CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT" = 4,
    "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS" = 5,
    "INVALID_PAYMENTS_ACCOUNT" = 6,
    "BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY" = 7,
    "INVALID_START_TIME_TYPE" = 8,
    "THIRD_PARTY_ALREADY_HAS_BILLING" = 9,
    "BILLING_SETUP_IN_PROGRESS" = 10,
    "NO_SIGNUP_PERMISSION" = 11,
    "CHANGE_OF_BILL_TO_IN_PROGRESS" = 12,
    "PAYMENTS_PROFILE_NOT_FOUND" = 13,
    "PAYMENTS_ACCOUNT_NOT_FOUND" = 14,
    "PAYMENTS_PROFILE_INELIGIBLE" = 15,
    "PAYMENTS_ACCOUNT_INELIGIBLE" = 16,
    "CUSTOMER_NEEDS_INTERNAL_APPROVAL" = 17,
    "PAYMENTS_ACCOUNT_INELIGIBLE_CURRENCY_CODE_MISMATCH" = 19
}
/**
 * @name CampaignBudgetErrorEnum.CampaignBudgetError
 */
export declare enum CampaignBudgetError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN_BUDGET_CANNOT_BE_SHARED" = 17,
    "CAMPAIGN_BUDGET_REMOVED" = 2,
    "CAMPAIGN_BUDGET_IN_USE" = 3,
    "CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE" = 4,
    "CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET" = 6,
    "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED" = 7,
    "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME" = 8,
    "CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED" = 9,
    "CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS" = 10,
    "DUPLICATE_NAME" = 11,
    "MONEY_AMOUNT_IN_WRONG_CURRENCY" = 12,
    "MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC" = 13,
    "MONEY_AMOUNT_TOO_LARGE" = 14,
    "NEGATIVE_MONEY_AMOUNT" = 15,
    "NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT" = 16,
    "TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY" = 18
}
/**
 * @name CampaignCriterionErrorEnum.CampaignCriterionError
 */
export declare enum CampaignCriterionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONCRETE_TYPE_REQUIRED" = 2,
    "INVALID_PLACEMENT_URL" = 3,
    "CANNOT_EXCLUDE_CRITERIA_TYPE" = 4,
    "CANNOT_SET_STATUS_FOR_CRITERIA_TYPE" = 5,
    "CANNOT_SET_STATUS_FOR_EXCLUDED_CRITERIA" = 6,
    "CANNOT_TARGET_AND_EXCLUDE" = 7,
    "TOO_MANY_OPERATIONS" = 8,
    "OPERATOR_NOT_SUPPORTED_FOR_CRITERION_TYPE" = 9,
    "SHOPPING_CAMPAIGN_SALES_COUNTRY_NOT_SUPPORTED_FOR_SALES_CHANNEL" = 10,
    "CANNOT_ADD_EXISTING_FIELD" = 11,
    "CANNOT_UPDATE_NEGATIVE_CRITERION" = 12
}
/**
 * @name CampaignDraftErrorEnum.CampaignDraftError
 */
export declare enum CampaignDraftError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_DRAFT_NAME" = 2,
    "INVALID_STATUS_TRANSITION_FROM_REMOVED" = 3,
    "INVALID_STATUS_TRANSITION_FROM_PROMOTED" = 4,
    "INVALID_STATUS_TRANSITION_FROM_PROMOTE_FAILED" = 5,
    "CUSTOMER_CANNOT_CREATE_DRAFT" = 6,
    "CAMPAIGN_CANNOT_CREATE_DRAFT" = 7,
    "INVALID_DRAFT_CHANGE" = 8,
    "INVALID_STATUS_TRANSITION" = 9,
    "MAX_NUMBER_OF_DRAFTS_PER_CAMPAIGN_REACHED" = 10,
    "LIST_ERRORS_FOR_PROMOTED_DRAFT_ONLY" = 11
}
/**
 * @name CampaignErrorEnum.CampaignError
 */
export declare enum CampaignError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_TARGET_CONTENT_NETWORK" = 3,
    "CANNOT_TARGET_SEARCH_NETWORK" = 4,
    "CANNOT_TARGET_SEARCH_NETWORK_WITHOUT_GOOGLE_SEARCH" = 5,
    "CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN" = 6,
    "CAMPAIGN_MUST_TARGET_AT_LEAST_ONE_NETWORK" = 7,
    "CANNOT_TARGET_PARTNER_SEARCH_NETWORK" = 8,
    "CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CRITERIA_LEVEL_BIDDING_STRATEGY" = 9,
    "CAMPAIGN_DURATION_MUST_CONTAIN_ALL_RUNNABLE_TRIALS" = 10,
    "CANNOT_MODIFY_FOR_TRIAL_CAMPAIGN" = 11,
    "DUPLICATE_CAMPAIGN_NAME" = 12,
    "INCOMPATIBLE_CAMPAIGN_FIELD" = 13,
    "INVALID_CAMPAIGN_NAME" = 14,
    "INVALID_AD_SERVING_OPTIMIZATION_STATUS" = 15,
    "INVALID_TRACKING_URL" = 16,
    "CANNOT_SET_BOTH_TRACKING_URL_TEMPLATE_AND_TRACKING_SETTING" = 17,
    "MAX_IMPRESSIONS_NOT_IN_RANGE" = 18,
    "TIME_UNIT_NOT_SUPPORTED" = 19,
    "INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED" = 20,
    "BUDGET_CANNOT_BE_SHARED" = 21,
    "CAMPAIGN_CANNOT_USE_SHARED_BUDGET" = 22,
    "CANNOT_CHANGE_BUDGET_ON_CAMPAIGN_WITH_TRIALS" = 23,
    "CAMPAIGN_LABEL_DOES_NOT_EXIST" = 24,
    "CAMPAIGN_LABEL_ALREADY_EXISTS" = 25,
    "MISSING_SHOPPING_SETTING" = 26,
    "INVALID_SHOPPING_SALES_COUNTRY" = 27,
    "ADVERTISING_CHANNEL_TYPE_NOT_AVAILABLE_FOR_ACCOUNT_TYPE" = 31,
    "INVALID_ADVERTISING_CHANNEL_SUB_TYPE" = 32,
    "AT_LEAST_ONE_CONVERSION_MUST_BE_SELECTED" = 33,
    "CANNOT_SET_AD_ROTATION_MODE" = 34,
    "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED" = 35,
    "CANNOT_SET_DATE_TO_PAST" = 36,
    "MISSING_HOTEL_CUSTOMER_LINK" = 37,
    "INVALID_HOTEL_CUSTOMER_LINK" = 38,
    "MISSING_HOTEL_SETTING" = 39,
    "CANNOT_USE_SHARED_CAMPAIGN_BUDGET_WHILE_PART_OF_CAMPAIGN_GROUP" = 40,
    "APP_NOT_FOUND" = 41,
    "SHOPPING_ENABLE_LOCAL_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE" = 42,
    "MERCHANT_NOT_ALLOWED_FOR_COMPARISON_LISTING_ADS" = 43,
    "INSUFFICIENT_APP_INSTALLS_COUNT" = 44,
    "SENSITIVE_CATEGORY_APP" = 45
}
/**
 * @name CampaignExperimentErrorEnum.CampaignExperimentError
 */
export declare enum CampaignExperimentError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_NAME" = 2,
    "INVALID_TRANSITION" = 3,
    "CANNOT_CREATE_EXPERIMENT_WITH_SHARED_BUDGET" = 4,
    "CANNOT_CREATE_EXPERIMENT_FOR_REMOVED_BASE_CAMPAIGN" = 5,
    "CANNOT_CREATE_EXPERIMENT_FOR_NON_PROPOSED_DRAFT" = 6,
    "CUSTOMER_CANNOT_CREATE_EXPERIMENT" = 7,
    "CAMPAIGN_CANNOT_CREATE_EXPERIMENT" = 8,
    "EXPERIMENT_DURATIONS_MUST_NOT_OVERLAP" = 9,
    "EXPERIMENT_DURATION_MUST_BE_WITHIN_CAMPAIGN_DURATION" = 10,
    "CANNOT_MUTATE_EXPERIMENT_DUE_TO_STATUS" = 11
}
/**
 * @name CampaignFeedErrorEnum.CampaignFeedError
 */
export declare enum CampaignFeedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 2,
    "CANNOT_CREATE_FOR_REMOVED_FEED" = 4,
    "CANNOT_CREATE_ALREADY_EXISTING_CAMPAIGN_FEED" = 5,
    "CANNOT_MODIFY_REMOVED_CAMPAIGN_FEED" = 6,
    "INVALID_PLACEHOLDER_TYPE" = 7,
    "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" = 8,
    "NO_EXISTING_LOCATION_CUSTOMER_FEED" = 9
}
/**
 * @name CampaignSharedSetErrorEnum.CampaignSharedSetError
 */
export declare enum CampaignSharedSetError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SHARED_SET_ACCESS_DENIED" = 2
}
/**
 * @name ChangeStatusErrorEnum.ChangeStatusError
 */
export declare enum ChangeStatusError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "START_DATE_TOO_OLD" = 3
}
/**
 * @name CollectionSizeErrorEnum.CollectionSizeError
 */
export declare enum CollectionSizeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TOO_FEW" = 2,
    "TOO_MANY" = 3
}
/**
 * @name ContextErrorEnum.ContextError
 */
export declare enum ContextError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPERATION_NOT_PERMITTED_FOR_CONTEXT" = 2,
    "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE" = 3
}
/**
 * @name ConversionActionErrorEnum.ConversionActionError
 */
export declare enum ConversionActionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_NAME" = 2,
    "DUPLICATE_APP_ID" = 3,
    "TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD" = 4,
    "BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION" = 5,
    "DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED" = 6,
    "DATA_DRIVEN_MODEL_EXPIRED" = 7,
    "DATA_DRIVEN_MODEL_STALE" = 8,
    "DATA_DRIVEN_MODEL_UNKNOWN" = 9,
    "CREATION_NOT_SUPPORTED" = 10
}
/**
 * @name ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError
 */
export declare enum ConversionAdjustmentUploadError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TOO_RECENT_CONVERSION_ACTION" = 2,
    "INVALID_CONVERSION_ACTION" = 3,
    "CONVERSION_ALREADY_RETRACTED" = 4,
    "CONVERSION_NOT_FOUND" = 5,
    "CONVERSION_EXPIRED" = 6,
    "ADJUSTMENT_PRECEDES_CONVERSION" = 7,
    "MORE_RECENT_RESTATEMENT_FOUND" = 8,
    "TOO_RECENT_CONVERSION" = 9,
    "CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE" = 10,
    "TOO_MANY_ADJUSTMENTS_IN_REQUEST" = 11,
    "TOO_MANY_ADJUSTMENTS" = 12
}
/**
 * @name ConversionUploadErrorEnum.ConversionUploadError
 */
export declare enum ConversionUploadError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TOO_MANY_CONVERSIONS_IN_REQUEST" = 2,
    "UNPARSEABLE_GCLID" = 3,
    "CONVERSION_PRECEDES_GCLID" = 4,
    "EXPIRED_GCLID" = 5,
    "TOO_RECENT_GCLID" = 6,
    "GCLID_NOT_FOUND" = 7,
    "UNAUTHORIZED_CUSTOMER" = 8,
    "INVALID_CONVERSION_ACTION" = 9,
    "TOO_RECENT_CONVERSION_ACTION" = 10,
    "CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIME" = 11,
    "EXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" = 12,
    "EXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" = 13,
    "ORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION" = 14,
    "ORDER_ID_ALREADY_IN_USE" = 15,
    "DUPLICATE_ORDER_ID" = 16,
    "TOO_RECENT_CALL" = 17,
    "EXPIRED_CALL" = 18,
    "CALL_NOT_FOUND" = 19,
    "CONVERSION_PRECEDES_CALL" = 20,
    "CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME" = 21,
    "UNPARSEABLE_CALLERS_PHONE_NUMBER" = 22
}
/**
 * @name CountryCodeErrorEnum.CountryCodeError
 */
export declare enum CountryCodeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_COUNTRY_CODE" = 2
}
/**
 * @name CriterionErrorEnum.CriterionError
 */
export declare enum CriterionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONCRETE_TYPE_REQUIRED" = 2,
    "INVALID_EXCLUDED_CATEGORY" = 3,
    "INVALID_KEYWORD_TEXT" = 4,
    "KEYWORD_TEXT_TOO_LONG" = 5,
    "KEYWORD_HAS_TOO_MANY_WORDS" = 6,
    "KEYWORD_HAS_INVALID_CHARS" = 7,
    "INVALID_PLACEMENT_URL" = 8,
    "INVALID_USER_LIST" = 9,
    "INVALID_USER_INTEREST" = 10,
    "INVALID_FORMAT_FOR_PLACEMENT_URL" = 11,
    "PLACEMENT_URL_IS_TOO_LONG" = 12,
    "PLACEMENT_URL_HAS_ILLEGAL_CHAR" = 13,
    "PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE" = 14,
    "PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION" = 15,
    "INVALID_TOPIC_PATH" = 16,
    "INVALID_YOUTUBE_CHANNEL_ID" = 17,
    "INVALID_YOUTUBE_VIDEO_ID" = 18,
    "YOUTUBE_VERTICAL_CHANNEL_DEPRECATED" = 19,
    "YOUTUBE_DEMOGRAPHIC_CHANNEL_DEPRECATED" = 20,
    "YOUTUBE_URL_UNSUPPORTED" = 21,
    "CANNOT_EXCLUDE_CRITERIA_TYPE" = 22,
    "CANNOT_ADD_CRITERIA_TYPE" = 23,
    "CANNOT_EXCLUDE_SIMILAR_USER_LIST" = 26,
    "CANNOT_ADD_CLOSED_USER_LIST" = 27,
    "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_ONLY_CAMPAIGNS" = 28,
    "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_CAMPAIGNS" = 29,
    "CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SHOPPING_CAMPAIGNS" = 30,
    "CANNOT_ADD_USER_INTERESTS_TO_SEARCH_CAMPAIGNS" = 31,
    "CANNOT_SET_BIDS_ON_CRITERION_TYPE_IN_SEARCH_CAMPAIGNS" = 32,
    "CANNOT_ADD_URLS_TO_CRITERION_TYPE_FOR_CAMPAIGN_TYPE" = 33,
    "INVALID_CUSTOM_AFFINITY" = 96,
    "INVALID_CUSTOM_INTENT" = 97,
    "INVALID_IP_ADDRESS" = 34,
    "INVALID_IP_FORMAT" = 35,
    "INVALID_MOBILE_APP" = 36,
    "INVALID_MOBILE_APP_CATEGORY" = 37,
    "INVALID_CRITERION_ID" = 38,
    "CANNOT_TARGET_CRITERION" = 39,
    "CANNOT_TARGET_OBSOLETE_CRITERION" = 40,
    "CRITERION_ID_AND_TYPE_MISMATCH" = 41,
    "INVALID_PROXIMITY_RADIUS" = 42,
    "INVALID_PROXIMITY_RADIUS_UNITS" = 43,
    "INVALID_STREETADDRESS_LENGTH" = 44,
    "INVALID_CITYNAME_LENGTH" = 45,
    "INVALID_REGIONCODE_LENGTH" = 46,
    "INVALID_REGIONNAME_LENGTH" = 47,
    "INVALID_POSTALCODE_LENGTH" = 48,
    "INVALID_COUNTRY_CODE" = 49,
    "INVALID_LATITUDE" = 50,
    "INVALID_LONGITUDE" = 51,
    "PROXIMITY_GEOPOINT_AND_ADDRESS_BOTH_CANNOT_BE_NULL" = 52,
    "INVALID_PROXIMITY_ADDRESS" = 53,
    "INVALID_USER_DOMAIN_NAME" = 54,
    "CRITERION_PARAMETER_TOO_LONG" = 55,
    "AD_SCHEDULE_TIME_INTERVALS_OVERLAP" = 56,
    "AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS" = 57,
    "AD_SCHEDULE_INVALID_TIME_INTERVAL" = 58,
    "AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT" = 59,
    "AD_SCHEDULE_CRITERION_ID_MISMATCHING_FIELDS" = 60,
    "CANNOT_BID_MODIFY_CRITERION_TYPE" = 61,
    "CANNOT_BID_MODIFY_CRITERION_CAMPAIGN_OPTED_OUT" = 62,
    "CANNOT_BID_MODIFY_NEGATIVE_CRITERION" = 63,
    "BID_MODIFIER_ALREADY_EXISTS" = 64,
    "FEED_ID_NOT_ALLOWED" = 65,
    "ACCOUNT_INELIGIBLE_FOR_CRITERIA_TYPE" = 66,
    "CRITERIA_TYPE_INVALID_FOR_BIDDING_STRATEGY" = 67,
    "CANNOT_EXCLUDE_CRITERION" = 68,
    "CANNOT_REMOVE_CRITERION" = 69,
    "INVALID_PRODUCT_BIDDING_CATEGORY" = 76,
    "MISSING_SHOPPING_SETTING" = 77,
    "INVALID_MATCHING_FUNCTION" = 78,
    "LOCATION_FILTER_NOT_ALLOWED" = 79,
    "INVALID_FEED_FOR_LOCATION_FILTER" = 98,
    "LOCATION_FILTER_INVALID" = 80,
    "CANNOT_ATTACH_CRITERIA_AT_CAMPAIGN_AND_ADGROUP" = 81,
    "HOTEL_LENGTH_OF_STAY_OVERLAPS_WITH_EXISTING_CRITERION" = 82,
    "HOTEL_ADVANCE_BOOKING_WINDOW_OVERLAPS_WITH_EXISTING_CRITERION" = 83,
    "FIELD_INCOMPATIBLE_WITH_NEGATIVE_TARGETING" = 84,
    "INVALID_WEBPAGE_CONDITION" = 85,
    "INVALID_WEBPAGE_CONDITION_URL" = 86,
    "WEBPAGE_CONDITION_URL_CANNOT_BE_EMPTY" = 87,
    "WEBPAGE_CONDITION_URL_UNSUPPORTED_PROTOCOL" = 88,
    "WEBPAGE_CONDITION_URL_CANNOT_BE_IP_ADDRESS" = 89,
    "WEBPAGE_CONDITION_URL_DOMAIN_NOT_CONSISTENT_WITH_CAMPAIGN_SETTING" = 90,
    "WEBPAGE_CONDITION_URL_CANNOT_BE_PUBLIC_SUFFIX" = 91,
    "WEBPAGE_CONDITION_URL_INVALID_PUBLIC_SUFFIX" = 92,
    "WEBPAGE_CONDITION_URL_VALUE_TRACK_VALUE_NOT_SUPPORTED" = 93,
    "WEBPAGE_CRITERION_URL_EQUALS_CAN_HAVE_ONLY_ONE_CONDITION" = 94,
    "WEBPAGE_CRITERION_NOT_SUPPORTED_ON_NON_DSA_AD_GROUP" = 95,
    "CANNOT_TARGET_USER_LIST_FOR_SMART_DISPLAY_CAMPAIGNS" = 99,
    "LISTING_SCOPE_TOO_MANY_DIMENSION_TYPES" = 100,
    "LISTING_SCOPE_TOO_MANY_IN_OPERATORS" = 101,
    "LISTING_SCOPE_IN_OPERATOR_NOT_SUPPORTED" = 102,
    "DUPLICATE_LISTING_DIMENSION_TYPE" = 103,
    "DUPLICATE_LISTING_DIMENSION_VALUE" = 104,
    "CANNOT_SET_BIDS_ON_LISTING_GROUP_SUBDIVISION" = 105,
    "INVALID_LISTING_GROUP_HIERARCHY" = 106,
    "LISTING_GROUP_UNIT_CANNOT_HAVE_CHILDREN" = 107,
    "LISTING_GROUP_SUBDIVISION_REQUIRES_OTHERS_CASE" = 108,
    "LISTING_GROUP_REQUIRES_SAME_DIMENSION_TYPE_AS_SIBLINGS" = 109,
    "LISTING_GROUP_ALREADY_EXISTS" = 110,
    "LISTING_GROUP_DOES_NOT_EXIST" = 111,
    "LISTING_GROUP_CANNOT_BE_REMOVED" = 112,
    "INVALID_LISTING_GROUP_TYPE" = 113,
    "LISTING_GROUP_ADD_MAY_ONLY_USE_TEMP_ID" = 114,
    "LISTING_SCOPE_TOO_LONG" = 115,
    "LISTING_SCOPE_TOO_MANY_DIMENSIONS" = 116,
    "LISTING_GROUP_TOO_LONG" = 117,
    "LISTING_GROUP_TREE_TOO_DEEP" = 118,
    "INVALID_LISTING_DIMENSION" = 119,
    "INVALID_LISTING_DIMENSION_TYPE" = 120
}
/**
 * @name CurrencyCodeErrorEnum.CurrencyCodeError
 */
export declare enum CurrencyCodeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNSUPPORTED" = 2
}
/**
 * @name CustomInterestErrorEnum.CustomInterestError
 */
export declare enum CustomInterestError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NAME_ALREADY_USED" = 2,
    "CUSTOM_INTEREST_MEMBER_ID_AND_TYPE_PARAMETER_NOT_PRESENT_IN_REMOVE" = 3,
    "TYPE_AND_PARAMETER_NOT_FOUND" = 4,
    "TYPE_AND_PARAMETER_ALREADY_EXISTED" = 5,
    "INVALID_CUSTOM_INTEREST_MEMBER_TYPE" = 6,
    "CANNOT_REMOVE_WHILE_IN_USE" = 7,
    "CANNOT_CHANGE_TYPE" = 8
}
/**
 * @name CustomerClientLinkErrorEnum.CustomerClientLinkError
 */
export declare enum CustomerClientLinkError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CLIENT_ALREADY_INVITED_BY_THIS_MANAGER" = 2,
    "CLIENT_ALREADY_MANAGED_IN_HIERARCHY" = 3,
    "CYCLIC_LINK_NOT_ALLOWED" = 4,
    "CUSTOMER_HAS_TOO_MANY_ACCOUNTS" = 5,
    "CLIENT_HAS_TOO_MANY_INVITATIONS" = 6,
    "CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS" = 7,
    "CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER" = 8,
    "CLIENT_HAS_TOO_MANY_MANAGERS" = 9
}
/**
 * @name CustomerErrorEnum.CustomerError
 */
export declare enum CustomerError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STATUS_CHANGE_DISALLOWED" = 2,
    "ACCOUNT_NOT_SET_UP" = 3
}
/**
 * @name CustomerFeedErrorEnum.CustomerFeedError
 */
export declare enum CustomerFeedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 2,
    "CANNOT_CREATE_FOR_REMOVED_FEED" = 3,
    "CANNOT_CREATE_ALREADY_EXISTING_CUSTOMER_FEED" = 4,
    "CANNOT_MODIFY_REMOVED_CUSTOMER_FEED" = 5,
    "INVALID_PLACEHOLDER_TYPE" = 6,
    "MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE" = 7,
    "PLACEHOLDER_TYPE_NOT_ALLOWED_ON_CUSTOMER_FEED" = 8
}
/**
 * @name CustomerManagerLinkErrorEnum.CustomerManagerLinkError
 */
export declare enum CustomerManagerLinkError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NO_PENDING_INVITE" = 2,
    "SAME_CLIENT_MORE_THAN_ONCE_PER_CALL" = 3,
    "MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS" = 4,
    "CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER" = 5,
    "CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER" = 6,
    "CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER" = 7,
    "CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT" = 8,
    "DUPLICATE_CHILD_FOUND" = 9,
    "TEST_ACCOUNT_LINKS_TOO_MANY_CHILD_ACCOUNTS" = 10
}
/**
 * @name DatabaseErrorEnum.DatabaseError
 */
export declare enum DatabaseError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CONCURRENT_MODIFICATION" = 2,
    "DATA_CONSTRAINT_VIOLATION" = 3,
    "REQUEST_TOO_LARGE" = 4
}
/**
 * @name DateErrorEnum.DateError
 */
export declare enum DateError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_FIELD_VALUES_IN_DATE" = 2,
    "INVALID_FIELD_VALUES_IN_DATE_TIME" = 3,
    "INVALID_STRING_DATE" = 4,
    "INVALID_STRING_DATE_TIME_MICROS" = 6,
    "INVALID_STRING_DATE_TIME_SECONDS" = 11,
    "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET" = 12,
    "EARLIER_THAN_MINIMUM_DATE" = 7,
    "LATER_THAN_MAXIMUM_DATE" = 8,
    "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE" = 9,
    "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL" = 10
}
/**
 * @name DateRangeErrorEnum.DateRangeError
 */
export declare enum DateRangeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_DATE" = 2,
    "START_DATE_AFTER_END_DATE" = 3,
    "CANNOT_SET_DATE_TO_PAST" = 4,
    "AFTER_MAXIMUM_ALLOWABLE_DATE" = 5,
    "CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED" = 6
}
/**
 * @name DistinctErrorEnum.DistinctError
 */
export declare enum DistinctError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "DUPLICATE_ELEMENT" = 2,
    "DUPLICATE_TYPE" = 3
}
/**
 * @name EnumErrorEnum.ErrorEnum
 */
export declare enum ErrorEnum {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ENUM_VALUE_NOT_PERMITTED" = 3
}
/**
 * @name ExtensionFeedItemErrorEnum.ExtensionFeedItemError
 */
export declare enum ExtensionFeedItemError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "VALUE_OUT_OF_RANGE" = 2,
    "URL_LIST_TOO_LONG" = 3,
    "CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING" = 4,
    "CANNOT_SET_WITH_FINAL_URLS" = 5,
    "CANNOT_SET_WITHOUT_FINAL_URLS" = 6,
    "INVALID_PHONE_NUMBER" = 7,
    "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" = 8,
    "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" = 9,
    "PREMIUM_RATE_NUMBER_NOT_ALLOWED" = 10,
    "DISALLOWED_NUMBER_TYPE" = 11,
    "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" = 12,
    "VANITY_PHONE_NUMBER_NOT_ALLOWED" = 13,
    "INVALID_CALL_CONVERSION_ACTION" = 14,
    "CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING" = 15,
    "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" = 16,
    "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" = 17,
    "INVALID_APP_ID" = 18,
    "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" = 19,
    "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" = 20,
    "REVIEW_EXTENSION_SOURCE_INELIGIBLE" = 21,
    "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" = 22,
    "INCONSISTENT_CURRENCY_CODES" = 23,
    "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" = 24,
    "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" = 25,
    "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" = 26,
    "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS" = 27,
    "UNSUPPORTED_VALUE" = 28,
    "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE" = 29,
    "INVALID_DEVICE_PREFERENCE" = 30,
    "INVALID_SCHEDULE_END" = 31,
    "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" = 32,
    "INVALID_SNIPPETS_HEADER" = 33,
    "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM" = 34,
    "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" = 35,
    "CONFLICTING_CALL_CONVERSION_SETTINGS" = 36,
    "EXTENSION_TYPE_MISMATCH" = 37,
    "EXTENSION_SUBTYPE_REQUIRED" = 38,
    "EXTENSION_TYPE_UNSUPPORTED" = 39,
    "CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS" = 40,
    "CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES" = 41,
    "INVALID_PRICE_FORMAT" = 42,
    "PROMOTION_INVALID_TIME" = 43,
    "TOO_MANY_DECIMAL_PLACES_SPECIFIED" = 44,
    "CONCRETE_EXTENSION_TYPE_REQUIRED" = 45,
    "SCHEDULE_END_NOT_AFTER_START" = 46
}
/**
 * @name ExtensionSettingErrorEnum.ExtensionSettingError
 */
export declare enum ExtensionSettingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EXTENSIONS_REQUIRED" = 2,
    "FEED_TYPE_EXTENSION_TYPE_MISMATCH" = 3,
    "INVALID_FEED_TYPE" = 4,
    "INVALID_FEED_TYPE_FOR_CUSTOMER_EXTENSION_SETTING" = 5,
    "CANNOT_CHANGE_FEED_ITEM_ON_CREATE" = 6,
    "CANNOT_UPDATE_NEWLY_CREATED_EXTENSION" = 7,
    "NO_EXISTING_AD_GROUP_EXTENSION_SETTING_FOR_TYPE" = 8,
    "NO_EXISTING_CAMPAIGN_EXTENSION_SETTING_FOR_TYPE" = 9,
    "NO_EXISTING_CUSTOMER_EXTENSION_SETTING_FOR_TYPE" = 10,
    "AD_GROUP_EXTENSION_SETTING_ALREADY_EXISTS" = 11,
    "CAMPAIGN_EXTENSION_SETTING_ALREADY_EXISTS" = 12,
    "CUSTOMER_EXTENSION_SETTING_ALREADY_EXISTS" = 13,
    "AD_GROUP_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 14,
    "CAMPAIGN_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 15,
    "CUSTOMER_FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE" = 16,
    "VALUE_OUT_OF_RANGE" = 17,
    "CANNOT_SET_FIELD_WITH_FINAL_URLS" = 18,
    "FINAL_URLS_NOT_SET" = 19,
    "INVALID_PHONE_NUMBER" = 20,
    "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" = 21,
    "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" = 22,
    "PREMIUM_RATE_NUMBER_NOT_ALLOWED" = 23,
    "DISALLOWED_NUMBER_TYPE" = 24,
    "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" = 25,
    "VANITY_PHONE_NUMBER_NOT_ALLOWED" = 26,
    "INVALID_COUNTRY_CODE" = 27,
    "INVALID_CALL_CONVERSION_TYPE_ID" = 28,
    "CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING" = 29,
    "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" = 30,
    "INVALID_APP_ID" = 31,
    "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" = 32,
    "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" = 33,
    "REVIEW_EXTENSION_SOURCE_NOT_ELIGIBLE" = 34,
    "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" = 35,
    "MISSING_FIELD" = 36,
    "INCONSISTENT_CURRENCY_CODES" = 37,
    "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" = 38,
    "PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" = 39,
    "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" = 40,
    "PRICE_EXTENSION_HAS_TOO_MANY_ITEMS" = 41,
    "UNSUPPORTED_VALUE" = 42,
    "INVALID_DEVICE_PREFERENCE" = 43,
    "INVALID_SCHEDULE_END" = 45,
    "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" = 47,
    "OVERLAPPING_SCHEDULES_NOT_ALLOWED" = 48,
    "SCHEDULE_END_NOT_AFTER_START" = 49,
    "TOO_MANY_SCHEDULES_PER_DAY" = 50,
    "DUPLICATE_EXTENSION_FEED_ITEM_EDIT" = 51,
    "INVALID_SNIPPETS_HEADER" = 52,
    "PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY" = 53,
    "CAMPAIGN_TARGETING_MISMATCH" = 54,
    "CANNOT_OPERATE_ON_REMOVED_FEED" = 55,
    "EXTENSION_TYPE_REQUIRED" = 56,
    "INCOMPATIBLE_UNDERLYING_MATCHING_FUNCTION" = 57,
    "START_DATE_AFTER_END_DATE" = 58,
    "INVALID_PRICE_FORMAT" = 59,
    "PROMOTION_INVALID_TIME" = 60,
    "PROMOTION_CANNOT_SET_PERCENT_DISCOUNT_AND_MONEY_DISCOUNT" = 61,
    "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT" = 62,
    "TOO_MANY_DECIMAL_PLACES_SPECIFIED" = 63,
    "INVALID_LANGUAGE_CODE" = 64,
    "UNSUPPORTED_LANGUAGE" = 65,
    "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" = 66,
    "EXTENSION_SETTING_UPDATE_IS_A_NOOP" = 67
}
/**
 * @name FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError
 */
export declare enum FeedAttributeReferenceError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_REFERENCE_REMOVED_FEED" = 2,
    "INVALID_FEED_NAME" = 3,
    "INVALID_FEED_ATTRIBUTE_NAME" = 4
}
/**
 * @name FeedErrorEnum.FeedError
 */
export declare enum FeedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ATTRIBUTE_NAMES_NOT_UNIQUE" = 2,
    "ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES" = 3,
    "CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED" = 4,
    "CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED" = 5,
    "CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED" = 6,
    "CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE" = 7,
    "FEED_REMOVED" = 8,
    "INVALID_ORIGIN_VALUE" = 9,
    "FEED_ORIGIN_IS_NOT_USER" = 10,
    "INVALID_AUTH_TOKEN_FOR_EMAIL" = 11,
    "INVALID_EMAIL" = 12,
    "DUPLICATE_FEED_NAME" = 13,
    "INVALID_FEED_NAME" = 14,
    "MISSING_OAUTH_INFO" = 15,
    "NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY" = 16,
    "TOO_MANY_ATTRIBUTES" = 17,
    "INVALID_BUSINESS_ACCOUNT" = 18,
    "BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT" = 19,
    "INVALID_AFFILIATE_CHAIN_ID" = 20,
    "DUPLICATE_SYSTEM_FEED" = 21,
    "GMB_ACCESS_ERROR" = 22,
    "CANNOT_HAVE_LOCATION_AND_AFFILIATE_LOCATION_FEEDS" = 23
}
/**
 * @name FeedItemErrorEnum.FeedItemError
 */
export declare enum FeedItemError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_CONVERT_ATTRIBUTE_VALUE_FROM_STRING" = 2,
    "CANNOT_OPERATE_ON_REMOVED_FEED_ITEM" = 3,
    "DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE" = 4,
    "KEY_ATTRIBUTES_NOT_FOUND" = 5,
    "INVALID_URL" = 6,
    "MISSING_KEY_ATTRIBUTES" = 7,
    "KEY_ATTRIBUTES_NOT_UNIQUE" = 8,
    "CANNOT_MODIFY_KEY_ATTRIBUTE_VALUE" = 9,
    "SIZE_TOO_LARGE_FOR_MULTI_VALUE_ATTRIBUTE" = 10
}
/**
 * @name FeedItemTargetErrorEnum.FeedItemTargetError
 */
export declare enum FeedItemTargetError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MUST_SET_TARGET_ONEOF_ON_CREATE" = 2,
    "FEED_ITEM_TARGET_ALREADY_EXISTS" = 3,
    "FEED_ITEM_SCHEDULES_CANNOT_OVERLAP" = 4,
    "TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE" = 5,
    "TOO_MANY_SCHEDULES_PER_DAY" = 6,
    "CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS" = 7,
    "DUPLICATE_AD_SCHEDULE" = 8,
    "DUPLICATE_KEYWORD" = 9
}
/**
 * @name FeedItemValidationErrorEnum.FeedItemValidationError
 */
export declare enum FeedItemValidationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "STRING_TOO_SHORT" = 2,
    "STRING_TOO_LONG" = 3,
    "VALUE_NOT_SPECIFIED" = 4,
    "INVALID_DOMESTIC_PHONE_NUMBER_FORMAT" = 5,
    "INVALID_PHONE_NUMBER" = 6,
    "PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY" = 7,
    "PREMIUM_RATE_NUMBER_NOT_ALLOWED" = 8,
    "DISALLOWED_NUMBER_TYPE" = 9,
    "VALUE_OUT_OF_RANGE" = 10,
    "CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" = 11,
    "CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING" = 12,
    "INVALID_COUNTRY_CODE" = 13,
    "INVALID_APP_ID" = 14,
    "MISSING_ATTRIBUTES_FOR_FIELDS" = 15,
    "INVALID_TYPE_ID" = 16,
    "INVALID_EMAIL_ADDRESS" = 17,
    "INVALID_HTTPS_URL" = 18,
    "MISSING_DELIVERY_ADDRESS" = 19,
    "START_DATE_AFTER_END_DATE" = 20,
    "MISSING_FEED_ITEM_START_TIME" = 21,
    "MISSING_FEED_ITEM_END_TIME" = 22,
    "MISSING_FEED_ITEM_ID" = 23,
    "VANITY_PHONE_NUMBER_NOT_ALLOWED" = 24,
    "INVALID_REVIEW_EXTENSION_SNIPPET" = 25,
    "INVALID_NUMBER_FORMAT" = 26,
    "INVALID_DATE_FORMAT" = 27,
    "INVALID_PRICE_FORMAT" = 28,
    "UNKNOWN_PLACEHOLDER_FIELD" = 29,
    "MISSING_ENHANCED_SITELINK_DESCRIPTION_LINE" = 30,
    "REVIEW_EXTENSION_SOURCE_INELIGIBLE" = 31,
    "HYPHENS_IN_REVIEW_EXTENSION_SNIPPET" = 32,
    "DOUBLE_QUOTES_IN_REVIEW_EXTENSION_SNIPPET" = 33,
    "QUOTES_IN_REVIEW_EXTENSION_SNIPPET" = 34,
    "INVALID_FORM_ENCODED_PARAMS" = 35,
    "INVALID_URL_PARAMETER_NAME" = 36,
    "NO_GEOCODING_RESULT" = 37,
    "SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT" = 38,
    "CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED" = 39,
    "INVALID_PLACEHOLDER_FIELD_ID" = 40,
    "INVALID_URL_TAG" = 41,
    "LIST_TOO_LONG" = 42,
    "INVALID_ATTRIBUTES_COMBINATION" = 43,
    "DUPLICATE_VALUES" = 44,
    "INVALID_CALL_CONVERSION_ACTION_ID" = 45,
    "CANNOT_SET_WITHOUT_FINAL_URLS" = 46,
    "APP_ID_DOESNT_EXIST_IN_APP_STORE" = 47,
    "INVALID_FINAL_URL" = 48,
    "INVALID_TRACKING_URL" = 49,
    "INVALID_FINAL_URL_FOR_APP_DOWNLOAD_URL" = 50,
    "LIST_TOO_SHORT" = 51,
    "INVALID_USER_ACTION" = 52,
    "INVALID_TYPE_NAME" = 53,
    "INVALID_EVENT_CHANGE_STATUS" = 54,
    "INVALID_SNIPPETS_HEADER" = 55,
    "INVALID_ANDROID_APP_LINK" = 56,
    "NUMBER_TYPE_WITH_CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY" = 57,
    "RESERVED_KEYWORD_OTHER" = 58,
    "DUPLICATE_OPTION_LABELS" = 59,
    "DUPLICATE_OPTION_PREFILLS" = 60,
    "UNEQUAL_LIST_LENGTHS" = 61,
    "INCONSISTENT_CURRENCY_CODES" = 62,
    "PRICE_EXTENSION_HAS_DUPLICATED_HEADERS" = 63,
    "ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION" = 64,
    "PRICE_EXTENSION_HAS_TOO_FEW_ITEMS" = 65,
    "UNSUPPORTED_VALUE" = 66,
    "INVALID_FINAL_MOBILE_URL" = 67,
    "INVALID_KEYWORDLESS_AD_RULE_LABEL" = 68,
    "VALUE_TRACK_PARAMETER_NOT_SUPPORTED" = 69,
    "UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE" = 70,
    "INVALID_IOS_APP_LINK" = 71,
    "MISSING_IOS_APP_LINK_OR_IOS_APP_STORE_ID" = 72,
    "PROMOTION_INVALID_TIME" = 73,
    "PROMOTION_CANNOT_SET_PERCENT_OFF_AND_MONEY_AMOUNT_OFF" = 74,
    "PROMOTION_CANNOT_SET_PROMOTION_CODE_AND_ORDERS_OVER_AMOUNT" = 75,
    "TOO_MANY_DECIMAL_PLACES_SPECIFIED" = 76,
    "AD_CUSTOMIZERS_NOT_ALLOWED" = 77,
    "INVALID_LANGUAGE_CODE" = 78,
    "UNSUPPORTED_LANGUAGE" = 79,
    "IF_FUNCTION_NOT_ALLOWED" = 80,
    "INVALID_FINAL_URL_SUFFIX" = 81,
    "INVALID_TAG_IN_FINAL_URL_SUFFIX" = 82,
    "INVALID_FINAL_URL_SUFFIX_FORMAT" = 83,
    "CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED" = 84,
    "ONLY_ONE_DELIVERY_OPTION_IS_ALLOWED" = 85,
    "NO_DELIVERY_OPTION_IS_SET" = 86,
    "INVALID_CONVERSION_REPORTING_STATE" = 87,
    "IMAGE_SIZE_WRONG" = 88,
    "EMAIL_DELIVERY_NOT_AVAILABLE_IN_COUNTRY" = 89,
    "AUTO_REPLY_NOT_AVAILABLE_IN_COUNTRY" = 90,
    "INVALID_LATITUDE_VALUE" = 91,
    "INVALID_LONGITUDE_VALUE" = 92,
    "TOO_MANY_LABELS" = 93,
    "INVALID_IMAGE_URL" = 94,
    "MISSING_LATITUDE_VALUE" = 95,
    "MISSING_LONGITUDE_VALUE" = 96,
    "ADDRESS_NOT_FOUND" = 97,
    "ADDRESS_NOT_TARGETABLE" = 98
}
/**
 * @name FeedMappingErrorEnum.FeedMappingError
 */
export declare enum FeedMappingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_PLACEHOLDER_FIELD" = 2,
    "INVALID_CRITERION_FIELD" = 3,
    "INVALID_PLACEHOLDER_TYPE" = 4,
    "INVALID_CRITERION_TYPE" = 5,
    "NO_ATTRIBUTE_FIELD_MAPPINGS" = 7,
    "FEED_ATTRIBUTE_TYPE_MISMATCH" = 8,
    "CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED" = 9,
    "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE" = 10,
    "MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE" = 11,
    "MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD" = 12,
    "MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD" = 13,
    "UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS" = 14,
    "LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS" = 15,
    "CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED" = 16,
    "INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED" = 17,
    "INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE" = 18,
    "ATTRIBUTE_FIELD_MAPPING_MISSING_FIELD" = 19
}
/**
 * @name FieldErrorEnum.FieldError
 */
export declare enum FieldError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REQUIRED" = 2,
    "IMMUTABLE_FIELD" = 3,
    "INVALID_VALUE" = 4,
    "VALUE_MUST_BE_UNSET" = 5,
    "REQUIRED_NONEMPTY_LIST" = 6,
    "FIELD_CANNOT_BE_CLEARED" = 7,
    "BLACKLISTED_VALUE" = 8
}
/**
 * @name FieldMaskErrorEnum.FieldMaskError
 */
export declare enum FieldMaskError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FIELD_MASK_MISSING" = 5,
    "FIELD_MASK_NOT_ALLOWED" = 4,
    "FIELD_NOT_FOUND" = 2,
    "FIELD_HAS_SUBFIELDS" = 3
}
/**
 * @name FunctionErrorEnum.FunctionError
 */
export declare enum FunctionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_FUNCTION_FORMAT" = 2,
    "DATA_TYPE_MISMATCH" = 3,
    "INVALID_CONJUNCTION_OPERANDS" = 4,
    "INVALID_NUMBER_OF_OPERANDS" = 5,
    "INVALID_OPERAND_TYPE" = 6,
    "INVALID_OPERATOR" = 7,
    "INVALID_REQUEST_CONTEXT_TYPE" = 8,
    "INVALID_FUNCTION_FOR_CALL_PLACEHOLDER" = 9,
    "INVALID_FUNCTION_FOR_PLACEHOLDER" = 10,
    "INVALID_OPERAND" = 11,
    "MISSING_CONSTANT_OPERAND_VALUE" = 12,
    "INVALID_CONSTANT_OPERAND_VALUE" = 13,
    "INVALID_NESTING" = 14,
    "MULTIPLE_FEED_IDS_NOT_SUPPORTED" = 15,
    "INVALID_FUNCTION_FOR_FEED_WITH_FIXED_SCHEMA" = 16,
    "INVALID_ATTRIBUTE_NAME" = 17
}
/**
 * @name FunctionParsingErrorEnum.FunctionParsingError
 */
export declare enum FunctionParsingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NO_MORE_INPUT" = 2,
    "EXPECTED_CHARACTER" = 3,
    "UNEXPECTED_SEPARATOR" = 4,
    "UNMATCHED_LEFT_BRACKET" = 5,
    "UNMATCHED_RIGHT_BRACKET" = 6,
    "TOO_MANY_NESTED_FUNCTIONS" = 7,
    "MISSING_RIGHT_HAND_OPERAND" = 8,
    "INVALID_OPERATOR_NAME" = 9,
    "FEED_ATTRIBUTE_OPERAND_ARGUMENT_NOT_INTEGER" = 10,
    "NO_OPERANDS" = 11,
    "TOO_MANY_OPERANDS" = 12
}
/**
 * @name GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError
 */
export declare enum GeoTargetConstantSuggestionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LOCATION_NAME_SIZE_LIMIT" = 2,
    "LOCATION_NAME_LIMIT" = 3,
    "INVALID_COUNTRY_CODE" = 4,
    "REQUEST_PARAMETERS_UNSET" = 5
}
/**
 * @name HeaderErrorEnum.HeaderError
 */
export declare enum HeaderError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_LOGIN_CUSTOMER_ID" = 3,
    "INVALID_LINKED_CUSTOMER_ID" = 7
}
/**
 * @name IdErrorEnum.IdError
 */
export declare enum IdError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NOT_FOUND" = 2
}
/**
 * @name ImageErrorEnum.ImageError
 */
export declare enum ImageError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_IMAGE" = 2,
    "STORAGE_ERROR" = 3,
    "BAD_REQUEST" = 4,
    "UNEXPECTED_SIZE" = 5,
    "ANIMATED_NOT_ALLOWED" = 6,
    "ANIMATION_TOO_LONG" = 7,
    "SERVER_ERROR" = 8,
    "CMYK_JPEG_NOT_ALLOWED" = 9,
    "FLASH_NOT_ALLOWED" = 10,
    "FLASH_WITHOUT_CLICKTAG" = 11,
    "FLASH_ERROR_AFTER_FIXING_CLICK_TAG" = 12,
    "ANIMATED_VISUAL_EFFECT" = 13,
    "FLASH_ERROR" = 14,
    "LAYOUT_PROBLEM" = 15,
    "PROBLEM_READING_IMAGE_FILE" = 16,
    "ERROR_STORING_IMAGE" = 17,
    "ASPECT_RATIO_NOT_ALLOWED" = 18,
    "FLASH_HAS_NETWORK_OBJECTS" = 19,
    "FLASH_HAS_NETWORK_METHODS" = 20,
    "FLASH_HAS_URL" = 21,
    "FLASH_HAS_MOUSE_TRACKING" = 22,
    "FLASH_HAS_RANDOM_NUM" = 23,
    "FLASH_SELF_TARGETS" = 24,
    "FLASH_BAD_GETURL_TARGET" = 25,
    "FLASH_VERSION_NOT_SUPPORTED" = 26,
    "FLASH_WITHOUT_HARD_CODED_CLICK_URL" = 27,
    "INVALID_FLASH_FILE" = 28,
    "FAILED_TO_FIX_CLICK_TAG_IN_FLASH" = 29,
    "FLASH_ACCESSES_NETWORK_RESOURCES" = 30,
    "FLASH_EXTERNAL_JS_CALL" = 31,
    "FLASH_EXTERNAL_FS_CALL" = 32,
    "FILE_TOO_LARGE" = 33,
    "IMAGE_DATA_TOO_LARGE" = 34,
    "IMAGE_PROCESSING_ERROR" = 35,
    "IMAGE_TOO_SMALL" = 36,
    "INVALID_INPUT" = 37,
    "PROBLEM_READING_FILE" = 38,
    "IMAGE_CONSTRAINTS_VIOLATED" = 39
}
/**
 * @name InternalErrorEnum.InternalError
 */
export declare enum InternalError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INTERNAL_ERROR" = 2,
    "ERROR_CODE_NOT_PUBLISHED" = 3,
    "TRANSIENT_ERROR" = 4,
    "DEADLINE_EXCEEDED" = 5
}
/**
 * @name InvoiceErrorEnum.InvoiceError
 */
export declare enum InvoiceError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "YEAR_MONTH_TOO_OLD" = 2,
    "NOT_INVOICED_CUSTOMER" = 3
}
/**
 * @name KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError
 */
export declare enum KeywordPlanAdGroupError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_NAME" = 2,
    "DUPLICATE_NAME" = 3
}
/**
 * @name KeywordPlanAdGroupKeywordErrorEnum.KeywordPlanAdGroupKeywordError
 */
export declare enum KeywordPlanAdGroupKeywordError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_KEYWORD_MATCH_TYPE" = 2,
    "DUPLICATE_KEYWORD" = 3,
    "KEYWORD_TEXT_TOO_LONG" = 4,
    "KEYWORD_HAS_INVALID_CHARS" = 5,
    "KEYWORD_HAS_TOO_MANY_WORDS" = 6,
    "INVALID_KEYWORD_TEXT" = 7,
    "NEGATIVE_KEYWORD_HAS_CPC_BID" = 8
}
/**
 * @name KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError
 */
export declare enum KeywordPlanCampaignError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_NAME" = 2,
    "INVALID_LANGUAGES" = 3,
    "INVALID_GEOS" = 4,
    "DUPLICATE_NAME" = 5,
    "MAX_GEOS_EXCEEDED" = 6,
    "MAX_LANGUAGES_EXCEEDED" = 7
}
/**
 * @name KeywordPlanCampaignKeywordErrorEnum.KeywordPlanCampaignKeywordError
 */
export declare enum KeywordPlanCampaignKeywordError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CAMPAIGN_KEYWORD_IS_POSITIVE" = 8
}
/**
 * @name KeywordPlanErrorEnum.KeywordPlanError
 */
export declare enum KeywordPlanError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BID_MULTIPLIER_OUT_OF_RANGE" = 2,
    "BID_TOO_HIGH" = 3,
    "BID_TOO_LOW" = 4,
    "BID_TOO_MANY_FRACTIONAL_DIGITS" = 5,
    "DAILY_BUDGET_TOO_LOW" = 6,
    "DAILY_BUDGET_TOO_MANY_FRACTIONAL_DIGITS" = 7,
    "INVALID_VALUE" = 8,
    "KEYWORD_PLAN_HAS_NO_KEYWORDS" = 9,
    "KEYWORD_PLAN_NOT_ENABLED" = 10,
    "KEYWORD_PLAN_NOT_FOUND" = 11,
    "MISSING_BID" = 13,
    "MISSING_FORECAST_PERIOD" = 14,
    "INVALID_FORECAST_DATE_RANGE" = 15,
    "INVALID_NAME" = 16
}
/**
 * @name KeywordPlanIdeaErrorEnum.KeywordPlanIdeaError
 */
export declare enum KeywordPlanIdeaError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "URL_CRAWL_ERROR" = 2,
    "INVALID_VALUE" = 3
}
/**
 * @name LabelErrorEnum.LabelError
 */
export declare enum LabelError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_APPLY_INACTIVE_LABEL" = 2,
    "CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION" = 3,
    "CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION" = 4,
    "EXCEEDED_LABEL_LIMIT_PER_TYPE" = 5,
    "INVALID_RESOURCE_FOR_MANAGER_LABEL" = 6,
    "DUPLICATE_NAME" = 7,
    "INVALID_LABEL_NAME" = 8,
    "CANNOT_ATTACH_LABEL_TO_DRAFT" = 9,
    "CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER" = 10
}
/**
 * @name LanguageCodeErrorEnum.LanguageCodeError
 */
export declare enum LanguageCodeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "LANGUAGE_CODE_NOT_FOUND" = 2,
    "INVALID_LANGUAGE_CODE" = 3
}
/**
 * @name ListOperationErrorEnum.ListOperationError
 */
export declare enum ListOperationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REQUIRED_FIELD_MISSING" = 7,
    "DUPLICATE_VALUES" = 8
}
/**
 * @name ManagerLinkErrorEnum.ManagerLinkError
 */
export declare enum ManagerLinkError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ACCOUNTS_NOT_COMPATIBLE_FOR_LINKING" = 2,
    "TOO_MANY_MANAGERS" = 3,
    "TOO_MANY_INVITES" = 4,
    "ALREADY_INVITED_BY_THIS_MANAGER" = 5,
    "ALREADY_MANAGED_BY_THIS_MANAGER" = 6,
    "ALREADY_MANAGED_IN_HIERARCHY" = 7,
    "DUPLICATE_CHILD_FOUND" = 8,
    "CLIENT_HAS_NO_ADMIN_USER" = 9,
    "MAX_DEPTH_EXCEEDED" = 10,
    "CYCLE_NOT_ALLOWED" = 11,
    "TOO_MANY_ACCOUNTS" = 12,
    "TOO_MANY_ACCOUNTS_AT_MANAGER" = 13,
    "NON_OWNER_USER_CANNOT_MODIFY_LINK" = 14,
    "SUSPENDED_ACCOUNT_CANNOT_ADD_CLIENTS" = 15,
    "CLIENT_OUTSIDE_TREE" = 16,
    "INVALID_STATUS_CHANGE" = 17,
    "INVALID_CHANGE" = 18
}
/**
 * @name MediaBundleErrorEnum.MediaBundleError
 */
export declare enum MediaBundleError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BAD_REQUEST" = 3,
    "DOUBLECLICK_BUNDLE_NOT_ALLOWED" = 4,
    "EXTERNAL_URL_NOT_ALLOWED" = 5,
    "FILE_TOO_LARGE" = 6,
    "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED" = 7,
    "INVALID_INPUT" = 8,
    "INVALID_MEDIA_BUNDLE" = 9,
    "INVALID_MEDIA_BUNDLE_ENTRY" = 10,
    "INVALID_MIME_TYPE" = 11,
    "INVALID_PATH" = 12,
    "INVALID_URL_REFERENCE" = 13,
    "MEDIA_DATA_TOO_LARGE" = 14,
    "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY" = 15,
    "SERVER_ERROR" = 16,
    "STORAGE_ERROR" = 17,
    "SWIFFY_BUNDLE_NOT_ALLOWED" = 18,
    "TOO_MANY_FILES" = 19,
    "UNEXPECTED_SIZE" = 20,
    "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT" = 21,
    "UNSUPPORTED_HTML5_FEATURE" = 22,
    "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT" = 23,
    "CUSTOM_EXIT_NOT_ALLOWED" = 24
}
/**
 * @name MediaFileErrorEnum.MediaFileError
 */
export declare enum MediaFileError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_CREATE_STANDARD_ICON" = 2,
    "CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES" = 3,
    "CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA" = 4,
    "DUPLICATE_MEDIA" = 5,
    "EMPTY_FIELD" = 6,
    "RESOURCE_REFERENCED_IN_MULTIPLE_OPS" = 7,
    "FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE" = 8,
    "INVALID_MEDIA_FILE_ID" = 9,
    "INVALID_MEDIA_SUB_TYPE" = 10,
    "INVALID_MEDIA_FILE_TYPE" = 11,
    "INVALID_MIME_TYPE" = 12,
    "INVALID_REFERENCE_ID" = 13,
    "INVALID_YOU_TUBE_ID" = 14,
    "MEDIA_FILE_FAILED_TRANSCODING" = 15,
    "MEDIA_NOT_TRANSCODED" = 16,
    "MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE" = 17,
    "NO_FIELDS_SPECIFIED" = 18,
    "NULL_REFERENCE_ID_AND_MEDIA_ID" = 19,
    "TOO_LONG" = 20,
    "UNSUPPORTED_TYPE" = 21,
    "YOU_TUBE_SERVICE_UNAVAILABLE" = 22,
    "YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION" = 23,
    "YOU_TUBE_VIDEO_NOT_FOUND" = 24
}
/**
 * @name MediaUploadErrorEnum.MediaUploadError
 */
export declare enum MediaUploadError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "FILE_TOO_BIG" = 2,
    "UNPARSEABLE_IMAGE" = 3,
    "ANIMATED_IMAGE_NOT_ALLOWED" = 4,
    "FORMAT_NOT_ALLOWED" = 5,
    "EXTERNAL_URL_NOT_ALLOWED" = 6,
    "INVALID_URL_REFERENCE" = 7,
    "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY" = 8
}
/**
 * @name MultiplierErrorEnum.MultiplierError
 */
export declare enum MultiplierError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "MULTIPLIER_TOO_HIGH" = 2,
    "MULTIPLIER_TOO_LOW" = 3,
    "TOO_MANY_FRACTIONAL_DIGITS" = 4,
    "MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY" = 5,
    "MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING" = 6,
    "NO_MULTIPLIER_SPECIFIED" = 7,
    "MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET" = 8,
    "MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET" = 9,
    "MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET" = 10,
    "MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID" = 11,
    "BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER" = 12,
    "MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH" = 13
}
/**
 * @name MutateErrorEnum.MutateError
 */
export declare enum MutateError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RESOURCE_NOT_FOUND" = 3,
    "ID_EXISTS_IN_MULTIPLE_MUTATES" = 7,
    "INCONSISTENT_FIELD_VALUES" = 8,
    "MUTATE_NOT_ALLOWED" = 9,
    "RESOURCE_NOT_IN_GOOGLE_ADS" = 10,
    "RESOURCE_ALREADY_EXISTS" = 11,
    "RESOURCE_DOES_NOT_SUPPORT_VALIDATE_ONLY" = 12,
    "RESOURCE_READ_ONLY" = 13
}
/**
 * @name NewResourceCreationErrorEnum.NewResourceCreationError
 */
export declare enum NewResourceCreationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CANNOT_SET_ID_FOR_CREATE" = 2,
    "DUPLICATE_TEMP_IDS" = 3,
    "TEMP_ID_RESOURCE_HAD_ERRORS" = 4
}
/**
 * @name NotEmptyErrorEnum.NotEmptyError
 */
export declare enum NotEmptyError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EMPTY_LIST" = 2
}
/**
 * @name NotWhitelistedErrorEnum.NotWhitelistedError
 */
export declare enum NotWhitelistedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CUSTOMER_NOT_WHITELISTED_FOR_THIS_FEATURE" = 2
}
/**
 * @name NullErrorEnum.NullError
 */
export declare enum NullError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NULL_CONTENT" = 2
}
/**
 * @name OfflineUserDataJobErrorEnum.OfflineUserDataJobError
 */
export declare enum OfflineUserDataJobError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_USER_LIST_ID" = 3,
    "INVALID_USER_LIST_TYPE" = 4,
    "NOT_WHITELISTED_FOR_USER_ID" = 5,
    "INCOMPATIBLE_UPLOAD_KEY_TYPE" = 6,
    "MISSING_USER_IDENTIFIER" = 7,
    "INVALID_MOBILE_ID_FORMAT" = 8,
    "TOO_MANY_USER_IDENTIFIERS" = 9,
    "NOT_WHITELISTED_FOR_STORE_SALES_DIRECT" = 10,
    "NOT_WHITELISTED_FOR_UNIFIED_STORE_SALES" = 28,
    "INVALID_PARTNER_ID" = 11,
    "INVALID_ENCODING" = 12,
    "INVALID_COUNTRY_CODE" = 13,
    "INCOMPATIBLE_USER_IDENTIFIER" = 14,
    "FUTURE_TRANSACTION_TIME" = 15,
    "INVALID_CONVERSION_ACTION" = 16,
    "MOBILE_ID_NOT_SUPPORTED" = 17,
    "INVALID_OPERATION_ORDER" = 18,
    "CONFLICTING_OPERATION" = 19,
    "EXTERNAL_UPDATE_ID_ALREADY_EXISTS" = 21,
    "JOB_ALREADY_STARTED" = 22,
    "REMOVE_NOT_SUPPORTED" = 23,
    "REMOVE_ALL_NOT_SUPPORTED" = 24,
    "INVALID_SHA256_FORMAT" = 25,
    "CUSTOM_KEY_DISABLED" = 26,
    "CUSTOM_KEY_NOT_PREDEFINED" = 27,
    "CUSTOM_KEY_NOT_SET" = 29,
    "CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS" = 30
}
/**
 * @name OperationAccessDeniedErrorEnum.OperationAccessDeniedError
 */
export declare enum OperationAccessDeniedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ACTION_NOT_PERMITTED" = 2,
    "CREATE_OPERATION_NOT_PERMITTED" = 3,
    "REMOVE_OPERATION_NOT_PERMITTED" = 4,
    "UPDATE_OPERATION_NOT_PERMITTED" = 5,
    "MUTATE_ACTION_NOT_PERMITTED_FOR_CLIENT" = 6,
    "OPERATION_NOT_PERMITTED_FOR_CAMPAIGN_TYPE" = 7,
    "CREATE_AS_REMOVED_NOT_PERMITTED" = 8,
    "OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE" = 9,
    "OPERATION_NOT_PERMITTED_FOR_AD_GROUP_TYPE" = 10,
    "MUTATE_NOT_PERMITTED_FOR_CUSTOMER" = 11
}
/**
 * @name OperatorErrorEnum.OperatorError
 */
export declare enum OperatorError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPERATOR_NOT_SUPPORTED" = 2
}
/**
 * @name PartialFailureErrorEnum.PartialFailureError
 */
export declare enum PartialFailureError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "PARTIAL_FAILURE_MODE_REQUIRED" = 2
}
/**
 * @name PaymentsAccountErrorEnum.PaymentsAccountError
 */
export declare enum PaymentsAccountError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "NOT_SUPPORTED_FOR_MANAGER_CUSTOMER" = 2
}
/**
 * @name PolicyFindingErrorEnum.PolicyFindingError
 */
export declare enum PolicyFindingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "POLICY_FINDING" = 2,
    "POLICY_TOPIC_NOT_FOUND" = 3
}
/**
 * @name PolicyValidationParameterErrorEnum.PolicyValidationParameterError
 */
export declare enum PolicyValidationParameterError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS" = 2,
    "UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS" = 3,
    "CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS" = 4
}
/**
 * @name PolicyViolationErrorEnum.PolicyViolationError
 */
export declare enum PolicyViolationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "POLICY_ERROR" = 2
}
/**
 * @name QueryErrorEnum.QueryError
 */
export declare enum QueryError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "QUERY_ERROR" = 50,
    "BAD_ENUM_CONSTANT" = 18,
    "BAD_ESCAPE_SEQUENCE" = 7,
    "BAD_FIELD_NAME" = 12,
    "BAD_LIMIT_VALUE" = 15,
    "BAD_NUMBER" = 5,
    "BAD_OPERATOR" = 3,
    "BAD_PARAMETER_NAME" = 61,
    "BAD_PARAMETER_VALUE" = 62,
    "BAD_RESOURCE_TYPE_IN_FROM_CLAUSE" = 45,
    "BAD_SYMBOL" = 2,
    "BAD_VALUE" = 4,
    "DATE_RANGE_TOO_WIDE" = 36,
    "DATE_RANGE_TOO_NARROW" = 60,
    "EXPECTED_AND" = 30,
    "EXPECTED_BY" = 14,
    "EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE" = 37,
    "EXPECTED_FILTERS_ON_DATE_RANGE" = 55,
    "EXPECTED_FROM" = 44,
    "EXPECTED_LIST" = 41,
    "EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE" = 16,
    "EXPECTED_SELECT" = 13,
    "EXPECTED_SINGLE_VALUE" = 42,
    "EXPECTED_VALUE_WITH_BETWEEN_OPERATOR" = 29,
    "INVALID_DATE_FORMAT" = 38,
    "INVALID_STRING_VALUE" = 57,
    "INVALID_VALUE_WITH_BETWEEN_OPERATOR" = 26,
    "INVALID_VALUE_WITH_DURING_OPERATOR" = 22,
    "INVALID_VALUE_WITH_LIKE_OPERATOR" = 56,
    "OPERATOR_FIELD_MISMATCH" = 35,
    "PROHIBITED_EMPTY_LIST_IN_CONDITION" = 28,
    "PROHIBITED_ENUM_CONSTANT" = 54,
    "PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE" = 31,
    "PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE" = 40,
    "PROHIBITED_FIELD_IN_SELECT_CLAUSE" = 23,
    "PROHIBITED_FIELD_IN_WHERE_CLAUSE" = 24,
    "PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE" = 43,
    "PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE" = 48,
    "PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE" = 58,
    "PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE" = 49,
    "PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE" = 51,
    "PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE" = 53,
    "LIMIT_VALUE_TOO_LOW" = 25,
    "PROHIBITED_NEWLINE_IN_STRING" = 8,
    "PROHIBITED_VALUE_COMBINATION_IN_LIST" = 10,
    "PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR" = 21,
    "STRING_NOT_TERMINATED" = 6,
    "TOO_MANY_SEGMENTS" = 34,
    "UNEXPECTED_END_OF_QUERY" = 9,
    "UNEXPECTED_FROM_CLAUSE" = 47,
    "UNRECOGNIZED_FIELD" = 32,
    "UNEXPECTED_INPUT" = 11,
    "REQUESTED_METRICS_FOR_MANAGER" = 59
}
/**
 * @name QuotaErrorEnum.QuotaError
 */
export declare enum QuotaError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RESOURCE_EXHAUSTED" = 2,
    "ACCESS_PROHIBITED" = 3,
    "RESOURCE_TEMPORARILY_EXHAUSTED" = 4
}
/**
 * @name RangeErrorEnum.RangeError
 */
export declare enum RangeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "TOO_LOW" = 2,
    "TOO_HIGH" = 3
}
/**
 * @name ReachPlanErrorEnum.ReachPlanError
 */
export declare enum ReachPlanError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1
}
/**
 * @name RecommendationErrorEnum.RecommendationError
 */
export declare enum RecommendationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "BUDGET_AMOUNT_TOO_SMALL" = 2,
    "BUDGET_AMOUNT_TOO_LARGE" = 3,
    "INVALID_BUDGET_AMOUNT" = 4,
    "POLICY_ERROR" = 5,
    "INVALID_BID_AMOUNT" = 6,
    "ADGROUP_KEYWORD_LIMIT" = 7,
    "RECOMMENDATION_ALREADY_APPLIED" = 8,
    "RECOMMENDATION_INVALIDATED" = 9,
    "TOO_MANY_OPERATIONS" = 10,
    "NO_OPERATIONS" = 11,
    "DIFFERENT_TYPES_NOT_SUPPORTED" = 12,
    "DUPLICATE_RESOURCE_NAME" = 13,
    "RECOMMENDATION_ALREADY_DISMISSED" = 14,
    "INVALID_APPLY_REQUEST" = 15
}
/**
 * @name RegionCodeErrorEnum.RegionCodeError
 */
export declare enum RegionCodeError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_REGION_CODE" = 2
}
/**
 * @name RequestErrorEnum.RequestError
 */
export declare enum RequestError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "RESOURCE_NAME_MISSING" = 3,
    "RESOURCE_NAME_MALFORMED" = 4,
    "BAD_RESOURCE_ID" = 17,
    "INVALID_CUSTOMER_ID" = 16,
    "OPERATION_REQUIRED" = 5,
    "RESOURCE_NOT_FOUND" = 6,
    "INVALID_PAGE_TOKEN" = 7,
    "EXPIRED_PAGE_TOKEN" = 8,
    "INVALID_PAGE_SIZE" = 22,
    "REQUIRED_FIELD_MISSING" = 9,
    "IMMUTABLE_FIELD" = 11,
    "TOO_MANY_MUTATE_OPERATIONS" = 13,
    "CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT" = 14,
    "CANNOT_MODIFY_FOREIGN_FIELD" = 15,
    "INVALID_ENUM_VALUE" = 18,
    "DEVELOPER_TOKEN_PARAMETER_MISSING" = 19,
    "LOGIN_CUSTOMER_ID_PARAMETER_MISSING" = 20,
    "VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN" = 21,
    "CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS" = 29,
    "CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS" = 30,
    "INCONSISTENT_RETURN_SUMMARY_ROW_VALUE" = 31,
    "TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED" = 32
}
/**
 * @name ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError
 */
export declare enum ResourceAccessDeniedError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "WRITE_ACCESS_DENIED" = 3
}
/**
 * @name ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError
 */
export declare enum ResourceCountLimitExceededError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ACCOUNT_LIMIT" = 2,
    "CAMPAIGN_LIMIT" = 3,
    "ADGROUP_LIMIT" = 4,
    "AD_GROUP_AD_LIMIT" = 5,
    "AD_GROUP_CRITERION_LIMIT" = 6,
    "SHARED_SET_LIMIT" = 7,
    "MATCHING_FUNCTION_LIMIT" = 8,
    "RESPONSE_ROW_LIMIT_EXCEEDED" = 9,
    "RESOURCE_LIMIT" = 10
}
/**
 * @name SettingErrorEnum.SettingError
 */
export declare enum SettingError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "SETTING_TYPE_IS_NOT_AVAILABLE" = 3,
    "SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN" = 4,
    "TARGETING_SETTING_CONTAINS_INVALID_CRITERION_TYPE_GROUP" = 5,
    "TARGETING_SETTING_DEMOGRAPHIC_CRITERION_TYPE_GROUPS_MUST_BE_SET_TO_TARGET_ALL" = 6,
    "TARGETING_SETTING_CANNOT_CHANGE_TARGET_ALL_TO_FALSE_FOR_DEMOGRAPHIC_CRITERION_TYPE_GROUP" = 7,
    "DYNAMIC_SEARCH_ADS_SETTING_AT_LEAST_ONE_FEED_ID_MUST_BE_PRESENT" = 8,
    "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_DOMAIN_NAME" = 9,
    "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_SUBDOMAIN_NAME" = 10,
    "DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_LANGUAGE_CODE" = 11,
    "TARGET_ALL_IS_NOT_ALLOWED_FOR_PLACEMENT_IN_SEARCH_CAMPAIGN" = 12,
    "SETTING_VALUE_NOT_COMPATIBLE_WITH_CAMPAIGN" = 20
}
/**
 * @name SharedCriterionErrorEnum.SharedCriterionError
 */
export declare enum SharedCriterionError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CRITERION_TYPE_NOT_ALLOWED_FOR_SHARED_SET_TYPE" = 2
}
/**
 * @name SharedSetErrorEnum.SharedSetError
 */
export declare enum SharedSetError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "CUSTOMER_CANNOT_CREATE_SHARED_SET_OF_THIS_TYPE" = 2,
    "DUPLICATE_NAME" = 3,
    "SHARED_SET_REMOVED" = 4,
    "SHARED_SET_IN_USE" = 5
}
/**
 * @name SizeLimitErrorEnum.SizeLimitError
 */
export declare enum SizeLimitError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "REQUEST_SIZE_LIMIT_EXCEEDED" = 2,
    "RESPONSE_SIZE_LIMIT_EXCEEDED" = 3
}
/**
 * @name StringFormatErrorEnum.StringFormatError
 */
export declare enum StringFormatError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "ILLEGAL_CHARS" = 2,
    "INVALID_FORMAT" = 3
}
/**
 * @name StringLengthErrorEnum.StringLengthError
 */
export declare enum StringLengthError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EMPTY" = 4,
    "TOO_SHORT" = 2,
    "TOO_LONG" = 3
}
/**
 * @name TimeZoneErrorEnum.TimeZoneError
 */
export declare enum TimeZoneError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_TIME_ZONE" = 5
}
/**
 * @name UrlFieldErrorEnum.UrlFieldError
 */
export declare enum UrlFieldError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "INVALID_TRACKING_URL_TEMPLATE" = 2,
    "INVALID_TAG_IN_TRACKING_URL_TEMPLATE" = 3,
    "MISSING_TRACKING_URL_TEMPLATE_TAG" = 4,
    "MISSING_PROTOCOL_IN_TRACKING_URL_TEMPLATE" = 5,
    "INVALID_PROTOCOL_IN_TRACKING_URL_TEMPLATE" = 6,
    "MALFORMED_TRACKING_URL_TEMPLATE" = 7,
    "MISSING_HOST_IN_TRACKING_URL_TEMPLATE" = 8,
    "INVALID_TLD_IN_TRACKING_URL_TEMPLATE" = 9,
    "REDUNDANT_NESTED_TRACKING_URL_TEMPLATE_TAG" = 10,
    "INVALID_FINAL_URL" = 11,
    "INVALID_TAG_IN_FINAL_URL" = 12,
    "REDUNDANT_NESTED_FINAL_URL_TAG" = 13,
    "MISSING_PROTOCOL_IN_FINAL_URL" = 14,
    "INVALID_PROTOCOL_IN_FINAL_URL" = 15,
    "MALFORMED_FINAL_URL" = 16,
    "MISSING_HOST_IN_FINAL_URL" = 17,
    "INVALID_TLD_IN_FINAL_URL" = 18,
    "INVALID_FINAL_MOBILE_URL" = 19,
    "INVALID_TAG_IN_FINAL_MOBILE_URL" = 20,
    "REDUNDANT_NESTED_FINAL_MOBILE_URL_TAG" = 21,
    "MISSING_PROTOCOL_IN_FINAL_MOBILE_URL" = 22,
    "INVALID_PROTOCOL_IN_FINAL_MOBILE_URL" = 23,
    "MALFORMED_FINAL_MOBILE_URL" = 24,
    "MISSING_HOST_IN_FINAL_MOBILE_URL" = 25,
    "INVALID_TLD_IN_FINAL_MOBILE_URL" = 26,
    "INVALID_FINAL_APP_URL" = 27,
    "INVALID_TAG_IN_FINAL_APP_URL" = 28,
    "REDUNDANT_NESTED_FINAL_APP_URL_TAG" = 29,
    "MULTIPLE_APP_URLS_FOR_OSTYPE" = 30,
    "INVALID_OSTYPE" = 31,
    "INVALID_PROTOCOL_FOR_APP_URL" = 32,
    "INVALID_PACKAGE_ID_FOR_APP_URL" = 33,
    "URL_CUSTOM_PARAMETERS_COUNT_EXCEEDS_LIMIT" = 34,
    "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_KEY" = 39,
    "INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_VALUE" = 40,
    "INVALID_TAG_IN_URL_CUSTOM_PARAMETER_VALUE" = 41,
    "REDUNDANT_NESTED_URL_CUSTOM_PARAMETER_TAG" = 42,
    "MISSING_PROTOCOL" = 43,
    "INVALID_PROTOCOL" = 52,
    "INVALID_URL" = 44,
    "DESTINATION_URL_DEPRECATED" = 45,
    "INVALID_TAG_IN_URL" = 46,
    "MISSING_URL_TAG" = 47,
    "DUPLICATE_URL_ID" = 48,
    "INVALID_URL_ID" = 49,
    "FINAL_URL_SUFFIX_MALFORMED" = 50,
    "INVALID_TAG_IN_FINAL_URL_SUFFIX" = 51,
    "INVALID_TOP_LEVEL_DOMAIN" = 53,
    "MALFORMED_TOP_LEVEL_DOMAIN" = 54,
    "MALFORMED_URL" = 55,
    "MISSING_HOST" = 56,
    "NULL_CUSTOM_PARAMETER_VALUE" = 57
}
/**
 * @name UserDataErrorEnum.UserDataError
 */
export declare enum UserDataError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED" = 2,
    "TOO_MANY_USER_IDENTIFIERS" = 3,
    "USER_LIST_NOT_APPLICABLE" = 4
}
/**
 * @name UserListErrorEnum.UserListError
 */
export declare enum UserListError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED" = 2,
    "CONCRETE_TYPE_REQUIRED" = 3,
    "CONVERSION_TYPE_ID_REQUIRED" = 4,
    "DUPLICATE_CONVERSION_TYPES" = 5,
    "INVALID_CONVERSION_TYPE" = 6,
    "INVALID_DESCRIPTION" = 7,
    "INVALID_NAME" = 8,
    "INVALID_TYPE" = 9,
    "CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND" = 10,
    "INVALID_USER_LIST_LOGICAL_RULE_OPERAND" = 11,
    "NAME_ALREADY_USED" = 12,
    "NEW_CONVERSION_TYPE_NAME_REQUIRED" = 13,
    "CONVERSION_TYPE_NAME_ALREADY_USED" = 14,
    "OWNERSHIP_REQUIRED_FOR_SET" = 15,
    "USER_LIST_MUTATE_NOT_SUPPORTED" = 16,
    "INVALID_RULE" = 17,
    "INVALID_DATE_RANGE" = 27,
    "CAN_NOT_MUTATE_SENSITIVE_USERLIST" = 28,
    "MAX_NUM_RULEBASED_USERLISTS" = 29,
    "CANNOT_MODIFY_BILLABLE_RECORD_COUNT" = 30,
    "APP_ID_NOT_SET" = 31,
    "USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST" = 32,
    "ADVERTISER_NOT_WHITELISTED_FOR_USING_UPLOADED_DATA" = 33,
    "RULE_TYPE_IS_NOT_SUPPORTED" = 34,
    "CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND" = 35,
    "CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS" = 36
}
/**
 * @name YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationError
 */
export declare enum YoutubeVideoRegistrationError {
    "UNSPECIFIED" = 0,
    "UNKNOWN" = 1,
    "VIDEO_NOT_FOUND" = 2,
    "VIDEO_NOT_ACCESSIBLE" = 3,
    "VIDEO_NOT_ELIGIBLE" = 4
}