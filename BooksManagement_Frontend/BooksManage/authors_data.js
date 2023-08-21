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
  
  // Function to extract query parameter values
  function getQueryParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  function getPage(filename){
    window.location.href = filename;
}
  
  function populateAuthorDetails() {
    const authorId = getQueryParameter('id');
    const authorDetailsDiv = document.getElementById('author-details');
  
    console.log(authorDetailsDiv);
    const authorData = authorsData.find(author => author.id === authorId);
    console.log(authorData);
  
    authorDetailsDiv.innerHTML = `
        <h1 style="color: #006bd3;">${authorData.name}</h1>
        <img src="${authorData.photo}" width="300px"></img>
        <p>${authorData.bio}</p><br>
    `;
  };
  
  populateAuthorDetails();