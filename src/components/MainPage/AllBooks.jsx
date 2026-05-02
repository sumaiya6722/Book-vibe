// import React from 'react';
import { use } from "react";

import BookCard from "../ui/BookCard";

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="my-12 container mx-auto">

      <h2 className="font font-bold text-6xl text-center mb-8 mt-20">Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {books.map((book,ind) => 
          <BookCard key={ind} book={book}></BookCard>
           )}
      </div>

    </div>
  );
};

export default AllBooks;