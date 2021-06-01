import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

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
        <Likes
          {...{
            likesCount: 1,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.primary,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => console.log('Context page'),
          }}
        />
      </Container>
    </>
  )
}
