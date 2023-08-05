sap.ui.define([
	"sap/ui/core/mvc/XMLView"

], function (XMLView) {
	"use strict";

    // alert("UI5 is ready to go!");

	XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });

});