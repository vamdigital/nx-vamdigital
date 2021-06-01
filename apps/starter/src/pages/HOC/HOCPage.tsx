import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

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
        <Likes
          {...{
            likesCount: 1,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.visitedLinkColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => console.log('HOC page'),
          }}
        />
      </Container>
    </>
  )
}
