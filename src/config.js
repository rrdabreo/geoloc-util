module.exports = {
    // Actual API base URL for geocoding
    BASE_URL: 'http://api.openweathermap.org/geo/1.0',

    // API documentation URLs for reference
    DOC_LOCATION_NAME: 'https://openweathermap.org/api/geocoding-api#direct_name',
    DOC_ZIP: 'https://openweathermap.org/api/geocoding-api#direct_zip',
    // OpenWeather API key (set via environment variable or manually)
    API_KEY: process.env.OPENWEATHER_API_KEY || 'YOUR_API_KEY',
};
