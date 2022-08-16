import {getSettings} from "./constate/settings";
import React, {Fragment, useEffect, useState} from "react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import Grid from "@material-ui/core/Grid";
import {WithHelp} from "./EvseInputs";
import StyledTextField from "./styled/StyledTextField";
import Map from "./Map";
import {getGoogleLoadScript} from "./constate/googleLoadScript";
import IconButton from "@material-ui/core/IconButton";
import {LocationOn, MapOutlined} from "@material-ui/icons";

const suggestionsStyle = (active) => ({
    backgroundColor: active ? '#00B1A5' : '#f2f3f4',
    fontFamily: 'Roboto, Arial, sans-serif',
    cursor: 'pointer', color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MESSAGE = {
    COORD_NOT_FOUND: "Coordinates not found",
    ENTER_ADDRESS: "Enter an address",
}
const INITIAL_LOCATION = {lat: 0, lng: 0};

const suggestions = (message) =>  (
    ({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading
      }) => (
        <Grid container direction='column'>
            <WithHelp identifier='gps' element={
                <StyledTextField helperText={message} {...getInputProps({
                    name: 'GPS',
                    label: 'GPS',})}/>}
            />
            <Grid item container direction='column' position='absolute' top='70%' zIndex={1}
                  alignItems='left' boxShadow='0 0 2px 2px'
            >
                {loading && <div>Loading...</div>}
                {suggestions
                    .filter(suggestion => suggestion.index <= 10)
                    .map(suggestion => (
                            <Grid item key={`idx-${suggestion.index}-${suggestion.placeId}`}
                                  {...getSuggestionItemProps(
                                suggestion, {style: suggestionsStyle(suggestion.active),})}
                                width='100%'
                            >
                                <LocationOn />
                                {suggestion.description}
                            </Grid>
                        ))
                }
            </Grid>
        </Grid>)
);

const AutocompleteTextField = () => {
    const {settings} = getSettings();
    const [address, setAddress] = useState('');
    const [location, setLocation]  = useState(getLatLngFromGps());
    const [message, setMessage] = useState(MESSAGE.ENTER_ADDRESS);
    const { isGoogleApiLoaded, loadGoogleScript} = getGoogleLoadScript();
    const [showMap, setShowMap] = useState(true);

    useEffect(() => {
        if(!isGoogleApiLoaded){
            loadGoogleScript();
        }
    }, []);

    useEffect(() => {
        if(location.lat === 0 && location.lng === 0) return;
        settings[0].gps = `${location.lat} , ${location.lng}`;
        setAddress(settings[0].gps);
    }, [location]);

    const handleClick = () => setShowMap(e => !e);

    const handleSelect = () => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setLocation({lat: latLng.lat, lng: latLng.lng});
                if(message === MESSAGE.COORD_NOT_FOUND)
                    setMessage(MESSAGE.ENTER_ADDRESS);
                console.log(`${latLng.lat}, ${latLng.lng}`);
            })
            .catch(err => {
                if(message === MESSAGE.ENTER_ADDRESS)
                    setMessage(MESSAGE.COORD_NOT_FOUND);
                console.log(`Error ${err}`);
            })
    };
    const handleError = (status, clearSuggestions) => {
        console.log(`status ${status}`);
        clearSuggestions();
        setAddress('');
        //setMessage(`${status}`);
        if(message === MESSAGE.ENTER_ADDRESS)
            setMessage(MESSAGE.COORD_NOT_FOUND);
        setLocation(INITIAL_LOCATION);
    };

    function getLatLngFromGps () {
        if(!settings[0].gps || !settings[0].gps.includes(',')){
            return INITIAL_LOCATION;
        }
        const coordArray = settings[0].gps.split(',');
        return {lat: +coordArray[0], lng: +coordArray[1]};
    }

    return !isGoogleApiLoaded ?
        <span style={{color: 'red'}}>
                Map mode not available
        </span> :
    (
        <Grid container>
            <Grid item xs={12} position='relative'>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}
                                    onError={handleError}>
                    {suggestions(message)}
                </PlacesAutocomplete>
            </Grid>
            <Grid item xs={12}>
                {showMap ?
                    <Fragment>
                        <IconButton onClick={handleClick} color='primary' sx={{
                            height: '20px' , fontSize: '0.8em'
                        }}>
                            <MapOutlined/>
                            Hide map
                        </IconButton>
                        <Map location={location} setLocation={setLocation} evseId={settings[0].id}/>
                    </Fragment>
                     :
                    <IconButton onClick={handleClick} sx={{color: 'lightgray',
                        height: '20px' , fontSize: '0.8em'}}>
                        <MapOutlined />
                        Show map
                    </IconButton>
                }
            </Grid>
        </Grid>
    )
}
export default AutocompleteTextField;
