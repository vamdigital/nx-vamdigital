import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@starter/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

type IHOCPage = {
  likesCount: number
  incrementLikes: () => void
}

type IProps = {
  title: string
}

export default function HOCPage({
  likesCount,
  incrementLikes,
  title,
}: IHOCPage & IProps) {
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
        <h1>{title}</h1>
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
