// get the characters by Id
const characters = document.querySelectorAll(".character");

// add the class selected character if mouse is enter in the character card
characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    
    if(window.innerWidth < 450){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // check if character selected already exists
    removeCharSelection();
    // add the new selected character
    character.classList.add("selected");


    // get the "selected-char-image" and switch them
    switchCharImage(character);

    // switch name
    switchCharName(character);

    // description
    switchCharDescription(character);
  });
});

function switchCharDescription(character) {
    const charDescription = document.getElementById("char-description-id");
    charDescription.innerText = character.getAttribute("data-description");
}

function switchCharName(character) {
    const charName = document.getElementById("char-name-id");
    charName.innerText = character.getAttribute("data-name");
}

function switchCharImage(character) {
    const selectedCharImage = document.querySelector(".selected-char-image");
    //console.log(selectedCharImage);
    const characterId = character.getAttribute("id");
    console.log(characterId);
    selectedCharImage.src = `./src/images/card-${characterId}.png`;
    selectedCharImage.alt = `${characterId} image`;
}

function removeCharSelection() {
    const selectedChar = document.querySelector(".selected");
    // remove selected character
    selectedChar.classList.remove("selected");
}

