// Imports the president data from the data file
import { presidents } from "../data/presidents.mjs";

// Finds the section where the president cards will be added
const destination = document.querySelector("#allpresidents");

// Updates the sub navigation to show which filter is selected
function updateSubNav(buttonID) {
    const allButtons = document.querySelectorAll(".subnav button");

    allButtons.forEach((button) => {
        button.className = "";
    });

    document.querySelector(`#${buttonID}`).className = "current";
}

// Creates and displays the president cards
function showFilteredPresidents(filteredPresidents) {
    filteredPresidents.forEach((president) => {

        const presidentCard = document.createElement("section");
        presidentCard.className = president.party.toLowerCase();
        const presidentName = document.createElement("h2");
        const presidentImage = document.createElement("img");
        const presidentDates = document.createElement("p");
        const presidentParty = document.createElement("p");

        presidentName.innerText = president.name;

        presidentImage.src = president.image;
        presidentImage.alt = president.name;
        presidentImage.loading = "lazy";
        presidentImage.width = 200;
        presidentImage.height = 400;

        presidentDates.innerText = `Served ${president.start} to ${president.end}`;
        presidentParty.innerText = `Party: ${president.party}`;

        presidentCard.appendChild(presidentName);
        presidentCard.appendChild(presidentImage);
        presidentCard.appendChild(presidentDates);
        presidentCard.appendChild(presidentParty);

        destination.appendChild(presidentCard);

    });
}


// Shows all presidents when the page first loads
showFilteredPresidents(presidents);

// Shows only Federalist presidents
document.querySelector("#btn-federalist").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "Federalist");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});

// Shows all presidents
document.querySelector("#btn-all").addEventListener("click", (el) => {
    destination.innerHTML = "";

    showFilteredPresidents(presidents);
    updateSubNav(el.target.id);
});

// Shows only Republican presidents
document.querySelector("#btn-republican").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "Republican");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});

// Shows only Democratic presidents
document.querySelector("#btn-democratic").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "Democratic");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});

// Shows only Democratic-Republican presidents
document.querySelector("#btn-democratic-republican").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "Democratic-Republican");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});

// Shows only Whig presidents
document.querySelector("#btn-whig").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "Whig");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});

// Shows presidents with no political party
document.querySelector("#btn-none").addEventListener("click", (el) => {
    destination.innerHTML = "";

    const filteredPresidents = presidents.filter((president) => president.party === "None");

    showFilteredPresidents(filteredPresidents);
    updateSubNav(el.target.id);
});