import './App.css'
import Announcement from './components/announcement/Announcement';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AllProducts from './pages/allProducts/AllProducts';
import SingleProduct from './pages/single product/SingleProduct';
import Cart from './pages/cart/Cart';

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

  const AuthLayout  = () => {
    return(
      <>
        <Outlet/>
      </>
    )
  }

  const AllproductsLayout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const CartLayout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
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
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {path:"register", element: <Register/>},
        {path: "login", element: <Login/>}
      ]
    },
    {
      path: "products",
      element: <AllproductsLayout/>,
      children: [
        {path:"", element: <AllProducts/>},
        {path:":id", element: <SingleProduct/>}
      ]
    },

    {
      path: "cart",
      element: <CartLayout/>,
      children: [
        {path: "", element: <Cart/>}
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App