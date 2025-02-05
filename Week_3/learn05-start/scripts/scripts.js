// Functions, objects, and events
// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Chilling in the Grass",
    image: "images/gold-dog.jpg",
    caption: "Hanging out in the field catching some rays",
    altTag: "Golden dog sitting on grass."
};

const dog3 = {
    heading: "Got Your Arm",
    image: "images/snow-dog.jpg",
    caption: "Sorry that I stole your arm",
    altTag: "Dog in the snow with tree branch."
};

const dog4 = {
    heading: "Snugglers",
    image: "images/white-dogs.jpg",
    caption: "Who's a good little baby?",
    altTag: "Larger white dog snuggling her pup."
};
function chooseDog(dog, button) {
    if (dog == 1) {
        loadMe(dog1, 1) 
    }
    
    else if (dog == 2) {
        loadMe(dog2, 2) 
    }
    
    else if (dog == 3) {
        loadMe(dog3, 3) 
    }

    else if (dog == 4) {
        loadMe(dog4, 4) 
    }

    button.style.display = "none";
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}


