// import React from 'react';
import { useContext, useEffect, useState } from "react";
import BookCard from "../ui/BookCard";
import { BookContext } from "../../context/BookProvider";

const ReadList = ({sortingType}) => {

  const {storedBooks} = useContext(BookContext);

  const [filteredReadlist, setFilteredReadlist] = useState([]);


  useEffect(() => {
    if(sortingType){
      if(sortingType == 'pages'){
        const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages);
        setFilteredReadlist(sortedData);  //“The list of books AFTER sorting/filtering”
      }else if(sortingType == 'rating'){
        const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating);
        setFilteredReadlist(sortedData);
      }
    }
  }, [sortingType,storedBooks])

  if(filteredReadlist.length === 0){
    return <div className="bg-gray-100 rounded-2xl h-[50vh] flex justify-center items-center">
      <h2 className="font font-semibold text-6xl">No Books in the Read List</h2>
    </div>
   }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {filteredReadlist.map((book, ind) => <BookCard book={book} key={ind}></BookCard>)}
    </div>
  );
};

export default ReadList;