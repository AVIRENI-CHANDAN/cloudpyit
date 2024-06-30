// MapComponent.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const MapComponent = () => {
    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 17.451629, lng: 78.381147
        // lat: 40.748817,
        // lng: -73.985428
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyB8pgDs2AHwCuLf9lXaozsg79yL2FNuG4U">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
