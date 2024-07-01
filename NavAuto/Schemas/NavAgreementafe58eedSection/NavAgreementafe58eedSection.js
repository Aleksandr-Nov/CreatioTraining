define("NavAgreementafe58eedSection", [], function() {
	return {
		entitySchemaName: "NavAgreement",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "PrimaryContactButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.RecalculateCreditButtonCaption"
					},
					"click": {
						"bindTo": "recalculateCreditClick"
					},
					"enabled": true,
					"style": "blue"
				},
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"index": 7
			},
		]/**SCHEMA_DIFF*/,
		messages: {
			"recalculateCreditMessages": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
		},
		methods: {
			
			/**
			 * Вызов метода перерасчета полей кредита на странице [Договор].
			 *
			 * Задание № 3.6
			 */
			recalculateCreditClick: function() {
				this.sandbox.publish("recalculateCreditMessages", {}, ["NavAgreement1Page_NavAgreementafe58eedSection"]);
            },		
		}
	};
});
