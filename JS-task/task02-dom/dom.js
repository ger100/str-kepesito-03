const bookCollection = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function getMyBookList(bookCollection) {

    const ul = document.querySelector('ul#container');
    let liElementList = document.querySelectorAll('ul#container li');
    for(let liElem of liElementList){liElem.remove()};
    
    for(let book of bookCollection){
        const li = document.createElement('li');
        ul.appendChild(li);
        const textnode = document.createTextNode((book.isRead ? ' ' : '') + book.title);
        li.appendChild(textnode);
        if(book.isRead){
            const strong = document.createElement('strong');
            strong.textContent = 'Ezt a könyvet már olvastad:';
            li.insertBefore(strong,textnode);
        }
    }      
    changeConfigStyle();
}

function changeConfigStyle() {

    const s =  document.getElementsByTagName("section");
    s.style.border='3px solid red';

    const d =  document.getElementsByTagName("div");
    d.style.display='flex';
    d.style.justifyContent='center';

    const p =  document.getElementsByTagName("p");
    p.style.textAlign='center';
    p.style.color='red';

}


export { getMyBookList, changeConfigStyle };