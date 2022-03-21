import React from 'react';
import Grid from "@material-ui/core/Grid";
import {CircularProgress, Typography} from "@material-ui/core";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width : '300px',
    wordBreak: 'all',
};

const MessageBox = ({message}) => {
    return (
        <Grid container sx={style} direction='column' alignItems='center'
              justifyContent='center'>
            <Grid item>
                <CircularProgress variant='indeterminate' sx={{color: '#00B1A5'}}/>
            </Grid>
            <Grid item>
                <Typography variant='caption' sx={{color: '#00B1A5'}}>
                    {message ? `${message}` : 'Loading data...'}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default MessageBox;
