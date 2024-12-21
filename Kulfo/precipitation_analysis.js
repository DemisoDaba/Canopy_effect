// Define the study area (Kulfo Watershed)
var kulfoWatershed = ee.Geometry.Rectangle([37.1667, 6.0500, 37.6417, 6.2833]);

// CHIRPS Precipitation (2017-2023)
var chirps = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
    .filterBounds(kulfoWatershed)
    .filterDate('2017-01-01', '2023-12-31');

// Aggregate precipitation by year (sum)
var annualPrecipitation = chirps
    .filter(ee.Filter.calendarRange(2017, 2023, 'year'))  // Filter by each year
    .map(function(image) {
        return image.reduceRegions({
            collection: kulfoWatershed,
            reducer: ee.Reducer.sum(),  // Sum precipitation for each year
            scale: 5000  // CHIRPS resolution (~5km)
        }).map(function(feature) {
            return feature.set('year', image.date().get('year'));
        });
    })
    .flatten();

// Export the data to CSV
Export.table.toDrive({
    collection: annualPrecipitation,
    description: 'Annuall_Precipitation_Watershed_2017_2023',
    fileFormat: 'CSV'
});
