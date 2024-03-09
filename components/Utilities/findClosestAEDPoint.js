function haversineDistance(lon1, lat1, lon2, lat2) {
    const R = 6371; // Radius ziemi
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        0.5 - Math.cos(dLat)/2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a));
}

// refLat refLon nasza lokalizacja, csvOa
async function readCSVAndFindClosestPoint(refLat, refLon, csvPath, excludePoints = []) {
    try {
        const response = await fetch(csvPath);
        const text = await response.text();
        const lines = text.split('\n').map(line => line.split(','));
        let closestDistance = Infinity;
        let closestPoint = null;

        for (let i = 1; i < lines.length; i++) {
            const latitude = parseFloat(lines[i][6]);
            const longitude = parseFloat(lines[i][8]);
            const description = lines[i][1];

            const isExcluded = excludePoints.some(point =>
                Math.abs(point.latitude - latitude) < 0.0001 &&
                Math.abs(point.longitude - longitude) < 0.0001);

            if (!isNaN(latitude) && !isNaN(longitude) && !isExcluded) {
                const distance = haversineDistance(refLon, refLat, longitude, latitude);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestPoint = { latitude, longitude, distance, description };
                }
            }
        }

        return closestPoint;
    } catch (error) {
        console.error('Wystąpił błąd przy wczytywaniu pliku:', error);
        return null;
    }
}

export { readCSVAndFindClosestPoint };
