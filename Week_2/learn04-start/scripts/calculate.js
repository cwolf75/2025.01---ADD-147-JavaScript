function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function showRooms() {
    let numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 2) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 3) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
}

function estimate() {
    let name = document.getElementById("name").value;
    let totalEstimate = 0;

    if (document.getElementById("rm1length").value && document.getElementById("rm1width").value && document.getElementById("rm1height").value) {
        let rm1Length = parseFloat(document.getElementById("rm1length").value);
        let rm1Width = parseFloat(document.getElementById("rm1width").value);
        let rm1Height = parseFloat(document.getElementById("rm1height").value);
        let rm1SqFt = ((rm1Length * rm1Height * 2) + (rm1Length * rm1Width * 2));
        let rm1Cost = rm1SqFt * 0.65;
        document.getElementById("rm1cost").value = rm1Cost;
        totalEstimate += rm1Cost;
    }

    if (document.getElementById("rm2length").value && document.getElementById("rm2width").value && document.getElementById("rm2height").value) {
        let rm2Length = parseFloat(document.getElementById("rm2length").value);
        let rm2Width = parseFloat(document.getElementById("rm2width").value);
        let rm2Height = parseFloat(document.getElementById("rm2height").value);
        let rm2SqFt = ((rm2Length * rm2Height * 2) + (rm2Length * rm2Width * 2));
        let rm2Cost = rm2SqFt * 0.65;
        document.getElementById("rm2cost").value = rm2Cost;
        totalEstimate += rm2Cost;
    }

    if (document.getElementById("rm3length").value && document.getElementById("rm3width").value && document.getElementById("rm3height").value) {
        let rm3Length = parseFloat(document.getElementById("rm3length").value);
        let rm3Width = parseFloat(document.getElementById("rm3width").value);
        let rm3Height = parseFloat(document.getElementById("rm3height").value);
        let rm3SqFt = ((rm3Length * rm3Height * 2) + (rm3Length * rm3Width * 2));
        let rm3Cost = rm3SqFt * 0.65;
        document.getElementById("rm3cost").value = rm3Cost;
        totalEstimate += rm3Cost;
    }

    document.getElementById("estimate").innerHTML = name + ", your total estimate is: $" + totalEstimate.toFixed(2);
}
