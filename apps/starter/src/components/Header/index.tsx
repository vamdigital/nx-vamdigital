import {Typography} from '@material-ui/core'
import {Colour} from '@vam/shared/styles/theme/config'
import styled from 'styled-components'

const HeaderBar = styled.header`
  padding: 20px;
  background: ${Colour.lightGreyColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  h1 {
    text-transform: uppercase;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-content: flex-end;
`

interface IHeader {
  logo: React.ReactNode
  children: React.ReactNode
}

export function Header({logo, children}: IHeader) {
  return (
    <HeaderBar>
      <LogoWrapper>
        <Typography variant="h1" component="h1" gutterBottom>
          Starter
        </Typography>
      </LogoWrapper>
      <NavWrapper>{children}</NavWrapper>
    </HeaderBar>
  )
}

export default Header
