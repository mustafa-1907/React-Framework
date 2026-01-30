
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Components/Layout/Layout'; 

export default function App() {

  const routes = createBrowserRouter([
    {
      path: "", 
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> }, 
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <div className='vh-100 d-flex justify-content-center align-items-center'><h1>404 Not Found</h1></div> }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}