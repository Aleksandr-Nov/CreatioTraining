 define("NavClientUnit_9d47cea", [], function() {
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