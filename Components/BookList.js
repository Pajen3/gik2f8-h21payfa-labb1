

// Här lagrar vi böckerna som man söker fram. 
// Let html skapar html koden, en ul. 
// For loopen genererar själva boken som finns inuti ul taggen. Kommer från BookListItem


/*

Javascript koden nedan generar egentligen detta om man ska konvertera till html. 


<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">

              <li    class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                   
                ${book.author} - ${book.title}                <---- hämtar från BookListItem

              </li>`
</ul>

*/ 

const BookList = (bookList) => {
  let html = `<ul 
              class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto"
              >`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }

  html += `</ul>`;

  return html;
};




