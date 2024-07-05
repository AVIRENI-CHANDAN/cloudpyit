import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

function MapComponent() {
    const mapStyles = { height: "400px", width: "100%" };

    const defaultCenter = { lat: 17.452042, lng: 78.390146 };

    return (
        <LoadScript googleMapsApiKey="AIzaSyB8pgDs2AHwCuLf9lXaozsg79yL2FNuG4U" loadingElement={<div>Loading...</div>}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default MapComponent;
