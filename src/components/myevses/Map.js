import React, {useState} from 'react';
import {GoogleMap, InfoWindow, Marker} from '@react-google-maps/api';
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";

const containerStyle = {
    width: '400px',
    height: '400px',
    fontDisplay: 'auto',
    borderRadius: '10px',
    paragraph: {
        color: 'black',
        maxWidth: '100px',
        wordBreak: 'break-word',
    },
};

const defaultCenter = {
    lat: 48.709445,
    lng: 2.1661629,
};

const Map = ({location, setLocation, evseId}) => {
    const {siteConfig: {customFields}} = useDocusaurusContext();
    const [showInfoWindow, setShowInfoWindow] = useState(true);
    const [activeMarker, setActiveMarker] = useState(null);

    const isValidLocation = !(location.lat === 0 && location.lng === 0);

    const handleDrag = e => {
        if(!isValidLocation) return;
        setLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
    }

    const handleLoad = (marker) => setActiveMarker(marker);
    const handleOnClose = () => setShowInfoWindow(prev => !prev);

    return (
        <GoogleMap
            googleMapsApiKey={customFields.googleApiKey}
            mapContainerStyle={containerStyle}
            zoom={18}
            center={defaultCenter}
        >
            <Marker position={isValidLocation ? location : defaultCenter}
                    draggable={true}
                    onDrag={e => handleDrag(e)}
                    onLoad={handleLoad}
                    onClick={handleOnClose}/>
            {showInfoWindow &&
            <InfoWindow anchor={activeMarker} onCloseClick={handleOnClose}>
                {
                    isValidLocation ? <p style={containerStyle.paragraph}>
                        <span>Evse : <strong>{ evseId }</strong></span>
                        <br />
                        {`lat : ${location.lat}`}
                        <br />
                        {`lng : ${location.lng}`}s
                    </p> : <p style={containerStyle.paragraph}>Enter an address in GPS field</p>
                }
            </InfoWindow>
            }
        </GoogleMap>
    );
}

export default Map;
