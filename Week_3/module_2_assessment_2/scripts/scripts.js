const lighthouse1 = {
    name:  "Marquette Harbor",
    location: "Location:  Marquette, Michigan",
    image: "images/marquette_harbor.jpg",
    built: "Year built:  1866",
    status: "Status:  Active"
};

const lighthouse2 = {
    name:  "Eagle Harbor Lighthouse",
    location: "Location:  Eagle Harbor, Michigan",
    image: "images/eagle_harbor.jpg",
    built: "Year built:  1851",
    status: "Status:  Active"
};

const lighthouse3 = {
    name:  "AuSable Point Lighthouse",
    location: "Location:  Grand Marais, Michigan",
    image: "images/au_sable_point.jpg",
    built: "Year built:  1874",
    status: "Status:  Active"
};

const lighthouse4 = {
    name:  "Copper Harbor Lighthouse",
    location: "Location:  Copper Harbor, Michigan",
    image: "images/copper_harbor.jpg",
    built: "Year built:  1866",
    status: "Status:  Deactivated"
};

const lighthouse5 = {
    name:  "Crist Point Lighthouse",
    location: "Location:  Newberry, Michigan",
    image: "images/crisp_point.jpg",
    built: "Year built:  1903",
    status: "Status:  Active Seasonally"
};

    let object1 = `<h2>${lighthouse1.name}</h2>` +
    `<h3>${lighthouse1.location}</h3>` + 
    `<img src = ${lighthouse1.image}>` +
    `<p>${lighthouse1.built}</p>` +
    `<p>${lighthouse1.status}</p>`;

    let object2 = `<h2>${lighthouse2.name}</h2>` +
    `<h3>${lighthouse2.location}</h3>` + 
    `<img src = ${lighthouse2.image}>` +
    `<p>${lighthouse2.built}</p>` +
    `<p>${lighthouse2.status}</p>`;

    let object3 = `<h2>${lighthouse3.name}</h2>` +
    `<h3>${lighthouse3.location}</h3>` + 
    `<img src = ${lighthouse3.image}>` +
    `<p>${lighthouse3.built}</p>` +
    `<p>${lighthouse3.status}</p>`;

    let object4 = `<h2>${lighthouse4.name}</h2>` +
    `<h3>${lighthouse4.location}</h3>` + 
    `<img src = ${lighthouse4.image}>` +
    `<p>${lighthouse4.built}</p>` +
    `<p>${lighthouse4.status}</p>`;

    let object5 = `<h2>${lighthouse5.name}</h2>` +
    `<h3>${lighthouse5.location}</h3>` + 
    `<img src = ${lighthouse5.image}>` +
    `<p>${lighthouse5.built}</p>` +
    `<p>${lighthouse5.status}</p>`;

function display() {
    document.getElementById('object1').innerHTML = object1;
    document.getElementById('object2').innerHTML = object2;
    document.getElementById('object3').innerHTML = object3;
    document.getElementById('object4').innerHTML = object4;
    document.getElementById('object5').innerHTML = object5;

}