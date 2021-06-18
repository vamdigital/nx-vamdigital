import {StrictMode} from 'react'
import * as ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from '@vam/shared/styles/theme'

import App from './components/app/app'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
)
