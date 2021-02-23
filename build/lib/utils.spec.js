"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const types_1 = require("./types");
const utils_1 = require("./utils");
test("proto object result is parsed from field mask", () => {
    const fakeResponse = [
        {
            campaign: {
                resourceName: "customers/123/campaigns/123",
                id: { value: 123 },
                targetCpa: undefined,
                name: { value: "2019" },
                status: 0,
                urlCustomParametersList: [],
                manualCpc: undefined,
                manualCpv: undefined,
            },
            metrics: {
                cost: { value: 100 },
                clicks: undefined,
            },
        },
    ];
    const fieldMask = {
        pathsList: ["campaign.id", "campaign.name", "campaign.url_custom_parameters", "metrics.cost"],
    };
    // @ts-ignore Partial type is fine for testing
    const parsedResults = utils_1.formatCallResults(fakeResponse, fieldMask);
    expect(parsedResults).toStrictEqual([
        {
            campaign: {
                resourceName: "customers/123/campaigns/123",
                id: 123,
                name: "2019",
                urlCustomParameters: [],
            },
            metrics: {
                cost: 100,
            },
        },
    ]);
    expect(parsedResults[0].campaign.hasOwnProperty("resourceName")).toEqual(true);
});
test("proto object result can be parsed for deeply nested entities", () => {
    const fieldMask = {
        pathsList: [
            "campaign.id",
            "campaign.name",
            "ad_group.id",
            "ad_group.name",
            "ad_group_criterion.criterion_id",
            "ad_group_criterion.keyword.text",
            "ad_group_criterion.keyword.match_type",
            "metrics.impressions",
            "metrics.clicks",
            "metrics.cost_micros",
        ],
    };
    const parsedResults = utils_1.formatCallResults(JSON.parse(fakeKeywordResponse), fieldMask);
    expect(parsedResults).toEqual([
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1473765780",
                id: 1473765780,
                name: "test-campaign-2 (created during library test)",
            },
            adGroup: {
                resourceName: "customers/9262111890/adGroups/59960230227",
                id: 59960230227,
                name: "new name",
            },
            adGroupCriterion: {
                resourceName: "customers/9262111890/adGroupCriteria/59960230227_10234981",
                criterionId: 10234981,
                keyword: {
                    text: "hello",
                    matchType: 4,
                },
            },
            metrics: {
                clicks: 0,
                costMicros: 0,
                impressions: 0,
            },
        },
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1485014801",
                id: 1485014801,
                name: "Test Campaign - DO NOT REMOVE",
            },
            adGroup: {
                resourceName: "customers/9262111890/adGroups/60170225920",
                id: 60170225920,
                name: "Test AdGroup (Keywords) - DO NOT REMOVE",
            },
            adGroupCriterion: {
                resourceName: "customers/9262111890/adGroupCriteria/60170225920_480628692166",
                criterionId: 480628692166,
                keyword: {
                    text: "test-keyword-4",
                    matchType: 4,
                },
            },
            metrics: {
                clicks: 0,
                costMicros: 0,
                impressions: 0,
            },
        },
    ]);
});
test("proto object result can be parsed for nested entities with arrays", async () => {
    const fieldMask = {
        pathsList: [
            "ad_group_ad.ad.final_urls",
            "ad_group.targeting_setting.target_restrictions",
            "ad_group.name",
            "ad_group.url_custom_parameters",
        ],
    };
    // @ts-ignore Partial type is fine for testing
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupResponse, fieldMask);
    const expected_with_field_mask = [
        {
            adGroupAd: {
                resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
                ad: {
                    finalUrls: ["http://opteo.co/lp/ad-words-tool"],
                },
            },
            adGroup: {
                resourceName: "customers/3827277046/adGroups/37706041185",
                urlCustomParameters: [{ key: "yy", value: "1" }],
                targetingSetting: {
                    targetRestrictions: [
                        { targetingDimension: 3, bidOnly: false },
                        { targetingDimension: 4, bidOnly: false },
                        { targetingDimension: 5, bidOnly: true },
                        { targetingDimension: 6, bidOnly: true },
                        { targetingDimension: 7, bidOnly: false },
                        { targetingDimension: 8, bidOnly: false },
                    ],
                },
                name: "ad words tool [MB]",
            },
        },
    ];
    expect(parsedResultsWithFieldMask).toEqual(expected_with_field_mask);
});
test("proto object result can be parsed when fieldmask ends in unspecified object", () => {
    // This can happen for fields such as ad_group_ad.policy_summary, which returns an object.
    // It is not possible to select individual fields of this object -- the whole object is always returned.
    const fieldMask = {
        pathsList: ["ad_group_ad.policy_summary"],
    };
    // @ts-ignore Partial type is fine for testing
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupAdResponse, fieldMask);
    const expected = [
        {
            adGroupAd: {
                resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
                policySummary: {
                    approvalStatus: 0,
                    policyTopicEntries: [],
                    reviewStatus: 2,
                },
            },
        },
    ];
    expect(parsedResultsWithFieldMask).toEqual(expected);
});
test("parsing results with field mask correctly removes undefined properties", () => {
    // Sometimes, the api will not return a field at all if it is unset on the google servers.
    // We need to make sure we follow that behavior by not returning that field.
    const fieldMask = {
        // Asking for a name that will not be returned in API response
        pathsList: ["ad_group_ad.name", "ad_group_ad.policy_summary"],
    };
    // @ts-ignore Partial type is fine for testing
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeAdGroupAdResponse, fieldMask);
    // We should not have 'name' in the parsed result
    expect(Object.keys(parsedResultsWithFieldMask[0].adGroupAd).includes("name")).toBeFalsy();
});
test("parsing results fields ending in 'List' works correctly", () => {
    const fieldMask = {
        pathsList: [
            "ad_group_simulation.ad_group_id",
            "ad_group_simulation.cpc_bid_point_list.points",
            "ad_group.url_custom_parameters",
        ],
    };
    // @ts-ignore Partial type is fine for testing
    const parsedResultsWithFieldMask = utils_1.formatCallResults(fakeSimulationResponse, fieldMask);
    expect(parsedResultsWithFieldMask).toEqual([
        {
            adGroupSimulation: {
                resourceName: "customers/2867339011/adGroupSimulations/58185498151~CPC_BID~DEFAULT~20190910~20190916",
                adGroupId: 58185498151,
                // This should end in "List" because that's how it is defined in the docs
                cpcBidPointList: {
                    // This should NOT end in "List" (even though it comes in as pointsList)
                    points: [
                        {
                            cpcBidMicros: 6520000,
                            biddableConversions: 5.348322868347168,
                            biddableConversionsValue: 374.3826599121094,
                            clicks: 41,
                            costMicros: 149090000,
                            impressions: 696,
                            topSlotImpressions: 542,
                        },
                    ],
                },
            },
            adGroup: {
                resourceName: "customers/2867339011/adGroups/58185498151",
                urlCustomParameters: [],
            },
        },
    ]);
});
test("parsing removes the append list postfix to array types", () => {
    const result = [
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1485014801",
                urlCustomParametersList: [],
                frequencyCapsList: [],
            },
        },
    ];
    // @ts-ignore Partial type is fine for testing
    const parsedResult = utils_1.formatCallResults(result, {
        pathsList: ["campaign.url_custom_parameters", "campaign.frequency_caps"],
    });
    expect(parsedResult[0]).toEqual({
        campaign: {
            resourceName: "customers/9262111890/campaigns/1485014801",
            urlCustomParameters: [],
            frequencyCaps: [],
        },
    });
});
test("parsing removes undefined properties even if they're defined in the field mask", () => {
    const result = [
        {
            campaign: {
                resourceName: "customers/9262111890/campaigns/1485014801",
                id: 123,
                finalUrlSuffix: undefined,
                dynamicSearchSettings: undefined,
                searchSettings: {
                    one: "one",
                    two: undefined,
                },
            },
        },
    ];
    const parsedResult = utils_1.formatCallResults(result, {
        pathsList: [
            "campaign.resource_name",
            "campaign.id",
            "campaign.final_url_suffix",
            "campaign.dynamic_search_settings",
            "campaign.search_settings.one",
            "campaign.search_settings.two",
        ],
    });
    expect(parsedResult[0]).toEqual({
        campaign: {
            resourceName: "customers/9262111890/campaigns/1485014801",
            id: 123,
            searchSettings: {
                one: "one",
            },
        },
    });
});
test("parsing works correctly for get requests", () => {
    const result = [
        {
            resourceName: "geoTargetConstants/1021278",
            id: { value: 1021278 },
            name: { value: "Raleigh" },
            countryCode: { value: "US" },
            targetType: { value: "City" },
            status: 2,
            canonicalName: { value: "Raleigh,North Carolina,United States" },
        },
    ];
    // @ts-ignore Partial type is fine for testing
    const parsedResult = utils_1.formatCallResults(result, {
        pathsList: [
            // For get requests, a .value is added to each field mask path (except resourceName & enums)
            "resourceName",
            "id.value",
            "name.value",
            "countryCode.value",
            "targetType.value",
            "status",
            "canonicalName.value",
        ],
    });
    expect(parsedResult[0]).toEqual({
        resourceName: "geoTargetConstants/1021278",
        id: 1021278,
        name: "Raleigh",
        countryCode: "US",
        targetType: "City",
        status: 2,
        canonicalName: "Raleigh,North Carolina,United States",
    });
});
// Some fields are actually called 'value', which we don't want to remove
test("parsing doesn't remove fields called 'value'", () => {
    const result = [
        {
            adGroupCriterion: {
                productGroup: {
                    caseValue: {
                        productType: {
                            value: {
                                value: 123,
                            },
                        },
                    },
                },
            },
        },
    ];
    // @ts-ignore Partial type is fine for testing
    const parsedResult = utils_1.formatCallResults(result, {
        pathsList: ["ad_group_criterion.product_group.case_value.product_type.value"],
    });
    expect(parsedResult[0]).toEqual({
        adGroupCriterion: {
            productGroup: {
                caseValue: {
                    productType: {
                        value: 123
                    }
                }
            }
        }
    });
});
test("update mask can be generated from a resource object", () => {
    const resource = {
        resource_name: "customers/123/campaignBudgets/321",
        amount_micros: 20000,
        status: 2,
        settings: {
            another_setting: {
                something: "value",
            },
        },
        some_list: ["foo", "bar", "baz"],
    };
    const mask = utils_1.getFieldMask(resource);
    expect(mask.toObject().pathsList).toEqual([
        "amount_micros",
        "status",
        "settings.another_setting.something",
        "some_list",
    ]);
});
test("field location error can be generated from errors list object", () => {
    const fieldError = {
        fieldPathElementsList: [
            { fieldName: "operations", index: { value: 0 } },
            { fieldName: "create" },
            { fieldName: "ad" },
            { fieldName: "display_url" },
        ],
    };
    const badFieldError = { fieldPathBad: "invalid" };
    const emptyFieldError = { fieldPathElementsList: [] };
    const path = utils_1.getErrorLocationPath(fieldError);
    const badPath = utils_1.getErrorLocationPath(badFieldError);
    const emptyPath = utils_1.getErrorLocationPath(emptyFieldError);
    expect(path).toEqual("operations[0].create.ad.display_url");
    expect(badPath).toEqual("");
    expect(emptyPath).toEqual("");
    expect(utils_1.getErrorLocationPath(undefined)).toEqual("");
});
test("mutation requests can be detected correctly", () => {
    const searchRequestCallOptions = {
        method_definition: {
            path: "/google.ads.googleads.v3.services.GoogleAdsService/Search",
            requestStream: false,
            responseStream: false,
            // Not required for test
            requestSerialize: undefined,
            responseDeserialize: undefined,
        },
    };
    const mutateCampaignBudgetCallOptions = {
        method_definition: {
            path: "/google.ads.googleads.v3.services.CampaignBudgetService/MutateCampaignBudgets",
            requestStream: false,
            responseStream: false,
            // Not required for test
            requestSerialize: undefined,
            responseDeserialize: undefined,
        },
    };
    const applyRecommendationRequestCallOptions = {
        method_definition: {
            path: "/google.ads.googleads.v3.services.RecommendationService/ApplyRecommendation",
        },
    };
    expect(utils_1.isMutationRequest(searchRequestCallOptions)).toEqual(false);
    expect(utils_1.isMutationRequest(mutateCampaignBudgetCallOptions)).toEqual(true);
    expect(utils_1.isMutationRequest(applyRecommendationRequestCallOptions)).toEqual(true);
});
test("mutation requests can be safeguarded i.e. set to validate only or operation list cleared", () => {
    const campaignBudgetRequest = buildCampaignBudgetRequest();
    const nonValidateOnlyRequest = buildRecommendationRequest();
    // Uses validate only if it exists
    utils_1.safeguardMutationProtobufRequest(campaignBudgetRequest, (message) => {
        expect(message.getValidateOnly()).toEqual(true);
    });
    expect(nonValidateOnlyRequest.toObject().operationsList.length).toEqual(1);
    // Clears operation list when validate only doesn't exist
    utils_1.safeguardMutationProtobufRequest(nonValidateOnlyRequest, (message) => {
        expect(message.getValidateOnly).toEqual(undefined);
        expect(message.getOperationsList()).toEqual([]);
    });
});
test("field mask paths are correctly converted to camel case format", () => {
    const tests = [
        ["metrics.video_quartile_100_rate", "metrics.videoQuartile100Rate"],
        ["metrics.video_quartile_25_rate", "metrics.videoQuartile25Rate"],
        ["metrics.video_quartile_50_rate", "metrics.videoQuartile50Rate"],
        ["metrics.video_quartile_75_rate", "metrics.videoQuartile75Rate"],
        ["metrics.video_views", "metrics.videoViews"],
        ["video.title", "video.title"],
        [
            "ad_group_criterion.listing_group.case_value.product_bidding_category.id",
            "adGroupCriterion.listingGroup.caseValue.productBiddingCategory.id",
        ],
        [
            "ad_group_criterion.listing_group.case_value.product_bidding_category.level",
            "adGroupCriterion.listingGroup.caseValue.productBiddingCategory.level",
        ],
        [
            "metrics.all_conversions_from_interactions_rate",
            "metrics.allConversionsFromInteractionsRate",
        ],
        ["invalid.some-strange-field-that-doesn't-exist", "invalid.someStrangeFieldThatDoesn'tExist"],
    ];
    for (const [input, expected] of tests) {
        expect(utils_1.convertPathToCamelCase(input)).toEqual(expected);
    }
});
const fakeKeywordResponse = `
  [
    {
      "adGroup": {
        "resourceName": "customers/9262111890/adGroups/59960230227",
        "id": {
          "value": 59960230227
        },
        "name": {
          "value": "new name"
        },
        "status": 0,
        "type": 0,
        "adRotationMode": 0,
        "urlCustomParametersList": [],
        "displayCustomBidDimension": 0,
        "effectiveTargetCpaSource": 0,
        "effectiveTargetRoasSource": 0
      },
      "adGroupCriterion": {
        "resourceName": "customers/9262111890/adGroupCriteria/59960230227_10234981",
        "criterionId": {
          "value": 10234981
        },
        "status": 0,
        "type": 0,
        "effectiveCpcBidSource": 0,
        "effectiveCpmBidSource": 0,
        "effectiveCpvBidSource": 0,
        "effectivePercentCpcBidSource": 0,
        "finalUrlsList": [],
        "urlCustomParametersList": [],
        "keyword": {
          "text": {
            "value": "hello"
          },
          "matchType": 4
        }
      },
      "campaign": {
        "resourceName": "customers/9262111890/campaigns/1473765780",
        "id": {
          "value": 1473765780
        },
        "name": {
          "value": "test-campaign-2 (created during library test)"
        },
        "status": 0,
        "servingStatus": 0,
        "adServingOptimizationStatus": 0,
        "advertisingChannelType": 0,
        "advertisingChannelSubType": 0,
        "urlCustomParametersList": [],
        "biddingStrategyType": 0,
        "frequencyCapsList": [],
        "videoBrandSafetySuitability": 0
      },
      "keywordView": {
        "resourceName": "customers/9262111890/keywordViews/59960230227_10234981"
      },
      "metrics": {
        "clicks": {
          "value": 0
        },
        "costMicros": {
          "value": 0
        },
        "historicalCreativeQualityScore": 0,
        "historicalLandingPageQualityScore": 0,
        "historicalSearchPredictedCtr": 0,
        "impressions": {
          "value": 0
        },
        "interactionEventTypesList": []
      }
    },
    {
      "adGroup": {
        "resourceName": "customers/9262111890/adGroups/60170225920",
        "id": {
          "value": 60170225920
        },
        "name": {
          "value": "Test AdGroup (Keywords) - DO NOT REMOVE"
        },
        "status": 0,
        "type": 0,
        "adRotationMode": 0,
        "urlCustomParametersList": [],
        "displayCustomBidDimension": 0,
        "effectiveTargetCpaSource": 0,
        "effectiveTargetRoasSource": 0
      },
      "adGroupCriterion": {
        "resourceName": "customers/9262111890/adGroupCriteria/60170225920_480628692166",
        "criterionId": {
          "value": 480628692166
        },
        "status": 0,
        "type": 0,
        "effectiveCpcBidSource": 0,
        "effectiveCpmBidSource": 0,
        "effectiveCpvBidSource": 0,
        "effectivePercentCpcBidSource": 0,
        "finalUrlsList": [],
        "urlCustomParametersList": [],
        "keyword": {
          "text": {
            "value": "test-keyword-4"
          },
          "matchType": 4
        }
      },
      "campaign": {
        "resourceName": "customers/9262111890/campaigns/1485014801",
        "id": {
          "value": 1485014801
        },
        "name": {
          "value": "Test Campaign - DO NOT REMOVE"
        },
        "status": 0,
        "servingStatus": 0,
        "adServingOptimizationStatus": 0,
        "advertisingChannelType": 0,
        "advertisingChannelSubType": 0,
        "urlCustomParametersList": [],
        "biddingStrategyType": 0,
        "frequencyCapsList": [],
        "videoBrandSafetySuitability": 0
      },
      "keywordView": {
        "resourceName": "customers/9262111890/keywordViews/60170225920_480628692166"
      },
      "metrics": {
        "clicks": {
          "value": 0
        },
        "costMicros": {
          "value": 0
        },
        "historicalCreativeQualityScore": 0,
        "historicalLandingPageQualityScore": 0,
        "historicalSearchPredictedCtr": 0,
        "impressions": {
          "value": 0
        },
        "interactionEventTypesList": []
      }
    }
  ]`;
