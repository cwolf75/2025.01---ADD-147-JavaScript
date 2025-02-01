function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
}    
    function calculateOrder() {
        var name = document.getElementById("name").value;
    
        var drinkPrices = [2.00, 2.00, 2.00, 2.00, 2.50];
        var sandwichPrices = [7.50, 5.00, 5.50, 6.00, 4.00];
        var sidePrices = [2.50, 3.00, 3.50, 5.50, 3.50];
    
        var totalDrinks = 0;
        var totalSandwiches = 0;
        var totalSides = 0;

        var drinkQty;  

        drinkQty = document.getElementById("drink1").value;
        if (drinkQty) totalDrinks += drinkQty * drinkPrices[0];
        drinkQty = document.getElementById("drink2").value;
        if (drinkQty) totalDrinks += drinkQty * drinkPrices[1];
        drinkQty = document.getElementById("drink3").value;
        if (drinkQty) totalDrinks += drinkQty * drinkPrices[2];
        drinkQty = document.getElementById("drink4").value;
        if (drinkQty) totalDrinks += drinkQty * drinkPrices[3];
        drinkQty = document.getElementById("drink5").value;
        if (drinkQty) totalDrinks += drinkQty * drinkPrices[4];
    
        var sandwichQty;
        sandwichQty = document.getElementById("sandwich1").value;
        if (sandwichQty) totalSandwiches += sandwichQty * sandwichPrices[0];
        sandwichQty = document.getElementById("sandwich2").value;
        if (sandwichQty) totalSandwiches += sandwichQty * sandwichPrices[1];
        sandwichQty = document.getElementById("sandwich3").value;
        if (sandwichQty) totalSandwiches += sandwichQty * sandwichPrices[2];
        sandwichQty = document.getElementById("sandwich4").value;
        if (sandwichQty) totalSandwiches += sandwichQty * sandwichPrices[3];
        sandwichQty = document.getElementById("sandwich5").value;
        if (sandwichQty) totalSandwiches += sandwichQty * sandwichPrices[4];
        
        var sideQty;
        sideQty = document.getElementById("side1").value;
        if (sideQty) totalSides += sideQty * sidePrices[0];
        sideQty = document.getElementById("side2").value;
        if (sideQty) totalSides += sideQty * sidePrices[1];
        sideQty = document.getElementById("side3").value;
        if (sideQty) totalSides += sideQty * sidePrices[2];
        sideQty = document.getElementById("side4").value;
        if (sideQty) totalSides += sideQty * sidePrices[3];
        sideQty = document.getElementById("side5").value;
        if (sideQty) totalSides += sideQty * sidePrices[4];
    
        var orderSummary = "<p><strong>" + name + "'s Order Summary:</strong></p>";
        orderSummary += "<p>Drinks: $" + totalDrinks.toFixed(2) + "</p>";
        orderSummary += "<p>Sandwiches: $" + totalSandwiches.toFixed(2) + "</p>";
        orderSummary += "<p>Deserts/Sides: $" + totalSides.toFixed(2) + "</p>";
        orderSummary += "<p><strong>Total: $" + (totalDrinks + totalSandwiches + totalSides).toFixed(2) + "</strong></p>";
    
        document.getElementById("orderSummary").innerHTML = orderSummary;
    }

 