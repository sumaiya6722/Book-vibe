// import React from 'react';
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import { Link } from "react-router";


const Bookdetails = () => {

  const { id } = useParams();  //useParams() lets you read dynamic values from the URL...in this case it shows Id and it automatically returns string
  const books = useLoaderData(); //Snatch the data straight from the loader instead of the use() hook! and the books contain array of the all books data

  const expectedBook = books.find((book) => book.bookId == id);//  gives the bookdetails of the given id...basically gives you the aray of that specific book.


  const { handleMarkasRead, handleWishList } = useContext(BookContext);

  return (
    <div>
      <div className="grid grid-cols-2 card lg:card-side  bg-base-100 shadow-sm container mx-auto p-10 ">
        <figure className='h-200 w-full rounded-2xl'>
          <img src={expectedBook.image} />
        </figure>
        <div className="card-body space-y-4">
          <h2 className="card-title font font-semibold text-6xl">{expectedBook.bookName}</h2>
          <h2 className="text-2xl font-semibold opacity-70">{expectedBook.author}</h2>

          <div>
            <p className="text-2xl font-semibold opacity-70 border-t border-b border-gray-300 py-5">Fiction</p>
          </div>
          <div className="space-y-7 border-b border-gray-300 pb-5">
            <p className="text-lg"><span className="font-bold">Review :</span> <span className="opacity-70">Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare. Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</span></p>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg font-bold">Tags </span>
              {expectedBook.tags.map((tag, ind) => <div key={ind} className="badge badge-soft badge-success font-semibold">#{tag}</div>)}
            </div>
          </div>
          <div className="w-[75vh] space-y-2">
            <div className="flex justify-between"><span className="text-lg opacity-70">Number of Pages : </span><span className="font-semibold text-lg">{expectedBook.totalPages}</span></div >
            <div className="flex justify-between"><span className="text-lg opacity-70">Publisher : </span><span className="font-semibold text-lg">{expectedBook.publisher}</span></div>
            <div className="flex justify-between"><span className="text-lg opacity-70">Year of Publishing : </span><span className="font-semibold text-lg">{expectedBook.yearOfPublishing}</span></div>
            <div className="flex justify-between"><span className="text-lg opacity-70">Rating : </span><span className="font-semibold text-lg">{expectedBook.rating}</span></div>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-outline" onClick={() => handleMarkasRead(expectedBook)}>Mark As Read</button>
            <button className="btn btn-variant btn-info text-white" onClick={() => handleWishList(expectedBook)}>Add to Wishlist
            </button>
            <Link to={'/'}>
              <button className="btn btn-success text-white">Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;