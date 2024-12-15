var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KASUS_DBD_1 = new ol.format.GeoJSON();
var features_KASUS_DBD_1 = format_KASUS_DBD_1.readFeatures(json_KASUS_DBD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KASUS_DBD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KASUS_DBD_1.addFeatures(features_KASUS_DBD_1);cluster_KASUS_DBD_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KASUS_DBD_1
});
var lyr_KASUS_DBD_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KASUS_DBD_1, 
                style: style_KASUS_DBD_1,
                popuplayertitle: "KASUS_DBD",
                interactive: true,
                title: '<img src="styles/legend/KASUS_DBD_1.png" /> KASUS_DBD'
            });
var format_STATUS_PENANGANAN_RT_2 = new ol.format.GeoJSON();
var features_STATUS_PENANGANAN_RT_2 = format_STATUS_PENANGANAN_RT_2.readFeatures(json_STATUS_PENANGANAN_RT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATUS_PENANGANAN_RT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATUS_PENANGANAN_RT_2.addFeatures(features_STATUS_PENANGANAN_RT_2);
var lyr_STATUS_PENANGANAN_RT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STATUS_PENANGANAN_RT_2, 
                style: style_STATUS_PENANGANAN_RT_2,
                popuplayertitle: "STATUS_PENANGANAN_RT",
                interactive: true,
    title: 'STATUS_PENANGANAN_RT<br />\
    <img src="styles/legend/STATUS_PENANGANAN_RT_2_0.png" /> Fogging Diperlukan<br />\
    <img src="styles/legend/STATUS_PENANGANAN_RT_2_1.png" /> Tidak Perlu Fogging<br />\
    <img src="styles/legend/STATUS_PENANGANAN_RT_2_2.png" /> <br />'
        });
var format_STATUS_PENANGANAN_PER_KK_3 = new ol.format.GeoJSON();
var features_STATUS_PENANGANAN_PER_KK_3 = format_STATUS_PENANGANAN_PER_KK_3.readFeatures(json_STATUS_PENANGANAN_PER_KK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATUS_PENANGANAN_PER_KK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATUS_PENANGANAN_PER_KK_3.addFeatures(features_STATUS_PENANGANAN_PER_KK_3);
var lyr_STATUS_PENANGANAN_PER_KK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STATUS_PENANGANAN_PER_KK_3, 
                style: style_STATUS_PENANGANAN_PER_KK_3,
                popuplayertitle: "STATUS_PENANGANAN_PER_KK",
                interactive: true,
    title: 'STATUS_PENANGANAN_PER_KK<br />\
    <img src="styles/legend/STATUS_PENANGANAN_PER_KK_3_0.png" /> Perlu Penanganan Khusus<br />\
    <img src="styles/legend/STATUS_PENANGANAN_PER_KK_3_1.png" /> Tidak Perlu Penanganan<br />\
    <img src="styles/legend/STATUS_PENANGANAN_PER_KK_3_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KASUS_DBD_1.setVisible(true);lyr_STATUS_PENANGANAN_RT_2.setVisible(true);lyr_STATUS_PENANGANAN_PER_KK_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KASUS_DBD_1,lyr_STATUS_PENANGANAN_RT_2,lyr_STATUS_PENANGANAN_PER_KK_3];
lyr_KASUS_DBD_1.set('fieldAliases', {'fid': 'fid', 'ID_KK': 'ID_KK', 'ID_RT': 'ID_RT', 'JUMLAH_ANGGOTA_KK': 'JUMLAH_ANGGOTA_KK', 'ANGGOTA_KK_TERJANGKIT': 'ANGGOTA_KK_TERJANGKIT', 'ABJ': 'ANGKA BEBAS JENTIK', });
lyr_STATUS_PENANGANAN_RT_2.set('fieldAliases', {'ID_RT': 'ID_RT', 'JUMLAH_KK': 'JUMLAH_KK', 'TOTAL_KK': 'TOTAL_KK', 'RATA_ABJ': 'RATA_ABJ', 'KEPUTUSAN': 'KEPUTUSAN', });
lyr_STATUS_PENANGANAN_PER_KK_3.set('fieldAliases', {'ID_KK': 'ID_KK', 'ID_RT': 'ID_RT', 'JUMLAH_ANGGOTA_KK': 'JUMLAH_ANGGOTA_KK', 'ANGGOTA_KK_TERJANGKIT': 'ANGGOTA_KK_TERJANGKIT', 'ABJ': 'ABJ', 'PERSENTASE_TERJANGKIT': 'PERSENTASE_TERJANGKIT', 'KEPUTUSAN': 'KEPUTUSAN', });
lyr_KASUS_DBD_1.set('fieldImages', {'fid': 'TextEdit', 'ID_KK': 'Range', 'ID_RT': 'Range', 'JUMLAH_ANGGOTA_KK': 'Range', 'ANGGOTA_KK_TERJANGKIT': 'Range', 'ABJ': 'Range', });
lyr_STATUS_PENANGANAN_RT_2.set('fieldImages', {'ID_RT': 'TextEdit', 'JUMLAH_KK': 'TextEdit', 'TOTAL_KK': 'TextEdit', 'RATA_ABJ': 'TextEdit', 'KEPUTUSAN': 'TextEdit', });
lyr_STATUS_PENANGANAN_PER_KK_3.set('fieldImages', {'ID_KK': 'TextEdit', 'ID_RT': 'TextEdit', 'JUMLAH_ANGGOTA_KK': 'TextEdit', 'ANGGOTA_KK_TERJANGKIT': 'TextEdit', 'ABJ': 'TextEdit', 'PERSENTASE_TERJANGKIT': 'TextEdit', 'KEPUTUSAN': 'TextEdit', });
lyr_KASUS_DBD_1.set('fieldLabels', {'fid': 'no label', 'ID_KK': 'no label', 'ID_RT': 'no label', 'JUMLAH_ANGGOTA_KK': 'no label', 'ANGGOTA_KK_TERJANGKIT': 'no label', 'ABJ': 'no label', });
lyr_STATUS_PENANGANAN_RT_2.set('fieldLabels', {'ID_RT': 'inline label - always visible', 'JUMLAH_KK': 'inline label - always visible', 'TOTAL_KK': 'inline label - always visible', 'RATA_ABJ': 'inline label - always visible', 'KEPUTUSAN': 'inline label - always visible', });
lyr_STATUS_PENANGANAN_PER_KK_3.set('fieldLabels', {'ID_KK': 'inline label - always visible', 'ID_RT': 'inline label - always visible', 'JUMLAH_ANGGOTA_KK': 'inline label - always visible', 'ANGGOTA_KK_TERJANGKIT': 'inline label - always visible', 'ABJ': 'inline label - always visible', 'PERSENTASE_TERJANGKIT': 'inline label - always visible', 'KEPUTUSAN': 'inline label - always visible', });
lyr_STATUS_PENANGANAN_PER_KK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});