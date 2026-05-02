// import React from 'react';
import book from '../../assets/book.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] rounded-2xl container mx-auto my-8">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse w-full py-10">
          <img src={book}/>
          <div className="space-y-5">
            <h1 className="font text-7xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-active btn-success text-white">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;