import { createBrowserRouter } from 'react-router'
import MainLayout from "../layout/mainlayout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from '../pages/errorpage/Errorpage'
import Bookdetails from '../pages/bookdetails/Bookdetails';



export const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout></MainLayout>,  //Navbar etar moddhe ase
    
    children: [
      {
        index:true,
        element:<Homepage></Homepage>,    //banner, Allbooks er moddhe ase
      },
      {
        path:'/books',
        element: <Books></Books>
      },
      {
        path:'/bookdetails/:id',
        Component:Bookdetails,
        loader:() => fetch('/booksData.json'),
      }

    ],
    errorElement: <Errorpage></Errorpage>
  }
])




