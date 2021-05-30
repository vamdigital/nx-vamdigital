import {TypographyOptions} from '@material-ui/core/styles/createTypography'
import {Font} from './config'

export const typography: TypographyOptions = {
  fontFamily: Font.fontFamily,
  h1: {
    fontSize: Font.fontxl,
    fontWeight: Font.fontBold,
    lineHeight: 1.09375,
  },
  h2: {
    fontSize: Font.fontlg,
    fontWeight: Font.fontBold,
    lineHeight: 1.04167,
  },
  h3: {
    fontSize: Font.fontmd,
    fontWeight: Font.fontBold,
    lineHeight: 1.1111,
  },
  h4: {
    fontSize: Font.fontBaseSize,
    fontWeight: Font.fontBold,
    lineHeight: 1.25,
  },
}
