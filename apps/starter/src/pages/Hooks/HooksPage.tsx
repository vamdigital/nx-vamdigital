import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@starter/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'
import {useLikes} from '@vam/shared/hooks'

export default function HooksPage() {
  const {likes, incrementLikes} = useLikes()
  return (
    <>
      <AppBar
        {...{
          title: 'Hooks Page',
          backgroundColor: Colour.successColor,
          count: likes,
        }}
      />
      <Container>
        <Likes
          {...{
            likesCount: likes,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.successColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => incrementLikes(),
          }}
        />
      </Container>
    </>
  )
}
