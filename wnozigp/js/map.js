require(["esri/map", 
		 "esri/layers/FeatureLayer", 
		 "esri/dijit/Popup",
		 "esri/dijit/PopupTemplate", 
		 "dojo/dom",
		 "dojo/on",
         "dojo/dom-construct", 
		 "esri/dijit/Search",
		 "dojo/domReady!"], function(Map, FeatureLayer, Popup, PopupTemplate, dom, on, domConstruct, Search) {
								
								var map = new Map("map", {
									center: [22.5233, 51.2478],
									zoom: 17,
									basemap: "streets",								
								});
								
								var oknoPod = new Popup({				
									titleInBody: false			
								}, domConstruct.create("div"));			
				
								map.infoWindow= oknoPod;				
								
								var parterPopup = new PopupTemplate({			
									title: "Nazwa",			
									description: "{Nazwa}" 	
								});
								
								
								var piwnicaPopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var pierwszePopup = new PopupTemplate({
									title: "ID",
									description: "{ID}"
								});
								
								var drugiePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var trzeciePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var czwartePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var piatePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var szostePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var siodmePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var osmePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
								
								var dziewiatePopup = new PopupTemplate({
									title: "Nazwa",
									description: "{Nazwa}"
								});
		
								var parter= new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: parterPopup		
								});
								map.addLayer(parter);
								parter.hide();
								var currentLayer = parter;

								var piwnica = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/Budynki2/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: piwnicaPopup		
								});
								map.addLayer(piwnica); 					
								piwnica.hide();			
			
								var pierwsze = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/MFI/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: pierwszePopup		
								});
								map.addLayer(pierwsze); 					
								pierwsze.hide();	
			
								var drugie = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: drugiePopup			
								});
								map.addLayer(drugie); 					
								drugie.hide();
					
								var trzecie = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: trzeciePopup			
								});
								map.addLayer(trzecie); 					
								trzecie.hide();
						
								var czwarte = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: czwartePopup			
								});
								map.addLayer(czwarte); 					
								czwarte.hide();
				
								var piate = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: piatePopup			
								});
								map.addLayer(piate); 					
								piate.hide();
			
								var szoste = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: szostePopup		
								});
								map.addLayer(szoste); 					
								szoste.hide();
					
								var siodme = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: siodmePopup		
								});
								map.addLayer(siodme); 					
								siodme.hide();
			
								var osme = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: osmePopup		
								});
								map.addLayer(osme); 					
								osme.hide();		
			
								var dziewiate = new FeatureLayer(				
									"http://services2.arcgis.com/efCSZ41PyIWbmjYh/arcgis/rest/services/budynki/FeatureServer/0", { 
									mode: FeatureLayer.MODE_SNAPSHOT,		
									outFields: ["*"],				
									infoTemplate: dziewiatePopup			
								});
								map.addLayer(dziewiate); 					
								dziewiate.hide();
								
								var s = new Search({  
									map: map,
									addLayersFromMap: true,
									enableSuggestions: false,	
									allPlaceholder: "Szukaj",
									enableButtonMode: false,
									enableSourcesMenu: false
								}, "search");  
  
								var sources = [];  
  
								sources.push({  
									featureLayer: parter,  
									searchFields: ["Nazwa"],  
									displayField: "Nazwa",   							
									outFields: ["*"]  
								});  
								
								sources.push({  
									featureLayer: piwnica,  
									searchFields: ["Nazwa"],  
									displayField: "Nazwa",  							
									outFields: ["*"]  
								});  
								
								sources.push({  
									featureLayer: pierwsze,  
									searchFields: ["ID"],  
									displayField: "ID",  							
									outFields: ["*"]  
								}); 
  
								//Set the sources above to the search widget  
								s.set("sources", sources);  
								s.startup();  
								
								s.on("select-result", function (evt){
									currentLayer.hide();
									evt.source.featureLayer.show();
									currentLayer = evt.source.featureLayer; 
										if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
											$('.navbar-collapse').collapse('toggle');
										}
								}); 						
			
						$(document).ready(function () {
							on(dom.byId("MapaBazowa"), "click", function (e) {
									currentLayer.hide();
									$(".navbar-toggle").click()	
								});	
							
							$("#warstwaUnique li").click(function(e) {
								switch (e.target.text) {
									case "Poziom -1":
										map.infoWindow.hide();
										currentLayer.hide();
										piwnica.show();
										currentLayer=piwnica;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 0":
										map.infoWindow.hide();
										currentLayer.hide();
										parter.show();
										currentLayer=parter;
										$(".navbar-toggle").click()
									break;
						
									case "Poziom 1":
										map.infoWindow.hide();
										currentLayer.hide();
										pierwsze.show();
										currentLayer=pierwsze;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 2":
										map.infoWindow.hide();
										currentLayer.hide();
										drugie.show();
										currentLayer=drugie;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 3":
										map.infoWindow.hide();
										currentLayer.hide();
										trzecie.show();
										currentLayer=trzecie;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 4":
										map.infoWindow.hide();
										currentLayer.hide();
										czwarte.show();
										currentLayer=czwarte;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 5":
										map.infoWindow.hide();
										currentLayer.hide();
										piate.show();
										currentLayer=piate;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 6":
										map.infoWindow.hide();
										currentLayer.hide();
										szoste.show();
										currentLayer=szoste;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 7":
										map.infoWindow.hide();
										currentLayer.hide();
										siodme.show();
										currentLayer=siodme;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 8":
										map.infoWindow.hide();
										currentLayer.hide();
										osme.show();
										currentLayer=osme;
										$(".navbar-toggle").click()	
									break;
						
									case "Poziom 9":
										map.infoWindow.hide();
										currentLayer.hide();
										dziewiate.show();
										currentLayer=dziewiate;
										$(".navbar-toggle").click()	
									break;
									
									/*
									$("body").click(function(event) {
										if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
											$('.navbar-collapse').collapse('toggle');
										}
									});
									*/
								}
							});	
						
					});
				});
				
