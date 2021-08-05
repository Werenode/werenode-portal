import TextField from '@material-ui/core/TextField';

import { outlinedInputClasses } from "@material-ui/core/OutlinedInput";
import { inputLabelClasses } from "@material-ui/core/InputLabel";
import { styled } from "@material-ui/core/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: '#34383e'
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.primary.main
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: 'white'
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: 'white'
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: theme.palette.text.secondary
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: theme.palette.primary.main
  }
}));

export default StyledTextField;

