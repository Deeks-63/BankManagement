function showAddAuthor(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.authormodal').classList.add('showmodal')
}

function showAddBook(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.bookmodal').classList.add('showmodal')
}

function showEditAuthor(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.editauthormodal').classList.add('showmodal')
}

function showEditBook(){
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.editbookmodal').classList.add('showmodal')
}

function closeAddAuthor(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.authormodal').classList.remove('showmodal')
}

function closeAddBook(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.bookmodal').classList.remove('showmodal')
}

function closeEditAuthor(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.editauthormodal').classList.remove('showmodal')
}

function closeEditBook(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.editbookmodal').classList.remove('showmodal')
}