sap.ui.define([
	'jquery.sap.global',
	'sap/m/Button',
	'sap/m/Dialog',
	'sap/m/List',
	'sap/m/StandardListItem',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function (jQuery, Button, Dialog, List, StandardListItem, Controller, JSONModel) {
	"use strict";
	return Controller.extend("treinamento.ui5.controller.App", {

		onInit: function () {
			console.log(this.byId('BookmarkButton'))
		},

		onBeforeRendering: function () {},

		onAfterRendering: function () {},

		onExit: function () {},

		pressDialog: null,
		fixedSizeDialog: null,
		resizableDialog: null,
		draggableDialog: null,
		escapePreventDialog: null,
		confirmEscapePreventDialog: null,

		onPress: function (evt) {

			if (!this.draggableDialog) {
				this.draggableDialog = new Dialog({
					title: 'Second example',
					contentWidth: '550px',
					contentHeight: '300px',
					draggable: true,
					content: [
						new sap.m.Input('id', {
							description: 'CPF/CNPJ',
						}),
						new sap.m.Input('name', {
							description: 'Nome',
						}),
						new sap.m.Input('lastName', {
							description: 'Sobrenome',
						}),
						new sap.m.Input('nickName', {
							description: 'Apelido',
						}),
						new sap.m.Label('label', {
							text: 'Data de Nascimento',
							labelFor: 'birthDate',
						}),
						new sap.m.DatePicker('birthDate', {}),
						new sap.m.CheckBox('on', {
							text: 'Ativo',
						}),
					],
					beginButton: new Button('submit', {
						text: 'Submit',
						press: function () {

							var oInput = {
								"id": sap.ui.getCore().byId('id').getValue(),
								"name": sap.ui.getCore().byId('name').getValue(),
								"lastName": sap.ui.getCore().byId('lastName').getValue(),
								"nickName": sap.ui.getCore().byId('nickName').getValue(),
								"birthDate": sap.ui.getCore().byId('birthDate').getDateValue(),
								"on": sap.ui.getCore().byId('on').getSelected(),
							};

							console.log(oInput);

							this.draggableDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: 'Close',
						press: function () {
							this.draggableDialog.close();
						}.bind(this)
					}),
				});
				//to get access to the global model
				this.getView().addDependent(this.draggableDialog);
			}
			this.draggableDialog.open();

			//     if (!this.draggableDialog) {
			// 		this.draggableDialog = new Dialog({
			// 			title: 'Draggable Available Products',
			// 			contentWidth: "550px",
			// 			contentHeight: "300px",
			// 			draggable: true,
			// 			content: new List({
			// 				items: {
			// 					path: '/ProductCollection',
			// 					template: new StandardListItem({
			// 						title: "{Name}",
			// 						counter: "{Quantity}"
			// 					})
			// 				}
			// 			}),
			// 			beginButton: new Button({
			// 				text: 'Close',
			// 				press: function () {
			// 					this.draggableDialog.close();
			// 				}.bind(this)
			// 			})
			// 		});

			// 		//to get access to the global model
			// 		this.getView().addDependent(this.draggableDialog);
			// 	}

			// 	this.draggableDialog.open();
		},

	});

});