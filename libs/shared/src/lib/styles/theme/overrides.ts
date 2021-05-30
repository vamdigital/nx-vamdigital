import {Overrides} from '@material-ui/core/styles/overrides'
import {Font} from './config'

export const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        WebkitFontSmoothing: 'auto',
        overflow: 'hidden',
        overflowY: 'scroll',
      },
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
    },
  },
}
