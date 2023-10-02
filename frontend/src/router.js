import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import Layout from './pages/Layout'
import UserPage from "./pages/UserPage"
import { HomePage } from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"loginpage",
        element: <LoginPage/>
      },
      {
        path: "userpage",
        element: <UserPage/>
      },
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
])