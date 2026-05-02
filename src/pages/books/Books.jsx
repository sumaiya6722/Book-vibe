// import React from 'react';
import { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../../components/MainPage/ReadList";
import WishList from "../../components/MainPage/WishList";


const Books = () => {
  const {storedBooks, wishList} = useContext(BookContext);

  const [sortingType, setSortingType] = useState(''); //This line stores the selected option:

  return (
    <div className="container mx-auto">
      <h3>Read List : {storedBooks.length}</h3>
      <h3>Wish List : {wishList.length}</h3>

      <div className="text-center">
      <div className="dropdown dropdown-start ">
        <div tabIndex={0} role="button" className="btn m-1">Sort By {sortingType || ""}</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
          <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
        </ul>
      </div>
      </div>


      <Tabs>
        <TabList>
          <Tab >ReadList</Tab>
          <Tab >WishList</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType}></ReadList>
        </TabPanel>
        <TabPanel>
          <WishList sortingType={sortingType}></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;