define("NavAgreement1Page", ["ConfigurationConstants", "LookupUtilities", "ServiceHelper"], function(ConfigurationConstants, LookupUtilities, ServiceHelper) {
	return {
		entitySchemaName: "NavAgreement",
		attributes: {	
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "NavAgreementFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "NavAgreement"
				}
			},
			"NavSchemad9d58531Detailebc8aeb2": {
				"schemaName": "NavSchemad9d58531Detail",
				"entitySchemaName": "NavInvoice",
				"filter": {
					"detailColumn": "NavAgreement",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
			 	"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
				 "generator": "DisableControlsGenerator.generatePartial" }
			},
			{
				"operation": "insert",
				"name": "NavNameb4e1f54f-35e4-4d1e-91f7-47ce54f59afa",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP75d2c3fa-ed4f-4e2b-84c1-e8e9601c543f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavAuto",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP1d3fc8ae-482b-4561-b886-14ae5eb113b0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIME5e58816f-60de-4724-bac0-dbf43201f868",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT605dbf1e-cfe3-4cf6-923b-b37b5c10f113",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavSumma",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN063d4dd5-b66f-4164-8be4-694685dc5ac5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavFact",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPbca287be-28c6-43f7-b0f6-b376d0ea017d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavCredit",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab30c24240TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab30c24240TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab30c24240TabLabelGroup411d1e73",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab30c24240TabLabelGroup411d1e73GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab30c24240TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab30c24240TabLabelGroup411d1e73",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER2d908e35-2bb7-4ceb-a367-5df86a82bdb5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavCreditPeriod",
					"enabled": true
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT4a2fddf6-09df-46a2-b33f-d9ec68d1fade",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavCreditAmount",
					"enabled": true
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT2418d00a-c84c-49f1-bfa1-dec6ff804625",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavFullCreditAmount",
					"enabled": true
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOAT5c76f589-813b-4a11-a17e-2769bfa412f4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavInitialFee",
					"enabled": true
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT94c2ef10-a6d2-4e09-b404-e565f9a59437",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavFactSumma",
					"enabled": false
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DATETIMEb9fde3a1-0bfc-43f6-92da-64540d0d9d46",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab30c24240TabLabelGridLayout06e6dbc0"
					},
					"bindTo": "NavPaymentPlanDate",
					"enabled": false
				},
				"parentName": "Tab30c24240TabLabelGridLayout06e6dbc0",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab43ff882cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab43ff882cTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NavSchemad9d58531Detailebc8aeb2",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab43ff882cTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "NavNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/	
	};
});
