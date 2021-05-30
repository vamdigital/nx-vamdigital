/** Fonts */
export const Font: IFont = {
  fontFamily: ['KoHo', 'sans-serif'].join(','),
  fontxs: '0.5rem',
  fontsm: '0.75rem',
  fontBaseSize: '16px',
  fontmd: '1.125rem',
  fontlg: '1.5rem',
  fontxl: '2rem',
  fontNormal: 400,
  fontBold: 500,
}

/** Config for Custom Colors  */
export const Colour: IColour = {
  primary: '#1d70b8',
  secondary: '#912b88',
  primaryTextColor: '#0b0c0c',
  secondaryTextColor: '#0b0c0c',
  linkColor: '#1d70b8',
  hoverLinkColor: '#003078',
  visitedLinkColor: '#4c2c92',
  activeLinkColor: '#0b0c0c',
  borderColor: '#b1b4b6',
  inputBorderColor: '#0b0c0c',
  focusColor: '#ffdd00',
  focusTextColor: '#0b0c0c',
  errorColor: '#d4351c',
  successColor: '#00703c',
  helpColor: '#28a197',
  calloutColor: '#4c2c92',
  blackColor: '#0b0c0c',
  whiteColor: '#ffffff',
  darkGreyColor: '#505a5f',
  midGreyColor: '#b1b4b6',
  lightGreyColor: '#f3f2f1',
  alertColor: '#f47738',
}

interface IFont {
  fontFamily: string
  fontsm: string
  fontxs: string
  fontBaseSize: string
  fontmd: string
  fontlg: string
  fontxl: string
  fontNormal: number
  fontBold: number
}

interface IColour {
  primary: string
  secondary: string
  primaryTextColor: string
  secondaryTextColor: string
  linkColor: string
  hoverLinkColor: string
  visitedLinkColor: string
  activeLinkColor: string
  borderColor: string
  inputBorderColor: string
  focusColor: string
  focusTextColor: string
  errorColor: string
  successColor: string
  helpColor: string
  calloutColor: string
  blackColor: string
  whiteColor: string
  darkGreyColor: string
  lightGreyColor: string
  midGreyColor: string
  alertColor: string
}
