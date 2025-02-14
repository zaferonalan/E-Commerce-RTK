import './App.css'
import Announcement from './components/announcement/Announcement';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from './pages/register/Register';

const App = () => {

  const MainLayout = () => {
    return(
      <>
        <Announcement/>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const RegisterLayout = () => {
    return(
      <>
        <Outlet/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      children: [
        {path: "/", element: <Home/>}
      ],
    },
    {
      path: "/register",
      element: <RegisterLayout/>,
      children: [
        {path:"/register", element: <Register/>}
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App