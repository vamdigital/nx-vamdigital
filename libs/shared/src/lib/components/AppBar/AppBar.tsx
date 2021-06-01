import {Container} from '@material-ui/core'
import {Colour, Font} from '@vam/shared/styles/theme/config'
import styled from 'styled-components'

export interface IAppBar {
  title: string
  backgroundColor: string
  count?: number
}

const AppBarWrapper = styled.div<{backgroundColor: string}>`
  display: flex;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  padding: 10px 30px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 55%;
  color: ${Colour.whiteColor};
  font-size: ${Font.fontmd};
`

const CounterWrapper = styled(TitleWrapper)`
  width: 45%;
`

export default function AppBarComponent({
  title,
  backgroundColor,
  count,
}: IAppBar) {
  return (
    <AppBarWrapper backgroundColor={backgroundColor}>
      <TitleWrapper>{title}</TitleWrapper>
      <CounterWrapper>{count}</CounterWrapper>
    </AppBarWrapper>
  )
}
