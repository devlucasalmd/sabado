import { Link as NavLink,Outlet } from "react-router-dom";
import "./Layout.css"
function Layout (){
  return(
    <div id="corpoLayout">
      <nav>
        <NavLink 
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/userpage"
        >
          User
        </NavLink>
        <NavLink 
          className={({ isActive }) =>isActive ? "active link" : "link" }
          to="/loginpage"
        >
          Login
        </NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout;