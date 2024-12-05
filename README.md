# Geolocation Utility

This utility fetches geolocation data (latitude, longitude, and place name) from the OpenWeather Geocoding API for a given city/state or ZIP code input.

## Features

- Supports both city/state (e.g., "Madison, WI") and ZIP codes (e.g., "12345").
- Handles multiple locations at once.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 14.x
- OpenWeather API key: [Get your API key here](https://openweathermap.org/api).

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd geoloc-util
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set your OpenWeather API key in `src/config.js` or as an environment variable:
    ```bash
    export OPENWEATHER_API_KEY=your_api_key
    ```

## Usage

Run the utility with the following command:
```bash
node src/index.js --locations "City, State" "ZIP Code" ...
