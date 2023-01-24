let slider = [
    {
        id:1,
        title: "Winter",
        img: "https://wallpapercave.com/wp/wp8342606.jpg",
        info: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        id:2,
        title: "Spring",
        img: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701352750.jpg",
        info: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        id:3,
        title: "Autumn",
        img: "https://wallpapercave.com/wp/wp7395571.jpg",
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    },
    {
        id:4,
        title: "Summer",
        img: "https://rare-gallery.com/uploads/posts/583270-summer-mountains.jpg",
        info: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    }
];


// selected elements image
const title  = document.querySelector(".title");
const img    = document.querySelector(".img");
const info   = document.querySelector(".info");

// selected arrows and button
const prevBtn     = document.querySelector(".prev-btn");
const nextBtn     = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showImage();
});


function showImage() {
    let item = slider[currentItem];
    title.innerHTML = item.title;
    img.src = item.img;
    info.innerHTML = item.info;
}

prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = slider.length - 1;
    }
    showImage();
});

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > slider.length - 1) {
        currentItem = 0;
    }
    showImage();
});


randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * slider.length);
    showImage(currentItem);
});


let loop = setInterval(() => {
    currentItem = Math.floor(Math.random() * slider.length);
    showImage(currentItem);
}, 5000);

