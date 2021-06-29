(() => {

  // HTML Declarations.
    let mainNav = document.querySelector('#js-menu');
    let navBarToggle = document.querySelector('#js-navbar-toggle');
    let searchButton = document.querySelector("#searchButton");

    let box = document.querySelector(".image-container");
    box.style.backgroundImage = `linear-gradient(to bottom, transparent 0%, black 100%), url("https://www.tourismnewzealand.com/media/4359/karitane-m%C4%81ori-tours-have-you-ever-camilla-rutherford-3.jpg?anchor=center&mode=crop&width=1100&heightratio=0.39545454545454545&rnd=132666792490000000")`
    box.style.backgroundSize = "100%"








    // Navbar activator
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });


  })();
