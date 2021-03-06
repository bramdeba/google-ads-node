export interface AdTextAsset {
    text?: string;
    pinned_field?: ServedAssetFieldType;
}
export interface AdImageAsset {
    asset?: string;
}
export interface AdVideoAsset {
    asset?: string;
}
export interface AdMediaBundleAsset {
    asset?: string;
}
export interface TextAdInfo {
    headline?: string;
    description1?: string;
    description2?: string;
}
export interface ExpandedTextAdInfo {
    headline_part1?: string;
    headline_part2?: string;
    headline_part3?: string;
    description?: string;
    description2?: string;
    path1?: string;
    path2?: string;
}
export interface CallOnlyAdInfo {
    country_code?: string;
    phone_number?: string;
    business_name?: string;
    headline1?: string;
    headline2?: string;
    description1?: string;
    description2?: string;
    call_tracked?: boolean;
    disable_call_conversion?: boolean;
    phone_number_verification_url?: string;
    conversion_action?: string;
    conversion_reporting_state?: CallConversionReportingState;
}
export interface ExpandedDynamicSearchAdInfo {
    description?: string;
    description2?: string;
}
export interface HotelAdInfo {
}
export interface ShoppingSmartAdInfo {
}
export interface ShoppingProductAdInfo {
}
export interface ShoppingComparisonListingAdInfo {
    headline?: string;
}
export interface GmailAdInfo {
    teaser?: GmailTeaser;
    header_image?: string;
    marketing_image?: string;
    marketing_image_headline?: string;
    marketing_image_description?: string;
    marketing_image_display_call_to_action?: DisplayCallToAction;
    product_images?: ProductImage[];
    product_videos?: ProductVideo[];
}
export interface GmailTeaser {
    headline?: string;
    description?: string;
    business_name?: string;
    logo_image?: string;
}
export interface DisplayCallToAction {
    text?: string;
    text_color?: string;
    url_collection_id?: string;
}
export interface ProductImage {
    product_image?: string;
    description?: string;
    display_call_to_action?: DisplayCallToAction;
}
export interface ProductVideo {
    product_video?: string;
}
export interface ImageAdInfo {
    pixel_width?: number;
    pixel_height?: number;
    image_url?: string;
    preview_pixel_width?: number;
    preview_pixel_height?: number;
    preview_image_url?: string;
    mime_type?: MimeType;
    name?: string;
    media_file?: string;
    data?: string;
    ad_id_to_copy_image_from?: number;
}
export interface VideoBumperInStreamAdInfo {
    companion_banner?: string;
}
export interface VideoNonSkippableInStreamAdInfo {
    companion_banner?: string;
}
export interface VideoTrueViewInStreamAdInfo {
    action_button_label?: string;
    action_headline?: string;
    companion_banner?: string;
}
export interface VideoOutstreamAdInfo {
    headline?: string;
    description?: string;
}
export interface VideoTrueViewDiscoveryAdInfo {
    headline?: string;
    description1?: string;
    description2?: string;
}
export interface VideoAdInfo {
    media_file?: string;
    in_stream?: VideoTrueViewInStreamAdInfo;
    bumper?: VideoBumperInStreamAdInfo;
    out_stream?: VideoOutstreamAdInfo;
    non_skippable?: VideoNonSkippableInStreamAdInfo;
    discovery?: VideoTrueViewDiscoveryAdInfo;
}
export interface ResponsiveSearchAdInfo {
    headlines?: AdTextAsset[];
    descriptions?: AdTextAsset[];
    path1?: string;
    path2?: string;
}
export interface LegacyResponsiveDisplayAdInfo {
    short_headline?: string;
    long_headline?: string;
    description?: string;
    business_name?: string;
    allow_flexible_color?: boolean;
    accent_color?: string;
    main_color?: string;
    call_to_action_text?: string;
    logo_image?: string;
    square_logo_image?: string;
    marketing_image?: string;
    square_marketing_image?: string;
    format_setting?: DisplayAdFormatSetting;
    price_prefix?: string;
    promo_text?: string;
}
export interface AppAdInfo {
    mandatory_ad_text?: AdTextAsset;
    headlines?: AdTextAsset[];
    descriptions?: AdTextAsset[];
    images?: AdImageAsset[];
    youtube_videos?: AdVideoAsset[];
    html_5_media_bundles?: AdMediaBundleAsset[];
}
export interface AppEngagementAdInfo {
    headlines?: AdTextAsset[];
    descriptions?: AdTextAsset[];
    images?: AdImageAsset[];
    videos?: AdVideoAsset[];
}
export interface LegacyAppInstallAdInfo {
    app_id?: string;
    app_store?: LegacyAppInstallAdAppStore;
    headline?: string;
    description1?: string;
    description2?: string;
}
export interface ResponsiveDisplayAdInfo {
    marketing_images?: AdImageAsset[];
    square_marketing_images?: AdImageAsset[];
    logo_images?: AdImageAsset[];
    square_logo_images?: AdImageAsset[];
    headlines?: AdTextAsset[];
    long_headline?: AdTextAsset;
    descriptions?: AdTextAsset[];
    youtube_videos?: AdVideoAsset[];
    business_name?: string;
    main_color?: string;
    accent_color?: string;
    allow_flexible_color?: boolean;
    call_to_action_text?: string;
    price_prefix?: string;
    promo_text?: string;
    format_setting?: DisplayAdFormatSetting;
}
export interface LocalAdInfo {
    headlines?: AdTextAsset[];
    descriptions?: AdTextAsset[];
    call_to_actions?: AdTextAsset[];
    marketing_images?: AdImageAsset[];
    logo_images?: AdImageAsset[];
    videos?: AdVideoAsset[];
    path1?: string;
    path2?: string;
}
export interface DisplayUploadAdInfo {
    display_upload_product_type?: DisplayUploadProductType;
    media_bundle?: AdMediaBundleAsset;
}
export interface YoutubeVideoAsset {
    youtube_video_id?: string;
}
export interface MediaBundleAsset {
    data?: string;
}
export interface ImageAsset {
    data?: string;
    file_size?: number;
    mime_type?: MimeType;
    full_size?: ImageDimension;
}
export interface ImageDimension {
    height_pixels?: number;
    width_pixels?: number;
    url?: string;
}
export interface TextAsset {
    text?: string;
}
export interface BookOnGoogleAsset {
}
export interface Commission {
    commission_rate_micros?: number;
}
export interface EnhancedCpc {
}
export interface ManualCpc {
    enhanced_cpc_enabled?: boolean;
}
export interface ManualCpm {
}
export interface ManualCpv {
}
export interface MaximizeConversions {
}
export interface MaximizeConversionValue {
    target_roas?: number;
}
export interface TargetCpa {
    target_cpa_micros?: number;
    cpc_bid_ceiling_micros?: number;
    cpc_bid_floor_micros?: number;
}
export interface TargetCpm {
}
export interface TargetImpressionShare {
    location?: TargetImpressionShareLocation;
    location_fraction_micros?: number;
    cpc_bid_ceiling_micros?: number;
}
export interface TargetRoas {
    target_roas?: number;
    cpc_bid_ceiling_micros?: number;
    cpc_bid_floor_micros?: number;
}
export interface TargetSpend {
    target_spend_micros?: number;
    cpc_bid_ceiling_micros?: number;
}
export interface PercentCpc {
    cpc_bid_ceiling_micros?: number;
    enhanced_cpc_enabled?: boolean;
}
export interface ClickLocation {
    city?: string;
    country?: string;
    metro?: string;
    most_specific?: string;
    region?: string;
}
export interface KeywordInfo {
    text?: string;
    match_type?: KeywordMatchType;
}
export interface PlacementInfo {
    url?: string;
}
export interface MobileAppCategoryInfo {
    mobile_app_category_constant?: string;
}
export interface MobileApplicationInfo {
    app_id?: string;
    name?: string;
}
export interface LocationInfo {
    geo_target_constant?: string;
}
export interface DeviceInfo {
    type?: Device;
}
export interface PreferredContentInfo {
    type?: PreferredContentType;
}
export interface ListingGroupInfo {
    type?: ListingGroupType;
    case_value?: ListingDimensionInfo;
    parent_ad_group_criterion?: string;
}
export interface ListingScopeInfo {
    dimensions?: ListingDimensionInfo[];
}
export interface ListingDimensionInfo {
    hotel_id?: HotelIdInfo;
    hotel_class?: HotelClassInfo;
    hotel_country_region?: HotelCountryRegionInfo;
    hotel_state?: HotelStateInfo;
    hotel_city?: HotelCityInfo;
    product_bidding_category?: ProductBiddingCategoryInfo;
    product_brand?: ProductBrandInfo;
    product_channel?: ProductChannelInfo;
    product_channel_exclusivity?: ProductChannelExclusivityInfo;
    product_condition?: ProductConditionInfo;
    product_custom_attribute?: ProductCustomAttributeInfo;
    product_item_id?: ProductItemIdInfo;
    product_type?: ProductTypeInfo;
    unknown_listing_dimension?: UnknownListingDimensionInfo;
}
export interface HotelIdInfo {
    value?: string;
}
export interface HotelClassInfo {
    value?: number;
}
export interface HotelCountryRegionInfo {
    country_region_criterion?: string;
}
export interface HotelStateInfo {
    state_criterion?: string;
}
export interface HotelCityInfo {
    city_criterion?: string;
}
export interface ProductBiddingCategoryInfo {
    id?: number;
    country_code?: string;
    level?: ProductBiddingCategoryLevel;
}
export interface ProductBrandInfo {
    value?: string;
}
export interface ProductChannelInfo {
    channel?: ProductChannel;
}
export interface ProductChannelExclusivityInfo {
    channel_exclusivity?: ProductChannelExclusivity;
}
export interface ProductConditionInfo {
    condition?: ProductCondition;
}
export interface ProductCustomAttributeInfo {
    value?: string;
    index?: ProductCustomAttributeIndex;
}
export interface ProductItemIdInfo {
    value?: string;
}
export interface ProductTypeInfo {
    value?: string;
    level?: ProductTypeLevel;
}
export interface UnknownListingDimensionInfo {
}
export interface HotelDateSelectionTypeInfo {
    type?: HotelDateSelectionType;
}
export interface HotelAdvanceBookingWindowInfo {
    min_days?: number;
    max_days?: number;
}
export interface HotelLengthOfStayInfo {
    min_nights?: number;
    max_nights?: number;
}
export interface HotelCheckInDayInfo {
    day_of_week?: DayOfWeek;
}
export interface InteractionTypeInfo {
    type?: InteractionType;
}
export interface AdScheduleInfo {
    start_minute?: MinuteOfHour;
    end_minute?: MinuteOfHour;
    start_hour?: number;
    end_hour?: number;
    day_of_week?: DayOfWeek;
}
export interface AgeRangeInfo {
    type?: AgeRangeType;
}
export interface GenderInfo {
    type?: GenderType;
}
export interface IncomeRangeInfo {
    type?: IncomeRangeType;
}
export interface ParentalStatusInfo {
    type?: ParentalStatusType;
}
export interface YouTubeVideoInfo {
    video_id?: string;
}
export interface YouTubeChannelInfo {
    channel_id?: string;
}
export interface UserListInfo {
    user_list?: string;
}
export interface ProximityInfo {
    geo_point?: GeoPointInfo;
    radius?: number;
    radius_units?: ProximityRadiusUnits;
    address?: AddressInfo;
}
export interface GeoPointInfo {
    longitude_in_micro_degrees?: number;
    latitude_in_micro_degrees?: number;
}
export interface AddressInfo {
    postal_code?: string;
    province_code?: string;
    country_code?: string;
    province_name?: string;
    street_address?: string;
    street_address2?: string;
    city_name?: string;
}
export interface TopicInfo {
    topic_constant?: string;
    path?: string[];
}
export interface LanguageInfo {
    language_constant?: string;
}
export interface IpBlockInfo {
    ip_address?: string;
}
export interface ContentLabelInfo {
    type?: ContentLabelType;
}
export interface CarrierInfo {
    carrier_constant?: string;
}
export interface UserInterestInfo {
    user_interest_category?: string;
}
export interface WebpageInfo {
    criterion_name?: string;
    conditions?: WebpageConditionInfo[];
}
export interface WebpageConditionInfo {
    operand?: WebpageConditionOperand;
    operator?: WebpageConditionOperator;
    argument?: string;
}
export interface OperatingSystemVersionInfo {
    operating_system_version_constant?: string;
}
export interface AppPaymentModelInfo {
    type?: AppPaymentModelType;
}
export interface MobileDeviceInfo {
    mobile_device_constant?: string;
}
export interface CustomAffinityInfo {
    custom_affinity?: string;
}
export interface CustomIntentInfo {
    custom_intent?: string;
}
export interface LocationGroupInfo {
    feed?: string;
    geo_target_constants?: string[];
    radius?: number;
    radius_units?: LocationGroupRadiusUnits;
}
export interface CriterionCategoryAvailability {
    channel?: CriterionCategoryChannelAvailability;
    locale?: CriterionCategoryLocaleAvailability[];
}
export interface CriterionCategoryChannelAvailability {
    availability_mode?: CriterionCategoryChannelAvailabilityMode;
    advertising_channel_type?: AdvertisingChannelType;
    advertising_channel_sub_type?: AdvertisingChannelSubType[];
    include_default_channel_sub_type?: boolean;
}
export interface CriterionCategoryLocaleAvailability {
    availability_mode?: CriterionCategoryLocaleAvailabilityMode;
    country_code?: string;
    language_code?: string;
}
export interface CustomParameter {
    key?: string;
    value?: string;
}
export interface DateRange {
    start_date?: string;
    end_date?: string;
}
export interface ExplorerAutoOptimizerSetting {
    opt_in?: boolean;
}
export interface AppFeedItem {
    link_text?: string;
    app_id?: string;
    app_store?: AppStore;
    final_urls?: string[];
    final_mobile_urls?: string[];
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    final_url_suffix?: string;
}
export interface CallFeedItem {
    phone_number?: string;
    country_code?: string;
    call_tracking_enabled?: boolean;
    call_conversion_action?: string;
    call_conversion_tracking_disabled?: boolean;
    call_conversion_reporting_state?: CallConversionReportingState;
}
export interface CalloutFeedItem {
    callout_text?: string;
}
export interface LocationFeedItem {
    business_name?: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    province?: string;
    postal_code?: string;
    country_code?: string;
    phone_number?: string;
}
export interface AffiliateLocationFeedItem {
    business_name?: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    province?: string;
    postal_code?: string;
    country_code?: string;
    phone_number?: string;
    chain_id?: number;
    chain_name?: string;
}
export interface TextMessageFeedItem {
    business_name?: string;
    country_code?: string;
    phone_number?: string;
    text?: string;
    extension_text?: string;
}
export interface PriceFeedItem {
    type?: PriceExtensionType;
    price_qualifier?: PriceExtensionPriceQualifier;
    tracking_url_template?: string;
    language_code?: string;
    price_offerings?: PriceOffer[];
    final_url_suffix?: string;
}
export interface PriceOffer {
    header?: string;
    description?: string;
    price?: Money;
    unit?: PriceExtensionPriceUnit;
    final_urls?: string[];
    final_mobile_urls?: string[];
}
export interface PromotionFeedItem {
    promotion_target?: string;
    discount_modifier?: PromotionExtensionDiscountModifier;
    promotion_start_date?: string;
    promotion_end_date?: string;
    occasion?: PromotionExtensionOccasion;
    final_urls?: string[];
    final_mobile_urls?: string[];
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    final_url_suffix?: string;
    language_code?: string;
    percent_off?: number;
    money_amount_off?: Money;
    promotion_code?: string;
    orders_over_amount?: Money;
}
export interface StructuredSnippetFeedItem {
    header?: string;
    values?: string[];
}
export interface SitelinkFeedItem {
    link_text?: string;
    line1?: string;
    line2?: string;
    final_urls?: string[];
    final_mobile_urls?: string[];
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    final_url_suffix?: string;
}
export interface HotelCalloutFeedItem {
    text?: string;
    language_code?: string;
}
export interface Money {
    currency_code?: string;
    amount_micros?: number;
}
export interface FinalAppUrl {
    os_type?: AppUrlOperatingSystemType;
    url?: string;
}
export interface FrequencyCapEntry {
    key?: FrequencyCapKey;
    cap?: number;
}
export interface FrequencyCapKey {
    level?: FrequencyCapLevel;
    event_type?: FrequencyCapEventType;
    time_unit?: FrequencyCapTimeUnit;
    time_length?: number;
}
export interface KeywordPlanHistoricalMetrics {
    avg_monthly_searches?: number;
    monthly_search_volumes?: MonthlySearchVolume[];
    competition?: KeywordPlanCompetitionLevel;
    competition_index?: number;
    low_top_of_page_bid_micros?: number;
    high_top_of_page_bid_micros?: number;
}
export interface MonthlySearchVolume {
    year?: number;
    month?: MonthOfYear;
    monthly_searches?: number;
}
export interface MatchingFunction {
    function_string?: string;
    operator?: MatchingFunctionOperator;
    left_operands?: Operand[];
    right_operands?: Operand[];
}
export interface ConstantOperand {
    string_value?: string;
    long_value?: number;
    boolean_value?: boolean;
    double_value?: number;
}
export interface FeedAttributeOperand {
    feed_id?: number;
    feed_attribute_id?: number;
}
export interface FunctionOperand {
    matching_function?: MatchingFunction;
}
export interface RequestContextOperand {
    context_type?: MatchingFunctionContextType;
}
export interface Operand {
    constant_operand?: ConstantOperand;
    feed_attribute_operand?: FeedAttributeOperand;
    function_operand?: FunctionOperand;
    request_context_operand?: RequestContextOperand;
}
export interface Metrics {
    absolute_top_impression_percentage?: number;
    active_view_cpm?: number;
    active_view_ctr?: number;
    active_view_impressions?: number;
    active_view_measurability?: number;
    active_view_measurable_cost_micros?: number;
    active_view_measurable_impressions?: number;
    active_view_viewability?: number;
    all_conversions_from_interactions_rate?: number;
    all_conversions_value?: number;
    all_conversions?: number;
    all_conversions_value_per_cost?: number;
    all_conversions_from_click_to_call?: number;
    all_conversions_from_directions?: number;
    all_conversions_from_interactions_value_per_interaction?: number;
    all_conversions_from_menu?: number;
    all_conversions_from_order?: number;
    all_conversions_from_other_engagement?: number;
    all_conversions_from_store_visit?: number;
    all_conversions_from_store_website?: number;
    average_cost?: number;
    average_cpc?: number;
    average_cpe?: number;
    average_cpm?: number;
    average_cpv?: number;
    average_page_views?: number;
    average_time_on_site?: number;
    benchmark_average_max_cpc?: number;
    benchmark_ctr?: number;
    bounce_rate?: number;
    clicks?: number;
    combined_clicks?: number;
    combined_clicks_per_query?: number;
    combined_queries?: number;
    content_budget_lost_impression_share?: number;
    content_impression_share?: number;
    conversion_last_received_request_date_time?: string;
    conversion_last_conversion_date?: string;
    content_rank_lost_impression_share?: number;
    conversions_from_interactions_rate?: number;
    conversions_value?: number;
    conversions_value_per_cost?: number;
    conversions_from_interactions_value_per_interaction?: number;
    conversions?: number;
    cost_micros?: number;
    cost_per_all_conversions?: number;
    cost_per_conversion?: number;
    cost_per_current_model_attributed_conversion?: number;
    cross_device_conversions?: number;
    ctr?: number;
    current_model_attributed_conversions?: number;
    current_model_attributed_conversions_from_interactions_rate?: number;
    current_model_attributed_conversions_from_interactions_value_per_interaction?: number;
    current_model_attributed_conversions_value?: number;
    current_model_attributed_conversions_value_per_cost?: number;
    engagement_rate?: number;
    engagements?: number;
    hotel_average_lead_value_micros?: number;
    hotel_price_difference_percentage?: number;
    hotel_eligible_impressions?: number;
    historical_creative_quality_score?: QualityScoreBucket;
    historical_landing_page_quality_score?: QualityScoreBucket;
    historical_quality_score?: number;
    historical_search_predicted_ctr?: QualityScoreBucket;
    gmail_forwards?: number;
    gmail_saves?: number;
    gmail_secondary_clicks?: number;
    impressions_from_store_reach?: number;
    impressions?: number;
    interaction_rate?: number;
    interactions?: number;
    interaction_event_types?: InteractionEventType[];
    invalid_click_rate?: number;
    invalid_clicks?: number;
    message_chats?: number;
    message_impressions?: number;
    message_chat_rate?: number;
    mobile_friendly_clicks_percentage?: number;
    organic_clicks?: number;
    organic_clicks_per_query?: number;
    organic_impressions?: number;
    organic_impressions_per_query?: number;
    organic_queries?: number;
    percent_new_visitors?: number;
    phone_calls?: number;
    phone_impressions?: number;
    phone_through_rate?: number;
    relative_ctr?: number;
    search_absolute_top_impression_share?: number;
    search_budget_lost_absolute_top_impression_share?: number;
    search_budget_lost_impression_share?: number;
    search_budget_lost_top_impression_share?: number;
    search_click_share?: number;
    search_exact_match_impression_share?: number;
    search_impression_share?: number;
    search_rank_lost_absolute_top_impression_share?: number;
    search_rank_lost_impression_share?: number;
    search_rank_lost_top_impression_share?: number;
    search_top_impression_share?: number;
    speed_score?: number;
    top_impression_percentage?: number;
    valid_accelerated_mobile_pages_clicks_percentage?: number;
    value_per_all_conversions?: number;
    value_per_conversion?: number;
    value_per_current_model_attributed_conversion?: number;
    video_quartile_100_rate?: number;
    video_quartile_25_rate?: number;
    video_quartile_50_rate?: number;
    video_quartile_75_rate?: number;
    video_view_rate?: number;
    video_views?: number;
    view_through_conversions?: number;
}
export interface OfflineUserAddressInfo {
    hashed_first_name?: string;
    hashed_last_name?: string;
    city?: string;
    state?: string;
    country_code?: string;
    postal_code?: string;
}
export interface UserIdentifier {
    hashed_email?: string;
    hashed_phone_number?: string;
    mobile_id?: string;
    third_party_user_id?: string;
    address_info?: OfflineUserAddressInfo;
}
export interface TransactionAttribute {
    transaction_date_time?: string;
    transaction_amount_micros?: number;
    currency_code?: string;
    conversion_action?: string;
    order_id?: string;
    store_attribute?: StoreAttribute;
    custom_value?: string;
}
export interface StoreAttribute {
    store_code?: string;
}
export interface UserData {
    user_identifiers?: UserIdentifier[];
    transaction_attribute?: TransactionAttribute;
}
export interface CustomerMatchUserListMetadata {
    user_list?: string;
}
export interface StoreSalesMetadata {
    loyalty_fraction?: number;
    transaction_upload_fraction?: number;
    custom_key?: string;
    third_party_metadata?: StoreSalesThirdPartyMetadata;
}
export interface StoreSalesThirdPartyMetadata {
    advertiser_upload_date_time?: string;
    valid_transaction_fraction?: number;
    partner_match_fraction?: number;
    partner_upload_fraction?: number;
    bridge_map_version_id?: string;
    partner_id?: number;
}
export interface PolicyViolationKey {
    policy_name?: string;
    violating_text?: string;
}
export interface PolicyValidationParameter {
    ignorable_policy_topics?: string[];
    exempt_policy_violation_keys?: PolicyViolationKey[];
}
export interface PolicyTopicEntry {
    topic?: string;
    type?: PolicyTopicEntryType;
    evidences?: PolicyTopicEvidence[];
    constraints?: PolicyTopicConstraint[];
}
export declare type PolicyTopicEvidence = {
    website_list?: {
        websites?: string[];
    };
} | {
    text_list?: {
        texts?: string[];
    };
} | {
    language_code?: string;
} | {
    destination_text_list?: {
        destination_texts?: string[];
    };
} | {
    destination_mismatch?: {
        url_types?: PolicyTopicEvidenceDestinationMismatchUrlType[];
    };
} | {
    destination_not_working?: {
        expanded_url?: string;
        device?: PolicyTopicEvidenceDestinationNotWorkingDevice;
        last_checked_date_time?: string;
        dns_error_type?: PolicyTopicEvidenceDestinationNotWorkingDnsErrorType;
        http_error_code?: number;
    };
};
export declare type PolicyTopicConstraint = {
    country_constraint_list?: {
        total_targeted_countries?: number;
        countries?: {
            country_criterion?: string;
        }[];
    };
} | {
    reseller_constraint?: {};
} | {
    certificate_missing_in_country_list?: {
        total_targeted_countries?: number;
        countries?: {
            country_criterion?: string;
        }[];
    };
} | {
    certificate_domain_mismatch_in_country_list?: {
        total_targeted_countries?: number;
        countries?: {
            country_criterion?: string;
        }[];
    };
};
export interface RealTimeBiddingSetting {
    opt_in?: boolean;
}
export interface Segments {
    ad_network_type?: AdNetworkType;
    click_type?: ClickType;
    conversion_action?: string;
    conversion_action_category?: ConversionActionCategory;
    conversion_action_name?: string;
    conversion_adjustment?: boolean;
    conversion_attribution_event_type?: ConversionAttributionEventType;
    conversion_lag_bucket?: ConversionLagBucket;
    conversion_or_adjustment_lag_bucket?: ConversionOrAdjustmentLagBucket;
    date?: string;
    day_of_week?: DayOfWeek;
    device?: Device;
    external_conversion_source?: ExternalConversionSource;
    geo_target_airport?: string;
    geo_target_canton?: string;
    geo_target_city?: string;
    geo_target_country?: string;
    geo_target_county?: string;
    geo_target_district?: string;
    geo_target_metro?: string;
    geo_target_most_specific_location?: string;
    geo_target_postal_code?: string;
    geo_target_province?: string;
    geo_target_region?: string;
    geo_target_state?: string;
    hotel_booking_window_days?: number;
    hotel_center_id?: number;
    hotel_check_in_date?: string;
    hotel_check_in_day_of_week?: DayOfWeek;
    hotel_city?: string;
    hotel_class?: number;
    hotel_country?: string;
    hotel_date_selection_type?: HotelDateSelectionType;
    hotel_length_of_stay?: number;
    hotel_rate_rule_id?: string;
    hotel_rate_type?: HotelRateType;
    hotel_price_bucket?: HotelPriceBucket;
    hotel_state?: string;
    hour?: number;
    interaction_on_this_extension?: boolean;
    keyword?: Keyword;
    month?: string;
    month_of_year?: MonthOfYear;
    partner_hotel_id?: string;
    placeholder_type?: PlaceholderType;
    product_aggregator_id?: number;
    product_bidding_category_level1?: string;
    product_bidding_category_level2?: string;
    product_bidding_category_level3?: string;
    product_bidding_category_level4?: string;
    product_bidding_category_level5?: string;
    product_brand?: string;
    product_channel?: ProductChannel;
    product_channel_exclusivity?: ProductChannelExclusivity;
    product_condition?: ProductCondition;
    product_country?: string;
    product_custom_attribute0?: string;
    product_custom_attribute1?: string;
    product_custom_attribute2?: string;
    product_custom_attribute3?: string;
    product_custom_attribute4?: string;
    product_item_id?: string;
    product_language?: string;
    product_merchant_id?: number;
    product_store_id?: string;
    product_title?: string;
    product_type_l1?: string;
    product_type_l2?: string;
    product_type_l3?: string;
    product_type_l4?: string;
    product_type_l5?: string;
    quarter?: string;
    search_engine_results_page_type?: SearchEngineResultsPageType;
    search_term_match_type?: SearchTermMatchType;
    slot?: Slot;
    webpage?: string;
    week?: string;
    year?: number;
}
export interface Keyword {
    ad_group_criterion?: string;
    info?: KeywordInfo;
}
export interface BidModifierSimulationPointList {
    points?: BidModifierSimulationPoint[];
}
export interface CpcBidSimulationPointList {
    points?: CpcBidSimulationPoint[];
}
export interface CpvBidSimulationPointList {
    points?: CpvBidSimulationPoint[];
}
export interface TargetCpaSimulationPointList {
    points?: TargetCpaSimulationPoint[];
}
export interface TargetRoasSimulationPointList {
    points?: TargetRoasSimulationPoint[];
}
export interface BidModifierSimulationPoint {
    bid_modifier?: number;
    biddable_conversions?: number;
    biddable_conversions_value?: number;
    clicks?: number;
    cost_micros?: number;
    impressions?: number;
    top_slot_impressions?: number;
    parent_biddable_conversions?: number;
    parent_biddable_conversions_value?: number;
    parent_clicks?: number;
    parent_cost_micros?: number;
    parent_impressions?: number;
    parent_top_slot_impressions?: number;
    parent_required_budget_micros?: number;
}
export interface CpcBidSimulationPoint {
    cpc_bid_micros?: number;
    biddable_conversions?: number;
    biddable_conversions_value?: number;
    clicks?: number;
    cost_micros?: number;
    impressions?: number;
    top_slot_impressions?: number;
}
export interface CpvBidSimulationPoint {
    cpv_bid_micros?: number;
    cost_micros?: number;
    impressions?: number;
    views?: number;
}
export interface TargetCpaSimulationPoint {
    target_cpa_micros?: number;
    biddable_conversions?: number;
    biddable_conversions_value?: number;
    clicks?: number;
    cost_micros?: number;
    impressions?: number;
    top_slot_impressions?: number;
}
export interface TargetRoasSimulationPoint {
    target_roas?: number;
    biddable_conversions?: number;
    biddable_conversions_value?: number;
    clicks?: number;
    cost_micros?: number;
    impressions?: number;
    top_slot_impressions?: number;
}
export interface TagSnippet {
    type?: TrackingCodeType;
    page_format?: TrackingCodePageFormat;
    global_site_tag?: string;
    event_snippet?: string;
}
export interface TargetingSetting {
    target_restrictions?: TargetRestriction[];
    target_restriction_operations?: TargetRestrictionOperation[];
}
export interface TargetRestriction {
    targeting_dimension?: TargetingDimension;
    bid_only?: boolean;
}
export interface Operator {
}
export interface TargetRestrictionOperation {
    operator?: Operator;
    value?: TargetRestriction;
}
export interface TextLabel {
    background_color?: string;
    description?: string;
}
export interface UrlCollection {
    url_collection_id?: string;
    final_urls?: string[];
    final_mobile_urls?: string[];
    tracking_url_template?: string;
}
export interface SimilarUserListInfo {
    seed_user_list?: string;
}
export interface CrmBasedUserListInfo {
    app_id?: string;
    upload_key_type?: CustomerMatchUploadKeyType;
    data_source_type?: UserListCrmDataSourceType;
}
export interface UserListRuleInfo {
    rule_type?: UserListRuleType;
    rule_item_groups?: UserListRuleItemGroupInfo[];
}
export interface UserListRuleItemGroupInfo {
    rule_items?: UserListRuleItemInfo[];
}
export interface UserListRuleItemInfo {
    name?: string;
    number_rule_item?: UserListNumberRuleItemInfo;
    string_rule_item?: UserListStringRuleItemInfo;
    date_rule_item?: UserListDateRuleItemInfo;
}
export interface UserListDateRuleItemInfo {
    operator?: UserListDateRuleItemOperator;
    value?: string;
    offset_in_days?: number;
}
export interface UserListNumberRuleItemInfo {
    operator?: UserListNumberRuleItemOperator;
    value?: number;
}
export interface UserListStringRuleItemInfo {
    operator?: UserListStringRuleItemOperator;
    value?: string;
}
export interface CombinedRuleUserListInfo {
    left_operand?: UserListRuleInfo;
    right_operand?: UserListRuleInfo;
    rule_operator?: UserListCombinedRuleOperator;
}
export interface DateSpecificRuleUserListInfo {
    rule?: UserListRuleInfo;
    start_date?: string;
    end_date?: string;
}
export interface ExpressionRuleUserListInfo {
    rule?: UserListRuleInfo;
}
export interface RuleBasedUserListInfo {
    prepopulation_status?: UserListPrepopulationStatus;
    combined_rule_user_list?: CombinedRuleUserListInfo;
    date_specific_rule_user_list?: DateSpecificRuleUserListInfo;
    expression_rule_user_list?: ExpressionRuleUserListInfo;
}
export interface LogicalUserListInfo {
    rules?: UserListLogicalRuleInfo[];
}
export interface UserListLogicalRuleInfo {
    operator?: UserListLogicalRuleOperator;
    rule_operands?: LogicalUserListOperandInfo[];
}
export interface LogicalUserListOperandInfo {
    user_list?: string;
}
export interface BasicUserListInfo {
    actions?: UserListActionInfo[];
}
export interface UserListActionInfo {
    conversion_action?: string;
    remarketing_action?: string;
}
export interface Value {
    null_value?: undefined;
    number_value?: number;
    string_value?: string;
    bool_value?: boolean;
    struct_value?: {
        fields?: Value;
    };
    list_value?: {
        values?: Value[];
    };
}
export interface PendingAccountBudgetProposal {
    account_budget_proposal?: string;
    proposal_type?: AccountBudgetProposalType;
    name?: string;
    start_date_time?: string;
    purchase_order_number?: string;
    notes?: string;
    creation_date_time?: string;
    end_date_time?: string;
    end_time_type?: TimeType;
    spending_limit_micros?: number;
    spending_limit_type?: SpendingLimitType;
}
export interface AccountBudget {
    resource_name?: string;
    id?: number;
    billing_setup?: string;
    status?: AccountBudgetStatus;
    name?: string;
    proposed_start_date_time?: string;
    approved_start_date_time?: string;
    total_adjustments_micros?: number;
    amount_served_micros?: number;
    purchase_order_number?: string;
    notes?: string;
    pending_proposal?: PendingAccountBudgetProposal;
    proposed_end_date_time?: string;
    proposed_end_time_type?: TimeType;
    approved_end_date_time?: string;
    approved_end_time_type?: TimeType;
    proposed_spending_limit_micros?: number;
    proposed_spending_limit_type?: SpendingLimitType;
    approved_spending_limit_micros?: number;
    approved_spending_limit_type?: SpendingLimitType;
    adjusted_spending_limit_micros?: number;
    adjusted_spending_limit_type?: SpendingLimitType;
}
export interface AccountBudgetProposal {
    resource_name?: string;
    id?: number;
    billing_setup?: string;
    account_budget?: string;
    proposal_type?: AccountBudgetProposalType;
    status?: AccountBudgetProposalStatus;
    proposed_name?: string;
    approved_start_date_time?: string;
    proposed_purchase_order_number?: string;
    proposed_notes?: string;
    creation_date_time?: string;
    approval_date_time?: string;
    proposed_start_date_time?: string;
    proposed_start_time_type?: TimeType;
    proposed_end_date_time?: string;
    proposed_end_time_type?: TimeType;
    approved_end_date_time?: string;
    approved_end_time_type?: TimeType;
    proposed_spending_limit_micros?: number;
    proposed_spending_limit_type?: SpendingLimitType;
    approved_spending_limit_micros?: number;
    approved_spending_limit_type?: SpendingLimitType;
}
export interface AccountLink {
    resource_name?: string;
    account_link_id?: number;
    status?: AccountLinkStatus;
    type?: LinkedAccountType;
    third_party_app_analytics?: {
        app_analytics_provider_id?: number;
        app_id?: string;
        app_vendor?: MobileAppVendor;
    };
}
export interface ThirdPartyAppAnalyticsLinkIdentifier {
    app_analytics_provider_id?: number;
    app_id?: string;
    app_vendor?: MobileAppVendor;
}
export interface Ad {
    resource_name?: string;
    id?: number;
    final_urls?: string[];
    final_app_urls?: FinalAppUrl[];
    final_mobile_urls?: string[];
    tracking_url_template?: string;
    final_url_suffix?: string;
    url_custom_parameters?: CustomParameter[];
    display_url?: string;
    type?: AdType;
    added_by_google_ads?: boolean;
    device_preference?: Device;
    url_collections?: UrlCollection[];
    name?: string;
    system_managed_resource_source?: SystemManagedResourceSource;
    text_ad?: TextAdInfo;
    expanded_text_ad?: ExpandedTextAdInfo;
    call_only_ad?: CallOnlyAdInfo;
    expanded_dynamic_search_ad?: ExpandedDynamicSearchAdInfo;
    hotel_ad?: HotelAdInfo;
    shopping_smart_ad?: ShoppingSmartAdInfo;
    shopping_product_ad?: ShoppingProductAdInfo;
    gmail_ad?: GmailAdInfo;
    image_ad?: ImageAdInfo;
    video_ad?: VideoAdInfo;
    responsive_search_ad?: ResponsiveSearchAdInfo;
    legacy_responsive_display_ad?: LegacyResponsiveDisplayAdInfo;
    app_ad?: AppAdInfo;
    legacy_app_install_ad?: LegacyAppInstallAdInfo;
    responsive_display_ad?: ResponsiveDisplayAdInfo;
    local_ad?: LocalAdInfo;
    display_upload_ad?: DisplayUploadAdInfo;
    app_engagement_ad?: AppEngagementAdInfo;
    shopping_comparison_listing_ad?: ShoppingComparisonListingAdInfo;
}
export interface AdGroup {
    resource_name?: string;
    id?: number;
    name?: string;
    status?: AdGroupStatus;
    type?: AdGroupType;
    ad_rotation_mode?: AdGroupAdRotationMode;
    base_ad_group?: string;
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    campaign?: string;
    cpc_bid_micros?: number;
    cpm_bid_micros?: number;
    target_cpa_micros?: number;
    cpv_bid_micros?: number;
    target_cpm_micros?: number;
    target_roas?: number;
    percent_cpc_bid_micros?: number;
    explorer_auto_optimizer_setting?: ExplorerAutoOptimizerSetting;
    display_custom_bid_dimension?: TargetingDimension;
    final_url_suffix?: string;
    targeting_setting?: TargetingSetting;
    effective_target_cpa_micros?: number;
    effective_target_cpa_source?: BiddingSource;
    effective_target_roas?: number;
    effective_target_roas_source?: BiddingSource;
    labels?: string[];
}
export interface AdGroupAd {
    resource_name?: string;
    status?: AdGroupAdStatus;
    ad_group?: string;
    ad?: Ad;
    policy_summary?: {
        policy_topic_entries?: PolicyTopicEntry[];
        review_status?: PolicyReviewStatus;
        approval_status?: PolicyApprovalStatus;
    };
    ad_strength?: AdStrength;
}
export interface AdGroupAdPolicySummary {
    policy_topic_entries?: PolicyTopicEntry[];
    review_status?: PolicyReviewStatus;
    approval_status?: PolicyApprovalStatus;
}
export interface AdGroupAdAssetView {
    resource_name?: string;
    ad_group_ad?: string;
    asset?: string;
    field_type?: AssetFieldType;
    policy_summary?: {
        policy_topic_entries?: PolicyTopicEntry[];
        review_status?: PolicyReviewStatus;
        approval_status?: PolicyApprovalStatus;
    };
    performance_label?: AssetPerformanceLabel;
}
export interface AdGroupAdAssetPolicySummary {
    policy_topic_entries?: PolicyTopicEntry[];
    review_status?: PolicyReviewStatus;
    approval_status?: PolicyApprovalStatus;
}
export interface AdGroupAdLabel {
    resource_name?: string;
    ad_group_ad?: string;
    label?: string;
}
export interface AdGroupAudienceView {
    resource_name?: string;
}
export interface AdGroupBidModifier {
    resource_name?: string;
    ad_group?: string;
    criterion_id?: number;
    bid_modifier?: number;
    base_ad_group?: string;
    bid_modifier_source?: BidModifierSource;
    hotel_date_selection_type?: HotelDateSelectionTypeInfo;
    hotel_advance_booking_window?: HotelAdvanceBookingWindowInfo;
    hotel_length_of_stay?: HotelLengthOfStayInfo;
    hotel_check_in_day?: HotelCheckInDayInfo;
    device?: DeviceInfo;
    preferred_content?: PreferredContentInfo;
}
export interface QualityInfo {
    quality_score?: number;
    creative_quality_score?: QualityScoreBucket;
    post_click_quality_score?: QualityScoreBucket;
    search_predicted_ctr?: QualityScoreBucket;
}
export interface PositionEstimates {
    first_page_cpc_micros?: number;
    first_position_cpc_micros?: number;
    top_of_page_cpc_micros?: number;
    estimated_add_clicks_at_first_position_cpc?: number;
    estimated_add_cost_at_first_position_cpc?: number;
}
export interface AdGroupCriterion {
    resource_name?: string;
    criterion_id?: number;
    status?: AdGroupCriterionStatus;
    quality_info?: QualityInfo;
    ad_group?: string;
    type?: CriterionType;
    negative?: boolean;
    system_serving_status?: CriterionSystemServingStatus;
    approval_status?: AdGroupCriterionApprovalStatus;
    disapproval_reasons?: string[];
    bid_modifier?: number;
    cpc_bid_micros?: number;
    cpm_bid_micros?: number;
    cpv_bid_micros?: number;
    percent_cpc_bid_micros?: number;
    effective_cpc_bid_micros?: number;
    effective_cpm_bid_micros?: number;
    effective_cpv_bid_micros?: number;
    effective_percent_cpc_bid_micros?: number;
    effective_cpc_bid_source?: BiddingSource;
    effective_cpm_bid_source?: BiddingSource;
    effective_cpv_bid_source?: BiddingSource;
    effective_percent_cpc_bid_source?: BiddingSource;
    position_estimates?: PositionEstimates;
    final_urls?: string[];
    final_mobile_urls?: string[];
    final_url_suffix?: string;
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    keyword?: KeywordInfo;
    placement?: PlacementInfo;
    mobile_app_category?: MobileAppCategoryInfo;
    mobile_application?: MobileApplicationInfo;
    listing_group?: ListingGroupInfo;
    age_range?: AgeRangeInfo;
    gender?: GenderInfo;
    income_range?: IncomeRangeInfo;
    parental_status?: ParentalStatusInfo;
    user_list?: UserListInfo;
    youtube_video?: YouTubeVideoInfo;
    youtube_channel?: YouTubeChannelInfo;
    topic?: TopicInfo;
    user_interest?: UserInterestInfo;
    webpage?: WebpageInfo;
    app_payment_model?: AppPaymentModelInfo;
    custom_affinity?: CustomAffinityInfo;
    custom_intent?: CustomIntentInfo;
}
export interface AdGroupCriterionLabel {
    resource_name?: string;
    ad_group_criterion?: string;
    label?: string;
}
export interface AdGroupCriterionSimulation {
    resource_name?: string;
    ad_group_id?: number;
    criterion_id?: number;
    type?: SimulationType;
    modification_method?: SimulationModificationMethod;
    start_date?: string;
    end_date?: string;
    cpc_bid_point_list?: CpcBidSimulationPointList;
}
export interface AdGroupExtensionSetting {
    resource_name?: string;
    extension_type?: ExtensionType;
    ad_group?: string;
    extension_feed_items?: string[];
    device?: ExtensionSettingDevice;
}
export interface AdGroupFeed {
    resource_name?: string;
    feed?: string;
    ad_group?: string;
    placeholder_types?: PlaceholderType[];
    matching_function?: MatchingFunction;
    status?: FeedLinkStatus;
}
export interface AdGroupLabel {
    resource_name?: string;
    ad_group?: string;
    label?: string;
}
export interface AdGroupSimulation {
    resource_name?: string;
    ad_group_id?: number;
    type?: SimulationType;
    modification_method?: SimulationModificationMethod;
    start_date?: string;
    end_date?: string;
    cpc_bid_point_list?: CpcBidSimulationPointList;
    cpv_bid_point_list?: CpvBidSimulationPointList;
    target_cpa_point_list?: TargetCpaSimulationPointList;
    target_roas_point_list?: TargetRoasSimulationPointList;
}
export interface AdParameter {
    resource_name?: string;
    ad_group_criterion?: string;
    parameter_index?: number;
    insertion_text?: string;
}
export interface AdScheduleView {
    resource_name?: string;
}
export interface AgeRangeView {
    resource_name?: string;
}
export interface Asset {
    resource_name?: string;
    id?: number;
    name?: string;
    type?: AssetType;
    youtube_video_asset?: YoutubeVideoAsset;
    media_bundle_asset?: MediaBundleAsset;
    image_asset?: ImageAsset;
    text_asset?: TextAsset;
    book_on_google_asset?: BookOnGoogleAsset;
}
export interface BatchJobMetadata {
    creation_date_time?: string;
    completion_date_time?: string;
    estimated_completion_ratio?: number;
    operation_count?: number;
    executed_operation_count?: number;
}
export interface BatchJob {
    resource_name?: string;
    id?: number;
    next_add_sequence_token?: string;
    metadata?: BatchJobMetadata;
    status?: BatchJobStatus;
    long_running_operation?: string;
}
export interface BiddingStrategy {
    resource_name?: string;
    id?: number;
    name?: string;
    status?: BiddingStrategyStatus;
    type?: BiddingStrategyType;
    campaign_count?: number;
    non_removed_campaign_count?: number;
    enhanced_cpc?: EnhancedCpc;
    target_cpa?: TargetCpa;
    target_impression_share?: TargetImpressionShare;
    target_roas?: TargetRoas;
    target_spend?: TargetSpend;
}
export interface PaymentsAccountInfo {
    payments_account_id?: string;
    payments_account_name?: string;
    payments_profile_id?: string;
    payments_profile_name?: string;
    secondary_payments_profile_id?: string;
}
export interface BillingSetup {
    resource_name?: string;
    id?: number;
    status?: BillingSetupStatus;
    payments_account?: string;
    payments_account_info?: PaymentsAccountInfo;
    start_date_time?: string;
    start_time_type?: TimeType;
    end_date_time?: string;
    end_time_type?: TimeType;
}
export interface NetworkSettings {
    target_google_search?: boolean;
    target_search_network?: boolean;
    target_content_network?: boolean;
    target_partner_search_network?: boolean;
}
export interface HotelSettingInfo {
    hotel_center_id?: number;
}
export interface SelectiveOptimization {
    conversion_actions?: string[];
}
export interface DynamicSearchAdsSetting {
    domain_name?: string;
    language_code?: string;
    use_supplied_urls_only?: boolean;
    feeds?: string[];
}
export interface GeoTargetTypeSetting {
    positive_geo_target_type?: PositiveGeoTargetType;
    negative_geo_target_type?: NegativeGeoTargetType;
}
export interface LocalCampaignSetting {
    location_source_type?: LocationSourceType;
}
export interface ShoppingSetting {
    merchant_id?: number;
    sales_country?: string;
    campaign_priority?: number;
    enable_local?: boolean;
}
export interface OptimizationGoalSetting {
    optimization_goal_types?: OptimizationGoalType[];
}
export interface TrackingSetting {
    tracking_url?: string;
}
export interface AppCampaignSetting {
    bidding_strategy_goal_type?: AppCampaignBiddingStrategyGoalType;
    app_id?: string;
    app_store?: AppCampaignAppStore;
}
export interface VanityPharma {
    vanity_pharma_display_url_mode?: VanityPharmaDisplayUrlMode;
    vanity_pharma_text?: VanityPharmaText;
}
export interface Campaign {
    resource_name?: string;
    id?: number;
    name?: string;
    status?: CampaignStatus;
    serving_status?: CampaignServingStatus;
    ad_serving_optimization_status?: AdServingOptimizationStatus;
    advertising_channel_type?: AdvertisingChannelType;
    advertising_channel_sub_type?: AdvertisingChannelSubType;
    tracking_url_template?: string;
    url_custom_parameters?: CustomParameter[];
    real_time_bidding_setting?: RealTimeBiddingSetting;
    network_settings?: NetworkSettings;
    hotel_setting?: HotelSettingInfo;
    dynamic_search_ads_setting?: DynamicSearchAdsSetting;
    shopping_setting?: ShoppingSetting;
    targeting_setting?: TargetingSetting;
    geo_target_type_setting?: GeoTargetTypeSetting;
    local_campaign_setting?: LocalCampaignSetting;
    app_campaign_setting?: AppCampaignSetting;
    labels?: string[];
    experiment_type?: CampaignExperimentType;
    base_campaign?: string;
    campaign_budget?: string;
    bidding_strategy_type?: BiddingStrategyType;
    start_date?: string;
    end_date?: string;
    final_url_suffix?: string;
    frequency_caps?: FrequencyCapEntry[];
    video_brand_safety_suitability?: BrandSafetySuitability;
    vanity_pharma?: VanityPharma;
    selective_optimization?: SelectiveOptimization;
    optimization_goal_setting?: OptimizationGoalSetting;
    tracking_setting?: TrackingSetting;
    payment_mode?: PaymentMode;
    optimization_score?: number;
    bidding_strategy?: string;
    commission?: Commission;
    manual_cpc?: ManualCpc;
    manual_cpm?: ManualCpm;
    manual_cpv?: ManualCpv;
    maximize_conversions?: MaximizeConversions;
    maximize_conversion_value?: MaximizeConversionValue;
    target_cpa?: TargetCpa;
    target_impression_share?: TargetImpressionShare;
    target_roas?: TargetRoas;
    target_spend?: TargetSpend;
    percent_cpc?: PercentCpc;
    target_cpm?: TargetCpm;
}
export interface CampaignAudienceView {
    resource_name?: string;
}
export interface CampaignBidModifier {
    resource_name?: string;
    campaign?: string;
    criterion_id?: number;
    bid_modifier?: number;
    interaction_type?: InteractionTypeInfo;
}
export interface CampaignBudget {
    resource_name?: string;
    id?: number;
    name?: string;
    amount_micros?: number;
    total_amount_micros?: number;
    status?: BudgetStatus;
    delivery_method?: BudgetDeliveryMethod;
    explicitly_shared?: boolean;
    reference_count?: number;
    has_recommended_budget?: boolean;
    recommended_budget_amount_micros?: number;
    period?: BudgetPeriod;
    recommended_budget_estimated_change_weekly_clicks?: number;
    recommended_budget_estimated_change_weekly_cost_micros?: number;
    recommended_budget_estimated_change_weekly_interactions?: number;
    recommended_budget_estimated_change_weekly_views?: number;
    type?: BudgetType;
}
export interface CampaignCriterion {
    resource_name?: string;
    campaign?: string;
    criterion_id?: number;
    bid_modifier?: number;
    negative?: boolean;
    type?: CriterionType;
    status?: CampaignCriterionStatus;
    keyword?: KeywordInfo;
    placement?: PlacementInfo;
    mobile_app_category?: MobileAppCategoryInfo;
    mobile_application?: MobileApplicationInfo;
    location?: LocationInfo;
    device?: DeviceInfo;
    ad_schedule?: AdScheduleInfo;
    age_range?: AgeRangeInfo;
    gender?: GenderInfo;
    income_range?: IncomeRangeInfo;
    parental_status?: ParentalStatusInfo;
    user_list?: UserListInfo;
    youtube_video?: YouTubeVideoInfo;
    youtube_channel?: YouTubeChannelInfo;
    proximity?: ProximityInfo;
    topic?: TopicInfo;
    listing_scope?: ListingScopeInfo;
    language?: LanguageInfo;
    ip_block?: IpBlockInfo;
    content_label?: ContentLabelInfo;
    carrier?: CarrierInfo;
    user_interest?: UserInterestInfo;
    webpage?: WebpageInfo;
    operating_system_version?: OperatingSystemVersionInfo;
    mobile_device?: MobileDeviceInfo;
    location_group?: LocationGroupInfo;
    custom_affinity?: CustomAffinityInfo;
}
export interface CampaignCriterionSimulation {
    resource_name?: string;
    campaign_id?: number;
    criterion_id?: number;
    type?: SimulationType;
    modification_method?: SimulationModificationMethod;
    start_date?: string;
    end_date?: string;
    bid_modifier_point_list?: BidModifierSimulationPointList;
}
export interface CampaignDraft {
    resource_name?: string;
    draft_id?: number;
    base_campaign?: string;
    name?: string;
    draft_campaign?: string;
    status?: CampaignDraftStatus;
    has_experiment_running?: boolean;
    long_running_operation?: string;
}
export interface CampaignExperiment {
    resource_name?: string;
    id?: number;
    campaign_draft?: string;
    name?: string;
    description?: string;
    traffic_split_percent?: number;
    traffic_split_type?: CampaignExperimentTrafficSplitType;
    experiment_campaign?: string;
    status?: CampaignExperimentStatus;
    long_running_operation?: string;
    start_date?: string;
    end_date?: string;
}
export interface CampaignExtensionSetting {
    resource_name?: string;
    extension_type?: ExtensionType;
    campaign?: string;
    extension_feed_items?: string[];
    device?: ExtensionSettingDevice;
}
export interface CampaignFeed {
    resource_name?: string;
    feed?: string;
    campaign?: string;
    placeholder_types?: PlaceholderType[];
    matching_function?: MatchingFunction;
    status?: FeedLinkStatus;
}
export interface CampaignLabel {
    resource_name?: string;
    campaign?: string;
    label?: string;
}
export interface CampaignSharedSet {
    resource_name?: string;
    campaign?: string;
    shared_set?: string;
    status?: CampaignSharedSetStatus;
}
export interface CarrierConstant {
    resource_name?: string;
    id?: number;
    name?: string;
    country_code?: string;
}
export interface ChangeStatus {
    resource_name?: string;
    last_change_date_time?: string;
    resource_type?: ChangeStatusResourceType;
    campaign?: string;
    ad_group?: string;
    resource_status?: ChangeStatusOperation;
    ad_group_ad?: string;
    ad_group_criterion?: string;
    campaign_criterion?: string;
    feed?: string;
    feed_item?: string;
    ad_group_feed?: string;
    campaign_feed?: string;
    ad_group_bid_modifier?: string;
}
export interface ClickView {
    resource_name?: string;
    gclid?: string;
    area_of_interest?: ClickLocation;
    location_of_presence?: ClickLocation;
    page_number?: number;
    ad_group_ad?: string;
}
export interface AttributionModelSettings {
    attribution_model?: AttributionModel;
    data_driven_model_status?: DataDrivenModelStatus;
}
export interface ValueSettings {
    default_value?: number;
    default_currency_code?: string;
    always_use_default_value?: boolean;
}
export interface ThirdPartyAppAnalyticsSettings {
    event_name?: string;
}
export interface FirebaseSettings {
    event_name?: string;
    project_id?: string;
}
export interface ConversionAction {
    resource_name?: string;
    id?: number;
    name?: string;
    status?: ConversionActionStatus;
    type?: ConversionActionType;
    category?: ConversionActionCategory;
    owner_customer?: string;
    include_in_conversions_metric?: boolean;
    click_through_lookback_window_days?: number;
    view_through_lookback_window_days?: number;
    value_settings?: ValueSettings;
    counting_type?: ConversionActionCountingType;
    attribution_model_settings?: AttributionModelSettings;
    tag_snippets?: TagSnippet[];
    phone_call_duration_seconds?: number;
    app_id?: string;
    mobile_app_vendor?: MobileAppVendor;
    firebase_settings?: FirebaseSettings;
    third_party_app_analytics_settings?: ThirdPartyAppAnalyticsSettings;
}
export interface CurrencyConstant {
    resource_name?: string;
    code?: string;
    name?: string;
    symbol?: string;
    billable_unit_micros?: number;
}
export interface CustomInterest {
    resource_name?: string;
    id?: number;
    status?: CustomInterestStatus;
    name?: string;
    type?: CustomInterestType;
    description?: string;
    members?: {
        member_type?: CustomInterestMemberType;
        parameter?: string;
    }[];
}
export interface CustomInterestMember {
    member_type?: CustomInterestMemberType;
    parameter?: string;
}
export interface Customer {
    resource_name?: string;
    id?: number;
    descriptive_name?: string;
    currency_code?: string;
    time_zone?: string;
    tracking_url_template?: string;
    final_url_suffix?: string;
    auto_tagging_enabled?: boolean;
    has_partners_badge?: boolean;
    manager?: boolean;
    test_account?: boolean;
    call_reporting_setting?: {
        call_reporting_enabled?: boolean;
        call_conversion_reporting_enabled?: boolean;
        call_conversion_action?: string;
    };
    conversion_tracking_setting?: {
        conversion_tracking_id?: number;
        cross_account_conversion_tracking_id?: number;
    };
    remarketing_setting?: {
        google_global_site_tag?: string;
    };
    pay_per_conversion_eligibility_failure_reasons?: CustomerPayPerConversionEligibilityFailureReason[];
    optimization_score?: number;
}
export interface CallReportingSetting {
    call_reporting_enabled?: boolean;
    call_conversion_reporting_enabled?: boolean;
    call_conversion_action?: string;
}
export interface ConversionTrackingSetting {
    conversion_tracking_id?: number;
    cross_account_conversion_tracking_id?: number;
}
export interface RemarketingSetting {
    google_global_site_tag?: string;
}
export interface CustomerClient {
    resource_name?: string;
    client_customer?: string;
    hidden?: boolean;
    level?: number;
    time_zone?: string;
    test_account?: boolean;
    manager?: boolean;
    descriptive_name?: string;
    currency_code?: string;
    id?: number;
}
export interface CustomerClientLink {
    resource_name?: string;
    client_customer?: string;
    manager_link_id?: number;
    status?: ManagerLinkStatus;
    hidden?: boolean;
}
export interface CustomerExtensionSetting {
    resource_name?: string;
    extension_type?: ExtensionType;
    extension_feed_items?: string[];
    device?: ExtensionSettingDevice;
}
export interface CustomerFeed {
    resource_name?: string;
    feed?: string;
    placeholder_types?: PlaceholderType[];
    matching_function?: MatchingFunction;
    status?: FeedLinkStatus;
}
export interface CustomerLabel {
    resource_name?: string;
    customer?: string;
    label?: string;
}
export interface CustomerManagerLink {
    resource_name?: string;
    manager_customer?: string;
    manager_link_id?: number;
    status?: ManagerLinkStatus;
}
export interface CustomerNegativeCriterion {
    resource_name?: string;
    id?: number;
    type?: CriterionType;
    content_label?: ContentLabelInfo;
    mobile_application?: MobileApplicationInfo;
    mobile_app_category?: MobileAppCategoryInfo;
    placement?: PlacementInfo;
    youtube_video?: YouTubeVideoInfo;
    youtube_channel?: YouTubeChannelInfo;
}
export interface DetailPlacementView {
    resource_name?: string;
    placement?: string;
    display_name?: string;
    group_placement_target_url?: string;
    target_url?: string;
    placement_type?: PlacementType;
}
export interface DisplayKeywordView {
    resource_name?: string;
}
export interface DistanceView {
    resource_name?: string;
    distance_bucket?: DistanceBucket;
    metric_system?: boolean;
}
export interface DomainCategory {
    resource_name?: string;
    campaign?: string;
    category?: string;
    language_code?: string;
    domain?: string;
    coverage_fraction?: number;
    category_rank?: number;
    has_children?: boolean;
    recommended_cpc_bid_micros?: number;
}
export interface DynamicSearchAdsSearchTermView {
    resource_name?: string;
    search_term?: string;
    headline?: string;
    landing_page?: string;
    page_url?: string;
    has_negative_keyword?: boolean;
    has_matching_keyword?: boolean;
    has_negative_url?: boolean;
}
export interface ExpandedLandingPageView {
    resource_name?: string;
    expanded_final_url?: string;
}
export interface ExtensionFeedItem {
    resource_name?: string;
    id?: number;
    extension_type?: ExtensionType;
    start_date_time?: string;
    end_date_time?: string;
    ad_schedules?: AdScheduleInfo[];
    device?: FeedItemTargetDevice;
    targeted_geo_target_constant?: string;
    targeted_keyword?: KeywordInfo;
    status?: FeedItemStatus;
    sitelink_feed_item?: SitelinkFeedItem;
    structured_snippet_feed_item?: StructuredSnippetFeedItem;
    app_feed_item?: AppFeedItem;
    call_feed_item?: CallFeedItem;
    callout_feed_item?: CalloutFeedItem;
    text_message_feed_item?: TextMessageFeedItem;
    price_feed_item?: PriceFeedItem;
    promotion_feed_item?: PromotionFeedItem;
    location_feed_item?: LocationFeedItem;
    affiliate_location_feed_item?: AffiliateLocationFeedItem;
    hotel_callout_feed_item?: HotelCalloutFeedItem;
    targeted_campaign?: string;
    targeted_ad_group?: string;
}
export interface OAuthInfo {
    http_method?: string;
    http_request_url?: string;
    http_authorization_header?: string;
}
export interface PlacesLocationFeedData {
    oauth_info?: OAuthInfo;
    email_address?: string;
    business_account_id?: string;
    business_name_filter?: string;
    category_filters?: string[];
    label_filters?: string[];
}
export interface AffiliateLocationFeedData {
    chain_ids?: number[];
    relationship_type?: AffiliateLocationFeedRelationshipType;
}
export interface Feed {
    resource_name?: string;
    id?: number;
    name?: string;
    attributes?: {
        id?: number;
        name?: string;
        type?: FeedAttributeType;
        is_part_of_key?: boolean;
    }[];
    attribute_operations?: {
        operator?: Operator;
        value?: {
            id?: number;
            name?: string;
            type?: FeedAttributeType;
            is_part_of_key?: boolean;
        };
    }[];
    origin?: FeedOrigin;
    status?: FeedStatus;
    places_location_feed_data?: PlacesLocationFeedData;
    affiliate_location_feed_data?: AffiliateLocationFeedData;
}
export interface FeedAttribute {
    id?: number;
    name?: string;
    type?: FeedAttributeType;
    is_part_of_key?: boolean;
}
export interface Operator {
}
export interface FeedAttributeOperation {
    operator?: Operator;
    value?: FeedAttribute;
}
export interface FeedItem {
    resource_name?: string;
    feed?: string;
    id?: number;
    start_date_time?: string;
    end_date_time?: string;
    attribute_values?: {
        feed_attribute_id?: number;
        integer_value?: number;
        boolean_value?: boolean;
        string_value?: string;
        double_value?: number;
        price_value?: Money;
        integer_values?: number[];
        boolean_values?: boolean[];
        string_values?: string[];
        double_values?: number[];
    }[];
    geo_targeting_restriction?: GeoTargetingRestriction;
    url_custom_parameters?: CustomParameter[];
    status?: FeedItemStatus;
    policy_infos?: {
        placeholder_type_enum?: PlaceholderType;
        feed_mapping_resource_name?: string;
        review_status?: PolicyReviewStatus;
        approval_status?: PolicyApprovalStatus;
        policy_topic_entries?: PolicyTopicEntry[];
        validation_status?: FeedItemValidationStatus;
        validation_errors?: undefined[];
        quality_approval_status?: FeedItemQualityApprovalStatus;
        quality_disapproval_reasons?: FeedItemQualityDisapprovalReason[];
    }[];
}
export interface FeedItemAttributeValue {
    feed_attribute_id?: number;
    integer_value?: number;
    boolean_value?: boolean;
    string_value?: string;
    double_value?: number;
    price_value?: Money;
    integer_values?: number[];
    boolean_values?: boolean[];
    string_values?: string[];
    double_values?: number[];
}
export interface FeedItemPlaceholderPolicyInfo {
    placeholder_type_enum?: PlaceholderType;
    feed_mapping_resource_name?: string;
    review_status?: PolicyReviewStatus;
    approval_status?: PolicyApprovalStatus;
    policy_topic_entries?: PolicyTopicEntry[];
    validation_status?: FeedItemValidationStatus;
    validation_errors?: undefined[];
    quality_approval_status?: FeedItemQualityApprovalStatus;
    quality_disapproval_reasons?: FeedItemQualityDisapprovalReason[];
}
export interface FeedItemValidationError {
}
export interface FeedItemTarget {
    resource_name?: string;
    feed_item?: string;
    feed_item_target_type?: FeedItemTargetType;
    feed_item_target_id?: number;
    status?: FeedItemTargetStatus;
    campaign?: string;
    ad_group?: string;
    keyword?: KeywordInfo;
    geo_target_constant?: string;
    device?: FeedItemTargetDevice;
    ad_schedule?: AdScheduleInfo;
}
export interface FeedMapping {
    resource_name?: string;
    feed?: string;
    attribute_field_mappings?: {
        feed_attribute_id?: number;
        field_id?: number;
        sitelink_field?: SitelinkPlaceholderField;
        call_field?: CallPlaceholderField;
        app_field?: AppPlaceholderField;
        location_field?: LocationPlaceholderField;
        affiliate_location_field?: AffiliateLocationPlaceholderField;
        callout_field?: CalloutPlaceholderField;
        structured_snippet_field?: StructuredSnippetPlaceholderField;
        message_field?: MessagePlaceholderField;
        price_field?: PricePlaceholderField;
        promotion_field?: PromotionPlaceholderField;
        ad_customizer_field?: AdCustomizerPlaceholderField;
        dsa_page_feed_field?: DsaPageFeedCriterionField;
        location_extension_targeting_field?: LocationExtensionTargetingCriterionField;
        education_field?: EducationPlaceholderField;
        flight_field?: FlightPlaceholderField;
        custom_field?: CustomPlaceholderField;
        hotel_field?: HotelPlaceholderField;
        real_estate_field?: RealEstatePlaceholderField;
        travel_field?: TravelPlaceholderField;
        local_field?: LocalPlaceholderField;
        job_field?: JobPlaceholderField;
    }[];
    status?: FeedMappingStatus;
    placeholder_type?: PlaceholderType;
    criterion_type?: FeedMappingCriterionType;
}
export interface AttributeFieldMapping {
    feed_attribute_id?: number;
    field_id?: number;
    sitelink_field?: SitelinkPlaceholderField;
    call_field?: CallPlaceholderField;
    app_field?: AppPlaceholderField;
    location_field?: LocationPlaceholderField;
    affiliate_location_field?: AffiliateLocationPlaceholderField;
    callout_field?: CalloutPlaceholderField;
    structured_snippet_field?: StructuredSnippetPlaceholderField;
    message_field?: MessagePlaceholderField;
    price_field?: PricePlaceholderField;
    promotion_field?: PromotionPlaceholderField;
    ad_customizer_field?: AdCustomizerPlaceholderField;
    dsa_page_feed_field?: DsaPageFeedCriterionField;
    location_extension_targeting_field?: LocationExtensionTargetingCriterionField;
    education_field?: EducationPlaceholderField;
    flight_field?: FlightPlaceholderField;
    custom_field?: CustomPlaceholderField;
    hotel_field?: HotelPlaceholderField;
    real_estate_field?: RealEstatePlaceholderField;
    travel_field?: TravelPlaceholderField;
    local_field?: LocalPlaceholderField;
    job_field?: JobPlaceholderField;
}
export interface FeedPlaceholderView {
    resource_name?: string;
    placeholder_type?: PlaceholderType;
}
export interface GenderView {
    resource_name?: string;
}
export interface GeoTargetConstant {
    resource_name?: string;
    id?: number;
    name?: string;
    country_code?: string;
    target_type?: string;
    status?: GeoTargetConstantStatus;
    canonical_name?: string;
}
export interface GeographicView {
    resource_name?: string;
    location_type?: GeoTargetingType;
    country_criterion_id?: number;
}
export interface GoogleAdsField {
    resource_name?: string;
    name?: string;
    category?: GoogleAdsFieldCategory;
    selectable?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    selectable_with?: string[];
    attribute_resources?: string[];
    metrics?: string[];
    segments?: string[];
    enum_values?: string[];
    data_type?: GoogleAdsFieldDataType;
    type_url?: string;
    is_repeated?: boolean;
}
export interface GroupPlacementView {
    resource_name?: string;
    placement?: string;
    display_name?: string;
    target_url?: string;
    placement_type?: PlacementType;
}
export interface HotelGroupView {
    resource_name?: string;
}
export interface HotelPerformanceView {
    resource_name?: string;
}
export interface IncomeRangeView {
    resource_name?: string;
}
export interface AccountBudgetSummary {
    customer?: string;
    customer_descriptive_name?: string;
    account_budget?: string;
    account_budget_name?: string;
    purchase_order_number?: string;
    subtotal_amount_micros?: number;
    tax_amount_micros?: number;
    total_amount_micros?: number;
    billable_activity_date_range?: DateRange;
}
export interface Invoice {
    resource_name?: string;
    id?: string;
    type?: InvoiceType;
    billing_setup?: string;
    payments_account_id?: string;
    payments_profile_id?: string;
    issue_date?: string;
    due_date?: string;
    service_date_range?: DateRange;
    currency_code?: string;
    invoice_level_adjustments_micros?: number;
    subtotal_amount_micros?: number;
    tax_amount_micros?: number;
    total_amount_micros?: number;
    corrected_invoice?: string;
    replaced_invoices?: string[];
    pdf_url?: string;
    account_budget_summaries?: AccountBudgetSummary[];
}
export interface KeywordPlan {
    resource_name?: string;
    id?: number;
    name?: string;
    forecast_period?: {
        date_interval?: KeywordPlanForecastInterval;
        date_range?: DateRange;
    };
}
export interface KeywordPlanForecastPeriod {
    date_interval?: KeywordPlanForecastInterval;
    date_range?: DateRange;
}
export interface KeywordPlanAdGroup {
    resource_name?: string;
    keyword_plan_campaign?: string;
    id?: number;
    name?: string;
    cpc_bid_micros?: number;
}
export interface KeywordPlanAdGroupKeyword {
    resource_name?: string;
    keyword_plan_ad_group?: string;
    id?: number;
    text?: string;
    match_type?: KeywordMatchType;
    cpc_bid_micros?: number;
    negative?: boolean;
}
export interface KeywordPlanCampaign {
    resource_name?: string;
    keyword_plan?: string;
    id?: number;
    name?: string;
    language_constants?: string[];
    keyword_plan_network?: KeywordPlanNetwork;
    cpc_bid_micros?: number;
    geo_targets?: {
        geo_target_constant?: string;
    }[];
}
export interface KeywordPlanGeoTarget {
    geo_target_constant?: string;
}
export interface KeywordPlanCampaignKeyword {
    resource_name?: string;
    keyword_plan_campaign?: string;
    id?: number;
    text?: string;
    match_type?: KeywordMatchType;
    negative?: boolean;
}
export interface KeywordView {
    resource_name?: string;
}
export interface Label {
}
export interface LandingPageView {
    resource_name?: string;
    unexpanded_final_url?: string;
}
export interface LanguageConstant {
    resource_name?: string;
    id?: number;
    code?: string;
    name?: string;
    targetable?: boolean;
}
export interface LocationView {
    resource_name?: string;
}
export interface ManagedPlacementView {
    resource_name?: string;
}
export interface MediaFile {
    resource_name?: string;
    id?: number;
    type?: MediaType;
    mime_type?: MimeType;
    source_url?: string;
    name?: string;
    file_size?: number;
    image?: {
        data?: string;
    };
    media_bundle?: {
        data?: string;
    };
    audio?: {
        ad_duration_millis?: number;
    };
    video?: {
        ad_duration_millis?: number;
        youtube_video_id?: string;
        advertising_id_code?: string;
        isci_code?: string;
    };
}
export interface MediaImage {
    data?: string;
}
export interface MediaBundle {
    data?: string;
}
export interface MediaAudio {
    ad_duration_millis?: number;
}
export interface MediaVideo {
    ad_duration_millis?: number;
    youtube_video_id?: string;
    advertising_id_code?: string;
    isci_code?: string;
}
export interface MerchantCenterLink {
    resource_name?: string;
    id?: number;
    merchant_center_account_name?: string;
    status?: MerchantCenterLinkStatus;
}
export interface MobileAppCategoryConstant {
    resource_name?: string;
    id?: number;
    name?: string;
}
export interface MobileDeviceConstant {
    resource_name?: string;
    id?: number;
    name?: string;
    manufacturer_name?: string;
    operating_system_name?: string;
    type?: MobileDeviceType;
}
export interface OfflineUserDataJob {
    resource_name?: string;
    id?: number;
    external_id?: number;
    type?: OfflineUserDataJobType;
    status?: OfflineUserDataJobStatus;
    failure_reason?: OfflineUserDataJobFailureReason;
    customer_match_user_list_metadata?: CustomerMatchUserListMetadata;
    store_sales_metadata?: StoreSalesMetadata;
}
export interface OperatingSystemVersionConstant {
    resource_name?: string;
    id?: number;
    name?: string;
    os_major_version?: number;
    os_minor_version?: number;
    operator_type?: OperatingSystemVersionOperatorType;
}
export interface PaidOrganicSearchTermView {
    resource_name?: string;
    search_term?: string;
}
export interface ParentalStatusView {
    resource_name?: string;
}
export interface PaymentsAccount {
    resource_name?: string;
    payments_account_id?: string;
    name?: string;
    currency_code?: string;
    payments_profile_id?: string;
    secondary_payments_profile_id?: string;
    paying_manager_customer?: string;
}
export interface ProductBiddingCategoryConstant {
    resource_name?: string;
    id?: number;
    country_code?: string;
    product_bidding_category_constant_parent?: string;
    level?: ProductBiddingCategoryLevel;
    status?: ProductBiddingCategoryStatus;
    language_code?: string;
    localized_name?: string;
}
export interface ProductGroupView {
    resource_name?: string;
}
export interface RecommendationImpact {
    base_metrics?: {
        impressions?: number;
        clicks?: number;
        cost_micros?: number;
        conversions?: number;
        video_views?: number;
    };
    potential_metrics?: {
        impressions?: number;
        clicks?: number;
        cost_micros?: number;
        conversions?: number;
        video_views?: number;
    };
}
export interface RecommendationMetrics {
    impressions?: number;
    clicks?: number;
    cost_micros?: number;
    conversions?: number;
    video_views?: number;
}
export interface CampaignBudgetRecommendationOption {
    budget_amount_micros?: number;
    impact?: RecommendationImpact;
}
export interface CampaignBudgetRecommendation {
    current_budget_amount_micros?: number;
    recommended_budget_amount_micros?: number;
    budget_options?: CampaignBudgetRecommendationOption[];
}
export interface KeywordRecommendation {
    keyword?: KeywordInfo;
    recommended_cpc_bid_micros?: number;
}
export interface KeywordMatchTypeRecommendation {
    keyword?: KeywordInfo;
    recommended_match_type?: KeywordMatchType;
}
export interface TextAdRecommendation {
    ad?: Ad;
    creation_date?: string;
    auto_apply_date?: string;
}
export interface CallExtensionRecommendation {
    recommended_extensions?: CallFeedItem[];
}
export interface TargetCpaOptInRecommendationOption {
    goal?: TargetCpaOptInRecommendationGoal;
    target_cpa_micros?: number;
    required_campaign_budget_amount_micros?: number;
    impact?: RecommendationImpact;
}
export interface TargetCpaOptInRecommendation {
    options?: TargetCpaOptInRecommendationOption[];
    recommended_target_cpa_micros?: number;
}
export interface SearchPartnersOptInRecommendation {
}
export interface MoveUnusedBudgetRecommendation {
    excess_campaign_budget?: string;
    budget_recommendation?: CampaignBudgetRecommendation;
}
export interface OptimizeAdRotationRecommendation {
}
export interface MaximizeConversionsOptInRecommendation {
    recommended_budget_amount_micros?: number;
}
export interface MaximizeClicksOptInRecommendation {
    recommended_budget_amount_micros?: number;
}
export interface EnhancedCpcOptInRecommendation {
}
export interface CalloutExtensionRecommendation {
    recommended_extensions?: CalloutFeedItem[];
}
export interface SitelinkExtensionRecommendation {
    recommended_extensions?: SitelinkFeedItem[];
}
export interface Recommendation {
    resource_name?: string;
    type?: RecommendationType;
    impact?: RecommendationImpact;
    campaign_budget?: string;
    campaign?: string;
    ad_group?: string;
    dismissed?: boolean;
    campaign_budget_recommendation?: CampaignBudgetRecommendation;
    keyword_recommendation?: KeywordRecommendation;
    text_ad_recommendation?: TextAdRecommendation;
    target_cpa_opt_in_recommendation?: TargetCpaOptInRecommendation;
    maximize_conversions_opt_in_recommendation?: MaximizeConversionsOptInRecommendation;
    enhanced_cpc_opt_in_recommendation?: EnhancedCpcOptInRecommendation;
    search_partners_opt_in_recommendation?: SearchPartnersOptInRecommendation;
    maximize_clicks_opt_in_recommendation?: MaximizeClicksOptInRecommendation;
    optimize_ad_rotation_recommendation?: OptimizeAdRotationRecommendation;
    callout_extension_recommendation?: CalloutExtensionRecommendation;
    sitelink_extension_recommendation?: SitelinkExtensionRecommendation;
    call_extension_recommendation?: CallExtensionRecommendation;
    keyword_match_type_recommendation?: KeywordMatchTypeRecommendation;
    move_unused_budget_recommendation?: MoveUnusedBudgetRecommendation;
}
export interface RemarketingAction {
    resource_name?: string;
    id?: number;
    name?: string;
    tag_snippets?: TagSnippet[];
}
export interface SearchTermView {
    resource_name?: string;
    search_term?: string;
    ad_group?: string;
    status?: SearchTermTargetingStatus;
}
export interface SharedCriterion {
    resource_name?: string;
    shared_set?: string;
    criterion_id?: number;
    type?: CriterionType;
    keyword?: KeywordInfo;
    youtube_video?: YouTubeVideoInfo;
    youtube_channel?: YouTubeChannelInfo;
    placement?: PlacementInfo;
    mobile_app_category?: MobileAppCategoryInfo;
    mobile_application?: MobileApplicationInfo;
}
export interface SharedSet {
    resource_name?: string;
    id?: number;
    type?: SharedSetType;
    name?: string;
    status?: SharedSetStatus;
    member_count?: number;
    reference_count?: number;
}
export interface ShoppingPerformanceView {
    resource_name?: string;
}
export interface ThirdPartyAppAnalyticsLink {
    resource_name?: string;
    shareable_link_id?: string;
}
export interface TopicConstant {
    resource_name?: string;
    id?: number;
    topic_constant_parent?: string;
    path?: string[];
}
export interface TopicView {
    resource_name?: string;
}
export interface UserInterest {
    resource_name?: string;
    taxonomy_type?: UserInterestTaxonomyType;
    user_interest_id?: number;
    name?: string;
    user_interest_parent?: string;
    launched_to_all?: boolean;
    availabilities?: CriterionCategoryAvailability[];
}
export interface UserList {
    resource_name?: string;
    id?: number;
    read_only?: boolean;
    name?: string;
    description?: string;
    membership_status?: UserListMembershipStatus;
    integration_code?: string;
    membership_life_span?: number;
    size_for_display?: number;
    size_range_for_display?: UserListSizeRange;
    size_for_search?: number;
    size_range_for_search?: UserListSizeRange;
    type?: UserListType;
    closing_reason?: UserListClosingReason;
    access_reason?: AccessReason;
    account_user_list_status?: UserListAccessStatus;
    eligible_for_search?: boolean;
    eligible_for_display?: boolean;
    crm_based_user_list?: CrmBasedUserListInfo;
    similar_user_list?: SimilarUserListInfo;
    rule_based_user_list?: RuleBasedUserListInfo;
    logical_user_list?: LogicalUserListInfo;
    basic_user_list?: BasicUserListInfo;
}
export interface UserLocationView {
    resource_name?: string;
    country_criterion_id?: number;
    targeting_location?: boolean;
}
export interface Video {
    resource_name?: string;
    id?: string;
    channel_id?: string;
    duration_millis?: number;
    title?: string;
}
export interface AccountBudgetProposalService {
}
export interface GetAccountBudgetProposalRequest {
    resource_name?: string;
}
export interface MutateAccountBudgetProposalRequest {
    customer_id?: string;
    operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AccountBudgetProposal;
        remove?: string;
    };
    validate_only?: boolean;
}
export interface AccountBudgetProposalOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AccountBudgetProposal;
    remove?: string;
}
export interface MutateAccountBudgetProposalResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateAccountBudgetProposalResult {
    resource_name?: string;
}
export interface AccountBudgetService {
}
export interface GetAccountBudgetRequest {
    resource_name?: string;
}
export interface AccountLinkService {
}
export interface GetAccountLinkRequest {
    resource_name?: string;
}
export interface MutateAccountLinkRequest {
    customer_id?: string;
    operation?: {
        create?: AccountLink;
        remove?: string;
    };
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AccountLinkOperation {
    create?: AccountLink;
    remove?: string;
}
export interface MutateAccountLinkResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateAccountLinkResult {
    resource_name?: string;
}
export interface AdGroupAdAssetViewService {
}
export interface GetAdGroupAdAssetViewRequest {
    resource_name?: string;
}
export interface AdGroupAdLabelService {
}
export interface GetAdGroupAdLabelRequest {
    resource_name?: string;
}
export interface MutateAdGroupAdLabelsRequest {
    customer_id?: string;
    operations?: {
        create?: AdGroupAdLabel;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupAdLabelOperation {
    create?: AdGroupAdLabel;
    remove?: string;
}
export interface MutateAdGroupAdLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupAdLabelResult {
    resource_name?: string;
}
export interface AdGroupAdService {
}
export interface GetAdGroupAdRequest {
    resource_name?: string;
}
export interface MutateAdGroupAdsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        policy_validation_parameter?: PolicyValidationParameter;
        create?: AdGroupAd;
        update?: AdGroupAd;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupAdOperation {
    update_mask?: {
        paths?: string[];
    };
    policy_validation_parameter?: PolicyValidationParameter;
    create?: AdGroupAd;
    update?: AdGroupAd;
    remove?: string;
}
export interface MutateAdGroupAdsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupAdResult {
    resource_name?: string;
}
export interface AdGroupAudienceViewService {
}
export interface GetAdGroupAudienceViewRequest {
    resource_name?: string;
}
export interface AdGroupBidModifierService {
}
export interface GetAdGroupBidModifierRequest {
    resource_name?: string;
}
export interface MutateAdGroupBidModifiersRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AdGroupBidModifier;
        update?: AdGroupBidModifier;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupBidModifierOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AdGroupBidModifier;
    update?: AdGroupBidModifier;
    remove?: string;
}
export interface MutateAdGroupBidModifiersResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupBidModifierResult {
    resource_name?: string;
}
export interface AdGroupCriterionLabelService {
}
export interface GetAdGroupCriterionLabelRequest {
    resource_name?: string;
}
export interface MutateAdGroupCriterionLabelsRequest {
    customer_id?: string;
    operations?: {
        create?: AdGroupCriterionLabel;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupCriterionLabelOperation {
    create?: AdGroupCriterionLabel;
    remove?: string;
}
export interface MutateAdGroupCriterionLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupCriterionLabelResult {
    resource_name?: string;
}
export interface AdGroupCriterionService {
}
export interface GetAdGroupCriterionRequest {
    resource_name?: string;
}
export interface MutateAdGroupCriteriaRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        exempt_policy_violation_keys?: PolicyViolationKey[];
        create?: AdGroupCriterion;
        update?: AdGroupCriterion;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupCriterionOperation {
    update_mask?: {
        paths?: string[];
    };
    exempt_policy_violation_keys?: PolicyViolationKey[];
    create?: AdGroupCriterion;
    update?: AdGroupCriterion;
    remove?: string;
}
export interface MutateAdGroupCriteriaResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupCriterionResult {
    resource_name?: string;
}
export interface AdGroupCriterionSimulationService {
}
export interface GetAdGroupCriterionSimulationRequest {
    resource_name?: string;
}
export interface AdGroupExtensionSettingService {
}
export interface GetAdGroupExtensionSettingRequest {
    resource_name?: string;
}
export interface MutateAdGroupExtensionSettingsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AdGroupExtensionSetting;
        update?: AdGroupExtensionSetting;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupExtensionSettingOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AdGroupExtensionSetting;
    update?: AdGroupExtensionSetting;
    remove?: string;
}
export interface MutateAdGroupExtensionSettingsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupExtensionSettingResult {
    resource_name?: string;
}
export interface AdGroupFeedService {
}
export interface GetAdGroupFeedRequest {
    resource_name?: string;
}
export interface MutateAdGroupFeedsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AdGroupFeed;
        update?: AdGroupFeed;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupFeedOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AdGroupFeed;
    update?: AdGroupFeed;
    remove?: string;
}
export interface MutateAdGroupFeedsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupFeedResult {
    resource_name?: string;
}
export interface AdGroupLabelService {
}
export interface GetAdGroupLabelRequest {
    resource_name?: string;
}
export interface MutateAdGroupLabelsRequest {
    customer_id?: string;
    operations?: {
        create?: AdGroupLabel;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupLabelOperation {
    create?: AdGroupLabel;
    remove?: string;
}
export interface MutateAdGroupLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupLabelResult {
    resource_name?: string;
}
export interface AdGroupService {
}
export interface GetAdGroupRequest {
    resource_name?: string;
}
export interface MutateAdGroupsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AdGroup;
        update?: AdGroup;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdGroupOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AdGroup;
    update?: AdGroup;
    remove?: string;
}
export interface MutateAdGroupsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdGroupResult {
    resource_name?: string;
}
export interface AdGroupSimulationService {
}
export interface GetAdGroupSimulationRequest {
    resource_name?: string;
}
export interface AdParameterService {
}
export interface GetAdParameterRequest {
    resource_name?: string;
}
export interface MutateAdParametersRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: AdParameter;
        update?: AdParameter;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface AdParameterOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: AdParameter;
    update?: AdParameter;
    remove?: string;
}
export interface MutateAdParametersResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdParameterResult {
    resource_name?: string;
}
export interface AdScheduleViewService {
}
export interface GetAdScheduleViewRequest {
    resource_name?: string;
}
export interface AdService {
}
export interface GetAdRequest {
    resource_name?: string;
}
export interface MutateAdsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        update?: Ad;
    }[];
}
export interface AdOperation {
    update_mask?: {
        paths?: string[];
    };
    update?: Ad;
}
export interface MutateAdsResponse {
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAdResult {
    resource_name?: string;
}
export interface AgeRangeViewService {
}
export interface GetAgeRangeViewRequest {
    resource_name?: string;
}
export interface AssetService {
}
export interface GetAssetRequest {
    resource_name?: string;
}
export interface MutateAssetsRequest {
    customer_id?: string;
    operations?: {
        create?: Asset;
    }[];
}
export interface AssetOperation {
    create?: Asset;
}
export interface MutateAssetsResponse {
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateAssetResult {
    resource_name?: string;
}
export interface BatchJobService {
}
export interface MutateBatchJobRequest {
    customer_id?: string;
    operation?: {
        create?: BatchJob;
        remove?: string;
    };
}
export interface BatchJobOperation {
    create?: BatchJob;
    remove?: string;
}
export interface MutateBatchJobResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateBatchJobResult {
    resource_name?: string;
}
export interface GetBatchJobRequest {
    resource_name?: string;
}
export interface RunBatchJobRequest {
    resource_name?: string;
}
export interface AddBatchJobOperationsRequest {
    resource_name?: string;
    sequence_token?: string;
    mutate_operations?: {
        ad_group_ad_label_operation?: AdGroupAdLabelOperation;
        ad_group_ad_operation?: AdGroupAdOperation;
        ad_group_bid_modifier_operation?: AdGroupBidModifierOperation;
        ad_group_criterion_label_operation?: AdGroupCriterionLabelOperation;
        ad_group_criterion_operation?: AdGroupCriterionOperation;
        ad_group_extension_setting_operation?: AdGroupExtensionSettingOperation;
        ad_group_feed_operation?: AdGroupFeedOperation;
        ad_group_label_operation?: AdGroupLabelOperation;
        ad_group_operation?: AdGroupOperation;
        ad_operation?: AdOperation;
        ad_parameter_operation?: AdParameterOperation;
        asset_operation?: AssetOperation;
        bidding_strategy_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: BiddingStrategy;
            update?: BiddingStrategy;
            remove?: string;
        };
        campaign_bid_modifier_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignBidModifier;
            update?: CampaignBidModifier;
            remove?: string;
        };
        campaign_budget_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignBudget;
            update?: CampaignBudget;
            remove?: string;
        };
        campaign_criterion_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignCriterion;
            update?: CampaignCriterion;
            remove?: string;
        };
        campaign_draft_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignDraft;
            update?: CampaignDraft;
            remove?: string;
        };
        campaign_experiment_operation?: {
            update_mask?: {
                paths?: string[];
            };
            update?: CampaignExperiment;
            remove?: string;
        };
        campaign_extension_setting_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignExtensionSetting;
            update?: CampaignExtensionSetting;
            remove?: string;
        };
        campaign_feed_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CampaignFeed;
            update?: CampaignFeed;
            remove?: string;
        };
        campaign_label_operation?: {
            create?: CampaignLabel;
            remove?: string;
        };
        campaign_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: Campaign;
            update?: Campaign;
            remove?: string;
        };
        campaign_shared_set_operation?: {
            create?: CampaignSharedSet;
            remove?: string;
        };
        conversion_action_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: ConversionAction;
            update?: ConversionAction;
            remove?: string;
        };
        customer_extension_setting_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CustomerExtensionSetting;
            update?: CustomerExtensionSetting;
            remove?: string;
        };
        customer_feed_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: CustomerFeed;
            update?: CustomerFeed;
            remove?: string;
        };
        customer_label_operation?: {
            create?: CustomerLabel;
            remove?: string;
        };
        customer_negative_criterion_operation?: {
            create?: CustomerNegativeCriterion;
            remove?: string;
        };
        customer_operation?: {
            update?: Customer;
            update_mask?: {
                paths?: string[];
            };
        };
        extension_feed_item_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: ExtensionFeedItem;
            update?: ExtensionFeedItem;
            remove?: string;
        };
        feed_item_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: FeedItem;
            update?: FeedItem;
            remove?: string;
        };
        feed_item_target_operation?: {
            create?: FeedItemTarget;
            remove?: string;
        };
        feed_mapping_operation?: {
            create?: FeedMapping;
            remove?: string;
        };
        feed_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: Feed;
            update?: Feed;
            remove?: string;
        };
        keyword_plan_ad_group_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanAdGroup;
            update?: KeywordPlanAdGroup;
            remove?: string;
        };
        keyword_plan_ad_group_keyword_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanAdGroupKeyword;
            update?: KeywordPlanAdGroupKeyword;
            remove?: string;
        };
        keyword_plan_campaign_keyword_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanCampaignKeyword;
            update?: KeywordPlanCampaignKeyword;
            remove?: string;
        };
        keyword_plan_campaign_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanCampaign;
            update?: KeywordPlanCampaign;
            remove?: string;
        };
        keyword_plan_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlan;
            update?: KeywordPlan;
            remove?: string;
        };
        label_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: Label;
            update?: Label;
            remove?: string;
        };
        media_file_operation?: {
            create?: MediaFile;
        };
        remarketing_action_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: RemarketingAction;
            update?: RemarketingAction;
        };
        shared_criterion_operation?: {
            create?: SharedCriterion;
            remove?: string;
        };
        shared_set_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: SharedSet;
            update?: SharedSet;
            remove?: string;
        };
        user_list_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: UserList;
            update?: UserList;
            remove?: string;
        };
    }[];
}
export interface AddBatchJobOperationsResponse {
    total_operations?: number;
    next_sequence_token?: string;
}
export interface ListBatchJobResultsRequest {
    resource_name?: string;
    page_token?: string;
    page_size?: number;
}
export interface ListBatchJobResultsResponse {
    results?: {
        operation_index?: number;
        mutate_operation_response?: {
            ad_group_ad_label_result?: MutateAdGroupAdLabelResult;
            ad_group_ad_result?: MutateAdGroupAdResult;
            ad_group_bid_modifier_result?: MutateAdGroupBidModifierResult;
            ad_group_criterion_label_result?: MutateAdGroupCriterionLabelResult;
            ad_group_criterion_result?: MutateAdGroupCriterionResult;
            ad_group_extension_setting_result?: MutateAdGroupExtensionSettingResult;
            ad_group_feed_result?: MutateAdGroupFeedResult;
            ad_group_label_result?: MutateAdGroupLabelResult;
            ad_group_result?: MutateAdGroupResult;
            ad_parameter_result?: MutateAdParameterResult;
            ad_result?: MutateAdResult;
            asset_result?: MutateAssetResult;
            bidding_strategy_result?: {
                resource_name?: string;
            };
            campaign_bid_modifier_result?: {
                resource_name?: string;
            };
            campaign_budget_result?: {
                resource_name?: string;
            };
            campaign_criterion_result?: {
                resource_name?: string;
            };
            campaign_draft_result?: {
                resource_name?: string;
            };
            campaign_experiment_result?: {
                resource_name?: string;
            };
            campaign_extension_setting_result?: {
                resource_name?: string;
            };
            campaign_feed_result?: {
                resource_name?: string;
            };
            campaign_label_result?: {
                resource_name?: string;
            };
            campaign_result?: {
                resource_name?: string;
            };
            campaign_shared_set_result?: {
                resource_name?: string;
            };
            conversion_action_result?: {
                resource_name?: string;
            };
            customer_extension_setting_result?: {
                resource_name?: string;
            };
            customer_feed_result?: {
                resource_name?: string;
            };
            customer_label_result?: {
                resource_name?: string;
            };
            customer_negative_criterion_result?: {
                resource_name?: string;
            };
            customer_result?: {
                resource_name?: string;
            };
            extension_feed_item_result?: {
                resource_name?: string;
            };
            feed_item_result?: {
                resource_name?: string;
            };
            feed_item_target_result?: {
                resource_name?: string;
            };
            feed_mapping_result?: {
                resource_name?: string;
            };
            feed_result?: {
                resource_name?: string;
            };
            keyword_plan_ad_group_result?: {
                resource_name?: string;
            };
            keyword_plan_campaign_result?: {
                resource_name?: string;
            };
            keyword_plan_ad_group_keyword_result?: {
                resource_name?: string;
            };
            keyword_plan_campaign_keyword_result?: {
                resource_name?: string;
            };
            keyword_plan_result?: {
                resource_name?: string;
            };
            label_result?: {
                resource_name?: string;
            };
            media_file_result?: {
                resource_name?: string;
            };
            remarketing_action_result?: {
                resource_name?: string;
            };
            shared_criterion_result?: {
                resource_name?: string;
            };
            shared_set_result?: {
                resource_name?: string;
            };
            user_list_result?: {
                resource_name?: string;
            };
        };
        status?: {
            code?: number;
            message?: string;
            details?: {
                type_url?: string;
                value?: string;
            }[];
        };
    }[];
    next_page_token?: string;
}
export interface BatchJobResult {
    operation_index?: number;
    mutate_operation_response?: {
        ad_group_ad_label_result?: MutateAdGroupAdLabelResult;
        ad_group_ad_result?: MutateAdGroupAdResult;
        ad_group_bid_modifier_result?: MutateAdGroupBidModifierResult;
        ad_group_criterion_label_result?: MutateAdGroupCriterionLabelResult;
        ad_group_criterion_result?: MutateAdGroupCriterionResult;
        ad_group_extension_setting_result?: MutateAdGroupExtensionSettingResult;
        ad_group_feed_result?: MutateAdGroupFeedResult;
        ad_group_label_result?: MutateAdGroupLabelResult;
        ad_group_result?: MutateAdGroupResult;
        ad_parameter_result?: MutateAdParameterResult;
        ad_result?: MutateAdResult;
        asset_result?: MutateAssetResult;
        bidding_strategy_result?: {
            resource_name?: string;
        };
        campaign_bid_modifier_result?: {
            resource_name?: string;
        };
        campaign_budget_result?: {
            resource_name?: string;
        };
        campaign_criterion_result?: {
            resource_name?: string;
        };
        campaign_draft_result?: {
            resource_name?: string;
        };
        campaign_experiment_result?: {
            resource_name?: string;
        };
        campaign_extension_setting_result?: {
            resource_name?: string;
        };
        campaign_feed_result?: {
            resource_name?: string;
        };
        campaign_label_result?: {
            resource_name?: string;
        };
        campaign_result?: {
            resource_name?: string;
        };
        campaign_shared_set_result?: {
            resource_name?: string;
        };
        conversion_action_result?: {
            resource_name?: string;
        };
        customer_extension_setting_result?: {
            resource_name?: string;
        };
        customer_feed_result?: {
            resource_name?: string;
        };
        customer_label_result?: {
            resource_name?: string;
        };
        customer_negative_criterion_result?: {
            resource_name?: string;
        };
        customer_result?: {
            resource_name?: string;
        };
        extension_feed_item_result?: {
            resource_name?: string;
        };
        feed_item_result?: {
            resource_name?: string;
        };
        feed_item_target_result?: {
            resource_name?: string;
        };
        feed_mapping_result?: {
            resource_name?: string;
        };
        feed_result?: {
            resource_name?: string;
        };
        keyword_plan_ad_group_result?: {
            resource_name?: string;
        };
        keyword_plan_campaign_result?: {
            resource_name?: string;
        };
        keyword_plan_ad_group_keyword_result?: {
            resource_name?: string;
        };
        keyword_plan_campaign_keyword_result?: {
            resource_name?: string;
        };
        keyword_plan_result?: {
            resource_name?: string;
        };
        label_result?: {
            resource_name?: string;
        };
        media_file_result?: {
            resource_name?: string;
        };
        remarketing_action_result?: {
            resource_name?: string;
        };
        shared_criterion_result?: {
            resource_name?: string;
        };
        shared_set_result?: {
            resource_name?: string;
        };
        user_list_result?: {
            resource_name?: string;
        };
    };
    status?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
}
export interface BiddingStrategyService {
}
export interface GetBiddingStrategyRequest {
    resource_name?: string;
}
export interface MutateBiddingStrategiesRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: BiddingStrategy;
        update?: BiddingStrategy;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface BiddingStrategyOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: BiddingStrategy;
    update?: BiddingStrategy;
    remove?: string;
}
export interface MutateBiddingStrategiesResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateBiddingStrategyResult {
    resource_name?: string;
}
export interface BillingSetupService {
}
export interface GetBillingSetupRequest {
    resource_name?: string;
}
export interface MutateBillingSetupRequest {
    customer_id?: string;
    operation?: {
        create?: BillingSetup;
        remove?: string;
    };
}
export interface BillingSetupOperation {
    create?: BillingSetup;
    remove?: string;
}
export interface MutateBillingSetupResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateBillingSetupResult {
    resource_name?: string;
}
export interface CampaignAudienceViewService {
}
export interface GetCampaignAudienceViewRequest {
    resource_name?: string;
}
export interface CampaignBidModifierService {
}
export interface GetCampaignBidModifierRequest {
    resource_name?: string;
}
export interface MutateCampaignBidModifiersRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignBidModifier;
        update?: CampaignBidModifier;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignBidModifierOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignBidModifier;
    update?: CampaignBidModifier;
    remove?: string;
}
export interface MutateCampaignBidModifiersResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignBidModifierResult {
    resource_name?: string;
}
export interface CampaignBudgetService {
}
export interface GetCampaignBudgetRequest {
    resource_name?: string;
}
export interface MutateCampaignBudgetsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignBudget;
        update?: CampaignBudget;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignBudgetOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignBudget;
    update?: CampaignBudget;
    remove?: string;
}
export interface MutateCampaignBudgetsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignBudgetResult {
    resource_name?: string;
}
export interface CampaignCriterionService {
}
export interface GetCampaignCriterionRequest {
    resource_name?: string;
}
export interface MutateCampaignCriteriaRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignCriterion;
        update?: CampaignCriterion;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignCriterionOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignCriterion;
    update?: CampaignCriterion;
    remove?: string;
}
export interface MutateCampaignCriteriaResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignCriterionResult {
    resource_name?: string;
}
export interface CampaignCriterionSimulationService {
}
export interface GetCampaignCriterionSimulationRequest {
    resource_name?: string;
}
export interface CampaignDraftService {
}
export interface GetCampaignDraftRequest {
    resource_name?: string;
}
export interface MutateCampaignDraftsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignDraft;
        update?: CampaignDraft;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface PromoteCampaignDraftRequest {
    campaign_draft?: string;
}
export interface CampaignDraftOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignDraft;
    update?: CampaignDraft;
    remove?: string;
}
export interface MutateCampaignDraftsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignDraftResult {
    resource_name?: string;
}
export interface ListCampaignDraftAsyncErrorsRequest {
    resource_name?: string;
    page_token?: string;
    page_size?: number;
}
export interface ListCampaignDraftAsyncErrorsResponse {
    errors?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    }[];
    next_page_token?: string;
}
export interface CampaignExperimentService {
}
export interface GetCampaignExperimentRequest {
    resource_name?: string;
}
export interface MutateCampaignExperimentsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        update?: CampaignExperiment;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignExperimentOperation {
    update_mask?: {
        paths?: string[];
    };
    update?: CampaignExperiment;
    remove?: string;
}
export interface MutateCampaignExperimentsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignExperimentResult {
    resource_name?: string;
}
export interface CreateCampaignExperimentRequest {
    customer_id?: string;
    campaign_experiment?: CampaignExperiment;
    validate_only?: boolean;
}
export interface CreateCampaignExperimentMetadata {
    campaign_experiment?: string;
}
export interface GraduateCampaignExperimentRequest {
    campaign_experiment?: string;
    campaign_budget?: string;
}
export interface GraduateCampaignExperimentResponse {
    graduated_campaign?: string;
}
export interface PromoteCampaignExperimentRequest {
    campaign_experiment?: string;
}
export interface EndCampaignExperimentRequest {
    campaign_experiment?: string;
}
export interface ListCampaignExperimentAsyncErrorsRequest {
    resource_name?: string;
    page_token?: string;
    page_size?: number;
}
export interface ListCampaignExperimentAsyncErrorsResponse {
    errors?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    }[];
    next_page_token?: string;
}
export interface CampaignExtensionSettingService {
}
export interface GetCampaignExtensionSettingRequest {
    resource_name?: string;
}
export interface MutateCampaignExtensionSettingsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignExtensionSetting;
        update?: CampaignExtensionSetting;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignExtensionSettingOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignExtensionSetting;
    update?: CampaignExtensionSetting;
    remove?: string;
}
export interface MutateCampaignExtensionSettingsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignExtensionSettingResult {
    resource_name?: string;
}
export interface CampaignFeedService {
}
export interface GetCampaignFeedRequest {
    resource_name?: string;
}
export interface MutateCampaignFeedsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CampaignFeed;
        update?: CampaignFeed;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignFeedOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CampaignFeed;
    update?: CampaignFeed;
    remove?: string;
}
export interface MutateCampaignFeedsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignFeedResult {
    resource_name?: string;
}
export interface CampaignLabelService {
}
export interface GetCampaignLabelRequest {
    resource_name?: string;
}
export interface MutateCampaignLabelsRequest {
    customer_id?: string;
    operations?: {
        create?: CampaignLabel;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignLabelOperation {
    create?: CampaignLabel;
    remove?: string;
}
export interface MutateCampaignLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignLabelResult {
    resource_name?: string;
}
export interface CampaignService {
}
export interface GetCampaignRequest {
    resource_name?: string;
}
export interface MutateCampaignsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: Campaign;
        update?: Campaign;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: Campaign;
    update?: Campaign;
    remove?: string;
}
export interface MutateCampaignsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignResult {
    resource_name?: string;
}
export interface CampaignSharedSetService {
}
export interface GetCampaignSharedSetRequest {
    resource_name?: string;
}
export interface MutateCampaignSharedSetsRequest {
    customer_id?: string;
    operations?: {
        create?: CampaignSharedSet;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CampaignSharedSetOperation {
    create?: CampaignSharedSet;
    remove?: string;
}
export interface MutateCampaignSharedSetsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCampaignSharedSetResult {
    resource_name?: string;
}
export interface CarrierConstantService {
}
export interface GetCarrierConstantRequest {
    resource_name?: string;
}
export interface ChangeStatusService {
}
export interface GetChangeStatusRequest {
    resource_name?: string;
}
export interface ClickViewService {
}
export interface GetClickViewRequest {
    resource_name?: string;
}
export interface ConversionActionService {
}
export interface GetConversionActionRequest {
    resource_name?: string;
}
export interface MutateConversionActionsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: ConversionAction;
        update?: ConversionAction;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface ConversionActionOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: ConversionAction;
    update?: ConversionAction;
    remove?: string;
}
export interface MutateConversionActionsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateConversionActionResult {
    resource_name?: string;
}
export interface ConversionAdjustmentUploadService {
}
export interface UploadConversionAdjustmentsRequest {
    customer_id?: string;
    conversion_adjustments?: {
        conversion_action?: string;
        adjustment_date_time?: string;
        adjustment_type?: ConversionAdjustmentType;
        restatement_value?: {
            adjusted_value?: number;
            currency_code?: string;
        };
        gclid_date_time_pair?: {
            gclid?: string;
            conversion_date_time?: string;
        };
        order_id?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface UploadConversionAdjustmentsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        conversion_action?: string;
        adjustment_date_time?: string;
        adjustment_type?: ConversionAdjustmentType;
        gclid_date_time_pair?: {
            gclid?: string;
            conversion_date_time?: string;
        };
        order_id?: string;
    }[];
}
export interface ConversionAdjustment {
    conversion_action?: string;
    adjustment_date_time?: string;
    adjustment_type?: ConversionAdjustmentType;
    restatement_value?: {
        adjusted_value?: number;
        currency_code?: string;
    };
    gclid_date_time_pair?: {
        gclid?: string;
        conversion_date_time?: string;
    };
    order_id?: string;
}
export interface RestatementValue {
    adjusted_value?: number;
    currency_code?: string;
}
export interface GclidDateTimePair {
    gclid?: string;
    conversion_date_time?: string;
}
export interface ConversionAdjustmentResult {
    conversion_action?: string;
    adjustment_date_time?: string;
    adjustment_type?: ConversionAdjustmentType;
    gclid_date_time_pair?: GclidDateTimePair;
    order_id?: string;
}
export interface ConversionUploadService {
}
export interface UploadClickConversionsRequest {
    customer_id?: string;
    conversions?: {
        gclid?: string;
        conversion_action?: string;
        conversion_date_time?: string;
        conversion_value?: number;
        currency_code?: string;
        order_id?: string;
        external_attribution_data?: {
            external_attribution_credit?: number;
            external_attribution_model?: string;
        };
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface UploadClickConversionsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        gclid?: string;
        conversion_action?: string;
        conversion_date_time?: string;
    }[];
}
export interface UploadCallConversionsRequest {
    customer_id?: string;
    conversions?: {
        caller_id?: string;
        call_start_date_time?: string;
        conversion_action?: string;
        conversion_date_time?: string;
        conversion_value?: number;
        currency_code?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface UploadCallConversionsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        caller_id?: string;
        call_start_date_time?: string;
        conversion_action?: string;
        conversion_date_time?: string;
    }[];
}
export interface ClickConversion {
    gclid?: string;
    conversion_action?: string;
    conversion_date_time?: string;
    conversion_value?: number;
    currency_code?: string;
    order_id?: string;
    external_attribution_data?: {
        external_attribution_credit?: number;
        external_attribution_model?: string;
    };
}
export interface CallConversion {
    caller_id?: string;
    call_start_date_time?: string;
    conversion_action?: string;
    conversion_date_time?: string;
    conversion_value?: number;
    currency_code?: string;
}
export interface ExternalAttributionData {
    external_attribution_credit?: number;
    external_attribution_model?: string;
}
export interface ClickConversionResult {
    gclid?: string;
    conversion_action?: string;
    conversion_date_time?: string;
}
export interface CallConversionResult {
    caller_id?: string;
    call_start_date_time?: string;
    conversion_action?: string;
    conversion_date_time?: string;
}
export interface CurrencyConstantService {
}
export interface GetCurrencyConstantRequest {
    resource_name?: string;
}
export interface CustomInterestService {
}
export interface GetCustomInterestRequest {
    resource_name?: string;
}
export interface MutateCustomInterestsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CustomInterest;
        update?: CustomInterest;
    }[];
    validate_only?: boolean;
}
export interface CustomInterestOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CustomInterest;
    update?: CustomInterest;
}
export interface MutateCustomInterestsResponse {
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCustomInterestResult {
    resource_name?: string;
}
export interface CustomerClientLinkService {
}
export interface GetCustomerClientLinkRequest {
    resource_name?: string;
}
export interface MutateCustomerClientLinkRequest {
    customer_id?: string;
    operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CustomerClientLink;
        update?: CustomerClientLink;
    };
}
export interface CustomerClientLinkOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CustomerClientLink;
    update?: CustomerClientLink;
}
export interface MutateCustomerClientLinkResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateCustomerClientLinkResult {
    resource_name?: string;
}
export interface CustomerClientService {
}
export interface GetCustomerClientRequest {
    resource_name?: string;
}
export interface CustomerExtensionSettingService {
}
export interface GetCustomerExtensionSettingRequest {
    resource_name?: string;
}
export interface MutateCustomerExtensionSettingsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CustomerExtensionSetting;
        update?: CustomerExtensionSetting;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CustomerExtensionSettingOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CustomerExtensionSetting;
    update?: CustomerExtensionSetting;
    remove?: string;
}
export interface MutateCustomerExtensionSettingsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCustomerExtensionSettingResult {
    resource_name?: string;
}
export interface CustomerFeedService {
}
export interface GetCustomerFeedRequest {
    resource_name?: string;
}
export interface MutateCustomerFeedsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: CustomerFeed;
        update?: CustomerFeed;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CustomerFeedOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: CustomerFeed;
    update?: CustomerFeed;
    remove?: string;
}
export interface MutateCustomerFeedsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCustomerFeedResult {
    resource_name?: string;
}
export interface CustomerLabelService {
}
export interface GetCustomerLabelRequest {
    resource_name?: string;
}
export interface MutateCustomerLabelsRequest {
    customer_id?: string;
    operations?: {
        create?: CustomerLabel;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CustomerLabelOperation {
    create?: CustomerLabel;
    remove?: string;
}
export interface MutateCustomerLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCustomerLabelResult {
    resource_name?: string;
}
export interface CustomerManagerLinkService {
}
export interface GetCustomerManagerLinkRequest {
    resource_name?: string;
}
export interface MutateCustomerManagerLinkRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        update?: CustomerManagerLink;
    }[];
}
export interface MoveManagerLinkRequest {
    customer_id?: string;
    previous_customer_manager_link?: string;
    new_manager?: string;
}
export interface CustomerManagerLinkOperation {
    update_mask?: {
        paths?: string[];
    };
    update?: CustomerManagerLink;
}
export interface MutateCustomerManagerLinkResponse {
    results?: {
        resource_name?: string;
    }[];
}
export interface MoveManagerLinkResponse {
    resource_name?: string;
}
export interface MutateCustomerManagerLinkResult {
    resource_name?: string;
}
export interface CustomerNegativeCriterionService {
}
export interface GetCustomerNegativeCriterionRequest {
    resource_name?: string;
}
export interface MutateCustomerNegativeCriteriaRequest {
    customer_id?: string;
    operations?: {
        create?: CustomerNegativeCriterion;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface CustomerNegativeCriterionOperation {
    create?: CustomerNegativeCriterion;
    remove?: string;
}
export interface MutateCustomerNegativeCriteriaResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateCustomerNegativeCriteriaResult {
    resource_name?: string;
}
export interface CustomerService {
}
export interface GetCustomerRequest {
    resource_name?: string;
}
export interface MutateCustomerRequest {
    customer_id?: string;
    operation?: {
        update?: Customer;
        update_mask?: {
            paths?: string[];
        };
    };
    validate_only?: boolean;
}
export interface CreateCustomerClientRequest {
    customer_id?: string;
    customer_client?: Customer;
    email_address?: string;
    access_role?: AccessRole;
}
export interface CustomerOperation {
    update?: Customer;
    update_mask?: {
        paths?: string[];
    };
}
export interface CreateCustomerClientResponse {
    resource_name?: string;
    invitation_link?: string;
}
export interface MutateCustomerResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateCustomerResult {
    resource_name?: string;
}
export interface ListAccessibleCustomersRequest {
}
export interface ListAccessibleCustomersResponse {
    resource_names?: string[];
}
export interface DetailPlacementViewService {
}
export interface GetDetailPlacementViewRequest {
    resource_name?: string;
}
export interface DisplayKeywordViewService {
}
export interface GetDisplayKeywordViewRequest {
    resource_name?: string;
}
export interface DistanceViewService {
}
export interface GetDistanceViewRequest {
    resource_name?: string;
}
export interface DomainCategoryService {
}
export interface GetDomainCategoryRequest {
    resource_name?: string;
}
export interface DynamicSearchAdsSearchTermViewService {
}
export interface GetDynamicSearchAdsSearchTermViewRequest {
    resource_name?: string;
}
export interface ExpandedLandingPageViewService {
}
export interface GetExpandedLandingPageViewRequest {
    resource_name?: string;
}
export interface ExtensionFeedItemService {
}
export interface GetExtensionFeedItemRequest {
    resource_name?: string;
}
export interface MutateExtensionFeedItemsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: ExtensionFeedItem;
        update?: ExtensionFeedItem;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface ExtensionFeedItemOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: ExtensionFeedItem;
    update?: ExtensionFeedItem;
    remove?: string;
}
export interface MutateExtensionFeedItemsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateExtensionFeedItemResult {
    resource_name?: string;
}
export interface FeedItemService {
}
export interface GetFeedItemRequest {
    resource_name?: string;
}
export interface MutateFeedItemsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: FeedItem;
        update?: FeedItem;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface FeedItemOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: FeedItem;
    update?: FeedItem;
    remove?: string;
}
export interface MutateFeedItemsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateFeedItemResult {
    resource_name?: string;
}
export interface FeedItemTargetService {
}
export interface GetFeedItemTargetRequest {
    resource_name?: string;
}
export interface MutateFeedItemTargetsRequest {
    customer_id?: string;
    operations?: {
        create?: FeedItemTarget;
        remove?: string;
    }[];
}
export interface FeedItemTargetOperation {
    create?: FeedItemTarget;
    remove?: string;
}
export interface MutateFeedItemTargetsResponse {
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateFeedItemTargetResult {
    resource_name?: string;
}
export interface FeedMappingService {
}
export interface GetFeedMappingRequest {
    resource_name?: string;
}
export interface MutateFeedMappingsRequest {
    customer_id?: string;
    operations?: {
        create?: FeedMapping;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface FeedMappingOperation {
    create?: FeedMapping;
    remove?: string;
}
export interface MutateFeedMappingsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateFeedMappingResult {
    resource_name?: string;
}
export interface FeedPlaceholderViewService {
}
export interface GetFeedPlaceholderViewRequest {
    resource_name?: string;
}
export interface FeedService {
}
export interface GetFeedRequest {
    resource_name?: string;
}
export interface MutateFeedsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: Feed;
        update?: Feed;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface FeedOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: Feed;
    update?: Feed;
    remove?: string;
}
export interface MutateFeedsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateFeedResult {
    resource_name?: string;
}
export interface GenderViewService {
}
export interface GetGenderViewRequest {
    resource_name?: string;
}
export interface GeoTargetConstantService {
}
export interface GetGeoTargetConstantRequest {
    resource_name?: string;
}
export interface LocationNames {
    names?: string[];
}
export interface GeoTargets {
    geo_target_constants?: string[];
}
export interface SuggestGeoTargetConstantsRequest {
    locale?: string;
    country_code?: string;
    location_names?: LocationNames;
    geo_targets?: GeoTargets;
}
export interface SuggestGeoTargetConstantsResponse {
    geo_target_constant_suggestions?: {
        locale?: string;
        reach?: number;
        search_term?: string;
        geo_target_constant?: GeoTargetConstant;
        geo_target_constant_parents?: GeoTargetConstant[];
    }[];
}
export interface GeoTargetConstantSuggestion {
    locale?: string;
    reach?: number;
    search_term?: string;
    geo_target_constant?: GeoTargetConstant;
    geo_target_constant_parents?: GeoTargetConstant[];
}
export interface GeographicViewService {
}
export interface GetGeographicViewRequest {
    resource_name?: string;
}
export interface GoogleAdsFieldService {
}
export interface GetGoogleAdsFieldRequest {
    resource_name?: string;
}
export interface SearchGoogleAdsFieldsRequest {
    query?: string;
    page_token?: string;
    page_size?: number;
}
export interface SearchGoogleAdsFieldsResponse {
    results?: GoogleAdsField[];
    next_page_token?: string;
    total_results_count?: number;
}
export interface GoogleAdsService {
}
export interface SearchGoogleAdsRequest {
    customer_id?: string;
    query?: string;
    page_token?: string;
    page_size?: number;
    validate_only?: boolean;
    return_total_results_count?: boolean;
    summary_row_setting?: SummaryRowSetting;
}
export interface SearchGoogleAdsResponse {
    results?: {
        account_budget?: AccountBudget;
        account_budget_proposal?: AccountBudgetProposal;
        account_link?: AccountLink;
        ad_group?: AdGroup;
        ad_group_ad?: AdGroupAd;
        ad_group_ad_asset_view?: AdGroupAdAssetView;
        ad_group_ad_label?: AdGroupAdLabel;
        ad_group_audience_view?: AdGroupAudienceView;
        ad_group_bid_modifier?: AdGroupBidModifier;
        ad_group_criterion?: AdGroupCriterion;
        ad_group_criterion_label?: AdGroupCriterionLabel;
        ad_group_criterion_simulation?: AdGroupCriterionSimulation;
        ad_group_extension_setting?: AdGroupExtensionSetting;
        ad_group_feed?: AdGroupFeed;
        ad_group_label?: AdGroupLabel;
        ad_group_simulation?: AdGroupSimulation;
        ad_parameter?: AdParameter;
        age_range_view?: AgeRangeView;
        ad_schedule_view?: AdScheduleView;
        domain_category?: DomainCategory;
        asset?: Asset;
        batch_job?: BatchJob;
        bidding_strategy?: BiddingStrategy;
        billing_setup?: BillingSetup;
        campaign_budget?: CampaignBudget;
        campaign?: Campaign;
        campaign_audience_view?: CampaignAudienceView;
        campaign_bid_modifier?: CampaignBidModifier;
        campaign_criterion?: CampaignCriterion;
        campaign_criterion_simulation?: CampaignCriterionSimulation;
        campaign_draft?: CampaignDraft;
        campaign_experiment?: CampaignExperiment;
        campaign_extension_setting?: CampaignExtensionSetting;
        campaign_feed?: CampaignFeed;
        campaign_label?: CampaignLabel;
        campaign_shared_set?: CampaignSharedSet;
        carrier_constant?: CarrierConstant;
        change_status?: ChangeStatus;
        conversion_action?: ConversionAction;
        click_view?: ClickView;
        currency_constant?: CurrencyConstant;
        custom_interest?: CustomInterest;
        customer?: Customer;
        customer_manager_link?: CustomerManagerLink;
        customer_client_link?: CustomerClientLink;
        customer_client?: CustomerClient;
        customer_extension_setting?: CustomerExtensionSetting;
        customer_feed?: CustomerFeed;
        customer_label?: CustomerLabel;
        customer_negative_criterion?: CustomerNegativeCriterion;
        detail_placement_view?: DetailPlacementView;
        display_keyword_view?: DisplayKeywordView;
        distance_view?: DistanceView;
        dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
        expanded_landing_page_view?: ExpandedLandingPageView;
        extension_feed_item?: ExtensionFeedItem;
        feed?: Feed;
        feed_item?: FeedItem;
        feed_item_target?: FeedItemTarget;
        feed_mapping?: FeedMapping;
        feed_placeholder_view?: FeedPlaceholderView;
        gender_view?: GenderView;
        geo_target_constant?: GeoTargetConstant;
        geographic_view?: GeographicView;
        group_placement_view?: GroupPlacementView;
        hotel_group_view?: HotelGroupView;
        hotel_performance_view?: HotelPerformanceView;
        income_range_view?: IncomeRangeView;
        keyword_view?: KeywordView;
        keyword_plan?: KeywordPlan;
        keyword_plan_campaign?: KeywordPlanCampaign;
        keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
        keyword_plan_ad_group?: KeywordPlanAdGroup;
        keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
        label?: Label;
        landing_page_view?: LandingPageView;
        language_constant?: LanguageConstant;
        location_view?: LocationView;
        managed_placement_view?: ManagedPlacementView;
        media_file?: MediaFile;
        mobile_app_category_constant?: MobileAppCategoryConstant;
        mobile_device_constant?: MobileDeviceConstant;
        offline_user_data_job?: OfflineUserDataJob;
        operating_system_version_constant?: OperatingSystemVersionConstant;
        paid_organic_search_term_view?: PaidOrganicSearchTermView;
        parental_status_view?: ParentalStatusView;
        product_bidding_category_constant?: ProductBiddingCategoryConstant;
        product_group_view?: ProductGroupView;
        recommendation?: Recommendation;
        search_term_view?: SearchTermView;
        shared_criterion?: SharedCriterion;
        shared_set?: SharedSet;
        shopping_performance_view?: ShoppingPerformanceView;
        third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
        topic_view?: TopicView;
        user_interest?: UserInterest;
        user_list?: UserList;
        user_location_view?: UserLocationView;
        remarketing_action?: RemarketingAction;
        topic_constant?: TopicConstant;
        video?: Video;
        metrics?: Metrics;
        segments?: Segments;
    }[];
    next_page_token?: string;
    total_results_count?: number;
    field_mask?: {
        paths?: string[];
    };
    summary_row?: {
        account_budget?: AccountBudget;
        account_budget_proposal?: AccountBudgetProposal;
        account_link?: AccountLink;
        ad_group?: AdGroup;
        ad_group_ad?: AdGroupAd;
        ad_group_ad_asset_view?: AdGroupAdAssetView;
        ad_group_ad_label?: AdGroupAdLabel;
        ad_group_audience_view?: AdGroupAudienceView;
        ad_group_bid_modifier?: AdGroupBidModifier;
        ad_group_criterion?: AdGroupCriterion;
        ad_group_criterion_label?: AdGroupCriterionLabel;
        ad_group_criterion_simulation?: AdGroupCriterionSimulation;
        ad_group_extension_setting?: AdGroupExtensionSetting;
        ad_group_feed?: AdGroupFeed;
        ad_group_label?: AdGroupLabel;
        ad_group_simulation?: AdGroupSimulation;
        ad_parameter?: AdParameter;
        age_range_view?: AgeRangeView;
        ad_schedule_view?: AdScheduleView;
        domain_category?: DomainCategory;
        asset?: Asset;
        batch_job?: BatchJob;
        bidding_strategy?: BiddingStrategy;
        billing_setup?: BillingSetup;
        campaign_budget?: CampaignBudget;
        campaign?: Campaign;
        campaign_audience_view?: CampaignAudienceView;
        campaign_bid_modifier?: CampaignBidModifier;
        campaign_criterion?: CampaignCriterion;
        campaign_criterion_simulation?: CampaignCriterionSimulation;
        campaign_draft?: CampaignDraft;
        campaign_experiment?: CampaignExperiment;
        campaign_extension_setting?: CampaignExtensionSetting;
        campaign_feed?: CampaignFeed;
        campaign_label?: CampaignLabel;
        campaign_shared_set?: CampaignSharedSet;
        carrier_constant?: CarrierConstant;
        change_status?: ChangeStatus;
        conversion_action?: ConversionAction;
        click_view?: ClickView;
        currency_constant?: CurrencyConstant;
        custom_interest?: CustomInterest;
        customer?: Customer;
        customer_manager_link?: CustomerManagerLink;
        customer_client_link?: CustomerClientLink;
        customer_client?: CustomerClient;
        customer_extension_setting?: CustomerExtensionSetting;
        customer_feed?: CustomerFeed;
        customer_label?: CustomerLabel;
        customer_negative_criterion?: CustomerNegativeCriterion;
        detail_placement_view?: DetailPlacementView;
        display_keyword_view?: DisplayKeywordView;
        distance_view?: DistanceView;
        dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
        expanded_landing_page_view?: ExpandedLandingPageView;
        extension_feed_item?: ExtensionFeedItem;
        feed?: Feed;
        feed_item?: FeedItem;
        feed_item_target?: FeedItemTarget;
        feed_mapping?: FeedMapping;
        feed_placeholder_view?: FeedPlaceholderView;
        gender_view?: GenderView;
        geo_target_constant?: GeoTargetConstant;
        geographic_view?: GeographicView;
        group_placement_view?: GroupPlacementView;
        hotel_group_view?: HotelGroupView;
        hotel_performance_view?: HotelPerformanceView;
        income_range_view?: IncomeRangeView;
        keyword_view?: KeywordView;
        keyword_plan?: KeywordPlan;
        keyword_plan_campaign?: KeywordPlanCampaign;
        keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
        keyword_plan_ad_group?: KeywordPlanAdGroup;
        keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
        label?: Label;
        landing_page_view?: LandingPageView;
        language_constant?: LanguageConstant;
        location_view?: LocationView;
        managed_placement_view?: ManagedPlacementView;
        media_file?: MediaFile;
        mobile_app_category_constant?: MobileAppCategoryConstant;
        mobile_device_constant?: MobileDeviceConstant;
        offline_user_data_job?: OfflineUserDataJob;
        operating_system_version_constant?: OperatingSystemVersionConstant;
        paid_organic_search_term_view?: PaidOrganicSearchTermView;
        parental_status_view?: ParentalStatusView;
        product_bidding_category_constant?: ProductBiddingCategoryConstant;
        product_group_view?: ProductGroupView;
        recommendation?: Recommendation;
        search_term_view?: SearchTermView;
        shared_criterion?: SharedCriterion;
        shared_set?: SharedSet;
        shopping_performance_view?: ShoppingPerformanceView;
        third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
        topic_view?: TopicView;
        user_interest?: UserInterest;
        user_list?: UserList;
        user_location_view?: UserLocationView;
        remarketing_action?: RemarketingAction;
        topic_constant?: TopicConstant;
        video?: Video;
        metrics?: Metrics;
        segments?: Segments;
    };
}
export interface SearchGoogleAdsStreamRequest {
    customer_id?: string;
    query?: string;
    summary_row_setting?: SummaryRowSetting;
}
export interface SearchGoogleAdsStreamResponse {
    results?: {
        account_budget?: AccountBudget;
        account_budget_proposal?: AccountBudgetProposal;
        account_link?: AccountLink;
        ad_group?: AdGroup;
        ad_group_ad?: AdGroupAd;
        ad_group_ad_asset_view?: AdGroupAdAssetView;
        ad_group_ad_label?: AdGroupAdLabel;
        ad_group_audience_view?: AdGroupAudienceView;
        ad_group_bid_modifier?: AdGroupBidModifier;
        ad_group_criterion?: AdGroupCriterion;
        ad_group_criterion_label?: AdGroupCriterionLabel;
        ad_group_criterion_simulation?: AdGroupCriterionSimulation;
        ad_group_extension_setting?: AdGroupExtensionSetting;
        ad_group_feed?: AdGroupFeed;
        ad_group_label?: AdGroupLabel;
        ad_group_simulation?: AdGroupSimulation;
        ad_parameter?: AdParameter;
        age_range_view?: AgeRangeView;
        ad_schedule_view?: AdScheduleView;
        domain_category?: DomainCategory;
        asset?: Asset;
        batch_job?: BatchJob;
        bidding_strategy?: BiddingStrategy;
        billing_setup?: BillingSetup;
        campaign_budget?: CampaignBudget;
        campaign?: Campaign;
        campaign_audience_view?: CampaignAudienceView;
        campaign_bid_modifier?: CampaignBidModifier;
        campaign_criterion?: CampaignCriterion;
        campaign_criterion_simulation?: CampaignCriterionSimulation;
        campaign_draft?: CampaignDraft;
        campaign_experiment?: CampaignExperiment;
        campaign_extension_setting?: CampaignExtensionSetting;
        campaign_feed?: CampaignFeed;
        campaign_label?: CampaignLabel;
        campaign_shared_set?: CampaignSharedSet;
        carrier_constant?: CarrierConstant;
        change_status?: ChangeStatus;
        conversion_action?: ConversionAction;
        click_view?: ClickView;
        currency_constant?: CurrencyConstant;
        custom_interest?: CustomInterest;
        customer?: Customer;
        customer_manager_link?: CustomerManagerLink;
        customer_client_link?: CustomerClientLink;
        customer_client?: CustomerClient;
        customer_extension_setting?: CustomerExtensionSetting;
        customer_feed?: CustomerFeed;
        customer_label?: CustomerLabel;
        customer_negative_criterion?: CustomerNegativeCriterion;
        detail_placement_view?: DetailPlacementView;
        display_keyword_view?: DisplayKeywordView;
        distance_view?: DistanceView;
        dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
        expanded_landing_page_view?: ExpandedLandingPageView;
        extension_feed_item?: ExtensionFeedItem;
        feed?: Feed;
        feed_item?: FeedItem;
        feed_item_target?: FeedItemTarget;
        feed_mapping?: FeedMapping;
        feed_placeholder_view?: FeedPlaceholderView;
        gender_view?: GenderView;
        geo_target_constant?: GeoTargetConstant;
        geographic_view?: GeographicView;
        group_placement_view?: GroupPlacementView;
        hotel_group_view?: HotelGroupView;
        hotel_performance_view?: HotelPerformanceView;
        income_range_view?: IncomeRangeView;
        keyword_view?: KeywordView;
        keyword_plan?: KeywordPlan;
        keyword_plan_campaign?: KeywordPlanCampaign;
        keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
        keyword_plan_ad_group?: KeywordPlanAdGroup;
        keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
        label?: Label;
        landing_page_view?: LandingPageView;
        language_constant?: LanguageConstant;
        location_view?: LocationView;
        managed_placement_view?: ManagedPlacementView;
        media_file?: MediaFile;
        mobile_app_category_constant?: MobileAppCategoryConstant;
        mobile_device_constant?: MobileDeviceConstant;
        offline_user_data_job?: OfflineUserDataJob;
        operating_system_version_constant?: OperatingSystemVersionConstant;
        paid_organic_search_term_view?: PaidOrganicSearchTermView;
        parental_status_view?: ParentalStatusView;
        product_bidding_category_constant?: ProductBiddingCategoryConstant;
        product_group_view?: ProductGroupView;
        recommendation?: Recommendation;
        search_term_view?: SearchTermView;
        shared_criterion?: SharedCriterion;
        shared_set?: SharedSet;
        shopping_performance_view?: ShoppingPerformanceView;
        third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
        topic_view?: TopicView;
        user_interest?: UserInterest;
        user_list?: UserList;
        user_location_view?: UserLocationView;
        remarketing_action?: RemarketingAction;
        topic_constant?: TopicConstant;
        video?: Video;
        metrics?: Metrics;
        segments?: Segments;
    }[];
    field_mask?: {
        paths?: string[];
    };
    summary_row?: {
        account_budget?: AccountBudget;
        account_budget_proposal?: AccountBudgetProposal;
        account_link?: AccountLink;
        ad_group?: AdGroup;
        ad_group_ad?: AdGroupAd;
        ad_group_ad_asset_view?: AdGroupAdAssetView;
        ad_group_ad_label?: AdGroupAdLabel;
        ad_group_audience_view?: AdGroupAudienceView;
        ad_group_bid_modifier?: AdGroupBidModifier;
        ad_group_criterion?: AdGroupCriterion;
        ad_group_criterion_label?: AdGroupCriterionLabel;
        ad_group_criterion_simulation?: AdGroupCriterionSimulation;
        ad_group_extension_setting?: AdGroupExtensionSetting;
        ad_group_feed?: AdGroupFeed;
        ad_group_label?: AdGroupLabel;
        ad_group_simulation?: AdGroupSimulation;
        ad_parameter?: AdParameter;
        age_range_view?: AgeRangeView;
        ad_schedule_view?: AdScheduleView;
        domain_category?: DomainCategory;
        asset?: Asset;
        batch_job?: BatchJob;
        bidding_strategy?: BiddingStrategy;
        billing_setup?: BillingSetup;
        campaign_budget?: CampaignBudget;
        campaign?: Campaign;
        campaign_audience_view?: CampaignAudienceView;
        campaign_bid_modifier?: CampaignBidModifier;
        campaign_criterion?: CampaignCriterion;
        campaign_criterion_simulation?: CampaignCriterionSimulation;
        campaign_draft?: CampaignDraft;
        campaign_experiment?: CampaignExperiment;
        campaign_extension_setting?: CampaignExtensionSetting;
        campaign_feed?: CampaignFeed;
        campaign_label?: CampaignLabel;
        campaign_shared_set?: CampaignSharedSet;
        carrier_constant?: CarrierConstant;
        change_status?: ChangeStatus;
        conversion_action?: ConversionAction;
        click_view?: ClickView;
        currency_constant?: CurrencyConstant;
        custom_interest?: CustomInterest;
        customer?: Customer;
        customer_manager_link?: CustomerManagerLink;
        customer_client_link?: CustomerClientLink;
        customer_client?: CustomerClient;
        customer_extension_setting?: CustomerExtensionSetting;
        customer_feed?: CustomerFeed;
        customer_label?: CustomerLabel;
        customer_negative_criterion?: CustomerNegativeCriterion;
        detail_placement_view?: DetailPlacementView;
        display_keyword_view?: DisplayKeywordView;
        distance_view?: DistanceView;
        dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
        expanded_landing_page_view?: ExpandedLandingPageView;
        extension_feed_item?: ExtensionFeedItem;
        feed?: Feed;
        feed_item?: FeedItem;
        feed_item_target?: FeedItemTarget;
        feed_mapping?: FeedMapping;
        feed_placeholder_view?: FeedPlaceholderView;
        gender_view?: GenderView;
        geo_target_constant?: GeoTargetConstant;
        geographic_view?: GeographicView;
        group_placement_view?: GroupPlacementView;
        hotel_group_view?: HotelGroupView;
        hotel_performance_view?: HotelPerformanceView;
        income_range_view?: IncomeRangeView;
        keyword_view?: KeywordView;
        keyword_plan?: KeywordPlan;
        keyword_plan_campaign?: KeywordPlanCampaign;
        keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
        keyword_plan_ad_group?: KeywordPlanAdGroup;
        keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
        label?: Label;
        landing_page_view?: LandingPageView;
        language_constant?: LanguageConstant;
        location_view?: LocationView;
        managed_placement_view?: ManagedPlacementView;
        media_file?: MediaFile;
        mobile_app_category_constant?: MobileAppCategoryConstant;
        mobile_device_constant?: MobileDeviceConstant;
        offline_user_data_job?: OfflineUserDataJob;
        operating_system_version_constant?: OperatingSystemVersionConstant;
        paid_organic_search_term_view?: PaidOrganicSearchTermView;
        parental_status_view?: ParentalStatusView;
        product_bidding_category_constant?: ProductBiddingCategoryConstant;
        product_group_view?: ProductGroupView;
        recommendation?: Recommendation;
        search_term_view?: SearchTermView;
        shared_criterion?: SharedCriterion;
        shared_set?: SharedSet;
        shopping_performance_view?: ShoppingPerformanceView;
        third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
        topic_view?: TopicView;
        user_interest?: UserInterest;
        user_list?: UserList;
        user_location_view?: UserLocationView;
        remarketing_action?: RemarketingAction;
        topic_constant?: TopicConstant;
        video?: Video;
        metrics?: Metrics;
        segments?: Segments;
    };
}
export interface GoogleAdsRow {
    account_budget?: AccountBudget;
    account_budget_proposal?: AccountBudgetProposal;
    account_link?: AccountLink;
    ad_group?: AdGroup;
    ad_group_ad?: AdGroupAd;
    ad_group_ad_asset_view?: AdGroupAdAssetView;
    ad_group_ad_label?: AdGroupAdLabel;
    ad_group_audience_view?: AdGroupAudienceView;
    ad_group_bid_modifier?: AdGroupBidModifier;
    ad_group_criterion?: AdGroupCriterion;
    ad_group_criterion_label?: AdGroupCriterionLabel;
    ad_group_criterion_simulation?: AdGroupCriterionSimulation;
    ad_group_extension_setting?: AdGroupExtensionSetting;
    ad_group_feed?: AdGroupFeed;
    ad_group_label?: AdGroupLabel;
    ad_group_simulation?: AdGroupSimulation;
    ad_parameter?: AdParameter;
    age_range_view?: AgeRangeView;
    ad_schedule_view?: AdScheduleView;
    domain_category?: DomainCategory;
    asset?: Asset;
    batch_job?: BatchJob;
    bidding_strategy?: BiddingStrategy;
    billing_setup?: BillingSetup;
    campaign_budget?: CampaignBudget;
    campaign?: Campaign;
    campaign_audience_view?: CampaignAudienceView;
    campaign_bid_modifier?: CampaignBidModifier;
    campaign_criterion?: CampaignCriterion;
    campaign_criterion_simulation?: CampaignCriterionSimulation;
    campaign_draft?: CampaignDraft;
    campaign_experiment?: CampaignExperiment;
    campaign_extension_setting?: CampaignExtensionSetting;
    campaign_feed?: CampaignFeed;
    campaign_label?: CampaignLabel;
    campaign_shared_set?: CampaignSharedSet;
    carrier_constant?: CarrierConstant;
    change_status?: ChangeStatus;
    conversion_action?: ConversionAction;
    click_view?: ClickView;
    currency_constant?: CurrencyConstant;
    custom_interest?: CustomInterest;
    customer?: Customer;
    customer_manager_link?: CustomerManagerLink;
    customer_client_link?: CustomerClientLink;
    customer_client?: CustomerClient;
    customer_extension_setting?: CustomerExtensionSetting;
    customer_feed?: CustomerFeed;
    customer_label?: CustomerLabel;
    customer_negative_criterion?: CustomerNegativeCriterion;
    detail_placement_view?: DetailPlacementView;
    display_keyword_view?: DisplayKeywordView;
    distance_view?: DistanceView;
    dynamic_search_ads_search_term_view?: DynamicSearchAdsSearchTermView;
    expanded_landing_page_view?: ExpandedLandingPageView;
    extension_feed_item?: ExtensionFeedItem;
    feed?: Feed;
    feed_item?: FeedItem;
    feed_item_target?: FeedItemTarget;
    feed_mapping?: FeedMapping;
    feed_placeholder_view?: FeedPlaceholderView;
    gender_view?: GenderView;
    geo_target_constant?: GeoTargetConstant;
    geographic_view?: GeographicView;
    group_placement_view?: GroupPlacementView;
    hotel_group_view?: HotelGroupView;
    hotel_performance_view?: HotelPerformanceView;
    income_range_view?: IncomeRangeView;
    keyword_view?: KeywordView;
    keyword_plan?: KeywordPlan;
    keyword_plan_campaign?: KeywordPlanCampaign;
    keyword_plan_campaign_keyword?: KeywordPlanCampaignKeyword;
    keyword_plan_ad_group?: KeywordPlanAdGroup;
    keyword_plan_ad_group_keyword?: KeywordPlanAdGroupKeyword;
    label?: Label;
    landing_page_view?: LandingPageView;
    language_constant?: LanguageConstant;
    location_view?: LocationView;
    managed_placement_view?: ManagedPlacementView;
    media_file?: MediaFile;
    mobile_app_category_constant?: MobileAppCategoryConstant;
    mobile_device_constant?: MobileDeviceConstant;
    offline_user_data_job?: OfflineUserDataJob;
    operating_system_version_constant?: OperatingSystemVersionConstant;
    paid_organic_search_term_view?: PaidOrganicSearchTermView;
    parental_status_view?: ParentalStatusView;
    product_bidding_category_constant?: ProductBiddingCategoryConstant;
    product_group_view?: ProductGroupView;
    recommendation?: Recommendation;
    search_term_view?: SearchTermView;
    shared_criterion?: SharedCriterion;
    shared_set?: SharedSet;
    shopping_performance_view?: ShoppingPerformanceView;
    third_party_app_analytics_link?: ThirdPartyAppAnalyticsLink;
    topic_view?: TopicView;
    user_interest?: UserInterest;
    user_list?: UserList;
    user_location_view?: UserLocationView;
    remarketing_action?: RemarketingAction;
    topic_constant?: TopicConstant;
    video?: Video;
    metrics?: Metrics;
    segments?: Segments;
}
export interface MutateGoogleAdsRequest {
    customer_id?: string;
    mutate_operations?: {
        ad_group_ad_label_operation?: AdGroupAdLabelOperation;
        ad_group_ad_operation?: AdGroupAdOperation;
        ad_group_bid_modifier_operation?: AdGroupBidModifierOperation;
        ad_group_criterion_label_operation?: AdGroupCriterionLabelOperation;
        ad_group_criterion_operation?: AdGroupCriterionOperation;
        ad_group_extension_setting_operation?: AdGroupExtensionSettingOperation;
        ad_group_feed_operation?: AdGroupFeedOperation;
        ad_group_label_operation?: AdGroupLabelOperation;
        ad_group_operation?: AdGroupOperation;
        ad_operation?: AdOperation;
        ad_parameter_operation?: AdParameterOperation;
        asset_operation?: AssetOperation;
        bidding_strategy_operation?: BiddingStrategyOperation;
        campaign_bid_modifier_operation?: CampaignBidModifierOperation;
        campaign_budget_operation?: CampaignBudgetOperation;
        campaign_criterion_operation?: CampaignCriterionOperation;
        campaign_draft_operation?: CampaignDraftOperation;
        campaign_experiment_operation?: CampaignExperimentOperation;
        campaign_extension_setting_operation?: CampaignExtensionSettingOperation;
        campaign_feed_operation?: CampaignFeedOperation;
        campaign_label_operation?: CampaignLabelOperation;
        campaign_operation?: CampaignOperation;
        campaign_shared_set_operation?: CampaignSharedSetOperation;
        conversion_action_operation?: ConversionActionOperation;
        customer_extension_setting_operation?: CustomerExtensionSettingOperation;
        customer_feed_operation?: CustomerFeedOperation;
        customer_label_operation?: CustomerLabelOperation;
        customer_negative_criterion_operation?: CustomerNegativeCriterionOperation;
        customer_operation?: CustomerOperation;
        extension_feed_item_operation?: ExtensionFeedItemOperation;
        feed_item_operation?: FeedItemOperation;
        feed_item_target_operation?: FeedItemTargetOperation;
        feed_mapping_operation?: FeedMappingOperation;
        feed_operation?: FeedOperation;
        keyword_plan_ad_group_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanAdGroup;
            update?: KeywordPlanAdGroup;
            remove?: string;
        };
        keyword_plan_ad_group_keyword_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanAdGroupKeyword;
            update?: KeywordPlanAdGroupKeyword;
            remove?: string;
        };
        keyword_plan_campaign_keyword_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanCampaignKeyword;
            update?: KeywordPlanCampaignKeyword;
            remove?: string;
        };
        keyword_plan_campaign_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlanCampaign;
            update?: KeywordPlanCampaign;
            remove?: string;
        };
        keyword_plan_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: KeywordPlan;
            update?: KeywordPlan;
            remove?: string;
        };
        label_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: Label;
            update?: Label;
            remove?: string;
        };
        media_file_operation?: {
            create?: MediaFile;
        };
        remarketing_action_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: RemarketingAction;
            update?: RemarketingAction;
        };
        shared_criterion_operation?: {
            create?: SharedCriterion;
            remove?: string;
        };
        shared_set_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: SharedSet;
            update?: SharedSet;
            remove?: string;
        };
        user_list_operation?: {
            update_mask?: {
                paths?: string[];
            };
            create?: UserList;
            update?: UserList;
            remove?: string;
        };
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface MutateGoogleAdsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    mutate_operation_responses?: {
        ad_group_ad_label_result?: MutateAdGroupAdLabelResult;
        ad_group_ad_result?: MutateAdGroupAdResult;
        ad_group_bid_modifier_result?: MutateAdGroupBidModifierResult;
        ad_group_criterion_label_result?: MutateAdGroupCriterionLabelResult;
        ad_group_criterion_result?: MutateAdGroupCriterionResult;
        ad_group_extension_setting_result?: MutateAdGroupExtensionSettingResult;
        ad_group_feed_result?: MutateAdGroupFeedResult;
        ad_group_label_result?: MutateAdGroupLabelResult;
        ad_group_result?: MutateAdGroupResult;
        ad_parameter_result?: MutateAdParameterResult;
        ad_result?: MutateAdResult;
        asset_result?: MutateAssetResult;
        bidding_strategy_result?: MutateBiddingStrategyResult;
        campaign_bid_modifier_result?: MutateCampaignBidModifierResult;
        campaign_budget_result?: MutateCampaignBudgetResult;
        campaign_criterion_result?: MutateCampaignCriterionResult;
        campaign_draft_result?: MutateCampaignDraftResult;
        campaign_experiment_result?: MutateCampaignExperimentResult;
        campaign_extension_setting_result?: MutateCampaignExtensionSettingResult;
        campaign_feed_result?: MutateCampaignFeedResult;
        campaign_label_result?: MutateCampaignLabelResult;
        campaign_result?: MutateCampaignResult;
        campaign_shared_set_result?: MutateCampaignSharedSetResult;
        conversion_action_result?: MutateConversionActionResult;
        customer_extension_setting_result?: MutateCustomerExtensionSettingResult;
        customer_feed_result?: MutateCustomerFeedResult;
        customer_label_result?: MutateCustomerLabelResult;
        customer_negative_criterion_result?: MutateCustomerNegativeCriteriaResult;
        customer_result?: MutateCustomerResult;
        extension_feed_item_result?: MutateExtensionFeedItemResult;
        feed_item_result?: MutateFeedItemResult;
        feed_item_target_result?: MutateFeedItemTargetResult;
        feed_mapping_result?: MutateFeedMappingResult;
        feed_result?: MutateFeedResult;
        keyword_plan_ad_group_result?: {
            resource_name?: string;
        };
        keyword_plan_campaign_result?: {
            resource_name?: string;
        };
        keyword_plan_ad_group_keyword_result?: {
            resource_name?: string;
        };
        keyword_plan_campaign_keyword_result?: {
            resource_name?: string;
        };
        keyword_plan_result?: {
            resource_name?: string;
        };
        label_result?: {
            resource_name?: string;
        };
        media_file_result?: {
            resource_name?: string;
        };
        remarketing_action_result?: {
            resource_name?: string;
        };
        shared_criterion_result?: {
            resource_name?: string;
        };
        shared_set_result?: {
            resource_name?: string;
        };
        user_list_result?: {
            resource_name?: string;
        };
    }[];
}
export interface MutateOperation {
    ad_group_ad_label_operation?: AdGroupAdLabelOperation;
    ad_group_ad_operation?: AdGroupAdOperation;
    ad_group_bid_modifier_operation?: AdGroupBidModifierOperation;
    ad_group_criterion_label_operation?: AdGroupCriterionLabelOperation;
    ad_group_criterion_operation?: AdGroupCriterionOperation;
    ad_group_extension_setting_operation?: AdGroupExtensionSettingOperation;
    ad_group_feed_operation?: AdGroupFeedOperation;
    ad_group_label_operation?: AdGroupLabelOperation;
    ad_group_operation?: AdGroupOperation;
    ad_operation?: AdOperation;
    ad_parameter_operation?: AdParameterOperation;
    asset_operation?: AssetOperation;
    bidding_strategy_operation?: BiddingStrategyOperation;
    campaign_bid_modifier_operation?: CampaignBidModifierOperation;
    campaign_budget_operation?: CampaignBudgetOperation;
    campaign_criterion_operation?: CampaignCriterionOperation;
    campaign_draft_operation?: CampaignDraftOperation;
    campaign_experiment_operation?: CampaignExperimentOperation;
    campaign_extension_setting_operation?: CampaignExtensionSettingOperation;
    campaign_feed_operation?: CampaignFeedOperation;
    campaign_label_operation?: CampaignLabelOperation;
    campaign_operation?: CampaignOperation;
    campaign_shared_set_operation?: CampaignSharedSetOperation;
    conversion_action_operation?: ConversionActionOperation;
    customer_extension_setting_operation?: CustomerExtensionSettingOperation;
    customer_feed_operation?: CustomerFeedOperation;
    customer_label_operation?: CustomerLabelOperation;
    customer_negative_criterion_operation?: CustomerNegativeCriterionOperation;
    customer_operation?: CustomerOperation;
    extension_feed_item_operation?: ExtensionFeedItemOperation;
    feed_item_operation?: FeedItemOperation;
    feed_item_target_operation?: FeedItemTargetOperation;
    feed_mapping_operation?: FeedMappingOperation;
    feed_operation?: FeedOperation;
    keyword_plan_ad_group_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanAdGroup;
        update?: KeywordPlanAdGroup;
        remove?: string;
    };
    keyword_plan_ad_group_keyword_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanAdGroupKeyword;
        update?: KeywordPlanAdGroupKeyword;
        remove?: string;
    };
    keyword_plan_campaign_keyword_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanCampaignKeyword;
        update?: KeywordPlanCampaignKeyword;
        remove?: string;
    };
    keyword_plan_campaign_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanCampaign;
        update?: KeywordPlanCampaign;
        remove?: string;
    };
    keyword_plan_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlan;
        update?: KeywordPlan;
        remove?: string;
    };
    label_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: Label;
        update?: Label;
        remove?: string;
    };
    media_file_operation?: {
        create?: MediaFile;
    };
    remarketing_action_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: RemarketingAction;
        update?: RemarketingAction;
    };
    shared_criterion_operation?: {
        create?: SharedCriterion;
        remove?: string;
    };
    shared_set_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: SharedSet;
        update?: SharedSet;
        remove?: string;
    };
    user_list_operation?: {
        update_mask?: {
            paths?: string[];
        };
        create?: UserList;
        update?: UserList;
        remove?: string;
    };
}
export interface MutateOperationResponse {
    ad_group_ad_label_result?: MutateAdGroupAdLabelResult;
    ad_group_ad_result?: MutateAdGroupAdResult;
    ad_group_bid_modifier_result?: MutateAdGroupBidModifierResult;
    ad_group_criterion_label_result?: MutateAdGroupCriterionLabelResult;
    ad_group_criterion_result?: MutateAdGroupCriterionResult;
    ad_group_extension_setting_result?: MutateAdGroupExtensionSettingResult;
    ad_group_feed_result?: MutateAdGroupFeedResult;
    ad_group_label_result?: MutateAdGroupLabelResult;
    ad_group_result?: MutateAdGroupResult;
    ad_parameter_result?: MutateAdParameterResult;
    ad_result?: MutateAdResult;
    asset_result?: MutateAssetResult;
    bidding_strategy_result?: MutateBiddingStrategyResult;
    campaign_bid_modifier_result?: MutateCampaignBidModifierResult;
    campaign_budget_result?: MutateCampaignBudgetResult;
    campaign_criterion_result?: MutateCampaignCriterionResult;
    campaign_draft_result?: MutateCampaignDraftResult;
    campaign_experiment_result?: MutateCampaignExperimentResult;
    campaign_extension_setting_result?: MutateCampaignExtensionSettingResult;
    campaign_feed_result?: MutateCampaignFeedResult;
    campaign_label_result?: MutateCampaignLabelResult;
    campaign_result?: MutateCampaignResult;
    campaign_shared_set_result?: MutateCampaignSharedSetResult;
    conversion_action_result?: MutateConversionActionResult;
    customer_extension_setting_result?: MutateCustomerExtensionSettingResult;
    customer_feed_result?: MutateCustomerFeedResult;
    customer_label_result?: MutateCustomerLabelResult;
    customer_negative_criterion_result?: MutateCustomerNegativeCriteriaResult;
    customer_result?: MutateCustomerResult;
    extension_feed_item_result?: MutateExtensionFeedItemResult;
    feed_item_result?: MutateFeedItemResult;
    feed_item_target_result?: MutateFeedItemTargetResult;
    feed_mapping_result?: MutateFeedMappingResult;
    feed_result?: MutateFeedResult;
    keyword_plan_ad_group_result?: {
        resource_name?: string;
    };
    keyword_plan_campaign_result?: {
        resource_name?: string;
    };
    keyword_plan_ad_group_keyword_result?: {
        resource_name?: string;
    };
    keyword_plan_campaign_keyword_result?: {
        resource_name?: string;
    };
    keyword_plan_result?: {
        resource_name?: string;
    };
    label_result?: {
        resource_name?: string;
    };
    media_file_result?: {
        resource_name?: string;
    };
    remarketing_action_result?: {
        resource_name?: string;
    };
    shared_criterion_result?: {
        resource_name?: string;
    };
    shared_set_result?: {
        resource_name?: string;
    };
    user_list_result?: {
        resource_name?: string;
    };
}
export interface GroupPlacementViewService {
}
export interface GetGroupPlacementViewRequest {
    resource_name?: string;
}
export interface HotelGroupViewService {
}
export interface GetHotelGroupViewRequest {
    resource_name?: string;
}
export interface HotelPerformanceViewService {
}
export interface GetHotelPerformanceViewRequest {
    resource_name?: string;
}
export interface IncomeRangeViewService {
}
export interface GetIncomeRangeViewRequest {
    resource_name?: string;
}
export interface InvoiceService {
}
export interface ListInvoicesRequest {
    customer_id?: string;
    billing_setup?: string;
    issue_year?: string;
    issue_month?: MonthOfYear;
}
export interface ListInvoicesResponse {
    invoices?: Invoice[];
}
export interface KeywordPlanAdGroupKeywordService {
}
export interface GetKeywordPlanAdGroupKeywordRequest {
    resource_name?: string;
}
export interface MutateKeywordPlanAdGroupKeywordsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanAdGroupKeyword;
        update?: KeywordPlanAdGroupKeyword;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface KeywordPlanAdGroupKeywordOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: KeywordPlanAdGroupKeyword;
    update?: KeywordPlanAdGroupKeyword;
    remove?: string;
}
export interface MutateKeywordPlanAdGroupKeywordsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateKeywordPlanAdGroupKeywordResult {
    resource_name?: string;
}
export interface KeywordPlanAdGroupService {
}
export interface GetKeywordPlanAdGroupRequest {
    resource_name?: string;
}
export interface MutateKeywordPlanAdGroupsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanAdGroup;
        update?: KeywordPlanAdGroup;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface KeywordPlanAdGroupOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: KeywordPlanAdGroup;
    update?: KeywordPlanAdGroup;
    remove?: string;
}
export interface MutateKeywordPlanAdGroupsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateKeywordPlanAdGroupResult {
    resource_name?: string;
}
export interface KeywordPlanCampaignKeywordService {
}
export interface GetKeywordPlanCampaignKeywordRequest {
    resource_name?: string;
}
export interface MutateKeywordPlanCampaignKeywordsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanCampaignKeyword;
        update?: KeywordPlanCampaignKeyword;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface KeywordPlanCampaignKeywordOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: KeywordPlanCampaignKeyword;
    update?: KeywordPlanCampaignKeyword;
    remove?: string;
}
export interface MutateKeywordPlanCampaignKeywordsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateKeywordPlanCampaignKeywordResult {
    resource_name?: string;
}
export interface KeywordPlanCampaignService {
}
export interface GetKeywordPlanCampaignRequest {
    resource_name?: string;
}
export interface MutateKeywordPlanCampaignsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlanCampaign;
        update?: KeywordPlanCampaign;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface KeywordPlanCampaignOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: KeywordPlanCampaign;
    update?: KeywordPlanCampaign;
    remove?: string;
}
export interface MutateKeywordPlanCampaignsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateKeywordPlanCampaignResult {
    resource_name?: string;
}
export interface KeywordPlanIdeaService {
}
export interface GenerateKeywordIdeasRequest {
    customer_id?: string;
    language?: string;
    geo_target_constants?: string[];
    include_adult_keywords?: boolean;
    page_token?: string;
    page_size?: number;
    keyword_plan_network?: KeywordPlanNetwork;
    keyword_and_url_seed?: {
        url?: string;
        keywords?: string[];
    };
    keyword_seed?: {
        keywords?: string[];
    };
    url_seed?: {
        url?: string;
    };
    site_seed?: {
        site?: string;
    };
}
export interface KeywordAndUrlSeed {
    url?: string;
    keywords?: string[];
}
export interface KeywordSeed {
    keywords?: string[];
}
export interface SiteSeed {
    site?: string;
}
export interface UrlSeed {
    url?: string;
}
export interface GenerateKeywordIdeaResponse {
    results?: {
        text?: string;
        keyword_idea_metrics?: KeywordPlanHistoricalMetrics;
    }[];
    next_page_token?: string;
    total_size?: number;
}
export interface GenerateKeywordIdeaResult {
    text?: string;
    keyword_idea_metrics?: KeywordPlanHistoricalMetrics;
}
export interface KeywordPlanService {
}
export interface GetKeywordPlanRequest {
    resource_name?: string;
}
export interface MutateKeywordPlansRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: KeywordPlan;
        update?: KeywordPlan;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface KeywordPlanOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: KeywordPlan;
    update?: KeywordPlan;
    remove?: string;
}
export interface MutateKeywordPlansResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateKeywordPlansResult {
    resource_name?: string;
}
export interface GenerateForecastCurveRequest {
    keyword_plan?: string;
}
export interface GenerateForecastCurveResponse {
    campaign_forecast_curves?: {
        keyword_plan_campaign?: string;
        max_cpc_bid_forecast_curve?: {
            max_cpc_bid_forecasts?: {
                max_cpc_bid_micros?: number;
                max_cpc_bid_forecast?: {
                    impressions?: number;
                    ctr?: number;
                    average_cpc?: number;
                    clicks?: number;
                    cost_micros?: number;
                };
            }[];
        };
    }[];
}
export interface GenerateForecastMetricsRequest {
    keyword_plan?: string;
}
export interface GenerateForecastMetricsResponse {
    campaign_forecasts?: {
        keyword_plan_campaign?: string;
        campaign_forecast?: {
            impressions?: number;
            ctr?: number;
            average_cpc?: number;
            clicks?: number;
            cost_micros?: number;
        };
    }[];
    ad_group_forecasts?: {
        keyword_plan_ad_group?: string;
        ad_group_forecast?: {
            impressions?: number;
            ctr?: number;
            average_cpc?: number;
            clicks?: number;
            cost_micros?: number;
        };
    }[];
    keyword_forecasts?: {
        keyword_plan_ad_group_keyword?: string;
        keyword_forecast?: {
            impressions?: number;
            ctr?: number;
            average_cpc?: number;
            clicks?: number;
            cost_micros?: number;
        };
    }[];
}
export interface KeywordPlanCampaignForecast {
    keyword_plan_campaign?: string;
    campaign_forecast?: {
        impressions?: number;
        ctr?: number;
        average_cpc?: number;
        clicks?: number;
        cost_micros?: number;
    };
}
export interface KeywordPlanAdGroupForecast {
    keyword_plan_ad_group?: string;
    ad_group_forecast?: {
        impressions?: number;
        ctr?: number;
        average_cpc?: number;
        clicks?: number;
        cost_micros?: number;
    };
}
export interface KeywordPlanKeywordForecast {
    keyword_plan_ad_group_keyword?: string;
    keyword_forecast?: {
        impressions?: number;
        ctr?: number;
        average_cpc?: number;
        clicks?: number;
        cost_micros?: number;
    };
}
export interface KeywordPlanCampaignForecastCurve {
    keyword_plan_campaign?: string;
    max_cpc_bid_forecast_curve?: {
        max_cpc_bid_forecasts?: {
            max_cpc_bid_micros?: number;
            max_cpc_bid_forecast?: {
                impressions?: number;
                ctr?: number;
                average_cpc?: number;
                clicks?: number;
                cost_micros?: number;
            };
        }[];
    };
}
export interface KeywordPlanMaxCpcBidForecastCurve {
    max_cpc_bid_forecasts?: {
        max_cpc_bid_micros?: number;
        max_cpc_bid_forecast?: {
            impressions?: number;
            ctr?: number;
            average_cpc?: number;
            clicks?: number;
            cost_micros?: number;
        };
    }[];
}
export interface KeywordPlanMaxCpcBidForecast {
    max_cpc_bid_micros?: number;
    max_cpc_bid_forecast?: {
        impressions?: number;
        ctr?: number;
        average_cpc?: number;
        clicks?: number;
        cost_micros?: number;
    };
}
export interface ForecastMetrics {
    impressions?: number;
    ctr?: number;
    average_cpc?: number;
    clicks?: number;
    cost_micros?: number;
}
export interface GenerateHistoricalMetricsRequest {
    keyword_plan?: string;
}
export interface GenerateHistoricalMetricsResponse {
    metrics?: {
        search_query?: string;
        keyword_metrics?: KeywordPlanHistoricalMetrics;
    }[];
}
export interface KeywordPlanKeywordHistoricalMetrics {
    search_query?: string;
    keyword_metrics?: KeywordPlanHistoricalMetrics;
}
export interface KeywordViewService {
}
export interface GetKeywordViewRequest {
    resource_name?: string;
}
export interface LabelService {
}
export interface GetLabelRequest {
    resource_name?: string;
}
export interface MutateLabelsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: Label;
        update?: Label;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface LabelOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: Label;
    update?: Label;
    remove?: string;
}
export interface MutateLabelsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateLabelResult {
    resource_name?: string;
}
export interface LandingPageViewService {
}
export interface GetLandingPageViewRequest {
    resource_name?: string;
}
export interface LanguageConstantService {
}
export interface GetLanguageConstantRequest {
    resource_name?: string;
}
export interface LocationViewService {
}
export interface GetLocationViewRequest {
    resource_name?: string;
}
export interface ManagedPlacementViewService {
}
export interface GetManagedPlacementViewRequest {
    resource_name?: string;
}
export interface MediaFileService {
}
export interface GetMediaFileRequest {
    resource_name?: string;
}
export interface MutateMediaFilesRequest {
    customer_id?: string;
    operations?: {
        create?: MediaFile;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface MediaFileOperation {
    create?: MediaFile;
}
export interface MutateMediaFilesResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateMediaFileResult {
    resource_name?: string;
}
export interface MerchantCenterLinkService {
}
export interface ListMerchantCenterLinksRequest {
    customer_id?: string;
}
export interface ListMerchantCenterLinksResponse {
    merchant_center_links?: MerchantCenterLink[];
}
export interface GetMerchantCenterLinkRequest {
    resource_name?: string;
}
export interface MutateMerchantCenterLinkRequest {
    customer_id?: string;
    operation?: {
        update_mask?: {
            paths?: string[];
        };
        update?: MerchantCenterLink;
        remove?: string;
    };
}
export interface MerchantCenterLinkOperation {
    update_mask?: {
        paths?: string[];
    };
    update?: MerchantCenterLink;
    remove?: string;
}
export interface MutateMerchantCenterLinkResponse {
    result?: {
        resource_name?: string;
    };
}
export interface MutateMerchantCenterLinkResult {
    resource_name?: string;
}
export interface MobileAppCategoryConstantService {
}
export interface GetMobileAppCategoryConstantRequest {
    resource_name?: string;
}
export interface MobileDeviceConstantService {
}
export interface GetMobileDeviceConstantRequest {
    resource_name?: string;
}
export interface OfflineUserDataJobService {
}
export interface CreateOfflineUserDataJobRequest {
    customer_id?: string;
    job?: OfflineUserDataJob;
}
export interface CreateOfflineUserDataJobResponse {
    resource_name?: string;
}
export interface GetOfflineUserDataJobRequest {
    resource_name?: string;
}
export interface RunOfflineUserDataJobRequest {
    resource_name?: string;
}
export interface AddOfflineUserDataJobOperationsRequest {
    resource_name?: string;
    enable_partial_failure?: boolean;
    operations?: {
        create?: UserData;
        remove?: UserData;
        remove_all?: boolean;
    }[];
}
export interface OfflineUserDataJobOperation {
    create?: UserData;
    remove?: UserData;
    remove_all?: boolean;
}
export interface AddOfflineUserDataJobOperationsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
}
export interface OperatingSystemVersionConstantService {
}
export interface GetOperatingSystemVersionConstantRequest {
    resource_name?: string;
}
export interface PaidOrganicSearchTermViewService {
}
export interface GetPaidOrganicSearchTermViewRequest {
    resource_name?: string;
}
export interface ParentalStatusViewService {
}
export interface GetParentalStatusViewRequest {
    resource_name?: string;
}
export interface PaymentsAccountService {
}
export interface ListPaymentsAccountsRequest {
    customer_id?: string;
}
export interface ListPaymentsAccountsResponse {
    payments_accounts?: PaymentsAccount[];
}
export interface ProductBiddingCategoryConstantService {
}
export interface GetProductBiddingCategoryConstantRequest {
    resource_name?: string;
}
export interface ProductGroupViewService {
}
export interface GetProductGroupViewRequest {
    resource_name?: string;
}
export interface ReachPlanService {
}
export interface ListPlannableLocationsRequest {
}
export interface ListPlannableLocationsResponse {
    plannable_locations?: {
        id?: string;
        name?: string;
        parent_country_id?: number;
    }[];
}
export interface PlannableLocation {
    id?: string;
    name?: string;
    parent_country_id?: number;
}
export interface ListPlannableProductsRequest {
    plannable_location_id?: string;
}
export interface ListPlannableProductsResponse {
    product_metadata?: {
        plannable_product_code?: string;
        plannable_targeting?: {
            age_ranges?: ReachPlanAgeRange[];
            genders?: GenderInfo[];
            devices?: DeviceInfo[];
            networks?: ReachPlanNetwork[];
        };
    }[];
}
export interface ProductMetadata {
    plannable_product_code?: string;
    plannable_targeting?: {
        age_ranges?: ReachPlanAgeRange[];
        genders?: GenderInfo[];
        devices?: DeviceInfo[];
        networks?: ReachPlanNetwork[];
    };
}
export interface PlannableTargeting {
    age_ranges?: ReachPlanAgeRange[];
    genders?: GenderInfo[];
    devices?: DeviceInfo[];
    networks?: ReachPlanNetwork[];
}
export interface GenerateProductMixIdeasRequest {
    customer_id?: string;
    plannable_location_id?: string;
    currency_code?: string;
    budget_micros?: number;
    preferences?: {
        is_skippable?: boolean;
        starts_with_sound?: boolean;
        ad_length?: ReachPlanAdLength;
        top_content_only?: boolean;
        has_guaranteed_price?: boolean;
    };
}
export interface Preferences {
    is_skippable?: boolean;
    starts_with_sound?: boolean;
    ad_length?: ReachPlanAdLength;
    top_content_only?: boolean;
    has_guaranteed_price?: boolean;
}
export interface GenerateProductMixIdeasResponse {
    product_allocation?: {
        plannable_product_code?: string;
        budget_micros?: number;
    }[];
}
export interface ProductAllocation {
    plannable_product_code?: string;
    budget_micros?: number;
}
export interface GenerateReachForecastRequest {
    customer_id?: string;
    currency_code?: string;
    campaign_duration?: {
        duration_in_days?: number;
    };
    cookie_frequency_cap?: number;
    cookie_frequency_cap_setting?: {
        impressions?: number;
        time_unit?: FrequencyCapTimeUnit;
    };
    min_effective_frequency?: number;
    targeting?: {
        plannable_location_id?: string;
        age_range?: ReachPlanAgeRange;
        genders?: GenderInfo[];
        devices?: DeviceInfo[];
        network?: ReachPlanNetwork;
    };
    planned_products?: {
        plannable_product_code?: string;
        budget_micros?: number;
    }[];
}
export interface FrequencyCap {
    impressions?: number;
    time_unit?: FrequencyCapTimeUnit;
}
export interface Targeting {
    plannable_location_id?: string;
    age_range?: ReachPlanAgeRange;
    genders?: GenderInfo[];
    devices?: DeviceInfo[];
    network?: ReachPlanNetwork;
}
export interface CampaignDuration {
    duration_in_days?: number;
}
export interface PlannedProduct {
    plannable_product_code?: string;
    budget_micros?: number;
}
export interface GenerateReachForecastResponse {
    on_target_audience_metrics?: {
        youtube_audience_size?: number;
        census_audience_size?: number;
    };
    reach_curve?: {
        reach_forecasts?: {
            cost_micros?: number;
            forecast?: {
                on_target_reach?: number;
                total_reach?: number;
                on_target_impressions?: number;
                total_impressions?: number;
            };
            forecasted_product_allocations?: ProductAllocation[];
        }[];
    };
}
export interface ReachCurve {
    reach_forecasts?: {
        cost_micros?: number;
        forecast?: {
            on_target_reach?: number;
            total_reach?: number;
            on_target_impressions?: number;
            total_impressions?: number;
        };
        forecasted_product_allocations?: ProductAllocation[];
    }[];
}
export interface ReachForecast {
    cost_micros?: number;
    forecast?: {
        on_target_reach?: number;
        total_reach?: number;
        on_target_impressions?: number;
        total_impressions?: number;
    };
    forecasted_product_allocations?: ProductAllocation[];
}
export interface Forecast {
    on_target_reach?: number;
    total_reach?: number;
    on_target_impressions?: number;
    total_impressions?: number;
}
export interface OnTargetAudienceMetrics {
    youtube_audience_size?: number;
    census_audience_size?: number;
}
export interface RecommendationService {
}
export interface GetRecommendationRequest {
    resource_name?: string;
}
export interface ApplyRecommendationRequest {
    customer_id?: string;
    operations?: {
        resource_name?: string;
        campaign_budget?: {
            new_budget_amount_micros?: number;
        };
        text_ad?: {
            ad?: Ad;
        };
        keyword?: {
            ad_group?: string;
            match_type?: KeywordMatchType;
            cpc_bid_micros?: number;
        };
        target_cpa_opt_in?: {
            target_cpa_micros?: number;
            new_campaign_budget_amount_micros?: number;
        };
        callout_extension?: {
            callout_extensions?: CalloutFeedItem[];
        };
        call_extension?: {
            call_extensions?: CallFeedItem[];
        };
        sitelink_extension?: {
            sitelink_extensions?: SitelinkFeedItem[];
        };
        move_unused_budget?: {
            budget_micros_to_move?: number;
        };
    }[];
    partial_failure?: boolean;
}
export interface CampaignBudgetParameters {
    new_budget_amount_micros?: number;
}
export interface TextAdParameters {
    ad?: Ad;
}
export interface KeywordParameters {
    ad_group?: string;
    match_type?: KeywordMatchType;
    cpc_bid_micros?: number;
}
export interface TargetCpaOptInParameters {
    target_cpa_micros?: number;
    new_campaign_budget_amount_micros?: number;
}
export interface CalloutExtensionParameters {
    callout_extensions?: CalloutFeedItem[];
}
export interface CallExtensionParameters {
    call_extensions?: CallFeedItem[];
}
export interface SitelinkExtensionParameters {
    sitelink_extensions?: SitelinkFeedItem[];
}
export interface MoveUnusedBudgetParameters {
    budget_micros_to_move?: number;
}
export interface ApplyRecommendationOperation {
    resource_name?: string;
    campaign_budget?: CampaignBudgetParameters;
    text_ad?: TextAdParameters;
    keyword?: KeywordParameters;
    target_cpa_opt_in?: TargetCpaOptInParameters;
    callout_extension?: CalloutExtensionParameters;
    call_extension?: CallExtensionParameters;
    sitelink_extension?: SitelinkExtensionParameters;
    move_unused_budget?: MoveUnusedBudgetParameters;
}
export interface ApplyRecommendationResponse {
    results?: {
        resource_name?: string;
    }[];
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
}
export interface ApplyRecommendationResult {
    resource_name?: string;
}
export interface DismissRecommendationOperation {
    resource_name?: string;
}
export interface DismissRecommendationRequest {
    customer_id?: string;
    operations?: DismissRecommendationOperation[];
    partial_failure?: boolean;
}
export interface DismissRecommendationResult {
    resource_name?: string;
}
export interface DismissRecommendationResponse {
    results?: DismissRecommendationResult[];
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
}
export interface RemarketingActionService {
}
export interface GetRemarketingActionRequest {
    resource_name?: string;
}
export interface MutateRemarketingActionsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: RemarketingAction;
        update?: RemarketingAction;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface RemarketingActionOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: RemarketingAction;
    update?: RemarketingAction;
}
export interface MutateRemarketingActionsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateRemarketingActionResult {
    resource_name?: string;
}
export interface SearchTermViewService {
}
export interface GetSearchTermViewRequest {
    resource_name?: string;
}
export interface SharedCriterionService {
}
export interface GetSharedCriterionRequest {
    resource_name?: string;
}
export interface MutateSharedCriteriaRequest {
    customer_id?: string;
    operations?: {
        create?: SharedCriterion;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface SharedCriterionOperation {
    create?: SharedCriterion;
    remove?: string;
}
export interface MutateSharedCriteriaResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateSharedCriterionResult {
    resource_name?: string;
}
export interface SharedSetService {
}
export interface GetSharedSetRequest {
    resource_name?: string;
}
export interface MutateSharedSetsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: SharedSet;
        update?: SharedSet;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface SharedSetOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: SharedSet;
    update?: SharedSet;
    remove?: string;
}
export interface MutateSharedSetsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateSharedSetResult {
    resource_name?: string;
}
export interface ShoppingPerformanceViewService {
}
export interface GetShoppingPerformanceViewRequest {
    resource_name?: string;
}
export interface ThirdPartyAppAnalyticsLinkService {
}
export interface GetThirdPartyAppAnalyticsLinkRequest {
    resource_name?: string;
}
export interface TopicConstantService {
}
export interface GetTopicConstantRequest {
    resource_name?: string;
}
export interface TopicViewService {
}
export interface GetTopicViewRequest {
    resource_name?: string;
}
export interface UserDataService {
}
export interface UploadUserDataRequest {
    customer_id?: string;
    operations?: {
        create?: UserData;
        remove?: UserData;
    }[];
    customer_match_user_list_metadata?: CustomerMatchUserListMetadata;
}
export interface UserDataOperation {
    create?: UserData;
    remove?: UserData;
}
export interface UploadUserDataResponse {
    upload_date_time?: string;
    received_operations_count?: number;
}
export interface UserInterestService {
}
export interface GetUserInterestRequest {
    resource_name?: string;
}
export interface UserListService {
}
export interface GetUserListRequest {
    resource_name?: string;
}
export interface MutateUserListsRequest {
    customer_id?: string;
    operations?: {
        update_mask?: {
            paths?: string[];
        };
        create?: UserList;
        update?: UserList;
        remove?: string;
    }[];
    partial_failure?: boolean;
    validate_only?: boolean;
}
export interface UserListOperation {
    update_mask?: {
        paths?: string[];
    };
    create?: UserList;
    update?: UserList;
    remove?: string;
}
export interface MutateUserListsResponse {
    partial_failure_error?: {
        code?: number;
        message?: string;
        details?: {
            type_url?: string;
            value?: string;
        }[];
    };
    results?: {
        resource_name?: string;
    }[];
}
export interface MutateUserListResult {
    resource_name?: string;
}
export interface UserLocationViewService {
}
export interface GetUserLocationViewRequest {
    resource_name?: string;
}
export interface VideoService {
}
export interface GetVideoRequest {
    resource_name?: string;
}
export declare type MetricFields = "absolute_top_impression_percentage" | "active_view_cpm" | "active_view_ctr" | "active_view_impressions" | "active_view_measurability" | "active_view_measurable_cost_micros" | "active_view_measurable_impressions" | "active_view_viewability" | "all_conversions_from_interactions_rate" | "all_conversions_value" | "all_conversions" | "all_conversions_value_per_cost" | "all_conversions_from_click_to_call" | "all_conversions_from_directions" | "all_conversions_from_interactions_value_per_interaction" | "all_conversions_from_menu" | "all_conversions_from_order" | "all_conversions_from_other_engagement" | "all_conversions_from_store_visit" | "all_conversions_from_store_website" | "average_cost" | "average_cpc" | "average_cpe" | "average_cpm" | "average_cpv" | "average_page_views" | "average_time_on_site" | "benchmark_average_max_cpc" | "benchmark_ctr" | "bounce_rate" | "clicks" | "combined_clicks" | "combined_clicks_per_query" | "combined_queries" | "content_budget_lost_impression_share" | "content_impression_share" | "conversion_last_received_request_date_time" | "conversion_last_conversion_date" | "content_rank_lost_impression_share" | "conversions_from_interactions_rate" | "conversions_value" | "conversions_value_per_cost" | "conversions_from_interactions_value_per_interaction" | "conversions" | "cost_micros" | "cost_per_all_conversions" | "cost_per_conversion" | "cost_per_current_model_attributed_conversion" | "cross_device_conversions" | "ctr" | "current_model_attributed_conversions" | "current_model_attributed_conversions_from_interactions_rate" | "current_model_attributed_conversions_from_interactions_value_per_interaction" | "current_model_attributed_conversions_value" | "current_model_attributed_conversions_value_per_cost" | "engagement_rate" | "engagements" | "hotel_average_lead_value_micros" | "hotel_price_difference_percentage" | "hotel_eligible_impressions" | "historical_creative_quality_score" | "historical_landing_page_quality_score" | "historical_quality_score" | "historical_search_predicted_ctr" | "gmail_forwards" | "gmail_saves" | "gmail_secondary_clicks" | "impressions_from_store_reach" | "impressions" | "interaction_rate" | "interactions" | "interaction_event_types" | "invalid_click_rate" | "invalid_clicks" | "message_chats" | "message_impressions" | "message_chat_rate" | "mobile_friendly_clicks_percentage" | "organic_clicks" | "organic_clicks_per_query" | "organic_impressions" | "organic_impressions_per_query" | "organic_queries" | "percent_new_visitors" | "phone_calls" | "phone_impressions" | "phone_through_rate" | "relative_ctr" | "search_absolute_top_impression_share" | "search_budget_lost_absolute_top_impression_share" | "search_budget_lost_impression_share" | "search_budget_lost_top_impression_share" | "search_click_share" | "search_exact_match_impression_share" | "search_impression_share" | "search_rank_lost_absolute_top_impression_share" | "search_rank_lost_impression_share" | "search_rank_lost_top_impression_share" | "search_top_impression_share" | "speed_score" | "top_impression_percentage" | "valid_accelerated_mobile_pages_clicks_percentage" | "value_per_all_conversions" | "value_per_conversion" | "value_per_current_model_attributed_conversion" | "video_quartile_100_rate" | "video_quartile_25_rate" | "video_quartile_50_rate" | "video_quartile_75_rate" | "video_view_rate" | "video_views" | "view_through_conversions";
import { ServedAssetFieldType, CallConversionReportingState, MimeType, DisplayAdFormatSetting, LegacyAppInstallAdAppStore, DisplayUploadProductType, TargetImpressionShareLocation, KeywordMatchType, Device, PreferredContentType, ListingGroupType, ProductBiddingCategoryLevel, ProductChannel, ProductChannelExclusivity, ProductCondition, ProductCustomAttributeIndex, ProductTypeLevel, HotelDateSelectionType, DayOfWeek, InteractionType, MinuteOfHour, AgeRangeType, GenderType, IncomeRangeType, ParentalStatusType, ProximityRadiusUnits, ContentLabelType, WebpageConditionOperand, WebpageConditionOperator, AppPaymentModelType, LocationGroupRadiusUnits, CriterionCategoryChannelAvailabilityMode, AdvertisingChannelType, AdvertisingChannelSubType, CriterionCategoryLocaleAvailabilityMode, AppStore, PriceExtensionType, PriceExtensionPriceQualifier, PriceExtensionPriceUnit, PromotionExtensionDiscountModifier, PromotionExtensionOccasion, AppUrlOperatingSystemType, FrequencyCapLevel, FrequencyCapEventType, FrequencyCapTimeUnit, KeywordPlanCompetitionLevel, MonthOfYear, MatchingFunctionOperator, MatchingFunctionContextType, QualityScoreBucket, InteractionEventType, PolicyTopicEntryType, PolicyTopicEvidenceDestinationMismatchUrlType, PolicyTopicEvidenceDestinationNotWorkingDevice, PolicyTopicEvidenceDestinationNotWorkingDnsErrorType, AdNetworkType, ClickType, ConversionActionCategory, ConversionAttributionEventType, ConversionLagBucket, ConversionOrAdjustmentLagBucket, ExternalConversionSource, HotelRateType, HotelPriceBucket, PlaceholderType, SearchEngineResultsPageType, SearchTermMatchType, Slot, TrackingCodeType, TrackingCodePageFormat, TargetingDimension, CustomerMatchUploadKeyType, UserListCrmDataSourceType, UserListRuleType, UserListDateRuleItemOperator, UserListNumberRuleItemOperator, UserListStringRuleItemOperator, UserListCombinedRuleOperator, UserListPrepopulationStatus, UserListLogicalRuleOperator, AccountBudgetProposalType, TimeType, SpendingLimitType, AccountBudgetStatus, AccountBudgetProposalStatus, AccountLinkStatus, LinkedAccountType, MobileAppVendor, AdType, SystemManagedResourceSource, AdGroupStatus, AdGroupType, AdGroupAdRotationMode, BiddingSource, AdGroupAdStatus, PolicyReviewStatus, PolicyApprovalStatus, AdStrength, AssetFieldType, AssetPerformanceLabel, BidModifierSource, AdGroupCriterionStatus, CriterionType, CriterionSystemServingStatus, AdGroupCriterionApprovalStatus, SimulationType, SimulationModificationMethod, ExtensionType, ExtensionSettingDevice, FeedLinkStatus, AssetType, BatchJobStatus, BiddingStrategyStatus, BiddingStrategyType, BillingSetupStatus, PositiveGeoTargetType, NegativeGeoTargetType, LocationSourceType, OptimizationGoalType, AppCampaignBiddingStrategyGoalType, AppCampaignAppStore, VanityPharmaDisplayUrlMode, VanityPharmaText, CampaignStatus, CampaignServingStatus, AdServingOptimizationStatus, CampaignExperimentType, BrandSafetySuitability, PaymentMode, BudgetStatus, BudgetDeliveryMethod, BudgetPeriod, BudgetType, CampaignCriterionStatus, CampaignDraftStatus, CampaignExperimentTrafficSplitType, CampaignExperimentStatus, CampaignSharedSetStatus, ChangeStatusResourceType, ChangeStatusOperation, AttributionModel, DataDrivenModelStatus, ConversionActionStatus, ConversionActionType, ConversionActionCountingType, CustomInterestStatus, CustomInterestType, CustomInterestMemberType, CustomerPayPerConversionEligibilityFailureReason, ManagerLinkStatus, PlacementType, DistanceBucket, FeedItemTargetDevice, FeedItemStatus, AffiliateLocationFeedRelationshipType, FeedAttributeType, FeedOrigin, FeedStatus, GeoTargetingRestriction, FeedItemValidationStatus, FeedItemQualityApprovalStatus, FeedItemQualityDisapprovalReason, FeedItemTargetType, FeedItemTargetStatus, SitelinkPlaceholderField, CallPlaceholderField, AppPlaceholderField, LocationPlaceholderField, AffiliateLocationPlaceholderField, CalloutPlaceholderField, StructuredSnippetPlaceholderField, MessagePlaceholderField, PricePlaceholderField, PromotionPlaceholderField, AdCustomizerPlaceholderField, DsaPageFeedCriterionField, LocationExtensionTargetingCriterionField, EducationPlaceholderField, FlightPlaceholderField, CustomPlaceholderField, HotelPlaceholderField, RealEstatePlaceholderField, TravelPlaceholderField, LocalPlaceholderField, JobPlaceholderField, FeedMappingStatus, FeedMappingCriterionType, GeoTargetConstantStatus, GeoTargetingType, GoogleAdsFieldCategory, GoogleAdsFieldDataType, InvoiceType, KeywordPlanForecastInterval, KeywordPlanNetwork, MediaType, MerchantCenterLinkStatus, MobileDeviceType, OfflineUserDataJobType, OfflineUserDataJobStatus, OfflineUserDataJobFailureReason, OperatingSystemVersionOperatorType, ProductBiddingCategoryStatus, TargetCpaOptInRecommendationGoal, RecommendationType, SearchTermTargetingStatus, SharedSetType, SharedSetStatus, UserInterestTaxonomyType, UserListMembershipStatus, UserListSizeRange, UserListType, UserListClosingReason, AccessReason, UserListAccessStatus, ConversionAdjustmentType, AccessRole, SummaryRowSetting, ReachPlanAgeRange, ReachPlanNetwork, ReachPlanAdLength } from "./enums";
