ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9377").setExtent([4898105.081809, 2095784.794352, 4909563.790472, 2102370.658220]);
var wms_layers = [];

var format_CARTOGRAFA4107_0 = new ol.format.GeoJSON();
var features_CARTOGRAFA4107_0 = format_CARTOGRAFA4107_0.readFeatures(json_CARTOGRAFA4107_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFA4107_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFA4107_0.addFeatures(features_CARTOGRAFA4107_0);
var lyr_CARTOGRAFA4107_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFA4107_0, 
                style: style_CARTOGRAFA4107_0,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFA4107_0.png" /> CARTOGRAFÍA — 4107'
            });
var format_CARTOGRAFAAREA_1 = new ol.format.GeoJSON();
var features_CARTOGRAFAAREA_1 = format_CARTOGRAFAAREA_1.readFeatures(json_CARTOGRAFAAREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFAAREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFAAREA_1.addFeatures(features_CARTOGRAFAAREA_1);
var lyr_CARTOGRAFAAREA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFAAREA_1, 
                style: style_CARTOGRAFAAREA_1,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFAAREA_1.png" /> CARTOGRAFÍA — AREA'
            });
var format_CARTOGRAFA2310_2 = new ol.format.GeoJSON();
var features_CARTOGRAFA2310_2 = format_CARTOGRAFA2310_2.readFeatures(json_CARTOGRAFA2310_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFA2310_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFA2310_2.addFeatures(features_CARTOGRAFA2310_2);
var lyr_CARTOGRAFA2310_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFA2310_2, 
                style: style_CARTOGRAFA2310_2,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFA2310_2.png" /> CARTOGRAFÍA — 2310'
            });
var format_CARTOGRAFA5124_3 = new ol.format.GeoJSON();
var features_CARTOGRAFA5124_3 = format_CARTOGRAFA5124_3.readFeatures(json_CARTOGRAFA5124_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFA5124_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFA5124_3.addFeatures(features_CARTOGRAFA5124_3);
var lyr_CARTOGRAFA5124_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFA5124_3, 
                style: style_CARTOGRAFA5124_3,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFA5124_3.png" /> CARTOGRAFÍA — 5124'
            });
var format_CARTOGRAFA2325_4 = new ol.format.GeoJSON();
var features_CARTOGRAFA2325_4 = format_CARTOGRAFA2325_4.readFeatures(json_CARTOGRAFA2325_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFA2325_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFA2325_4.addFeatures(features_CARTOGRAFA2325_4);
var lyr_CARTOGRAFA2325_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFA2325_4, 
                style: style_CARTOGRAFA2325_4,
                interactive: true,
    title: 'CARTOGRAFÍA — 2325<br />\
    <img src="styles/legend/CARTOGRAFA2325_4_0.png" /> <br />\
    <img src="styles/legend/CARTOGRAFA2325_4_1.png" /> <br />'
        });
var format_3101_5 = new ol.format.GeoJSON();
var features_3101_5 = format_3101_5.readFeatures(json_3101_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_3101_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_5.addFeatures(features_3101_5);
var lyr_3101_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_5, 
                style: style_3101_5,
                interactive: true,
                title: '<img src="styles/legend/3101_5.png" /> 3101'
            });
var format_2320_6 = new ol.format.GeoJSON();
var features_2320_6 = format_2320_6.readFeatures(json_2320_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_2320_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_6.addFeatures(features_2320_6);
var lyr_2320_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_6, 
                style: style_2320_6,
                interactive: true,
                title: '<img src="styles/legend/2320_6.png" /> 2320'
            });
var format_CARTOGRAFAcomparacion_7 = new ol.format.GeoJSON();
var features_CARTOGRAFAcomparacion_7 = format_CARTOGRAFAcomparacion_7.readFeatures(json_CARTOGRAFAcomparacion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFAcomparacion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFAcomparacion_7.addFeatures(features_CARTOGRAFAcomparacion_7);
var lyr_CARTOGRAFAcomparacion_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFAcomparacion_7, 
                style: style_CARTOGRAFAcomparacion_7,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFAcomparacion_7.png" /> CARTOGRAFÍA — comparacion'
            });
