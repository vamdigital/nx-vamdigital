import {Container} from '@material-ui/core'
import AppBar from '@vam/shared/components/AppBar'
import {Colour} from '@vam/shared/styles/theme/config'

export default function ReduxPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Redux Page',
          backgroundColor: Colour.alertColor,
          count: 12,
        }}
        s
      />
      <Container>
        <h1>This is a Hooks page</h1>
      </Container>
    </>
  )
}
