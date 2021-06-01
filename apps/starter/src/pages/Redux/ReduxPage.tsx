import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

export default function ReduxPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Redux Page',
          backgroundColor: Colour.alertColor,
          count: 12,
        }}
      />
      <Container>
        <Likes
          {...{
            likesCount: 1,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.alertColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => console.log('Redux page'),
          }}
        />
      </Container>
    </>
  )
}
