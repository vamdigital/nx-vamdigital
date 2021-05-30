import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
import {palette} from './palette'
import {overrides} from './overrides'
import {props} from './props'
import {typography} from './typography'
import {shape} from './shape'

export let theme = createMuiTheme({
  breakpoints: {},
  overrides,
  palette,
  props,
  typography,
  shape,
})

theme = responsiveFontSizes(theme)
