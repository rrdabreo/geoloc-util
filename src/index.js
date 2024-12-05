#!/usr/bin/env node

const { fetchGeolocation } = require('./utils');

async function main() {
    const args = process.argv.slice(2);
    const locations = args.filter(arg => arg !== '--locations');

    if (locations.length === 0) {
        console.error('Usage: geoloc-util --locations "City, State" "ZIP Code" ...');
        process.exit(1);
    }

    console.log('Fetching geolocation data...\n');

    for (const location of locations) {
        try {
            const result = await fetchGeolocation(location);
            console.log(`Location: ${location}`);
            console.log(`Latitude: ${result.latitude}, Longitude: ${result.longitude}`);
            console.log(`Place Name: ${result.placeName}\n`);
        } catch (error) {
            console.error(error.message);
        }
    }
}

main();
