import {Container} from '@material-ui/core'
import AppBar from '@vam/shared/components/AppBar'
import {Colour} from '@vam/shared/styles/theme/config'

export default function HOCPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'HOC Page',
          backgroundColor: Colour.visitedLinkColor,
          count: 15,
        }}
      />
      <Container>
        <h1>This is a HOC page</h1>
      </Container>
    </>
  )
}
