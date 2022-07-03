const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-button");
const memeImage = document.getElementById('image');
const getMemeImage = document.getElementById('anchor');
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) =>{
    console.log(url);
    memeImage.src = url;
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By : ${author}`;
    getMemeImage.href = url;
}

const generateMeme = () =>{
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author);
    });
};
if(generateMemeBtn){
  generateMemeBtn.addEventListener("click", generateMeme);
}else{
    console.log("empty");
}

generateMeme();