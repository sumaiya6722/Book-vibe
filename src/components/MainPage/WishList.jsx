// import React from 'react';
import { useContext } from "react";
import BookCard from "../ui/BookCard";
import { BookContext } from "../../context/BookContext";





const WishList = ({ sortingType }) => {

  const { wishList } = useContext(BookContext);

  const storedWishList = [...wishList];

  if (sortingType == 'pages') {
    storedWishList.sort((a, b) => a.totalPages - b.totalPages);
  } else {
    storedWishList.sort((a, b) => b.rating - a.rating);
  }



  if (storedWishList.length === 0) {
    return <div className="bg-gray-100 rounded-2xl h-[50vh] flex justify-center items-center">
      <h2 className="font font-semibold text-6xl">No Books in the Read List</h2>
    </div>
  }



  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {storedWishList.map((book, ind) => <BookCard book={book} key={ind}></BookCard>)}
    </div>
  );
};

export default WishList;