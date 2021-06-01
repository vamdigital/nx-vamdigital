import {Container} from '@material-ui/core'
import AppBar from '@vam/shared/components/AppBar'
import {Colour} from '@vam/shared/styles/theme/config'

export default function ContextPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Context Page',
          backgroundColor: Colour.primary,
          count: 10,
        }}
      />
      <Container>
        <h1>This is a Context page</h1>
      </Container>
    </>
  )
}
