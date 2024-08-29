const getTheTitles = function(books) {
    const mappedArr = books.map(getOneTitle);
    return mappedArr;
}


function getOneTitle(book){
   return book.title 
}

// Do not edit below this line
module.exports = getTheTitles;
