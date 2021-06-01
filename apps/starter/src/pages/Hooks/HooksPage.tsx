import {Container} from '@material-ui/core'
import AppBar from '@vam/shared/components/AppBar'
import {Colour} from '@vam/shared/styles/theme/config'

export default function HooksPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Hooks Page',
          backgroundColor: Colour.successColor,
          count: 12,
        }}
      />
      <Container>
        <h1>This is a Hooks page</h1>
      </Container>
    </>
  )
}
