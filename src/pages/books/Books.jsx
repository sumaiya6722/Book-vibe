// import React from 'react';
import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";


const Books = () => {
  const {storedBooks, wishList} = useContext(BookContext);
  // console.log(storedBooks);
  return (
    <div>
      <h3>Read List : {storedBooks.length}</h3>
      <h3>Wish List : {wishList.length}</h3>
    </div>
  );
};

export default Books;