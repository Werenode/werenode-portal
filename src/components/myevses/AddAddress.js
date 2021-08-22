import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { EvseTextField } from './EvseInputs';
import Grid from '@material-ui/core/Grid';
import { getWizard, isValidAddress } from './constate/wizard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width : '500px',
  p: 4,
  paddingBottom : '8px',
  paddingRight : '12px'
};

const AddAddress = () => {
  const [ address, setAddress ] = React.useState("");
  const { data, setOpenAddAddress, setShowErrors } = getWizard();
  const handleClose = () => {
    setOpenAddAddress(false);
  }
  const handleClick = () => {
    if (isValidAddress(address)) {
      data.addFreeUser(address);
      setOpenAddAddress(false);
      setShowErrors(false);
    } else {
      setShowErrors(true);
    }
  }
  return (
    <Modal
      open={data.openaddaddress}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" justifyContent="flex-start" alignContent="center">
            <Grid item xs={12}>
              <EvseTextField
                identifier="freeuser"
                getValue={address}
                handleChange={e => setAddress(e.target.value)}
                isError={v => !isValidAddress(v)}
                helperText="Invalid address"
              />
            </Grid>
            <Grid item xs={12} container direction="row" justifyContent="flex-end" alignContent="center">
              <Button onClick={handleClick}>ok</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
  )
}

export default AddAddress;