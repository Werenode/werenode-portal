import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { EvseSelect, EvseTextField } from './EvseInputs';
import Grid from '@material-ui/core/Grid';
import { getWizard } from './constate/wizard';
import { isOCPP } from './inputData.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ConnectorForm = () => {
  const { data, setIndex, setPrice, addConnector, setOpen, setShowErrors } = getWizard();
  const isInvalidIndex = (v) => {
    if (data.connectoredit == data.index) {
      return false;
    }
    return (data.connectors.map(x => x.index).indexOf(parseInt(v)) != -1);
  };
  const isInvalidPrice = p => {
    p == '' || p == undefined
  };
  const isConnectorFormInvalid = () => {
    return (isInvalidIndex(data.index) || isInvalidPrice(data.price));
  };
  const handleClick = () => {
    if (isConnectorFormInvalid()) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      addConnector();
      setOpen(false);
    }
  }
  const handleCancel = () => {
    setOpen(false);
  }
  return (
    <Grid container
      direction="row"
      justifyContent="flex-start"
      alignContent="center">
      <Grid md={8} sm={12} xs={12} item>
        <EvseSelect id="connectormode" />
      </Grid>
      <Grid md={4} sm={12} xs={12} item>
        <EvseSelect id="power" />
      </Grid>
      <Grid md={12} sm={12} xs={12} item>
        <EvseSelect id="connectortype" />
      </Grid>
      <Grid md={8} sm={12} xs={12} item>
        <EvseTextField
          id="price"
          handleChange={e => setPrice(e.target.value)}
          errorText="Price not set"
        />
      </Grid>
      <Grid md={4} sm={4} xs={12} item>
        <EvseSelect id="currency" />
      </Grid>
      { isOCPP(data.supervision.type) ?
        <Grid md={4} sm={4} xs={12} item>
          <EvseTextField
            id="index"
            type="number"
            handleChange={e => setIndex(e.target.value)}
            errorText="Index already set"
            isError={ isInvalidIndex }
          />
        </Grid> : null
      }
      <Grid xs={12} item>
        <Grid container direction='row' justifyContent='space-between' alignContent='flex-end'>
          <Grid item>
            <Button onClick={ handleCancel }>cancel</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={ handleClick }>ok</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function ConnectorSettings() {
  const { data, setOpen, setShowErrors } = getWizard();
  const handleClose = () => {
    setOpen(false);
    setShowErrors(false);
  }
  return (
      <Modal
        open={data.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom : '34px' }}>
            Connector settings
          </Typography>
          <ConnectorForm />
        </Box>
      </Modal>
  );
}