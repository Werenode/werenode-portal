import {getSettings} from "./constate/settings";
import React, {useEffect, useState} from "react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import Grid from "@material-ui/core/Grid";
import {WithHelp} from "./EvseInputs";
import StyledTextField from "./styled/StyledTextField";
import Map from "./Map";
import {getGoogleLoadScript} from "./constate/googleLoadScript";
import IconButton from "@material-ui/core/IconButton";
import {LocationOn, MapOutlined} from "@material-ui/icons";

const suggestionsStyle = (active) => ({
    backgroundColor: active ? 'green' : 'white',
    fontFamily: 'Arial Narrow',
    cursor: 'pointer', color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const AutocompleteTextField = () => {
    const {settings} = getSettings();
    const [address, setAddress] = useState('');
    const [location, setLocation]  = useState({lat: 0, lng: 0});
    const [message, setMessage] = useState('Enter an address');
    const { isGoogleApiLoaded, loadGoogleScript} = getGoogleLoadScript();
    const [showMap, setShowMap] = useState(true);

    const handleClick = () => setShowMap(e => !e);
    useEffect(() => {
        if(!isGoogleApiLoaded){
            loadGoogleScript();
        }
    }, []);

    useEffect(() => {
        if(location.lat === 0 || location.lng === 0) return;
        settings[0].gps = `${location.lat} , ${location.lng}`;
        setAddress(`${location.lat} , ${location.lng}`);
    }, [location])

    const handleSelect = () => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log(`location setted Lat: ${latLng.lat} lng: ${latLng.lng}`);
                setLocation({lat: latLng.lat, lng: latLng.lng});
                setMessage('First enter an address');
            })
            .catch(err => {
                console.log(`Error ${err}`);
            })
    }
    const handleError = (status, clearSuggestions) => {
        console.log(`status ${status}`);
        clearSuggestions();
        setAddress('');
        setMessage(`${status}`);
    }

    return !isGoogleApiLoaded ?
        <span style={{color: 'red'}}>
                Map mode not available
        </span> :
    (
        <Grid container>
            <Grid item container xs={12}>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}
                                    onError={handleError}>
                    {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading
                      }) => (
                        <Grid item container direction='column'>
                            <WithHelp identifier='gps' element={
                                <StyledTextField helperText={message} {...getInputProps({
                                    name: 'GPS',
                                    label: 'GPS',
                                })}/>
                            }/>
                            <Grid item container direction='column' maxHeight='150px'
                                  sx={{overflowY: 'auto', overflowX: 'auto', wordBreak: 'all'}}
                            >
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const style = suggestionsStyle(suggestion.active);
                                    return (
                                        <Grid item {...getSuggestionItemProps(
                                                  suggestion, {
                                                      style: style,
                                                key: `${suggestion.index}`})}
                                        >
                                            <LocationOn />
                                            {suggestion.description}
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    )}
                </PlacesAutocomplete>
            </Grid>
            <Grid item xs={12} >
                <Grid container  >
                    <Grid item xs={12} paddingRight='25px'>
                        {showMap ?
                            <IconButton onClick={handleClick} color='primary' sx={{
                                height: '20px' , fontSize: '0.8em'
                            }}>
                                <MapOutlined/>
                                Hide map
                            </IconButton> :
                            <IconButton onClick={handleClick} sx={{color: 'lightgray',
                                height: '20px' , fontSize: '0.8em'}}>
                                <MapOutlined />
                                Show map
                            </IconButton>
                        }
                    </Grid>
                    <Grid item xs={12} paddingLeft='10px'>
                        {`lat : ${location.lat}`}
                        <br/>
                        {`lng : ${location.lng}`}
                    </Grid>
                </Grid>
                {showMap &&<Map location={location} setLocation={setLocation}/>}
            </Grid>
        </Grid>
    )
}
export default AutocompleteTextField;
