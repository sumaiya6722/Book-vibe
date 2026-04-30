import { createBrowserRouter } from 'react-router'
import MainLayout from "../layout/mainlayout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from '../pages/errorpage/Errorpage'



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element:<Homepage></Homepage>,
      },
      {
        path:'/books',
        element: <Books></Books>
      }

    ],
    errorElement: <Errorpage></Errorpage>
  }
])




