const { fetchGeolocation } = require('../src/utils');
const assert = require('assert');
const { API_KEY } = require('../src/config');

if (API_KEY === 'YOUR_API_KEY') {
    console.error('Please set a valid OpenWeather API key in src/config.js or as an environment variable.');
    process.exit(1);
}

async function runTests() {
    console.log('Running tests...\n');

    try {
        // Test valid city/state input
        const cityResult = await fetchGeolocation('Madison, WI');
        assert(cityResult.placeName.includes('Madison'), 'City test failed.');
        console.log('Test passed for city/state input: Madison, WI.');

        // Test valid ZIP code input
        const zipResult = await fetchGeolocation('12345');
        assert(zipResult.placeName, 'ZIP code test failed.');
        console.log('Test passed for ZIP code input: 12345.');

        // Test invalid location
        try {
            await fetchGeolocation('InvalidLocation');
        } catch (error) {
            console.log('Test passed for invalid location input.');
        }
    } catch (error) {
        console.error('Test failed:', error.message);
        process.exit(1);
    }

    console.log('\nAll tests passed!');
}

runTests();
