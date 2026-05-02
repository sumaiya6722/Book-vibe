// import React from 'react';
import { useContext } from "react";
import BookCard from "../ui/BookCard";
import { BookContext } from "../../context/BookProvider";
import { useState } from "react";
import { useEffect } from "react";

const WishList = ({sortingType}) => {

   const {wishList} = useContext(BookContext);

   const [filteredWishlist, setFilteredWishlist] = useState([]);
  
  
    useEffect(() => {
      if(sortingType){
        if(sortingType === 'pages'){
          const sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
          setFilteredWishlist(sortedData);
        }else if(sortingType === 'rating'){
          const sortedData = [...wishList].sort((a,b) => a.rating - b.rating);
          setFilteredWishlist(sortedData);
        }
      }
    }, [sortingType,wishList])
  
    if(filteredWishlist.length === 0){
      return <div className="bg-gray-100 rounded-2xl h-[50vh] flex justify-center items-center">
        <h2 className="font font-semibold text-6xl">No Books in the Read List</h2>
      </div>
     }
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {filteredWishlist.map((book, ind) => <BookCard book={book} key={ind}></BookCard>)}
      </div>
    );
};

export default WishList;