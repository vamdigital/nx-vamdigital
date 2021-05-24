import {StrictMode} from 'react'
import * as ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import {Theme} from '@vam/shared'

import App from './app/app'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
)
