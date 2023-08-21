// Dummy data for authors
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
      window.location.href = filename;
  }
  // Function to extract query parameter values
  function getQueryParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  function populateAuthorDetails() {
    const bookId = getQueryParameter('id');
    const booksDetailsDiv = document.getElementById('book-details');
  
    const bookData = booksData.find(book => book.id === bookId);
  
    booksDetailsDiv.innerHTML = `
        <h1 style="color: #006bd3;">${bookData.name}</h1>
        <img src="${bookData.photo}" width="300px"></img>
        <p>${bookData.desc}</p><br>
    `;
  };
  
  populateAuthorDetails();