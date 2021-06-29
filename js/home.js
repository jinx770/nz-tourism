// Equivalent of a function iife, just using a right arrow function.
(() => {

    let key = "JWM7yJTN0jFOCm3xakE9lvW0Uw-83LyEqYrcEta7wAY"

// HTML Declarations.
    let mainNav = document.querySelector("#js-menu");
    let navBarToggle = document.querySelector("#js-navbar-toggle");
    let allBoxes = document.querySelectorAll(".item");
    let bookButton = document.querySelector("#go");

    let box = document.querySelector(".image-container");
    box.style.backgroundImage = `linear-gradient(to bottom, transparent 0%, black 100%), url("https://www.tourismnewzealand.com/media/4359/karitane-m%C4%81ori-tours-have-you-ever-camilla-rutherford-3.jpg?anchor=center&mode=crop&width=1100&heightratio=0.39545454545454545&rnd=132666792490000000")`;
    box.style.backgroundSize = "100%";

// Unsplash search API, used it to get a random image with house as a query.
    async function makeImageRequest(html) {
        let response = await fetch(`https://api.unsplash.com/search/photos/?query=tourism&page=${ Math.round(Math.random()*1000) }&client_id=${key}`);
        let data = await response.json();
        imageResponse = data.results[0].urls.raw;

        html.style.backgroundImage = `url("${imageResponse}")`;
        html.style.backgroundSize = "200%";
    }

    for (let i = 0; i < allBoxes.length; i++) {
        makeImageRequest(allBoxes[i]);
    }

    bookButton.addEventListener('click', () => {
      window.location = "create.html";
    });


// Navbar activator
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });


  })();
