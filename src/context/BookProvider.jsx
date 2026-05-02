// import React from 'react';
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


export const BookContext = createContext('');

const BookProvider = ({children}) => {

  const [storedBooks, setStoredBooks] =useState([]);
  const [wishList, setWishList] = useState([]);

  // useEffect(() => {
  //   const getReadList = getAllReadListFromLocalDB();
  //   setReadList(getReadList)
  // },[])




  const handleMarkasRead = (currentBook) => {  //we're getting the book object here


    //find() is used to check through all items and return the first one that matches a condition
    const isExistBook = storedBooks.find((book) => book.bookId == currentBook.bookId);

    if(isExistBook){
      toast.error('this book is already marked as read');
    }else{
      setStoredBooks([...storedBooks,currentBook]);
      toast.success(`${currentBook.bookName} is added`);
    }
    //step-1 : store book id
    //step-2 : where to store
    //step-3 : if the book is already exist then show toast or alert
    //step-4 : if not then add the book in the array or collection
  }
  const handleWishList= (currentBook) => {  //we're getting the book object here

    const isExistInStoredBooks = storedBooks.find((book) => book.bookId == currentBook.bookId);

    if(isExistInStoredBooks){
      toast.error(`${currentBook.bookName} is already in the Readlist`);
      return;
    }

    //find() is used to check through all items and return the first one that matches a condition
    const isExistBook = wishList.find((book) => book.bookId == currentBook.bookId);
    if(isExistBook){
      toast.error('this book is already marked as read');
    }else{
      setWishList([...wishList,currentBook]);
      toast.success(`${currentBook.bookName} is added`);
    }
    
  }

  const data = {storedBooks, setStoredBooks, handleMarkasRead, handleWishList, wishList, setWishList};
  


  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
)};

export default BookProvider;