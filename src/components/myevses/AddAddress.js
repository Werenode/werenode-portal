import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { EvseSelect, EvseTextField } from './EvseInputs';
import Grid from '@material-ui/core/Grid';
import { getWizard } from './constate/wizard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddAddress = () => {
  const { data, setOpenAddAddress } = getWizard();
  const handleClose = () => {
    setOpenAddAddress(false);
  }
  return (
    <Modal
      open={data.openaddaddress}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom : '34px' }}>
            Add address
          </Typography>
        </Box>
      </Modal>
  )
}

export default AddAddress;