var format_CARTOGRAFApuntosrtxreproyectados_8 = new ol.format.GeoJSON();
var features_CARTOGRAFApuntosrtxreproyectados_8 = format_CARTOGRAFApuntosrtxreproyectados_8.readFeatures(json_CARTOGRAFApuntosrtxreproyectados_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFApuntosrtxreproyectados_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFApuntosrtxreproyectados_8.addFeatures(features_CARTOGRAFApuntosrtxreproyectados_8);
var lyr_CARTOGRAFApuntosrtxreproyectados_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFApuntosrtxreproyectados_8, 
                style: style_CARTOGRAFApuntosrtxreproyectados_8,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFApuntosrtxreproyectados_8.png" /> CARTOGRAFÍA — puntos rtx reproyectados'
            });
var format_CARTOGRAFARTX_3Nov23_9 = new ol.format.GeoJSON();
var features_CARTOGRAFARTX_3Nov23_9 = format_CARTOGRAFARTX_3Nov23_9.readFeatures(json_CARTOGRAFARTX_3Nov23_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_CARTOGRAFARTX_3Nov23_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTOGRAFARTX_3Nov23_9.addFeatures(features_CARTOGRAFARTX_3Nov23_9);
var lyr_CARTOGRAFARTX_3Nov23_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTOGRAFARTX_3Nov23_9, 
                style: style_CARTOGRAFARTX_3Nov23_9,
                interactive: true,
                title: '<img src="styles/legend/CARTOGRAFARTX_3Nov23_9.png" /> CARTOGRAFÍA — RTX_3Nov23'
            });
var format_5130_10 = new ol.format.GeoJSON();
var features_5130_10 = format_5130_10.readFeatures(json_5130_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_5130_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5130_10.addFeatures(features_5130_10);
var lyr_5130_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5130_10, 
                style: style_5130_10,
                interactive: true,
                title: '<img src="styles/legend/5130_10.png" /> 5130'
            });
var format_2311_11 = new ol.format.GeoJSON();
var features_2311_11 = format_2311_11.readFeatures(json_2311_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9377'});
var jsonSource_2311_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_11.addFeatures(features_2311_11);
var lyr_2311_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311_11, 
                style: style_2311_11,
                interactive: true,
                title: '<img src="styles/legend/2311_11.png" /> 2311'
            });

