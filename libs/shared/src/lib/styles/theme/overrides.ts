import {Overrides} from '@material-ui/core/styles/overrides'
import {Colour, Font} from './config'

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
  MuiLink: {
    root: {
      fontSize: Font.fontmd,
      color: Colour.linkColor,
      '&:hover': {
        color: Colour.hoverLinkColor,
      },
      '&:active': {
        color: Colour.activeLinkColor,
      },
      '&:focus': {
        color: Colour.focusTextColor,
      },
      '&.active': {
        color: Colour.activeLinkColor,
      },
    },
  },
}
