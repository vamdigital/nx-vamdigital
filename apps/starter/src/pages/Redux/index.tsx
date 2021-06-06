import ReduxPage from './ReduxPage'
import {Provider} from 'react-redux'

import store from '@vam/shared/store'

export default function Redux() {
  return (
    <Provider store={store}>
      <ReduxPage />
    </Provider>
  )
}
