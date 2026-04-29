import { createBrowserRouter } from 'react-router'
import Mainlayout from './layout/mainlayout/Mainlayout';
import Homepage from './pages/homepage/Homepage';
import Books from './pages/books/Books';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index:true,
        element:<Homepage></Homepage>,
      },
      {
        path:'./books',
        element: <Books></Books>
      }

    ]
  },
  {
    path:'/books',
    element: 'books',
  }
])




