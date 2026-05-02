

const getAllReadListFromLocalDB = () => {
  const AllReadList = localStorage.getItem('readList');  //returns string
  
  if(AllReadList){
    return JSON.parse(AllReadList); //converts it into array
  }

}


const addReadListToLocalDB = (book) => {

   const allBooks = getAllReadListFromLocalDB();
   const isAlreadyExist = allBooks.find((bk) => bk.bookId == book.bookId);
   if(!isAlreadyExist){
    //ei data store e add korte chai
    allBooks.push(book);
    localStorage.setItem('readList', JSON.stringify(allBooks));
   }

}

export {getAllReadListFromLocalDB, addReadListToLocalDB}