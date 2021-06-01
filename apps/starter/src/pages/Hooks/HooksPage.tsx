import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'

export default function HooksPage() {
  return (
    <>
      <AppBar
        {...{
          title: 'Hooks Page',
          backgroundColor: Colour.successColor,
          count: 12,
        }}
      />
      <Container>
        <Likes
          {...{
            likesCount: 1,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.successColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => console.log('Hooks page'),
          }}
        />
      </Container>
    </>
  )
}
