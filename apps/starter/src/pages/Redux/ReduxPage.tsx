import {useDispatch, useSelector} from 'react-redux'
import {Container} from '@material-ui/core'
import {AppBar, Likes} from '@vam/shared/components'
import {Colour} from '@vam/shared/styles/theme/config'
import likesIcon from '../../assets/icons/thumbs.svg'
import {likesIncrement} from '@vam/shared/actions'
import {likesSelector} from '@vam/shared/selectors'

export default function ReduxPage() {
  const dispatch = useDispatch()
  const count = useSelector(likesSelector)
  return (
    <>
      <AppBar
        {...{
          title: 'Redux Page',
          backgroundColor: Colour.alertColor,
          count,
        }}
      />
      <Container>
        <Likes
          {...{
            likesCount: count,
            likesImageSource: likesIcon,
            likesCountBackground: Colour.alertColor,
            likesCountColor: Colour.whiteColor,
            clickHandler: () => dispatch(likesIncrement()),
          }}
        />
      </Container>
    </>
  )
}
