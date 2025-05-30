import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './components/admin/AdminLogin'
import {Route,Routes,Link} from 'react-router-dom'
import ShowCategories from './components/ShowCategories'
import AdminHome from './components/admin/AdminHome'
// import Adminhome from './components/admin/Adminhome'
import AddEvent from './components/admin/AddEvent'
import ShowEvents from './components/ShowEvents'
import EventDetails from './components/EventDeails'
import Home from './components/user/Home'
import Userlogin from "./components/user/Userlogin"
import UserRegistration from "./components/user/UserRegistration"
import Login from "./components/user/Login"
import Logout from "./components/user/Logout"
import Userrofile from "./components/user/Userprofile"
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>

      {/* <Link to="/adminlogin">Admin Login</Link> */}
      
      <Link to="/adminlogin">Admin Login</Link>
      <Link to="/"> Events</Link>
      {/* <Link to="/showevents">Show Events</Link> */}
      <Routes >
        <Route path="/" element={<ShowCategories></ShowCategories>}></Route>
        <Route  path="/Addevent" element={<AddEvent></AddEvent>}></Route>
        <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/showevents" element={<ShowEvents></ShowEvents>}  ></Route>
        <Route path="/showevents/:eventname" element={<ShowEvents></ShowEvents>}  ></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
        <Route path='/EventDetails/:eid' element={<EventDetails></EventDetails>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/userlogin' element={<Userlogin></Userlogin>}></Route>

        <Route path='/userregistration' element={<UserRegistration></UserRegistration>}></Route>

        <Route path='' element={<Login></Login>}></Route>

        {/* <Route path='' element={}></Route>

        <Route path='' element={}></Route> */}

        
      </Routes> 
    </div>
  
  </>
  )
}

export default App
