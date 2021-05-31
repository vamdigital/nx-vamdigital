import styled from 'styled-components'
import {Colour} from '@vam/shared/styles/theme/config'

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
`

const NavWrapper = styled.div`
  display: flex;
  align-content: flex-end;
`

interface IHeader {
  logo: React.ReactNode
  children: React.ReactNode
}

export default function Header({logo, children}: IHeader) {
  return (
    <HeaderBar>
      <LogoWrapper>{logo}</LogoWrapper>
      <NavWrapper>{children}</NavWrapper>
    </HeaderBar>
  )
}
