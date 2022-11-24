//Detta anvönder man för att få hjälp när man skriver koder. 
'use strict';
let bookList = [];




window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});




//Detta sätter dit funktionen för sökrutan. Tar in värdet. 
searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
    })
  )
);





//Den här funktionen ritar ut den listan som har skickats till den.

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}




