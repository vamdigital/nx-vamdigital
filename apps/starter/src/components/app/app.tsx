/** Packages */
/** Components */
import {Header, Nav} from '@starter/components'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
/** Assets */
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
/**Pages  */
import Context from '../../pages/Context'
import HOC from '../../pages/HOC'
import Home from '../../pages/Home'
import Hooks from '../../pages/Hooks'
import NotFound from '../../pages/NotFound'
import Redux from '../../pages/Redux'

export function App() {
  return (
    <>
      <Router>
        <Header logo={<Logo />}>
          <Nav />
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/hoc" element={<HOC />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
