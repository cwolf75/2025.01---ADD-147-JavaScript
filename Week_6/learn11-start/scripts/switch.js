function calculate() {
    var chi = '';
    let myName = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    const lunarNewYear = {
        1924: "02-05", 1925: "01-24", 1926: "02-13", 1927: "02-02",
        1928: "01-23", 1929: "02-10", 1930: "01-30", 1931: "02-17",
        1932: "02-06", 1933: "01-26", 1934: "02-14", 1935: "02-04",
        1936: "01-24", 1937: "02-11", 1938: "01-31", 1939: "02-19",
        1940: "02-08", 1941: "01-27", 1942: "02-15", 1943: "02-05",
        1944: "01-25", 1945: "02-13", 1946: "02-02", 1947: "01-22",
        1948: "02-10", 1949: "01-29", 1950: "02-17", 1951: "02-06",
        1952: "01-27", 1953: "02-14", 1954: "02-03", 1955: "01-24",
        1956: "02-12", 1957: "01-31", 1958: "02-18", 1959: "02-08",
        1960: "01-28", 1961: "02-15", 1962: "02-05", 1963: "01-25",
        1964: "02-13", 1965: "02-02", 1966: "01-21", 1967: "02-09",
        1968: "01-30", 1969: "02-17", 1970: "02-06", 1971: "01-27",
        1972: "02-15", 1973: "02-03", 1974: "01-23", 1975: "02-11",
        1976: "01-31", 1977: "02-18", 1978: "02-07", 1979: "01-28",
        1980: "02-16", 1981: "02-05", 1982: "01-25", 1983: "02-13",
        1984: "02-02", 1985: "02-20", 1986: "02-09", 1987: "01-29",
        1988: "02-17", 1989: "02-06", 1990: "01-27", 1991: "02-15",
        1992: "02-04", 1993: "01-23", 1994: "02-10", 1995: "01-31",
        1996: "02-19", 1997: "02-07", 1998: "01-28", 1999: "02-16",
        2000: "02-05", 2001: "01-24", 2002: "02-12", 2003: "02-01",
        2004: "01-22", 2005: "02-09", 2006: "01-29", 2007: "02-18",
        2008: "02-07", 2009: "01-26", 2010: "02-14", 2011: "02-03",
        2012: "01-23", 2013: "02-10", 2014: "01-31", 2015: "02-19",
        2016: "02-08", 2017: "01-28", 2018: "02-16", 2019: "02-05",
        2020: "01-25", 2021: "02-12", 2022: "02-01", 2023: "01-22",
        2024: "02-10", 2025: "01-29"
    };

    
let lunarYearStart = lunarNewYear[year];  
let lunarMonth = parseInt(lunarYearStart.substring(0, 2)); 
let lunarDay = parseInt(lunarYearStart.substring(3, 5));   

if (month < lunarMonth || (month === lunarMonth && date < lunarDay)) {
    year -= 1;
}

    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
    }

    switch (year) {
        case 1925:
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
    }

    switch (year) {
        case 1926:
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
    }

    switch (year) {
        case 1927:
        case 1939:
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit"
            break;
    } 

    switch (year) {
        case 1928:
        case 1940:
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon"
            break;
    }
    
    switch (year) {
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake"
            break;
    }

    switch (year) {
        case 1930:
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
            chi = "Horse"
            break;      
    }

    switch (year) {
        case 1931:
        case 1943:
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
            chi = "Goat"
            break;
    }

    switch (year) {
        case 1932:
        case 1943:
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
            chi = "Monkey"
            break;
    }

    switch (year) {
        case 1933:
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
            chi = "Rooster"
            break;
    }

    switch (year) {
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
            chi = "Dog"
            break;
    }

    switch (year) {
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
            chi = "Boar"
            break;
    }       

    if (chi === '') {
        chi = "That year is not included in my list.";
    }

    function getZodiac(month, day) {
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return "Aquarius";
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            return "Pisces";
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return "Aries";
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return "Taurus";
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            return "Gemini";
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            return "Cancer";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return "Leo";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return "Virgo";
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            return "Libra";
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            return "Scorpio";
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            return "Sagittarius";
        } else {
            return "Capricorn";
        }
    }

    let zodiac = getZodiac(month, date);
    

    document.getElementById("nameout").innerHTML = "Hi, " + myName + "!";
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your Western zodiac sign is: " + zodiac;


}