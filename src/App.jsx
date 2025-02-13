import './App.css'
import Home from './pages/home/Home'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {

  const Layout = () => {
    return(
      <>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      // element:<Layout/>,
      children: [
        {path: "/", element: <Home/>}
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App