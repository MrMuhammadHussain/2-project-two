import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
//////Import Components///////
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Videos from './components/Videos'
import FreeVideos from './components/FreeVideos'
import Upload from './components/Upload'
import Login from './components/Login'
import Singup from './components/Singup'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos?category=free' element={<FreeVideos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='*' element={<Navigate to={'/'} />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App