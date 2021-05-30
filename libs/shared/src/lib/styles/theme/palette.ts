/** Custom Palette for Application */
import {Colour} from './config'

const palette = {
  primary: {
    main: Colour.primary,
  },
  secondary: {
    main: Colour.secondary,
  },
  primaryTextColor: {
    main: Colour.primaryTextColor,
  },
  secondaryTextColor: {
    main: Colour.secondaryTextColor,
  },
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    primaryTextColor: Palette['primary']
    secondaryTextColor: Palette['primary']
  }
  interface PaletteOptions {
    primaryTextColor: PaletteOptions['primary']
    secondaryTextColor: PaletteOptions['primary']
  }
}

export {palette}
