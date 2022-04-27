import React from 'react'
import logo from './logo.svg'
import { Header, Footer } from './components'
import { Home, Show, NewsSingle, PersonSingle, News } from './pages'
import axios from 'axios'
import {
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

function App() {

  const [menu, setMenu] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    async function getData() {
        try {
            const [MenuResponse] = await Promise.all([axios.get(`http://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/menu`)])
            setIsLoading(false)
            setMenu(MenuResponse.data)
            
  
        } catch (error) {
            alert('Ошибка при запросе данных ;(')
            console.error(error)
        }
    }
    getData()
  }, [])
  
  return (
    <div className="App">
      <Header 
        menu = {menu}
        isLoading = {isLoading}
      />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/show/:id" element={<Show />} exact />
        <Route exact path="/news/:id" element={<NewsSingle/>} />
        <Route exact path="/news" element={<News />} />
        <Route path="/person/:id" element={<PersonSingle />} exact />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
