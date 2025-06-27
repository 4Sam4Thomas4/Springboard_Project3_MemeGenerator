
const memeForm = document.getElementById("meme-form");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const linkInfo = document.getElementById("link-info");
const memeButton = document.getElementById("memeButton");
const memeContainer = document.getElementById("meme-container");



memeButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent form reload
                // Grabbing value when the button is clicked
                // function getMemeValues()
                // return {
                // top: top,
                // bottom: bottom,
                // imageUrl: imageUrl};
                // const {top, bottom, imageUrl} = getMemeValues();
                // createMeme(top, bottom, imageURL) 
    const top = topText.value;
    const bottom = bottomText.value;
    const imageUrl = linkInfo.value;
    // A little validation
    if(!top || !bottom || !imageUrl) {
        alert("Please enter a value in all fields!");
        return;
    }
    // Pass the values to create meme
    createMeme(top, bottom, imageUrl); // I asked the gpt tutor on this so the hint helped me

    // Rest the form
    memeForm.reset()
});

function createMeme(top, bottom, imageUrl){
    const memeSpot = document.createElement("div"); // Create the div
    memeSpot.className = "memeSpot"; // Set a className

    const img = document.createElement("img");
    img.className="imgclass"; // Create an img
    img.src = imageUrl; // Add the imageUrl to the src

    const topCapt = document.createElement("div"); // Create a div
    topCapt.className = "top-text"; // Give it a className
    topCapt.innerText = top; //set the innerText to Top

    const bottomCapt = document.createElement("div") // Another div
    bottomCapt.className = "bottom-text"; // ClassName
    bottomCapt.innerText = bottom; // Set the innerText to bottom

    const deleteBtn = document.createElement("button"); // Create the delete button
    deleteBtn.innerText = "Delete"; // Set the text
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function(){ //Listen for the click and remove the memeSpot
    memeSpot.remove();
    if (memeContainer.children.length === 0) { // If there are no memes, remove the class
        memeContainer.classList.remove("has-memes");
    }
    });
   
    // append these all to memeSpot
    memeSpot.appendChild(img);
    memeSpot.appendChild(topCapt);
    memeSpot.appendChild(bottomCapt);
    memeSpot.appendChild(deleteBtn);
    memeContainer.appendChild(memeSpot);
    memeContainer.classList.add("has-memes"); // Add the class to the memeContainer
}




