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







var div = document.createElement('div');



function change(x){

  let item  
  x.addEventListener('mouseenter',(e) =>  
  
  fetch('https://gik2f8-labs.herokuapp.com/books/'+e.target.id)
  .then((response) => response.json())
  .then((data) => {item = data }), 
  
  console.log(item),

  document.body.appendChild(div),
  

  div.innerHTML = `<div class="testing fixed p-4 shadow-md	 border-black	 border-2	 rounded-xl	 bg-grey-700 bg-lime-200	 fixed"> 
  
  <p>
  
  
  Den här rutan får jag upp när jag hovrar, men jag kan inte få tag på värdena. <br>
  Author: XXXXXXX <br>
  Title: aaaa <br>
  Pages: Amount pages  <br>
  Release date: XXXX  <br>
  Cover Image: XXXX
  
  
  </p>
  </div>`

  );

  
  
}


function changeBack(x) {

  x.addEventListener('mouseleave',() =>  
  document.body.appendChild(div),
  div.innerHTML = `<div hidden "></diav>`

  
  );
 
}






