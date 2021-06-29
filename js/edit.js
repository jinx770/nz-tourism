(() => {

    // Document declarations.
    let mainNav = document.querySelector('#js-menu');
    let navBarToggle = document.querySelector('#js-navbar-toggle');

    let accommodationData = localStorage.getItem("selectedAccommodation");
    let selectedAcc = JSON.parse(accommodationData);

    // Creating dynamic html for each result.
    document.querySelector("#results").innerHTML += `
    <div id="deleteContainer">
        <div class="one-third column box click-event">
            <div class="gradient-box">
                <h5 class="value-heading header" style="margin-top: 80px; margin-bottom: 0px;"><b>${selectedAcc.getAddress}</b></h5>
                <p class="value-description content" style="margin-bottom: 10px;"><b>${selectedAcc.getType}</b> | \$${selectedAcc.getCost} per/night </p>
            </div>
        </div>
        <p id="cancel">Cancel</p>
        <p id="edit">Edit</p>

    </div>
    `;

    let allBoxes = document.querySelectorAll(".box");

    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundImage = `linear-gradient(to bottom, transparent 0%, black 100%), url("${selectedAcc.getImage}")`;
        allBoxes[i].style.backgroundSize = "100% 250px";

        allBoxes[i].addEventListener('click', () => {
            window.location = 'accommodation.html';
        });
    }

// If user clicks cancel, delete the booking.
// Clear localstorage to prevent it from reappearing if refreshed or selected again.
    document.querySelector("#cancel").addEventListener('click', () => {
        document.querySelector("#deleteContainer").remove();
        window.localStorage.clear();
    });

// Let user retake form to fix inputs.
// Won't affect the booking page until user clicks "book" on another input
    document.querySelector("#edit").addEventListener('click', () => {
        window.location = 'create.html';
    });

// Navbar activator
    navBarToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

})();
