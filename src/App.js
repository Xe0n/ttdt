import logo from './logo.svg'
import { Header, Footer } from './components'
import { Home, Show } from './pages'
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
        <Route path="/show/:id" element={<Show />} exact />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
