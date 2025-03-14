// Configuración del mapa
export function initMap() {
    const map = L.map('map', {
        center: [19.3619, -99.1665],
        zoom: 16,
        minZoom: 16,
        maxZoom: 18,
        maxBounds: [[19.3590, -99.1700], [19.3650, -99.1630]],
        maxBoundsViscosity: 1.0
    });

    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    return map;
}

// Marcadores y funcionalidad
export function addMarkers(map) {
    const points = [
        { name: "Punto 1", lat: 19.3617, lon: -99.1645, url: "archivo1.html" },
        { name: "Punto 2", lat: 19.3622, lon: -99.1650, url: "archivo2.html" },
        { name: "Punto 3", lat: 19.3605, lon: -99.1642, url: "archivo3.html" }
    ];

    points.forEach(point => {
        const marker = L.marker([point.lat, point.lon]).addTo(map);
        
        // Popup con enlace
        marker.bindPopup(`
            <b>${point.name}</b><br>
            <a href="${point.url}" class="btn btn-sm btn-primary mt-2">Ver más detalles</a>
        `);
        
        // Redirección al hacer clic
        marker.on('click', () => {
            window.location.href = point.url;
        });
    });
}