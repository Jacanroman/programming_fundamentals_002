// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  for (let i=0; i < catalogue.length; i++){
   
    //console.log(catalogue[i]);
   if(catalogue[i]===book){
     return true;
    }
  
  }
  return false;
}

function countBooksByFirstLetter(letter) {
  let num_books = 0;
  for(let i=0; i< catalogue.length; i++){
    
    if(catalogue[i].charAt(0)===letter){
      num_books +=1;
    }
    
  }
  return num_books;
}

function countBooksByKeyword(keyword) {
  var num_book = 0;
  for(let i=0;i<catalogue.length;i++){
    
    if(catalogue[i].toLowerCase().includes(keyword.toLowerCase())){
      num_book++;
    }
  
  }
  
  return num_book;

}

function getBooksByAuthor(author) {
  
  let books = [];

  for(let i =0;i<catalogue.length;i++){
    const title = catalogue[i];
    if(title.toLowerCase().includes(author.toLowerCase())){
    books.push(title);
    }
  }
  return books;
  
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
