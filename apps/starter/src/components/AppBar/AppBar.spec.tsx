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
  it('Should Render the Count', () => {
    const {queryByTestId} = render(
      <AppBar title="App Title" backgroundColor="#222" count={2} />,
    )
    const countEl = queryByTestId('count')
    expect(countEl).toBeTruthy()
  })
})
