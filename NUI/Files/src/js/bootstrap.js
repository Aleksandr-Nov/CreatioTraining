(function() {
	require.config({
		paths: {
			"StructureExplorerComponent": Terrasoft.getFileContentUrl("NUI", "src/js/structure-explorer-component.js"),
			"ErrorListDialogComponent": Terrasoft.getFileContentUrl("NUI", "src/js/error-list-dialog-component.js"),
			"SchemaViewComponent": Terrasoft.getFileContentUrl("NUI", "src/js/schema-view-component/main.js"),
			"SchemaViewComponentStyles": Terrasoft.getFileContentUrl("NUI", "src/js/schema-view-component/styles.js")
		},
		shim: {
			"StructureExplorerComponent": {
				deps: ["ng-core"]
			},
			"ErrorListDialogComponent": {
				deps: ["ng-core"]
			},
			"SchemaViewComponent": {
				deps: ["ng-core", "chartjs", "SchemaViewComponentStyles"]
			}
		}
	});
})();
