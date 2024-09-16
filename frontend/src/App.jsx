import Navbar from './components/Navbar/Navbar'
import './layout.scss'
import HomePage from './routes/HomePage/HomePage'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'
import ListPage from './routes/ListPage/ListPage'
const App= ()=> {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
         <HomePage/>
      ),
    },
    {
      path: '/list',
      element: (
        <ListPage/>
      ),
    },
  ])
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <RouterProvider router={router}/>
      </div>
    </div>

   
  );
}

export default App