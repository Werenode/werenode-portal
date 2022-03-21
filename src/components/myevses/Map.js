import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";


const containerStyle = {
    width: '400px',
    height: '400px',
    fontDisplay: 'auto',
    borderRadius: '10px',
};

const defaultCenter = {
    lat: 48.709445,
    lng: 2.1661629,
};

const Map = ({location, setLocation}) => {
    const {siteConfig: {customFields}} = useDocusaurusContext();
    const [center, setCenter] = useState(defaultCenter);
    useEffect(() => {
        if(!isValidLocation()) return;
        setCenter(location);
        console.log('center changed');
    }, [location]);

    const isValidLocation = () =>
        !(location.lat === 0 || location.lng === 0);
    const handleDragEnd = e => {
        if(!isValidLocation()) return;
        setLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
        setCenter(e.latLng);
    }

    return (
        <GoogleMap
            googleMapsApiKey={customFields.googleApiKey}
            mapContainerStyle={containerStyle}
            zoom={18}
            center={center}
        >
            <Marker position={isValidLocation(location) ? location : defaultCenter}
                    draggable={true}
                    onDragEnd={e => handleDragEnd(e)}
            />
        </GoogleMap>
    );
}

export default Map;
