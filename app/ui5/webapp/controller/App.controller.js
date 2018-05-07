sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.App", {
 
        onInit: function () {
        },
 
        onBeforeRendering: function () {
        },
 
        onAfterRendering: function () {
        },
 
        onExit: function () {
        },
 
        onPress: function (evt) {
          
            var id = evt.getId();
          console.log(id);
        //   console.log(evt);
        }
 
    });
 
 });