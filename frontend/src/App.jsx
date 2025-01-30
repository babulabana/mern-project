import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './components/admin/AdminLogin'
import {Route,Routes,Link} from 'react-router-dom'
import AdminHome from './components/admin/AdminHome'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
      {/* <Link to="/adminlogin">Admin Login</Link> */}
      <Routes>
        <Route path="/" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
      </Routes> 
    </div>
  
  </>
  )
}

export default App
