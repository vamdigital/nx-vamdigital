import {ComponentsProps} from '@material-ui/core/styles/props'

export const props: ComponentsProps = {
  MuiButton: {
    disableElevation: true,
    disableRipple: true,
  },
  MuiCheckbox: {
    disableRipple: true,
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true,
    },
  },
}
