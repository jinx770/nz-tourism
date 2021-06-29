// Equivalent of a function iife, just using a right arrow function.
(() => {

// HTML Declarations.
    let mainNav = document.querySelector("#js-menu");
    let navBarToggle = document.querySelector("#js-navbar-toggle");

    let accommodationData = localStorage.getItem("selectedAccommodation");
    let selectedAcc = JSON.parse(accommodationData);

    let bookingData = localStorage.getItem("getData");
    let getData = JSON.parse(bookingData);

    let box = document.querySelector(".image-container");
    box.style.backgroundImage = `linear-gradient(to bottom, transparent 0%, black 100%), url("${selectedAcc.getImage}")`;
    box.style.backgroundSize = "100%";

    let i = 0;
    let mealBox = document.querySelectorAll(".meal");
    let mealObject = selectedAcc.getMealPackage;


    document.querySelector(".container").innerHTML = `

        <h4><b class="address">${selectedAcc.getAddress}</b></h4>
        <input class="button transition" type="submit" id="bookNow" value="Book Now">


        <h5 style="padding-top:20px;"> <b>Booking Details</b> </h5>
        <ul>

            ${getData.getDateDifference === 1 ?
                `<li>Pricing<ul> $${selectedAcc.getCost} for a single night. </ul></li>` :
                `<li>Pricing<ul> $${selectedAcc.getCost * getData.getDateDifference} for ${getData.getDateDifference} nights. </ul></li>`
            }

            ${getData.getPeople === 1 ?
                `<li>People<ul> Booking for a single person. </ul></li>` :
                `<li>People<ul> Booking for ${getData.getPeopleValue} people. </ul></li>`
            }

            ${selectedAcc.getType === "House" ?
                `<li>Entire house<ul>You’ll have the entire space to yourself.</ul></li>` :
                `<li>Parted home<ul> Although it is a parted space, you'll still have all everything you need.</ul></li>`
            }

        </ul>

    `;

    for (let package in mealObject) {
  		if (mealObject.hasOwnProperty(package)) {
        mealBox[i].textContent = mealObject[package].name;
        i++;
  		}
    }

    document.querySelector(".meal-container").addEventListener('click', () => {
        for (let i = 0; i < mealBox.length; i++) {
            if ($(mealBox[i]).hasClass("selected")) {
                $(mealBox[i]).removeClass("selected");
                $(mealBox[i]).addClass("meal");
            }
        }
    });

    for (let i = 0; i < mealBox.length; i++) {
        mealBox[i].addEventListener('click', () => {
            setTimeout(function () {
                $(mealBox[i]).addClass("selected");
                $(mealBox[i]).removeClass("meal");
            }, 100);
        });
    }

    document.querySelector("#bookNow").onclick = function() {
        let wnd = window.open("successful.html");
        setTimeout(function() {
              wnd.close();
              setTimeout(function() {
                  window.location = 'edit.html';
              }, 500);
        }, 1000);
    };



    // Navbar activator
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

})();
