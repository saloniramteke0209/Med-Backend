import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Comp/Auth.jsx'
import PrivateRoute from './Comp/ProtectedRoute.jsx'
import Admin from './Comp/Admin.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/admin' element={
          <PrivateRoute role="admin">
            <Admin />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;