lyr_CARTOGRAFA4107_0.setVisible(true);lyr_CARTOGRAFAAREA_1.setVisible(true);lyr_CARTOGRAFA2310_2.setVisible(true);lyr_CARTOGRAFA5124_3.setVisible(true);lyr_CARTOGRAFA2325_4.setVisible(true);lyr_3101_5.setVisible(true);lyr_2320_6.setVisible(true);lyr_CARTOGRAFAcomparacion_7.setVisible(true);lyr_CARTOGRAFApuntosrtxreproyectados_8.setVisible(true);lyr_CARTOGRAFARTX_3Nov23_9.setVisible(true);lyr_5130_10.setVisible(true);lyr_2311_11.setVisible(true);
var layersList = [lyr_CARTOGRAFA4107_0,lyr_CARTOGRAFAAREA_1,lyr_CARTOGRAFA2310_2,lyr_CARTOGRAFA5124_3,lyr_CARTOGRAFA2325_4,lyr_3101_5,lyr_2320_6,lyr_CARTOGRAFAcomparacion_7,lyr_CARTOGRAFApuntosrtxreproyectados_8,lyr_CARTOGRAFARTX_3Nov23_9,lyr_5130_10,lyr_2311_11];
lyr_CARTOGRAFA4107_0.set('fieldAliases', {'fid': 'fid', });
lyr_CARTOGRAFAAREA_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CARTOGRAFA2310_2.set('fieldAliases', {'fid': 'fid', 'cod_atributo': 'cod_atributo', 'nombre_atributo': 'nombre_atributo', });
lyr_CARTOGRAFA5124_3.set('fieldAliases', {'fid': 'fid', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', });
lyr_CARTOGRAFA2325_4.set('fieldAliases', {'fid': 'fid', 'codigo_objet': 'codigo_objet', 'Nombre_atributo': 'Nombre_atributo', 'Codigo_atributo': 'Codigo_atributo', 'Nombre_objeto': 'Nombre_objeto', 'Nombre_obj': 'Nombre_obj', });
lyr_3101_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'OBJETCID': 'OBJETCID', 'PROYECTO': 'PROYECTO', 'NOMBRE': 'NOMBRE', });
lyr_2320_6.set('fieldAliases', {'fid': 'fid', 'codigo_obj': 'codigo_obj', 'Nombre_obj': 'Nombre_obj', });
lyr_CARTOGRAFAcomparacion_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CARTOGRAFApuntosrtxreproyectados_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_CARTOGRAFARTX_3Nov23_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_5130_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CÓDIGO': 'CÓDIGO', 'NOMBRE': 'NOMBRE', });
lyr_2311_11.set('fieldAliases', {'fid': 'fid', });
lyr_CARTOGRAFA4107_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_CARTOGRAFAAREA_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CARTOGRAFA2310_2.set('fieldImages', {'fid': 'TextEdit', 'cod_atributo': 'Range', 'nombre_atributo': 'TextEdit', });
lyr_CARTOGRAFA5124_3.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'TextEdit', });
lyr_CARTOGRAFA2325_4.set('fieldImages', {'fid': 'TextEdit', 'codigo_objet': 'Range', 'Nombre_atributo': 'TextEdit', 'Codigo_atributo': 'Range', 'Nombre_objeto': 'TextEdit', 'Nombre_obj': 'TextEdit', });
lyr_3101_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'codigo': 'TextEdit', 'OBJETCID': 'TextEdit', 'PROYECTO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_2320_6.set('fieldImages', {'fid': '', 'codigo_obj': '', 'Nombre_obj': '', });
lyr_CARTOGRAFAcomparacion_7.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CARTOGRAFApuntosrtxreproyectados_8.set('fieldImages', {'fid': '', 'id': '', 'Latitud': '', 'Longitud': '', });
lyr_CARTOGRAFARTX_3Nov23_9.set('fieldImages', {'fid': '', 'id': '', 'Latitud': '', 'Longitud': '', });
lyr_5130_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CÓDIGO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_2311_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_CARTOGRAFA4107_0.set('fieldLabels', {'fid': 'no label', });
lyr_CARTOGRAFAAREA_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CARTOGRAFA2310_2.set('fieldLabels', {'fid': 'no label', 'cod_atributo': 'no label', 'nombre_atributo': 'no label', });
lyr_CARTOGRAFA5124_3.set('fieldLabels', {'fid': 'no label', 'NOMBRE_GEO': 'no label', 'ESTADO_DRE': 'no label', });
lyr_CARTOGRAFA2325_4.set('fieldLabels', {'fid': 'no label', 'codigo_objet': 'no label', 'Nombre_atributo': 'no label', 'Codigo_atributo': 'no label', 'Nombre_objeto': 'no label', 'Nombre_obj': 'no label', });
lyr_3101_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'OBJETCID': 'no label', 'PROYECTO': 'no label', 'NOMBRE': 'no label', });
lyr_2320_6.set('fieldLabels', {'fid': 'no label', 'codigo_obj': 'no label', 'Nombre_obj': 'no label', });
lyr_CARTOGRAFAcomparacion_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CARTOGRAFApuntosrtxreproyectados_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_CARTOGRAFARTX_3Nov23_9.set('fieldLabels', {'fid': 'header label', 'id': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_5130_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'CÓDIGO': 'no label', 'NOMBRE': 'no label', });
lyr_2311_11.set('fieldLabels', {'fid': 'no label', });
lyr_2311_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});