import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@starter/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

import {useLikesContext} from '@vam/shared/context'

export default function ContextPage() {
  const {likes, incrementLikes} = useLikesContext()
  return (
    <>
      <AppBar
        backgroundColor={Colour.primary}
        count={likes}
        title="Context page"
      />
      <Container>
        <Likes
          likesCount={likes}
          likesImageSource={likesIcon}
          likesCountBackground={Colour.primary}
          likesCountColor={Colour.whiteColor}
          clickHandler={() => incrementLikes()}
        />
      </Container>
    </>
  )
}
