// Dummy data for authors
var authorsData = [
  {
      id: 'author1',
      name: 'Author Name 1',
      photo: 'author1.jpg',
      bio: 'This is Author 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
      id: 'author2',
      name: 'Author Name 2',
      photo: 'author2.jpg',
      bio: 'This is Author 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'author3',
    name: 'Author Name 3',
    photo: 'author3.jpg',
    bio: 'This is Author 3. Dummy.'
}
  // Add more authors here if needed
];

function showAuthorDetails(authorId) {
  var author = authorsData.find(author => author.id === authorId);
  console.log(author);
  const mainSection = document.getElementsByClassName('main-section');
  window.location.href = "authors_info.html";
}

function generateAuthorRows() {
  var authorList = document.getElementById('author-list');
  console.log(authorList);

  authorsData.forEach(function (author) {
      var newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td><img src="${author.photo}" alt="${author.name}"></td>
          <td>${author.name}</td>
          <td class="actions">
              <button onclick="showAuthorDetails('${author.id}')" class="action-button details table-heading">Details</button>
              <button class="action-button favorite">Add to Favorite</button>
              <button class="action-button edit">Edit</button>
              <button class="action-button delete">Delete</button>
          </td>
      `;
      authorList.appendChild(newRow);
  });
  console.log(authorList);
}

// Call the function to generate author rows when the page loads
generateAuthorRows();