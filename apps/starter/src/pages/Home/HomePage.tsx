import {Container} from '@material-ui/core'
import {AppBar} from '@starter/components'
import {Colour} from '@vam/shared/styles/theme/config'

export default function HomePage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Home Page',
          backgroundColor: Colour.secondary,
        }}
      />
      <Container>
        <h1>This is a Home page</h1>
      </Container>
    </>
  )
}
