ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15492270.524586, -4188195.068443, 15506010.512742, -4181406.170417]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_GiffordHillConceptMasterplan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gifford Hill Concept Masterplan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GiffordHillConceptMasterplan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494604.351000, -4187033.217900, 15503919.598900, -4182344.731800]
                            })
                        });
var lyr_GHConceptMasterplanPrecinct1A_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GH Concept Masterplan Precinct 1A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GHConceptMasterplanPrecinct1A_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15500457.765700, -4186013.118600, 15502679.690200, -4183405.822000]
                            })
                        });
var format_Zoning_4 = new ol.format.GeoJSON();
var features_Zoning_4 = format_Zoning_4.readFeatures(json_Zoning_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoning_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoning_4.addFeatures(features_Zoning_4);
var lyr_Zoning_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoning_4, 
                style: style_Zoning_4,
                popuplayertitle: "Zoning",
                interactive: true,
    title: 'Zoning<br />\
    <img src="styles/legend/Zoning_4_0.png" /> Activity Centre<br />\
    <img src="styles/legend/Zoning_4_1.png" /> Conservation<br />\
    <img src="styles/legend/Zoning_4_2.png" /> Masterplanned Neighborhood<br />\
    <img src="styles/legend/Zoning_4_3.png" /> Recreation<br />\
    <img src="styles/legend/Zoning_4_4.png" /> Rural<br />\
    <img src="styles/legend/Zoning_4_5.png" /> Rural Living<br />'
        });
var format_ProjectOwned_Parcels_5 = new ol.format.GeoJSON();
var features_ProjectOwned_Parcels_5 = format_ProjectOwned_Parcels_5.readFeatures(json_ProjectOwned_Parcels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectOwned_Parcels_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectOwned_Parcels_5.addFeatures(features_ProjectOwned_Parcels_5);
var lyr_ProjectOwned_Parcels_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectOwned_Parcels_5, 
                style: style_ProjectOwned_Parcels_5,
                popuplayertitle: "Project Owned_Parcels",
                interactive: true,
    title: 'Project Owned_Parcels<br />\
    <img src="styles/legend/ProjectOwned_Parcels_5_0.png" /> MBRC Option<br />\
    <img src="styles/legend/ProjectOwned_Parcels_5_1.png" /> Option<br />\
    <img src="styles/legend/ProjectOwned_Parcels_5_2.png" /> Potential Purchase<br />\
    <img src="styles/legend/ProjectOwned_Parcels_5_3.png" /> Tranche 1<br />\
    <img src="styles/legend/ProjectOwned_Parcels_5_4.png" /> Tranche 2<br />'
        });
var format_GiffordHillParcelBoundary_6 = new ol.format.GeoJSON();
var features_GiffordHillParcelBoundary_6 = format_GiffordHillParcelBoundary_6.readFeatures(json_GiffordHillParcelBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiffordHillParcelBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiffordHillParcelBoundary_6.addFeatures(features_GiffordHillParcelBoundary_6);
var lyr_GiffordHillParcelBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiffordHillParcelBoundary_6, 
                style: style_GiffordHillParcelBoundary_6,
                popuplayertitle: "Gifford Hill Parcel Boundary",
                interactive: true,
                title: '<img src="styles/legend/GiffordHillParcelBoundary_6.png" /> Gifford Hill Parcel Boundary'
            });
var group_Masterplans = new ol.layer.Group({
                                layers: [lyr_GiffordHillConceptMasterplan_2,lyr_GHConceptMasterplanPrecinct1A_3,],
                                fold: "open",
                                title: "Masterplans"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_GiffordHillConceptMasterplan_2.setVisible(false);lyr_GHConceptMasterplanPrecinct1A_3.setVisible(false);lyr_Zoning_4.setVisible(false);lyr_ProjectOwned_Parcels_5.setVisible(true);lyr_GiffordHillParcelBoundary_6.setVisible(true);
var layersList = [group_BaseLayer,group_Masterplans,lyr_Zoning_4,lyr_ProjectOwned_Parcels_5,lyr_GiffordHillParcelBoundary_6];
lyr_Zoning_4.set('fieldAliases', {'id': 'id', 'Land use': 'Land use', });
lyr_ProjectOwned_Parcels_5.set('fieldAliases', {'Address': 'Address', 'Zoning': 'Zoning', 'Options': 'Options', });
lyr_GiffordHillParcelBoundary_6.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Gross_Ha': 'Gross_Ha', 'Zoning': 'Zoning', 'Gifford Hill Lands': 'Gifford Hill Lands', 'NDH': 'NDH', });
lyr_Zoning_4.set('fieldImages', {'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_ProjectOwned_Parcels_5.set('fieldImages', {'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Options': 'TextEdit', });
lyr_GiffordHillParcelBoundary_6.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Gross_Ha': 'TextEdit', 'Zoning': 'TextEdit', 'Gifford Hill Lands': 'TextEdit', 'NDH': 'TextEdit', });
lyr_Zoning_4.set('fieldLabels', {'id': 'hidden field', 'Land use': 'inline label - visible with data', });
lyr_ProjectOwned_Parcels_5.set('fieldLabels', {'Address': 'hidden field', 'Zoning': 'hidden field', 'Options': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_6.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'Gross_Ha': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gifford Hill Lands': 'hidden field', 'NDH': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});