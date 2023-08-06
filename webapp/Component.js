sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // set data model on view
            var oData = {
                recipient: {
                    name: "Jakub"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

        }
    });
});