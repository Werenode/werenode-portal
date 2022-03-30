import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import StyledSelect from "./styled/StyledSelect";
import {EvseTextField} from "./EvseInputs";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import StyledFormControl from "./styled/StyledFormControl";
import {getSettings} from "./constate/settings";
import AutocompleteTextField from "./AutocompleteTextField";

const mode = {
    ADDRESS: 'ADDRESS',
    MAP: 'MAP',
    CURRENT_LOCATION: 'CURRENT LOCATION',
}

const selectorMode = [
    {value: 1, mode: mode.ADDRESS},
    {value: 2, mode: mode.MAP},
    {value: 3, mode:  mode.CURRENT_LOCATION},
]

const Gps = (props) => {
    const [selectedMode, setMode] = useState(mode.ADDRESS);
    const {settings} = getSettings();
    const [location, setLocation] = useState(settings[0].gps);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if(errorMessage) setErrorMessage('');

        if(selectedMode === mode.CURRENT_LOCATION){
            if(!('geolocation' in navigator)) return;
            navigator.geolocation.getCurrentPosition(
                position => {
                setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
            },positionError => {
                    setLocation('');
                    setErrorMessage(positionError.message);
                })
        }
        if(mode === mode.ADDRESS){
            setLocation(settings[0].gps);
        }
    }, [selectedMode]);

    useEffect(() => {
        settings[0].gps = location;
    },[location]);

    const gpsHandleChange = e => setLocation(e.target.value);
    const handleChange = e => setMode(e.target.value);

    return(
        <Grid container>
            <Grid item xs={6}>
                {
                    selectedMode === mode.MAP ? <AutocompleteTextField /> :
                        <EvseTextField
                            identifier={props.identifier}
                            extraid={props.extraid}
                            getValue={location}
                            handleChange={e => gpsHandleChange(e)}
                            isError={props.isError}
                            errorText={props.errorText}
                        />
                }
                {errorMessage && <span style={{color: 'red'}}>
                    {errorMessage}
                </span>}
            </Grid>
            <Grid item xs={4}>
                <StyledFormControl sx={{width: '80%'}}>
                    <InputLabel id={ "evses" + props.identifier + props.extraid }>
                        Mode
                    </InputLabel>
                    <StyledSelect
                        id={ "evses" + props.identifier + props.extraid }
                        label='Mode'
                        value={selectedMode}
                        onChange={e => handleChange(e)}>
                        { selectorMode.map(item =>
                            <MenuItem key={item.value} value={item.mode}>{item.mode}</MenuItem>)
                        }
                    </StyledSelect>
                </StyledFormControl>
            </Grid>
        </Grid>
    )
}

export default Gps;
