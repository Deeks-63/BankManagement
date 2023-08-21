// Dummy data for authors
var authorsData = [
    {
        id: 'author1',
        name: 'Vivek Dutta Mishra',
        bookName:'The Accursed God',
        photo: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/2fuqj5h433n56ucdr3s5j1k2j9._SX450_.jpg',
        bio: 'Vivek possesses a multifaceted identity that transcends conventional boundaries. He has gained recognition as an esteemed author, with two bestselling books delving into the profound world of the Mahabharata. His debut masterpiece, "The Accursed God — The Lost Epic Book 1," received resounding acclaim, establishing his prowess as a wordsmith. Such was its popularity that even before its official release, his second book, "Manas (मानस)," a poetic narrative based on authentic reference of Mahabharata, attained best-seller status during its special invite preview.'
    },
    {
        id: 'author2',
        name: 'Vivekananda',
        photo: 'https://media.licdn.com/dms/image/C5622AQH_mCiCkvIgDw/feedshare-shrink_2048_1536/0/1671333516107?e=2147483647&v=beta&t=NSkSgZTM4Rs3nqNjXm0XjLJ9bFzVvldFtrscwlKZh8g',
        bio: 'Vivekananda, original name Narendranath Datta, Datta also spelled Dutt, (born January 12, 1863, Calcutta [now Kolkata]—died July 4, 1902, near Calcutta), Hindu spiritual leader and reformer in India who attempted to combine Indian spirituality with Western material progress, maintaining that the two supplemented and complemented one another. His Absolute was a person’s own higher self; to labour for the benefit of humanity was the noblest endeavour.'
    },
    {
        id: 'author3',
        name: 'Alisha Chhabra',
        photo: 'https://media.licdn.com/dms/image/D5603AQHDzHQdfmZmiQ/profile-displayphoto-shrink_200_200/0/1683650873526?e=1697673600&v=beta&t=xSXAwONmI16IKBAXTkWpTkvlctuz4vPqJ5TQVhvDAiQ',
        bio: 'Vivekananda, original name Narendranath Datta, Datta also spelled Dutt, (born January 12, 1863, Calcutta [now Kolkata]—died July 4, 1902, near Calcutta), Hindu spiritual leader and reformer in India who attempted to combine Indian spirituality with Western material progress, maintaining that the two supplemented and complemented one another. His Absolute was a person’s own higher self; to labour for the benefit of humanity was the noblest endeavour.'
    },
    {
        id: 'author4',
        name: 'Jay Sheety',
        photo: 'https://www.wsb.com/wp-content/uploads/2022/01/Jay-Shetty-3.jpeg',
        bio: 'Jay sheety, Who is now an award winning host, storyteller and viral content creator. Since launching his video channel in 2016, Jay’s viral wisdom videos have garnered over 4 billion views and gained over 20 million followers globally. This makes him one of the most viewed people on the internet internationally.'
    }
    // Add more authors here if needed
];

function getPage(filename){
    console.log(filename);
    window.location.href = filename;
}

function showAuthorDetails(authorId) {
    // Find the author object based on the authorId
    window.location.href = `authors_info.html?id=${authorId}`;
};

function showAddAuthor(){
  document.querySelector('.overlay').classList.add('showoverlay')
  document.querySelector('.authormodal').classList.add('showmodal')
}

function showEditAuthor(){
  document.querySelector('.overlay').classList.add('showoverlay')
  document.querySelector('.editauthormodal').classList.add('showmodal')
}

function closeAddAuthor(){
  document.querySelector('.overlay').classList.remove('showoverlay')
  document.querySelector('.authormodal').classList.remove('showmodal')
}

function closeEditAuthor(){
  document.querySelector('.overlay').classList.remove('showoverlay')
  document.querySelector('.editauthormodal').classList.remove('showmodal')
}

function generateAuthorRows() {
    var authorList = document.getElementById('author-list');

    authorsData.forEach(function (author) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${author.name}</td>
            <td class="actions">
                <button onclick="showAuthorDetails('${author.id}')" class="action-button details table-heading">Details</button>
                <button class="action-button favorite">Add to Favorite</button>
                <button onclick="showEditAuthor()" class="action-button edit">Edit</button>
                <button class="action-button delete">Delete</button>
            </td>
        `;
        authorList.appendChild(newRow);
    });
}
// Call the function to generate author rows when the page loads
generateAuthorRows();
