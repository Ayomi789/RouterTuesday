import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Shop from './Components/Shop'
import Work from './Components/Work'
import About from './Components/About'
import Error from './Components/Error'
import Dynamic from './Components/Dynamic'
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Error />} />
          <Route path='/:branch' element={<Dynamic />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
