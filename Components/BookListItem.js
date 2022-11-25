

// Koden nedan används för att generara sökresultatet till en li lista. 

const BookListItem = (book) => {
  let html = `<li 
                  id=${book.id}
                  onmouseover="change(this)"
                  onmouseout="changeBack(this)"
              class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer"
              >
              ${book.author} - ${book.title}    
              </li>`;
  return html;
  
};






/* 
let html = `<li 
id="test"
onmouseover="change(this)"
onmouseout="changeBack(this)"
class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer"
>
${book.author} - ${book.title}  
</li>`;
return html;



 */

/* 


var div = document.createElement('div');

  div.innerHTML = `<div class="bg-orange-700 fixed	"> <p>Testar</p></diav>`;
  document.body.appendChild(div);

  div.style.visibility='hidden';



testing.addEventListener('mouseenter',() => console.log('Mouse enter'));
testing.addEventListener('mouseleave',() => console.log('Mouse leave'));
 */