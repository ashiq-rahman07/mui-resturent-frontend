import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/menu' element={<Menu/>}/>
        <Route  path='*' element={<Pagenotfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App