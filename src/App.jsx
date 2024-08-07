import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PontistaHome from './pages/pontista/PontistaHome'
import Layout from './pages/Layout'
import SupervisorHome from './pages/supervisor/SupervisorHome'
import AdminHome from './pages/admin/AdminHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/pontista/home" element={
            <Layout role="pontista" >
              <PontistaHome />
            </Layout>
          } />

          <Route path="/admin/home" element={
            <Layout role="admin">
              <AdminHome />
            </Layout>
          } />

          <Route path="/supervisor/home" element={
            <Layout role="supervisor">
              <SupervisorHome />
            </Layout>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
