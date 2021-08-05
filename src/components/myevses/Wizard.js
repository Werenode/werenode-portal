import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import { getWizard } from './constate/wizard';
import { Card, CardContent, CardActions } from '@material-ui/core';

import StyledTextField from './StyledTextField';

import { getEVSEs } from './constate/evses';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  //height : 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const BasicWizard = () => {
  const [nb, setNb] = React.useState(0);
  const { evses, setEvses } = getEVSEs();
  const { setWizardOpen } = getWizard();
  const handleChange = (e) => {
    setNb(e.target.value);
  };
  const handleClick = () => {
    const newevses = Array(parseInt(nb)).fill(evses.data.length).map((x,i) => {
      return {id : ('EVSE ' +  (x + i + 1)), revenue : 0 };
    } );
    setEvses(e => { return { ...e, data : e.data.concat(newevses) }; });
    setWizardOpen(false);
  }
  return (
    <Card sx={style}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add EVSE
        </Typography>
        <StyledTextField
          id="outlined-number"
          label="Nb Evse(s)"
          type="number"
          color="primary"
          variant="outlined"
          value={nb}
          fullWidth
          onChange={handleChange}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Add</Button>
      </CardActions>
    </Card>
  )
}

const Wizard = (props) => {
  const { wizardOpen, setWizardOpen } = getWizard();
  const handleClose = () => setWizardOpen(false);
  return (
    <Modal open={wizardOpen} onClose={handleClose} >
      <BasicWizard />
    </Modal>
  )
}

export default Wizard;