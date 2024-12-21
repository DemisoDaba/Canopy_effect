// Define the study area (Kulfo Watershed)
var kulfoWatershed = ee.Geometry.Rectangle([37.1667, 6.0500, 37.6417, 6.2833]);


// SMAP Soil Moisture (2017-2023)
var smap = ee.ImageCollection('NASA_USDA/HSL/SMAP_soil_moisture')
    .filterBounds(kulfoWatershed)
    .filterDate('2017-01-01', '2023-12-31')
    .mean();  // Optionally aggregate over a specific time period (e.g., yearly or monthly)

// Clip Soil Moisture to the watershed boundary
var exportSoilMoisture = smap.clip(kulfoWatershed);  

// Export Soil Moisture to CSV
Export.table.toDrive({
    collection: exportSoilMoisture.sample({
        region: kulfoWatershed,
        scale: 1000,  // SMAP resolution (1 km)
        numPixels: 1000
    }),
    description: 'SoilMoisture_Watershed_2017_2023_Export',
    fileFormat: 'CSV'
});
