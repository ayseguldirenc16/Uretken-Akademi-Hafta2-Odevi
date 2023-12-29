document.addEventListener("DOMContentLoaded",function(){
    const gallery = document.getElementById("gallery");
    const imageKeywords= [
        "book","study","school","bus","car","coding","university","technology",
        "game","computer","science","data science","desing","web design","cook",
        "food","zoo","animals","people","photo","love","smile","music","art"
    ];

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1))+min;

    }

    function getRandomImageUrl(imageKeyword, width=400, height=400){
        return `https://source.unsplash.com/random/` + width + "x" + height + "/?" + imageKeyword;
    }

    function replaceImage(img){
        const width = getRandomNumber(400, 500);
        const height = getRandomNumber(400, 500);
        const randomIndex = Math.floor(Math.random() * imageKeywords.length);
        const randomImageKeyword = imageKeywords.splice(randomIndex, 1)[0];
        img.src= getRandomImageUrl(randomImageKeyword, 500, 500);

    }

    function appendRandomImage(){
        const img = document.createElement("img");
        replaceImage(img);
        img.addEventListener("mouseover",function(){
            replaceImage(img);
        });
        gallery.appendChild(img);
    }

    for(let i=0; i<15; i++){
        appendRandomImage();
    }

})