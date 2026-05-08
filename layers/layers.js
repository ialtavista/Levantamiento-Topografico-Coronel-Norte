var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_colector_2 = new ol.format.GeoJSON();
var features_colector_2 = format_colector_2.readFeatures(json_colector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colector_2.addFeatures(features_colector_2);
var lyr_colector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colector_2, 
                style: style_colector_2,
                popuplayertitle: 'colector',
                interactive: false,
                title: '<img src="styles/legend/colector_2.png" /> colector'
            });
var format_readeInters_3 = new ol.format.GeoJSON();
var features_readeInters_3 = format_readeInters_3.readFeatures(json_readeInters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeInters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeInters_3.addFeatures(features_readeInters_3);
var lyr_readeInters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeInters_3, 
                style: style_readeInters_3,
                popuplayertitle: 'Área de Interés',
                interactive: false,
    title: 'Área de Interés<br />\
    <img src="styles/legend/readeInters_3_0.png" /> REQUIERE LIMPIEZA<br />\
    <img src="styles/legend/readeInters_3_1.png" /> TRABAJOS VIA PUBLICA<br />\
    <img src="styles/legend/readeInters_3_2.png" /> VIAS DE TIERRA<br />' });
var format_Colector_4 = new ol.format.GeoJSON();
var features_Colector_4 = format_Colector_4.readFeatures(json_Colector_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_4.addFeatures(features_Colector_4);
var lyr_Colector_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_4, 
                style: style_Colector_4,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_4_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_4_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_4_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_5 = new ol.format.GeoJSON();
var features_Cmara_5 = format_Cmara_5.readFeatures(json_Cmara_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_5.addFeatures(features_Cmara_5);
var lyr_Cmara_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_5, 
                style: style_Cmara_5,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_5_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_5_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_5_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_5_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_5_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_5_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_5_6.png" /> NO INSPECCIONABLE<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_4,lyr_Cmara_5,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [lyr_colector_2,],
                                fold: 'open',
                                title: 'Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_colector_2.setVisible(false);lyr_readeInters_3.setVisible(true);lyr_Colector_4.setVisible(true);lyr_Cmara_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,group_Referencial,lyr_readeInters_3,group_Levantamiento];
lyr_colector_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'SUBTYPE': 'SUBTYPE', 'IDSV': 'IDSV', 'X': 'X', 'Y': 'Y', 'SHAPE_Leng': 'SHAPE_Leng', 'FECHA_EXTR': 'FECHA_EXTR', 'EXISTENCIA': 'EXISTENCIA', 'Shape__Length': 'Shape__Length', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'ESTADO': 'ESTADO', });
lyr_readeInters_3.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', });
lyr_Colector_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', 'TIPO': 'TIPO', });
lyr_Cmara_5.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'RECINTO PARTICULAR O VIVIENDA': 'RECINTO PARTICULAR O VIVIENDA', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'ESCURRIMIENTO': 'ESCURRIMIENTO', 'UBICACION REFERENCIAL': 'UBICACION REFERENCIAL', 'OBSERVACIONES UBICACION': 'OBSERVACIONES UBICACION', 'OBSERVACIONES CONEXIONES': 'OBSERVACIONES CONEXIONES', 'E (m) SIRGAS 2025': 'E (m) SIRGAS 2025', 'N (m) SIRGAS 2025': 'N (m) SIRGAS 2025', 'COTA ANILLO (m) SIRGAS 2025': 'COTA ANILLO (m) SIRGAS 2025', 'COTA RADIER (m) SIRGAS 2025': 'COTA RADIER (m) SIRGAS 2025', 'PROFUNDIDAD (m)': 'PROFUNDIDAD (m)', });
lyr_colector_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'DIAMETRO': 'TextEdit', 'MATERIAL': 'TextEdit', 'SUBTYPE': 'TextEdit', 'IDSV': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'FECHA_EXTR': 'DateTime', 'EXISTENCIA': 'TextEdit', 'Shape__Length': 'TextEdit', 'GlobalID': 'TextEdit', 'CreationDate': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_readeInters_3.set('fieldImages', {'fid': '', 'NOMBRE': '', });
lyr_Colector_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'ValueMap', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', 'TIPO': 'ValueMap', });
lyr_Cmara_5.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'ValueMap', 'DIAMETRO ENTRADA 2': 'ValueMap', 'DIAMETRO ENTRADA 3': 'ValueMap', 'DIAMETRO ENTRADA 4': 'ValueMap', 'DIAMETRO ENTRADA 5': 'ValueMap', 'DIAMETRO SALIDA 1': 'ValueMap', 'DIAMETRO SALIDA 2': 'ValueMap', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'RECINTO PARTICULAR O VIVIENDA': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'ValueMap', 'ESTADO BANQUETA': 'ValueMap', 'NAPA': 'ValueMap', 'EMBANCAMIENTO': 'ValueMap', 'ESTADO ESCALINES': 'ValueMap', 'DIAMETRO SALIDA 3': 'ValueMap', 'ESCURRIMIENTO': 'ValueMap', 'UBICACION REFERENCIAL': 'ValueMap', 'OBSERVACIONES UBICACION': 'TextEdit', 'OBSERVACIONES CONEXIONES': 'TextEdit', 'E (m) SIRGAS 2025': 'TextEdit', 'N (m) SIRGAS 2025': 'TextEdit', 'COTA ANILLO (m) SIRGAS 2025': 'TextEdit', 'COTA RADIER (m) SIRGAS 2025': 'TextEdit', 'PROFUNDIDAD (m)': 'TextEdit', });
lyr_colector_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDENTIFICA': 'no label', 'DIAMETRO': 'no label', 'MATERIAL': 'no label', 'SUBTYPE': 'no label', 'IDSV': 'no label', 'X': 'no label', 'Y': 'no label', 'SHAPE_Leng': 'no label', 'FECHA_EXTR': 'no label', 'EXISTENCIA': 'no label', 'Shape__Length': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'ESTADO': 'no label', });
lyr_readeInters_3.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'no label', });
lyr_Colector_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ESTADO': 'no label', 'DIAMETRO': 'no label', 'CAMARA_INICIO': 'no label', 'CAMARA_FINAL': 'no label', 'OBSERVACIONES': 'no label', 'TIPO': 'no label', });
lyr_Cmara_5.set('fieldLabels', {'fid': 'no label', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'COMUNA': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD FONDO': 'inline label - visible with data', 'FALLA ESTRUCTURAL': 'hidden field', 'TERRENO INACCESIBLE': 'inline label - visible with data', 'RECINTO PARTICULAR O VIVIENDA': 'inline label - visible with data', 'CAMARA NUEVA': 'hidden field', 'REQUIERE LIMPIEZA': 'hidden field', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'inline label - visible with data', 'ESTADO BANQUETA': 'inline label - visible with data', 'NAPA': 'inline label - visible with data', 'EMBANCAMIENTO': 'inline label - visible with data', 'ESTADO ESCALINES': 'inline label - visible with data', 'DIAMETRO SALIDA 3': 'hidden field', 'ESCURRIMIENTO': 'inline label - visible with data', 'UBICACION REFERENCIAL': 'inline label - visible with data', 'OBSERVACIONES UBICACION': 'inline label - visible with data', 'OBSERVACIONES CONEXIONES': 'hidden field', 'E (m) SIRGAS 2025': 'inline label - visible with data', 'N (m) SIRGAS 2025': 'inline label - visible with data', 'COTA ANILLO (m) SIRGAS 2025': 'inline label - visible with data', 'COTA RADIER (m) SIRGAS 2025': 'inline label - visible with data', 'PROFUNDIDAD (m)': 'inline label - visible with data', });
lyr_Cmara_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});