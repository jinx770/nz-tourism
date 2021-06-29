// Equivalent of a function iife, just using a right arrow function.
(() => {

// Key for unsplash api
  let key = "hs9FWRGtlarsUyiIWYJOSghxhZunpWhAQGx0pKHOo4Q"

// Data object
    let accommodationData = {
        option1: {
            name: "Hotel",
            minPeople: 1,
            maxPeople: 2,
            cost: 157,
            minDay: 1,
            maxDay: 5,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 21
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 12
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 10
                }
            }
        },
        option2: {
            name: "Hostel",
            minPeople: 1,
            maxPeople: 1,
            cost: 30,
            minDay: 1,
            maxDay: 10,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 18
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 10
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 8
                }
            }
        },
        option3: {
            name: "Motel",
            minPeople: 2,
            maxPeople: 4,
            cost: 90,
            minDay: 3,
            maxDay: 10,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 20
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 10
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 8
                }
            }
        },
        option4: {
            name: "House",
            minPeople: 1,
            maxPeople: 4,
            cost: 240,
            minDay: 2,
            maxDay: 15,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 21
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 13
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 10
                }
            }
        },
        option5: {
            name: "Hotel",
            minPeople: 2,
            maxPeople: 8,
            cost: 110,
            minDay: 1,
            maxDay: 15,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 21
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 13
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 10
                }
            }
        },
        option6: {
            name: "House",
            minPeople: 1,
            maxPeople: 11,
            cost: 790,
            minDay: 2,
            maxDay: 15,
            mealPackage: {
                firstMeal: {
                    name: "Mixed",
                    cost: 21
                },
                secondMeal: {
                    name: "Vegan",
                    cost: 13
                },
                thirdMeal: {
                    name: "Keto",
                    cost: 10
                }
            }
        }
    };

    // Function for generating a random address.
    function getRandomAddress() {
        return display.map(getRandomElement).join("");
    }
    // Getting a random item in each array for the address.
    function getRandomElement(array) {
        if (array instanceof Array) return array[Math.floor(Math.random() * array.length)];
        else return array;
    }

    // Unsplash search API, used it to get a random image with house as a query.
    async function makeImageRequest(html) {
        let response = await fetch(`https://api.unsplash.com/search/photos/?query=house&page=${ Math.round(Math.random()*1000) }&client_id=${key}`);
        let data = await response.json();
        houseImage = data.results[0].urls.raw;

        html.style.backgroundImage = `linear-gradient(to bottom, transparent 0%, black 100%), url("${houseImage}")`;
        html.style.backgroundSize = "100% 250px";
    }

    // Document declarations.
    let mainNav = document.querySelector('#js-menu');
    let navBarToggle = document.querySelector('#js-navbar-toggle');

    // Getting data from localStorage I stored on previous page.
    let json = localStorage.getItem("getData");
    let userData = JSON.parse(json);
    console.log(userData);


    // Running an object loop through accommodation object.
    for (let data in accommodationData) {
      if (accommodationData.hasOwnProperty(data)) {
        let key = accommodationData[data];
        let comparingPeople = (userData.getPeopleValue >= key.minPeople && userData.getPeopleValue <= key.maxPeople);
        let comparingNights = (userData.getDateDifference >= key.minDay && userData.getDateDifference <= key.maxDay);

        // Checks to see if the relevant requirements to display a single result have been met, shows results after comparing all objects with entered data.
        if (comparingPeople && comparingNights) {

            // Generate random address purely for aesthetics.
            window.streetNumber = Math.round(Math.random() * 100);
            window.streetName = ["Matuku Place", "Cuba Street", "Baldwin Street", "King Street", "Courtenay Place", "Hala Crescent"];
            window.display = [streetNumber, " ", streetName, ", ", userData.getRegionValue];

            // If not selectedAccommodation, create an empty global object.
            if (!window.selectedAccommodation) {
                window.selectedAccommodation = [];
            }

            // Append the data object for each of the results displayed after the check,
            // Allows me to get the information for which box the user clicks on later on.
            window.selectedAccommodation.push({
                getAddress: getRandomAddress(),
                getType: key.name,
                getCost: key.cost,
                getMealPackage: key.mealPackage
            });

            // Creating dynamic html for each result.
            document.querySelector("#results").innerHTML += `

                <div class="one-third column box click-event">
                    <div class="gradient-box">
                        <h5 class="value-heading header" style="margin-top: 80px; margin-bottom: 0px;"><b>${getRandomAddress()}</b></h5>
                        <p class="value-description content" style="margin-bottom: 10px;"><b>${key.name}</b> | \$${key.cost} per/night </p>
                    </div>
                </div>

            `
          ;
        }
      }
    }


    // Adds images to every box field
    let allBoxes = document.querySelectorAll(".box");
    console.log(allBoxes);

    // Getting each box (result) displayed.
    for (let i = 0; i < allBoxes.length; i++) {
        makeImageRequest(allBoxes[i]);

        // Click event for logging which box the user clicks on
        allBoxes[i].addEventListener('click', () => {

            let img = allBoxes[i].style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
            window.selectedAccommodation[i].getImage = img;

            // Sends the selectedAccommodation object that I created earlier on parallel to the box the user clicks on
            string = JSON.stringify(window.selectedAccommodation[i]);
            localStorage.setItem("selectedAccommodation", string);
            window.location = 'accommodation.html';
        });
    }

    // Navbar activator
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

})();
