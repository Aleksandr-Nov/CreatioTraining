define("NavAutoc9ca7868Section", [], function() {
	return {
		entitySchemaName: "NavAuto",
		attributes: {
			"IsVisibleUsed": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN, 
				dependencies: [{
					columns: ["NavUsed"],
					methodName: "VisibleFields" 
				}]
			},
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);	
				this.VisibleFields();
			},
			
			VisibleFields: function() {		
				this.set("IsVisibleUsed", this.get("NavUsed")); 
            }, 
		}
	};
});
