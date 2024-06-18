define("NavCredit1Page", [], function() {
	return {
		entitySchemaName: "NavCredit",
		attributes: {
			/**
			 *	Аттрибут отвечающий за минимальный срок кредита в годах.
			 */
			"minPeriodForCredit": {
				 dataValueType: this.Terrasoft.DataValueType.INTEGER,
				 value: 1
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "NavCreditFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "NavCredit"
				}
			},
			"NavSchemace1c091eDetail0ce6b19c": {
				"schemaName": "NavSchemace1c091eDetail",
				"entitySchemaName": "NavAgreement",
				"filter": {
					"detailColumn": "NavCredit",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("NavDateStart", this.dateOnChange);
				this.addColumnValidator("NavDateEnd", this.dateOnChange); 
			},
			
			dateOnChange: function()
			{	
				var invalidMessage = "";
				var DateStart = this.get("NavDateStart");
				var DateEnd = this.get("NavDateEnd");
				 
				if (DateStart == null || DateStart.value || DateEnd == null || DateEnd.value ) {
					return {
						invalidMessage: invalidMessage
 					};
				}
				if (!this.checkDateRange(DateStart, DateEnd)) {
					invalidMessage = "Дата окончания не должна быть меньше даты начала менее чем на: " + this.get("minPeriodForCredit") + " год";     
				} 
				return {
					invalidMessage: invalidMessage
 				};
 			},
					
			/**
			 *	Проверка: дата оконнчания > дата начала.
			 *
			 * Задание № 2.4
			 */
			checkDateRange: function (startDate, endDate) {
				var startday = startDate.getDate();
				var startmonth = startDate.getMonth();
				var startyear = startDate.getFullYear();

				var endday = endDate.getDate();
				var endmonth = endDate.getMonth();
				var endyear = endDate.getFullYear();

				if (endyear - startyear > this.get("minPeriodForCredit")) {
					return true;
				}

				if (endyear <= startyear) {
					return false;
				}

				if (endmonth > startmonth) {
					return true;
				} 

				if (endmonth == startmonth) {
					return endday > startday;
				} 

				return false;     
    		},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "NavNameea6d0e57-dbce-4086-a371-927e53986672",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIMEd49774b8-7afa-4603-80fe-64d1ec6b491d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavDateStart",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIMEc8d17a66-155f-4197-9cc3-2940d2ac7415",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavDateEnd",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER0f28465b-2f82-44e1-9e63-5789754d99ed",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "NavPercent",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab80f376a1TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab80f376a1TabLabelTabCaption"
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
				"name": "Tab80f376a1TabLabelGroupa0670a3f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab80f376a1TabLabelGroupa0670a3fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab80f376a1TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab80f376a1TabLabelGridLayout8c00210c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab80f376a1TabLabelGroupa0670a3f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERcc74d1ee-7d7f-4aaa-b8a3-9feca4db0b98",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab80f376a1TabLabelGridLayout8c00210c"
					},
					"bindTo": "NavCreditPeriod",
					"enabled": true
				},
				"parentName": "Tab80f376a1TabLabelGridLayout8c00210c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NavSchemace1c091eDetail0ce6b19c",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab80f376a1TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
