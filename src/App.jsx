import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ListarUsuarios from './pages/Lista'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
    
    <Header />
      <Routes>
        <Route path="/" element={<Cadastro /> } />
        <Route path="/Login" element={<Login /> } />
        <Route path="/Listar-usuarios" element={<ListarUsuarios /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
