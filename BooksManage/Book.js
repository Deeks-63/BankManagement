// Dummy data for books
var booksData = [
    {
        id: 'book1',
        name: 'Book Name 1',
        photo: 'book1.jpg',
        bio: 'This is book 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 'book2',
        name: 'Book Name 2',
        photo: 'book2.jpg',
        bio: 'This is book 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    // Add more authors here if needed
  ];
  
  function showBookDetails(bookId) {
    var book = booksData.find(book => book.id === bookId);
    console.log(book);
    const mainSection = document.getElementsByClassName('main-section');
    window.location.href = "books_info.html";
  }
  
  function generateBookRows() {
    var bookList = document.getElementById('book-list');
    console.log(bookList);
  
    booksData.forEach(function (book) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><img src="${book.photo}" alt="${book.name}"></td>
            <td>${book.name}</td>
            <td class="actions">
                <button onclick="showBookDetails('${book.id}')" class="action-button details table-heading">Details</button>
                <button class="action-button favorite">Add to Favorite</button>
                <button class="action-button edit">Edit</button>
                <button class="action-button delete">Delete</button>
            </td>
        `;
        bookList.appendChild(newRow);
    });
    console.log(bookList);
  }
  
  // Call the function to generate author rows when the page loads
  generateBookRows();