/** Packages */
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
/**Pages  */
import Context from '../../pages/Context'
import Home from '../../pages/Home'
import Hooks from '../../pages/Hooks'
import Redux from '../../pages/Redux'
import HOC from '../../pages/HOC'
import NotFound from '../../pages/NotFound'
/** Components */
import {Header, Nav} from '@starter/components'
/** Assets */
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'

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
