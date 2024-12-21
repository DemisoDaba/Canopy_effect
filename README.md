# Temporal Analysis of Tree Canopy Coverage and Its Influence on Soil Moisture in Ethiopian Watersheds (2017-2023)

## Overview

This repository is designed for conducting **temporal analyses** of **tree canopy coverage (NDVI)** and its influence on **soil moisture** for various watersheds in Ethiopia from **2017 to 2023** using **Google Earth Engine (GEE)**. Each watershed's data and analysis code are organized into separate folders for clarity and scalability.

The analysis aggregates data annually to understand relationships between vegetation coverage and soil moisture over time. Results are exported as CSV files for further analysis.

## Repository Structure

The repository is structured by watershed, with each watershed having its own folder containing:
- **Analysis Code**: JavaScript files for Google Earth Engine.
- **Results**: CSV files exported from GEE.
- **README.md**: A description of the specific watershed and its analysis.

### Current Watersheds

## Current Watersheds

| Watershed         | Location (Lat/Lon)                   | Data Analyzed                     | Folder Name   |
|--------------------|---------------------------------------|------------------------------------|---------------|
| **Kulfo Watershed** | [6.0500, 37.1667] to [6.2833, 37.6417] | NDVI, Soil Moisture, Precipitation | `Kulfo/`      |


## Detailed Steps for Analysis

### Data Sources

| Data Variable       | Dataset                                    | Resolution       | Aggregation Method |
|---------------------|--------------------------------------------|------------------|--------------------|
| **NDVI**            | MODIS MOD13A1                             | 500m             | Annual Mean        |
| **Soil Moisture**   | NASA_USDA SMAP Soil Moisture              | 1km              | Annual Mean        |
| **Precipitation**   | UCSB-CHG CHIRPS Daily                     | ~5km             | Annual Sum         |
## How to Add a New Watershed

### 1. Define the Watershed
Identify the coordinates for the watershed area (e.g., latitude and longitude bounds).

### 2. Create a Folder
Create a new folder in the repository named after the watershed (e.g., `YourWatershedName/`).

### 3. Prepare GEE Code
- Copy the analysis scripts (`precipitation_analysis.js`, `soil_moisture_analysis.js`, `ndvi_analysis.js`) into the new folder.
- Update the watershed boundary in the code to match the new watershed coordinates.

### 4. Run GEE Code
- Upload the code to **Google Earth Engine**.
- Export the results to CSV files.

### 5. Add Results
Place the exported CSV files into a `results/` subfolder within the watershed folder.

### 6. Document the Watershed
Create a `README.md` file in the watershed folder describing:
- Watershed location and coordinates.
- Datasets used.
- Results and analysis overview.

## Required Tools

- **Google Earth Engine (GEE)** account: To access the datasets and run the code.
- **Google Drive**: To export results as CSV files.

## Data Sources

1. **Tree Canopy Coverage (NDVI)**: MODIS MOD13A1 Dataset.
2. **Soil Moisture**: NASA_USDA SMAP Soil Moisture Dataset.
3. **Precipitation**: UCSB-CHG CHIRPS Daily Dataset (if applicable for certain watersheds).

## Dependencies

- **Google Earth Engine API**: Required to run the analysis scripts.

## License

This project is licensed under the **MIT License** – see the LICENSE file for details.
