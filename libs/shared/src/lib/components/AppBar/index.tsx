import AppBarComponent, {IAppBar} from './AppBar'

export default function AppBar({title, backgroundColor, count}: IAppBar) {
  return <AppBarComponent {...{title, backgroundColor, count}} />
}
