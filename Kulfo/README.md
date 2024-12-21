## Temporal Analysis of Tree Canopy Coverage and Its Influence on Soil Moisture in the Kulfo Watershed, Ethiopia (2017-2023)

## Overview

This repository contains code to perform a **temporal analysis** of **tree canopy coverage (NDVI)** and its influence on **soil moisture** in the **Kulfo Watershed** in Ethiopia from **2017 to 2023** using **Google Earth Engine (GEE)**. The analysis aggregates data annually to explore the relationship between tree canopy coverage and soil moisture over time.

The results are exported as CSV files for further analysis.

## Dataset

- **Tree Canopy Coverage (NDVI)**: Aggregated using the **MODIS MOD13A1 dataset**, providing data on vegetation indices for the period 2017–2023.
- **Soil Moisture**: Aggregated using the **NASA_USDA SMAP soil moisture dataset**, providing global soil moisture data from 2017–2023.

The data is aggregated annually to analyze yearly trends and relationships between these variables.

## Required Tools

- **Google Earth Engine (GEE)** account: To access the datasets and run the code on GEE.
- **Google Drive**: To export results as CSV files.

## Project Structure

- `precipitation_analysis.js`: Code to aggregate daily precipitation data into yearly totals for the Kulfo Watershed and export the results.
- `soil_moisture_analysis.js`: Code to aggregate soil moisture data into yearly averages for the Kulfo Watershed and export the results.
- `ndvi_analysis.js`: Code to aggregate NDVI data into yearly averages for the Kulfo Watershed and export the results.
- `README.md`: This file.

## Steps to Run

### 1. Setup Google Earth Engine

To run the code, you first need to set up a **Google Earth Engine (GEE)** account:
- Visit the [Google Earth Engine](https://signup.earthengine.google.com/) website to create an account if you don’t have one.
- Once approved, access the **Google Earth Engine Code Editor**: [GEE Code Editor](https://code.earthengine.google.com/).

### 2. Upload Code to GEE

- Open the **GEE Code Editor** and create a new script.
- Copy and paste the respective code for **precipitation_analysis.js**, **soil_moisture_analysis.js**, and **ndvi_analysis.js** from this repository into the script editor.
- Run the code in the GEE Code Editor to process the data and generate the required results.

### 3. Exporting Data

Once the analysis is complete, the data will be exported to your **Google Drive** as CSV files. You can adjust the `Export.table.toDrive()` command in the scripts to modify export parameters (e.g., file name).

### 4. Check Results

- Once the export is complete, download the CSV files from your **Google Drive**.
- The CSV files will contain annual data for each variable: **Tree Canopy (NDVI)** and **Soil Moisture**.

## Code Overview

### Soil Moisture Analysis (`soil_moisture_analysis.js`)

This script aggregates **SMAP soil moisture data** from 2017 to 2023 into **annual averages** for the Kulfo Watershed.

Key steps:
- Filters SMAP soil moisture data by region (Kulfo Watershed) and time period (2017–2023).
- Aggregates the data annually using the **mean** reducer.
- Exports the annual averages to **CSV**.

### Tree Canopy Coverage (NDVI) Analysis (`ndvi_analysis.js`)

This script aggregates **MODIS NDVI data** from 2017 to 2023 into **annual averages** for the Kulfo Watershed.

Key steps:
- Filters MODIS NDVI data by region (Kulfo Watershed) and time period (2017–2023).
- Aggregates the data annually using the **mean** reducer.
- Exports the annual averages to **CSV**.

## Dependencies

- **Google Earth Engine API**: You will need a Google Earth Engine account to run the scripts on the platform.

## License

This project is licensed under the **MIT License** – see the LICENSE file for details.


