function start() {
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let holidayList = "";

    for (let i = 0; i < months.length; i++) {
        let holidays = "";

        switch (months[i]) {
            case "January":
                holidays = "1 = New Year's Day <br> 20 = Martin Luther King Jr. Day";
                break;
            case "February":
                holidays = "2 = Groundhog Day <br> 14 = Valentine's Day <br> 17 = Presidents' Day";
                break;
            case "March":
                holidays = "5 = Ash Wednesday <br> 17 = St. Patrick's Day <br> 20 = Vernal Equinox";
                break;
            case "April":
                holidays = "4 = April Fools' Day <br> 20 = Easter <br> 22 = Earth Day";
                break;
            case "May":
                holidays = "5 = Cinco de Mayo <br> 26 = Memorial Day";
                break;
            case "June":
                holidays = "14 = Flag Day <br> 19 = Juneteenth <br> 20 = Summer Solstice";
                break;
            case "July":
                holidays = "4 = Independence Day <br> 27 = Parents' Day";
                break;
            case "August":
                holidays = "8 = International Cat Day <br> 26 = Women's Equality Day <br> 26 = National Dog Day";
                break;
            case "September":
                holidays = "1 = Labor Day <br> 11 = Patriot Day <br> 22 = Autumnal Equinox";
                break;
            case "October":
                holidays = "13 = Indigenous Peoples' Day <br> 31 = Halloween";
                break;
            case "November":
                holidays = "11 = Veterans Day <br> 27 = Thanksgiving";
                break;
            case "December":
                holidays = "21 = Winter Solstice <br> 24 = Christmas Eve <br> 25 = Christmas Day <br> 31 = New Year's Eve";
                break;
            default:
                holidays = "No holidays found";
        }

        holidayList += `<h2>${months[i]}</h2><p>${holidays}</p>`;
    }

    document.querySelector("main").innerHTML = holidayList;
}
