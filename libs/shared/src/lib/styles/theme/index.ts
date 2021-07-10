import {createTheme, responsiveFontSizes} from '@material-ui/core/styles'
import {overrides} from './overrides'
import {palette} from './palette'
import {props} from './props'
import {shape} from './shape'
import {typography} from './typography'

export let theme = createTheme({
  breakpoints: {},
  overrides,
  palette,
  props,
  typography,
  shape,
})

theme = responsiveFontSizes(theme)
