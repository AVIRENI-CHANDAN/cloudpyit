import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useRef } from 'react';

function createPinContent() {
    const pinContainer = document.createElement('div');
    pinContainer.style.position = 'relative';
    pinContainer.style.width = '32px';
    pinContainer.style.height = '32px';

    const pinIcon = document.createElement('img');
    pinIcon.src = "https://cdn-icons-png.flaticon.com/512/684/684908.png";
    pinIcon.alt = "Pin";
    pinIcon.style.position = "relative";
    pinIcon.style.height = "100%";
    pinIcon.style.width = "100%";
    pinIcon.style.zIndex = "10";

    pinContainer.appendChild(pinIcon);
    return pinContainer;
}

function MapComponent() {
    const libraries = ['places', 'marker'];
    const mapContainerStyle = {
        height: '400px',
        width: '100%',
    };
    const center = { lat: 17.452042, lng: 78.390146 };
    const options = {
        zoomControl: true,
        mapId: 'roadmap',
        mapTypeId: 'roadmap',
        streetViewControl: false,
        fullscreenControlOptions: false, fullscreenControl: false, mapTypeControl: false
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB8pgDs2AHwCuLf9lXaozsg79yL2FNuG4U',
        libraries,
    });
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;

        if (window.google) {
            window.google.maps.importLibrary('marker').then(({ AdvancedMarkerElement }) => {
                const pinContent = createPinContent();
                const marker = new AdvancedMarkerElement({
                    position: center,
                    map,
                    title: 'Hello World!',
                    content: pinContent,
                    gmpClickable: true,
                });
                // Add an event listener for the AdvancedMarkerElement
                marker.addListener('gmp-click', (event) => {
                    console.log('Marker clicked!', event.target.position);
                });
            });
        }
    }, []);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center} options={options} onLoad={onMapLoad} />
    );
}

export default MapComponent;
