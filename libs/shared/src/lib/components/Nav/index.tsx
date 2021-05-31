import {NavLink as RouterLink} from 'react-router-dom'
import {Link} from '@material-ui/core'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavListItem = styled.li`
  display: flex;

  a {
    display: block;
    padding: 10px;
  }
`

export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavListItem>
          <Link to="/" component={RouterLink} end>
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/context" component={RouterLink}>
            Context
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/hooks" component={RouterLink}>
            Hooks
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/redux" component={RouterLink}>
            Redux
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/hoc" component={RouterLink}>
            HOC
          </Link>
        </NavListItem>
      </NavList>
    </NavWrapper>
  )
}
