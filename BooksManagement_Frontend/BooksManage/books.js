// Dummy data for books
var booksData = [
    {
        id: 'book1',
        name: 'The Accursed God',
        photo: 'https://m.media-amazon.com/images/I/81c-qj2VZSL._AC_UY327_FMwebp_QL65_.jpg',
        desc: 'An Amazon #1 best-seller, book#1 of The Lost Epic series, explores the unexplored facets of Mahabharata'
    },
    {
        id: 'book2',
        name: 'Manas',
        photo: 'https://m.media-amazon.com/images/P/B0C283BF6H.01._SCLZZZZZZZ_SX500_.jpg',
        desc: 'An Amazon #1 best-seller, poetic tale of Mahabharata, best on authentic references'
    }
    // Add more books here if needed
];

function getPage(filename){
    console.log(filename);
    window.location.href = filename;
}
  
  function showBookDetails(bookId) {
    // Find the author object based on the authorId
    
    window.location.href = `books_info.html?id=${bookId}`;
};


function showAddBook(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.bookmodal').classList.add('showmodal')
}

function showEditBook(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.editbookmodal').classList.add('showmodal')
}

function closeAddBook(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.bookmodal').classList.remove('showmodal')
}

function closeEditBook(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.editbookmodal').classList.remove('showmodal')
}
  
function generateBookRows() {
    var bookList = document.getElementById('book-list');

    booksData.forEach(function (book) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><img src="${book.photo}" alt="${book.name}" height="200px"></td>
            <td>${book.name}</td>
            <td class="actions">
                <button onclick="showBookDetails('${book.id}')" class="action-button details table-heading">Details</button>
                <button class="action-button favorite">Add to Favorite</button>
                <button onclick="showEditBook()" class="action-button edit">Edit</button>
                <button class="action-button delete">Delete</button>
            </td>
        `;
        bookList.appendChild(newRow);
});
}
  
  // Call the function to generate author rows when the page loads
generateBookRows();