
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
