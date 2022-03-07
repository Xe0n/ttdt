import logo from './logo.svg'
import { Header, Footer } from './components'
import { Home } from './pages'
import {
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
