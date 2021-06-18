import AppBarComponent, {IAppBar} from './AppBar'

export function AppBar({title, backgroundColor, count}: IAppBar) {
  return <AppBarComponent {...{title, backgroundColor, count}} />
}

export default AppBar
