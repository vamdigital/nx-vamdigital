import {blue, red} from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core/styles'
export const theme = createMuiTheme({
  breakpoints: {},
  overrides: {},
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: ['KoHo', 'sans-serif'].join(','),
    h4: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0,
  },
})
