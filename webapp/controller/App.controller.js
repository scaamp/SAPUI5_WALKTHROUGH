sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            // set data model on view
            var oData = {
                recipient: {
                    name: "Jakub"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
             });
             this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello: function () {
            // var oInput = this.byId("input1");
            // MessageToast.show(oInput.getDescription());

            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);

        }
    });
});