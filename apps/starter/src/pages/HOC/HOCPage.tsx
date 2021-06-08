import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

interface IHOCPage {
  likesCount: number
  incrementLikes: () => void
}

export default function HOCPage({likesCount, incrementLikes}: IHOCPage) {
  return (
    <>
      <AppBar
        {...{
          title: 'HOC Page',
          backgroundColor: Colour.visitedLinkColor,
          count: likesCount,
        }}
      />
      <Container>
        <Likes
          {...{
            likesCount,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.visitedLinkColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => incrementLikes(),
          }}
        />
      </Container>
    </>
  )
}
