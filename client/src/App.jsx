import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Donut from './pages/Donut/Donut';
import Drinks from './pages/Drinks/Drinks';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import './App.scss'

const Layout = () => {
  return (<div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/donut",
      element: <Donut />
    },
    {
      path: "/drinks",
      element: <Drinks />
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/contact",
      element: <Contact />
    },

    ]
  }
])

function App() {
  return <>
    <RouterProvider router={router}>

    </RouterProvider>

  </>;
}

export default App;
