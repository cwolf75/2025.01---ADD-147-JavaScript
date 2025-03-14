class Planner {  
    constructor(manufacturer, type, layout, binding, pages) {
        this.manufacturer = manufacturer;
        this.type = type;
        this.layout = layout;
        this.binding = binding;
        this.pages = pages;
    }
    
    plannerInfo() {
        return `This ${this.manufacturer} selection is a/an ${this.type} planner, has a ${this.layout} layout, has a ${this.binding} binding, and features ${this.pages} pages.`;
    }
 
    static totalPages(planner1, planner2, planner3, planner4) {  
        return planner1.pages + planner2.pages + planner3.pages + planner4.pages;
    } 
}

const ErinCondren = new Planner('Erin Condren', 'calendar year', 'vertical weekly', 'spiral coil', 402);
const LaurelDenise = new Planner('Laurel Denise', 'academic year', 'portrait weekly', 'wire O ring', 200);
const Hobonichi = new Planner('Hobonichi', 'calendar year', 'daily', 'bound', 576);
const JanesAgenda = new Planner('Jane\'s Agenda', 'academic year', 'horizontal weekly', 'discbound', 365);

document.getElementById("planner1").innerHTML = ErinCondren.plannerInfo();
document.getElementById("planner2").innerHTML = LaurelDenise.plannerInfo();
document.getElementById("planner3").innerHTML = Hobonichi.plannerInfo();
document.getElementById("planner4").innerHTML = JanesAgenda.plannerInfo();
document.getElementById("page_count").innerHTML = `Total pages in all four planners: ${Planner.totalPages(ErinCondren, LaurelDenise, Hobonichi, JanesAgenda)}`;
