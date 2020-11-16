/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
  
};
// add a new book to the books object +
books.book6="The Milenium";  // using dot notation +
books["book7"]='Goethe';// using square bracket notation +

delete books.book4;// remove an book from the books object

console.log(books.book3)// log the third book

console.log(books)

for (ausgabe in books) {
  console.log(ausgabe + " = " + books[ausgabe]);// iterate over the books and log every single one
}

/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];


movies.push("Ich werde die Welt nie Wiedersehen");// add a new movie to the array

console.log(movies);


delete movies[2];// remove the movie „Call me by your name“ from the books object
movies.splice(2,1);
console.log(movies);

console.log(movies[0])// log the first movie


for (x in movies){
  console.log(movies[x]);// iterate over the movies and log every single one 
}