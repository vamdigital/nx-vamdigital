import {render} from '@testing-library/react'
import AppBar from '.'

describe('AppBar Component', () => {
  it('Should render the AppBar Component', () => {
    const {queryByTestId} = render(
      <AppBar title="App Title" backgroundColor="#222" />,
    )
    const appBarComponent = queryByTestId('AppBar')
    expect(appBarComponent).toBeTruthy()
  })
})
