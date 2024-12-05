const axios = require('axios');
const { BASE_URL, API_KEY } = require('./config');

async function fetchGeolocation(location) {
    const isZipCode = /^\d{5}$/.test(location);
    const endpoint = isZipCode ? `${BASE_URL}/zip` : `${BASE_URL}/direct`;

    // Remove spaces around commas and append ",US" for city/state
    const formattedLocation = isZipCode
        ? location
        : `${location.trim().replace(/\s*,\s*/g, ',')},US`;

    const params = isZipCode
        ? { zip: location, appid: API_KEY }
        : { q: formattedLocation, limit: 1, appid: API_KEY };

    try {
        const { data } = await axios.get(endpoint, { params });

        if (isZipCode) {
            return {
                latitude: data.lat,
                longitude: data.lon,
                placeName: `${data.name}, ${data.state || 'N/A'}`,
            };
        }

        if (!data || data.length === 0) {
            throw new Error('No results found for the given location.');
        }

        const result = data[0];
        return {
            latitude: result.lat,
            longitude: result.lon,
            placeName: `${result.name}, ${result.state || 'N/A'}`,
        };
    } catch (error) {
        throw new Error(
            `Failed to fetch geolocation data for "${location}": ${error.response?.data?.message || error.message}`
        );
    }
}

module.exports = { fetchGeolocation };
