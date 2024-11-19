import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/Login'
import { AuthProvider } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Routes>  
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectedRoute/>} >
          <Route path='/' element={<HomePage/>} exact />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