const fakeAdGroupResponse = [
    {
        accountBudget: undefined,
        accountBudgetProposal: undefined,
        adGroup: {
            resourceName: "customers/3827277046/adGroups/37706041185",
            id: undefined,
            name: { value: "ad words tool [MB]" },
            status: 0,
            finalUrlSuffix: undefined,
            targetingSetting: {
                targetRestrictionsList: [
                    { targetingDimension: 3, bidOnly: { value: false } },
                    { targetingDimension: 4, bidOnly: { value: false } },
                    { targetingDimension: 5, bidOnly: { value: true } },
                    { targetingDimension: 6, bidOnly: { value: true } },
                    { targetingDimension: 7, bidOnly: { value: false } },
                    { targetingDimension: 8, bidOnly: { value: false } },
                ],
            },
            effectiveTargetCpaMicros: undefined,
            effectiveTargetRoas: undefined,
            urlCustomParametersList: [{ key: { value: "yy" }, value: { value: "1" } }],
        },
        adGroupAd: {
            resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
            adGroup: undefined,
            ad: {
                id: undefined,
                someDirectArray: [3, 4, 5],
                finalUrlsList: [{ value: "http://opteo.co/lp/ad-words-tool" }],
                finalAppUrlsList: [],
            },
        },
        adGroupAdLabel: undefined,
        adGroupAudienceView: undefined,
        adGroupBidModifier: undefined,
    },
];
const fakeAdGroupAdResponse = [
    {
        adGroupAd: {
            resourceName: "customers/3827277046/adGroupAds/37706041185~170102539400",
            adGroup: undefined,
            policySummary: { policyTopicEntriesList: [], reviewStatus: 2, approvalStatus: 0 },
        },
        adGroupAdLabel: undefined,
        adGroupAudienceView: undefined,
        adGroupBidModifier: undefined,
    },
];
const fakeSimulationResponse = [
    {
        adGroup: {
            resourceName: "customers/2867339011/adGroups/58185498151",
            urlCustomParametersList: [],
        },
        adGroupSimulation: {
            resourceName: "customers/2867339011/adGroupSimulations/58185498151~CPC_BID~DEFAULT~20190910~20190916",
            adGroupId: { value: 58185498151 },
            cpcBidPointList: {
                pointsList: [
                    {
                        cpcBidMicros: { value: 6520000 },
                        biddableConversions: { value: 5.348322868347168 },
                        biddableConversionsValue: { value: 374.3826599121094 },
                        clicks: { value: 41 },
                        costMicros: { value: 149090000 },
                        impressions: { value: 696 },
                        topSlotImpressions: { value: 542 },
                    },
                ],
            },
        },
    },
];
function buildCampaignBudgetRequest() {
    // @ts-ignore Auth not required here
    const client = new client_1.GoogleAdsClient({
        developer_token: "DEVELOPER_TOKEN",
        client_id: "CLIENT_ID",
        client_secret: "CLIENT_SECRET",
        refresh_token: "REFRESH_TOKEN",
    });
    const budgetRequest = new types_1.MutateCampaignBudgetsRequest();
    const operation = new types_1.CampaignBudgetOperation();
    const budget = client.buildResource("CampaignBudget", {
        name: "test-budget",
        amount_micros: 30000,
    });
    // @ts-ignore Type doesn't matter here
    operation.setCreate(budget);
    budgetRequest.setOperationsList([operation]);
    budgetRequest.setCustomerId("0123456789");
    return budgetRequest;
}
function buildRecommendationRequest() {
    // @ts-ignore Auth not required here
    const client = new client_1.GoogleAdsClient({
        developer_token: "DEVELOPER_TOKEN",
        client_id: "CLIENT_ID",
        client_secret: "CLIENT_SECRET",
        refresh_token: "REFRESH_TOKEN",
    });
    const recommendationRequest = new types_1.ApplyRecommendationRequest();
    const operation = new types_1.ApplyRecommendationOperation();
    recommendationRequest.setOperationsList([operation]);
    recommendationRequest.setCustomerId("0123456789");
    return recommendationRequest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXRpbHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHFDQUEyQztBQUMzQyxtQ0FLaUI7QUFDakIsbUNBT2lCO0FBRWpCLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxHQUFHLEVBQUU7SUFDekQsTUFBTSxZQUFZLEdBQUc7UUFDbkI7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLDZCQUE2QjtnQkFDM0MsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDbEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxDQUFDO2dCQUNULHVCQUF1QixFQUFFLEVBQUU7Z0JBQzNCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixTQUFTLEVBQUUsU0FBUzthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixNQUFNLEVBQUUsU0FBUzthQUNsQjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLEVBQUUsY0FBYyxDQUFDO0tBQzlGLENBQUM7SUFDRiw4Q0FBOEM7SUFDOUMsTUFBTSxhQUFhLEdBQUcseUJBQWlCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDbEM7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLDZCQUE2QjtnQkFDM0MsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLE1BQU07Z0JBQ1osbUJBQW1CLEVBQUUsRUFBRTthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsR0FBRzthQUNWO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakYsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsOERBQThELEVBQUUsR0FBRyxFQUFFO0lBQ3hFLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRTtZQUNULGFBQWE7WUFDYixlQUFlO1lBQ2YsYUFBYTtZQUNiLGVBQWU7WUFDZixpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLHVDQUF1QztZQUN2QyxxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtTQUN0QjtLQUNGLENBQUM7SUFDRixNQUFNLGFBQWEsR0FBRyx5QkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFcEYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM1QjtZQUNFLFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsMkNBQTJDO2dCQUN6RCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxJQUFJLEVBQUUsK0NBQStDO2FBQ3REO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVksRUFBRSwyQ0FBMkM7Z0JBQ3pELEVBQUUsRUFBRSxXQUFXO2dCQUNmLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLFlBQVksRUFBRSwyREFBMkQ7Z0JBQ3pFLFdBQVcsRUFBRSxRQUFRO2dCQUNyQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxVQUFVLEVBQUUsQ0FBQztnQkFDYixXQUFXLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7UUFDRDtZQUNFLFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsMkNBQTJDO2dCQUN6RCxFQUFFLEVBQUUsVUFBVTtnQkFDZCxJQUFJLEVBQUUsK0JBQStCO2FBQ3RDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVksRUFBRSwyQ0FBMkM7Z0JBQ3pELEVBQUUsRUFBRSxXQUFXO2dCQUNmLElBQUksRUFBRSx5Q0FBeUM7YUFDaEQ7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDaEIsWUFBWSxFQUFFLCtEQUErRDtnQkFDN0UsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixTQUFTLEVBQUUsQ0FBQztpQkFDYjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxDQUFDO2dCQUNULFVBQVUsRUFBRSxDQUFDO2dCQUNiLFdBQVcsRUFBRSxDQUFDO2FBQ2Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLG1FQUFtRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ25GLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRTtZQUNULDJCQUEyQjtZQUMzQixnREFBZ0Q7WUFDaEQsZUFBZTtZQUNmLGdDQUFnQztTQUNqQztLQUNGLENBQUM7SUFFRiw4Q0FBOEM7SUFDOUMsTUFBTSwwQkFBMEIsR0FBRyx5QkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVyRixNQUFNLHdCQUF3QixHQUFHO1FBQy9CO1lBQ0UsU0FBUyxFQUFFO2dCQUNULFlBQVksRUFBRSwwREFBMEQ7Z0JBQ3hFLEVBQUUsRUFBRTtvQkFDRixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFLaEQ7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZLEVBQUUsMkNBQTJDO2dCQUN6RCxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2hELGdCQUFnQixFQUFFO29CQUNoQixrQkFBa0IsRUFBRTt3QkFDbEIsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTt3QkFDekMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTt3QkFDekMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTt3QkFDeEMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTt3QkFDeEMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTt3QkFDekMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtxQkFDMUM7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFLG9CQUFvQjthQUczQjtTQUNGO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZFQUE2RSxFQUFFLEdBQUcsRUFBRTtJQUN2RiwwRkFBMEY7SUFDMUYsd0dBQXdHO0lBRXhHLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzFDLENBQUM7SUFFRiw4Q0FBOEM7SUFDOUMsTUFBTSwwQkFBMEIsR0FBRyx5QkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV2RixNQUFNLFFBQVEsR0FBRztRQUNmO1lBQ0UsU0FBUyxFQUFFO2dCQUNULFlBQVksRUFBRSwwREFBMEQ7Z0JBQ3hFLGFBQWEsRUFBRTtvQkFDYixjQUFjLEVBQUUsQ0FBQztvQkFDakIsa0JBQWtCLEVBQUUsRUFBRTtvQkFDdEIsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsd0VBQXdFLEVBQUUsR0FBRyxFQUFFO0lBQ2xGLDBGQUEwRjtJQUMxRiw0RUFBNEU7SUFFNUUsTUFBTSxTQUFTLEdBQUc7UUFDaEIsOERBQThEO1FBQzlELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLDRCQUE0QixDQUFDO0tBQzlELENBQUM7SUFFRiw4Q0FBOEM7SUFDOUMsTUFBTSwwQkFBMEIsR0FBRyx5QkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV2RixpREFBaUQ7SUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDNUYsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMseURBQXlELEVBQUUsR0FBRyxFQUFFO0lBQ25FLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRTtZQUNULGlDQUFpQztZQUNqQywrQ0FBK0M7WUFDL0MsZ0NBQWdDO1NBQ2pDO0tBQ0YsQ0FBQztJQUVGLDhDQUE4QztJQUM5QyxNQUFNLDBCQUEwQixHQUFHLHlCQUFpQixDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXhGLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN6QztZQUNFLGlCQUFpQixFQUFFO2dCQUNqQixZQUFZLEVBQ1YsdUZBQXVGO2dCQUN6RixTQUFTLEVBQUUsV0FBVztnQkFDdEIseUVBQXlFO2dCQUN6RSxlQUFlLEVBQUU7b0JBQ2Ysd0VBQXdFO29CQUN4RSxNQUFNLEVBQUU7d0JBQ047NEJBQ0UsWUFBWSxFQUFFLE9BQU87NEJBQ3JCLG1CQUFtQixFQUFFLGlCQUFpQjs0QkFDdEMsd0JBQXdCLEVBQUUsaUJBQWlCOzRCQUMzQyxNQUFNLEVBQUUsRUFBRTs0QkFDVixVQUFVLEVBQUUsU0FBUzs0QkFDckIsV0FBVyxFQUFFLEdBQUc7NEJBQ2hCLGtCQUFrQixFQUFFLEdBQUc7eUJBQ3hCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLDJDQUEyQztnQkFDekQsbUJBQW1CLEVBQUUsRUFBRTthQUN4QjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsd0RBQXdELEVBQUUsR0FBRyxFQUFFO0lBQ2xFLE1BQU0sTUFBTSxHQUFHO1FBQ2I7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLDJDQUEyQztnQkFDekQsdUJBQXVCLEVBQUUsRUFBRTtnQkFDM0IsaUJBQWlCLEVBQUUsRUFBRTthQUN0QjtTQUNGO0tBQ0YsQ0FBQztJQUVGLDhDQUE4QztJQUM5QyxNQUFNLFlBQVksR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLEVBQUU7UUFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7S0FDekUsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5QixRQUFRLEVBQUU7WUFDUixZQUFZLEVBQUUsMkNBQTJDO1lBQ3pELG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsYUFBYSxFQUFFLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnRkFBZ0YsRUFBRSxHQUFHLEVBQUU7SUFDMUYsTUFBTSxNQUFNLEdBQUc7UUFDYjtZQUNFLFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsMkNBQTJDO2dCQUN6RCxFQUFFLEVBQUUsR0FBRztnQkFDUCxjQUFjLEVBQUUsU0FBUztnQkFDekIscUJBQXFCLEVBQUUsU0FBUztnQkFDaEMsY0FBYyxFQUFFO29CQUNkLEdBQUcsRUFBRSxLQUFLO29CQUNWLEdBQUcsRUFBRSxTQUFTO2lCQUNmO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLEVBQUU7UUFDN0MsU0FBUyxFQUFFO1lBQ1Qsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYiwyQkFBMkI7WUFDM0Isa0NBQWtDO1lBQ2xDLDhCQUE4QjtZQUM5Qiw4QkFBOEI7U0FDL0I7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlCLFFBQVEsRUFBRTtZQUNSLFlBQVksRUFBRSwyQ0FBMkM7WUFDekQsRUFBRSxFQUFFLEdBQUc7WUFDUCxjQUFjLEVBQUU7Z0JBQ2QsR0FBRyxFQUFFLEtBQUs7YUFDWDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsMENBQTBDLEVBQUUsR0FBRyxFQUFFO0lBQ3BELE1BQU0sTUFBTSxHQUFHO1FBQ2I7WUFDRSxZQUFZLEVBQUUsNEJBQTRCO1lBQzFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDdEIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUMxQixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzVCLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDN0IsTUFBTSxFQUFFLENBQUM7WUFDVCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsc0NBQXNDLEVBQUU7U0FDakU7S0FDRixDQUFDO0lBRUYsOENBQThDO0lBQzlDLE1BQU0sWUFBWSxHQUFHLHlCQUFpQixDQUFDLE1BQU0sRUFBRTtRQUM3QyxTQUFTLEVBQUU7WUFDVCw0RkFBNEY7WUFDNUYsY0FBYztZQUNkLFVBQVU7WUFDVixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixRQUFRO1lBQ1IscUJBQXFCO1NBQ3RCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5QixZQUFZLEVBQUUsNEJBQTRCO1FBQzFDLEVBQUUsRUFBRSxPQUFPO1FBQ1gsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQUUsSUFBSTtRQUNqQixVQUFVLEVBQUUsTUFBTTtRQUNsQixNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxzQ0FBc0M7S0FDdEQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCx5RUFBeUU7QUFDekUsSUFBSSxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsRUFBRTtJQUN4RCxNQUFNLE1BQU0sR0FBRztRQUNiO1lBQ0UsZ0JBQWdCLEVBQUU7Z0JBQ2hCLFlBQVksRUFBRTtvQkFDWixTQUFTLEVBQUU7d0JBQ1QsV0FBVyxFQUFFOzRCQUNYLEtBQUssRUFBRTtnQ0FDTCxLQUFLLEVBQUUsR0FBRzs2QkFDWDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRUYsOENBQThDO0lBQzlDLE1BQU0sWUFBWSxHQUFHLHlCQUFpQixDQUFDLE1BQU0sRUFBRTtRQUM3QyxTQUFTLEVBQUUsQ0FBQyxnRUFBZ0UsQ0FBQztLQUM5RSxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlCLGdCQUFnQixFQUFFO1lBQ2hCLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUU7b0JBQ1QsV0FBVyxFQUFFO3dCQUNYLEtBQUssRUFBRSxHQUFHO3FCQUNYO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtJQUMvRCxNQUFNLFFBQVEsR0FBRztRQUNmLGFBQWEsRUFBRSxtQ0FBbUM7UUFDbEQsYUFBYSxFQUFFLEtBQUs7UUFDcEIsTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLE9BQU87YUFDbkI7U0FDRjtRQUNELFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ2pDLENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hDLGVBQWU7UUFDZixRQUFRO1FBQ1Isb0NBQW9DO1FBQ3BDLFdBQVc7S0FDWixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQywrREFBK0QsRUFBRSxHQUFHLEVBQUU7SUFDekUsTUFBTSxVQUFVLEdBQUc7UUFDakIscUJBQXFCLEVBQUU7WUFDckIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7WUFDdkIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO1lBQ25CLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtTQUM3QjtLQUNGLENBQUM7SUFDRixNQUFNLGFBQWEsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNsRCxNQUFNLGVBQWUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxDQUFDO0lBRXRELE1BQU0sSUFBSSxHQUFHLDRCQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sT0FBTyxHQUFHLDRCQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sU0FBUyxHQUFHLDRCQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsTUFBTSxDQUFDLDRCQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLEdBQUcsRUFBRTtJQUN2RCxNQUFNLHdCQUF3QixHQUFxQjtRQUNqRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsMkRBQTJEO1lBQ2pFLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLG1CQUFtQixFQUFFLFNBQVM7U0FDL0I7S0FDRixDQUFDO0lBRUYsTUFBTSwrQkFBK0IsR0FBcUI7UUFDeEQsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLCtFQUErRTtZQUNyRixhQUFhLEVBQUUsS0FBSztZQUNwQixjQUFjLEVBQUUsS0FBSztZQUNyQix3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixtQkFBbUIsRUFBRSxTQUFTO1NBQy9CO0tBQ0YsQ0FBQztJQUVGLE1BQU0scUNBQXFDLEdBQXFCO1FBQzlELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSw2RUFBNkU7U0FDcEY7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLHlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsTUFBTSxDQUFDLHlCQUFpQixDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekUsTUFBTSxDQUFDLHlCQUFpQixDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakYsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsMEZBQTBGLEVBQUUsR0FBRyxFQUFFO0lBQ3BHLE1BQU0scUJBQXFCLEdBQUcsMEJBQTBCLEVBQUUsQ0FBQztJQUMzRCxNQUFNLHNCQUFzQixHQUFHLDBCQUEwQixFQUFFLENBQUM7SUFFNUQsa0NBQWtDO0lBQ2xDLHdDQUFnQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsT0FBWSxFQUFFLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLHlEQUF5RDtJQUN6RCx3Q0FBZ0MsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQ3hFLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLCtEQUErRCxFQUFFLEdBQUcsRUFBRTtJQUN6RSxNQUFNLEtBQUssR0FBRztRQUNaLENBQUMsaUNBQWlDLEVBQUUsOEJBQThCLENBQUM7UUFDbkUsQ0FBQyxnQ0FBZ0MsRUFBRSw2QkFBNkIsQ0FBQztRQUNqRSxDQUFDLGdDQUFnQyxFQUFFLDZCQUE2QixDQUFDO1FBQ2pFLENBQUMsZ0NBQWdDLEVBQUUsNkJBQTZCLENBQUM7UUFDakUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztRQUM3QyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFDOUI7WUFDRSx5RUFBeUU7WUFDekUsbUVBQW1FO1NBQ3BFO1FBQ0Q7WUFDRSw0RUFBNEU7WUFDNUUsc0VBQXNFO1NBQ3ZFO1FBQ0Q7WUFDRSxnREFBZ0Q7WUFDaEQsNENBQTRDO1NBQzdDO1FBQ0QsQ0FBQywrQ0FBK0MsRUFBRSwwQ0FBMEMsQ0FBQztLQUM5RixDQUFDO0lBRUYsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUNyQyxNQUFNLENBQUMsOEJBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekQ7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sbUJBQW1CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNKeEIsQ0FBQztBQUVMLE1BQU0sbUJBQW1CLEdBQUc7SUFDMUI7UUFDRSxhQUFhLEVBQUUsU0FBUztRQUN4QixxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRSwyQ0FBMkM7WUFDekQsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7WUFDckMsTUFBTSxFQUFFLENBQUM7WUFDVCxjQUFjLEVBQUUsU0FBUztZQUN6QixnQkFBZ0IsRUFBRTtnQkFDaEIsc0JBQXNCLEVBQUU7b0JBQ3RCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDcEQsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNwRCxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQ25ELEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDbkQsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNwRCxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7aUJBQ3JEO2FBQ0Y7WUFDRCx3QkFBd0IsRUFBRSxTQUFTO1lBQ25DLG1CQUFtQixFQUFFLFNBQVM7WUFDOUIsdUJBQXVCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUMzRTtRQUNELFNBQVMsRUFBRTtZQUNULFlBQVksRUFBRSwwREFBMEQ7WUFDeEUsT0FBTyxFQUFFLFNBQVM7WUFDbEIsRUFBRSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxTQUFTO2dCQUNiLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQ0FBa0MsRUFBRSxDQUFDO2dCQUM5RCxnQkFBZ0IsRUFBRSxFQUFFO2FBQ3JCO1NBQ0Y7UUFDRCxjQUFjLEVBQUUsU0FBUztRQUN6QixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLGtCQUFrQixFQUFFLFNBQVM7S0FDOUI7Q0FDRixDQUFDO0FBRUYsTUFBTSxxQkFBcUIsR0FBRztJQUM1QjtRQUNFLFNBQVMsRUFBRTtZQUNULFlBQVksRUFBRSwwREFBMEQ7WUFDeEUsT0FBTyxFQUFFLFNBQVM7WUFDbEIsYUFBYSxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRTtTQUNsRjtRQUNELGNBQWMsRUFBRSxTQUFTO1FBQ3pCLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsa0JBQWtCLEVBQUUsU0FBUztLQUM5QjtDQUNGLENBQUM7QUFFRixNQUFNLHNCQUFzQixHQUFHO0lBQzdCO1FBQ0UsT0FBTyxFQUFFO1lBQ1AsWUFBWSxFQUFFLDJDQUEyQztZQUN6RCx1QkFBdUIsRUFBRSxFQUFFO1NBQzVCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsWUFBWSxFQUNWLHVGQUF1RjtZQUN6RixTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUU7b0JBQ1Y7d0JBQ0UsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTt3QkFDaEMsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7d0JBQ2pELHdCQUF3QixFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO3dCQUN0RCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO3dCQUNyQixVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO3dCQUNoQyxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO3dCQUMzQixrQkFBa0IsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7cUJBQ25DO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLFNBQVMsMEJBQTBCO0lBQ2pDLG9DQUFvQztJQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFlLENBQUM7UUFDakMsZUFBZSxFQUFFLGlCQUFpQjtRQUNsQyxTQUFTLEVBQUUsV0FBVztRQUN0QixhQUFhLEVBQUUsZUFBZTtRQUM5QixhQUFhLEVBQUUsZUFBZTtLQUMvQixDQUFDLENBQUM7SUFFSCxNQUFNLGFBQWEsR0FBRyxJQUFJLG9DQUE0QixFQUFFLENBQUM7SUFDekQsTUFBTSxTQUFTLEdBQUcsSUFBSSwrQkFBdUIsRUFBRSxDQUFDO0lBRWhELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7UUFDcEQsSUFBSSxFQUFFLGFBQWE7UUFDbkIsYUFBYSxFQUFFLEtBQUs7S0FDckIsQ0FBQyxDQUFDO0lBRUgsc0NBQXNDO0lBQ3RDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3QyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTFDLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLDBCQUEwQjtJQUNqQyxvQ0FBb0M7SUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBZSxDQUFDO1FBQ2pDLGVBQWUsRUFBRSxpQkFBaUI7UUFDbEMsU0FBUyxFQUFFLFdBQVc7UUFDdEIsYUFBYSxFQUFFLGVBQWU7UUFDOUIsYUFBYSxFQUFFLGVBQWU7S0FDL0IsQ0FBQyxDQUFDO0lBRUgsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLGtDQUEwQixFQUFFLENBQUM7SUFDL0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxvQ0FBNEIsRUFBRSxDQUFDO0lBRXJELHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRCxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbEQsT0FBTyxxQkFBcUIsQ0FBQztBQUMvQixDQUFDIn0=