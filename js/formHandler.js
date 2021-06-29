(() => {

// HTML Declarations.
    let mainNav = document.querySelector('#js-menu');
    let navBarToggle = document.querySelector('#js-navbar-toggle');
    let searchButton = document.querySelector("#searchButton");

// Function to update all dom values when called.
    function getInputs() {
        window.getNameValue = document.querySelector("#getName").value;
        window.getContactValue = document.querySelector("#getContact").value;
        window.getRegionValue = document.querySelector("#getRegion").value;
        window.getPeopleValue = document.querySelector("#getPeople").value;
        window.getStartDateValue = document.querySelector("#getStart").value;
        window.getEndDateValue = document.querySelector("#getEnd").value;
        window.getCopyValue = document.querySelector("#getCopy").value;
    }

// Calculate the difference between the two dates selected.
    function getNumberOfDays(start, end) {
        let date1 = new Date(start);
        let date2 = new Date(end);
        let oneDay = 1000 * 60 * 60 * 24;
        let diffInTime = date2.getTime() - date1.getTime();
        let diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

// Prevent the form from submitting and refreshing if required fields aren't met.
    function handleForm(event) {
        event.preventDefault();
    }
    form.addEventListener('submit', handleForm);

// Checks if the form is validated using checkValidity().
    function validateForm() {
        let formValid = document.forms.form.checkValidity();
        return formValid;
    }

// Sends data when the form has been validated to the next page using localStorage.
    function sendData(userData) {
        let json = JSON.stringify(userData);
        localStorage.setItem("getData", json);
        window.location = 'results.html';
    }

// Set the date minimum to the current day for form validation
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if (dd<10) {
        dd='0'+dd;
    } if(mm<10){
        mm='0'+mm;
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.querySelector("#getStart").setAttribute("min", today);
    document.querySelector("#getEnd").setAttribute("min", today);

// Event listener for clicking button.
    searchButton.addEventListener('click', () => {
        getInputs();
        console.log(validateForm());

        // Checks to see if the form is valid, if it is, proceeds.
        if (validateForm() === true) {

            // Creates an object with the valid inputs.
            let userData = {
                getNameValue,
                getContactValue,
                getRegionValue,
                getPeopleValue,
                getDateDifference: getNumberOfDays(getStartDateValue, getEndDateValue),
                getCopyValue,
            };

            // Calls the function that proceeds to the next page,
            // passing the updated userData table using localstorage.
            sendData(userData);
        }

    });

// Navbar handler for mobile.
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

})();
