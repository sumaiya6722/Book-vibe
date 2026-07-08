// import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({book}) => {
  return (
    <div>
      <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 w-96 mb-10 border border-gray-300 rounded-2xl">
      
        <figure>
          <img className="h-100 w-10/12 rounded-2xl mt-7" src={book.image} alt="Shoes" />
        </figure>

        <div className="card-body">

          <div className="flex gap-3">
            {book.tags.map((tag, ind) => <div key={ind} className="badge badge-soft badge-success font-semibold">{tag}</div>)}           
          </div>

          <h2 className="font text-3xl card-title">{book.bookName} </h2>

          <p className="text-lg">By : {book.author}</p> 

          <div className="card-action flex justify-between border-t border-dashed border-gray-300 mt-4 pt-4">
            <div className="text-lg">{book.category}</div>
            <div className="flex items-center gap-2 text-lg">{book.rating}<FaRegStar /></div>    
          </div>
        </div>
      
      </Link>
    </div>
  );
};

export default BookCard;