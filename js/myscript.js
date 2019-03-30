let lang = 'English';

window.onload=function(){
const menu_1 = document.getElementById("menu_1");
menu_1.addEventListener("click",change1,false);
const menu_21 = document.getElementById("menu_21");
menu_21.addEventListener("click",change2,false);
const menu_22 = document.getElementById("menu_22");
menu_22.addEventListener("click",change3,false);
const menu_31 = document.getElementById("menu_31");
menu_31.addEventListener("click",change4,false);
const menu_32= document.getElementById("menu_32");
menu_32.addEventListener("click",change5,false);

// Languages selection
const menu_42 = document.getElementById("menu_42");
menu_42.addEventListener("click",lang2()  ,false);
}

function change1(e) {
    e.preventDefault();
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies";
    var tb1=document.querySelector("#outputTable");

    var tblExistingBody = tb1.querySelector("tbody");
    if (tblExistingBody) tb1.removeChild(tblExistingBody);

       var tb1Body= document.createElement("tbody");
    
        // creating all table rows
       for (var i = 0; i < countries.length; i++) {

        // creating a table row
        var row = document.createElement("tr");
        var flag= `flags/${countries[i].Code}.png`;    

        // creating a <td> element and put them at the end of the table row
        row.appendChild(getTdImg(flag));
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdcountry(countries[i].Name[lang]));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));
        
        // adding the row to the end of the table body
        tb1Body.appendChild(row);
        }
        tb1.appendChild(tb1Body);

        function getTdImg(text) {
         var cell = document.createElement("img");
         cell.src = flag;
         return cell;
        }

        // creating a <td> element and a text
        function getTdElement(text) {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }

        function getTdcountry(text) {
         var cell = document.createElement("td");
         cell.id ="CN";
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }  
}

function change2(e) {
    e.preventDefault();
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
    var tb1=document.querySelector("#outputTable");
    var tblExistingBody = tb1.querySelector("tbody");
    if (tblExistingBody) tb1.removeChild(tblExistingBody);
    
       var tb1Body= document.createElement("tbody");
        
        // creating all table rows
       for (var i = 0; i < countries.length; i++) {

        // creating a table row
        var row = document.createElement("tr");
        var flag= `flags/${countries[i].Code}.png`; 
        var lang = countries[i].Name.English;
    
        if (countries[i].Population > 99999999){
        // creating a <td> element and placing them at the end of the table row
        row.appendChild(getTdImg(flag));
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdElement(lang));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));
        
        // adding the row to the end of the table body
        tb1Body.appendChild(row);
         }
        }
        tb1.appendChild(tb1Body);
    
        function getTdImg(text) {
         var cell = document.createElement("img");
         cell.src= flag;
         return cell;
        }

     // creating a <td> element and a text
        function getTdElement(text) 
        {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }
}

function change3(e) {
    e.preventDefault();
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
    var tb1=document.querySelector("#outputTable");
    var tblExistingBody = tb1.querySelector("tbody");
   
    if (tblExistingBody) tb1.removeChild(tblExistingBody);
        var tb1Body= document.createElement("tbody");

       // creating all table rows
       for (var i = 0; i < countries.length; i++) {
       
        // creating a table row
        var row = document.createElement("tr");
        var flag= `flags/${countries[i].Code}.png`; 

        if (countries[i].Population > 999999 && countries[i].Population < 2000001) {

        // creating a <td> element and put them at the end of the table row
        row.appendChild(getTdImg(flag));
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdElement(countries[i].Name.English));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));

        // adding the row to the end of the table body
        tb1Body.appendChild(row);
         }
        }
        tb1.appendChild(tb1Body);

        function getTdImg(text) {
         var cell = document.createElement("img");
         cell.src= flag;
         return cell;
        }

        // creating a <td> element and a text
        function getTdElement(text) {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }
}

function change4(e) {
    e.preventDefault();
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - Area Greater than 1 million Km2, Americas";
    var tb1=document.querySelector("#outputTable");
    var tblExistingBody = tb1.querySelector("tbody");
    
    if (tblExistingBody) tb1.removeChild(tblExistingBody);
        var tb1Body= document.createElement("tbody");

        // creating all table rows
       for (var i = 0; i < countries.length; i++) {
       
        // createing a table row
        var row = document.createElement("tr");
        var flag= `flags/${countries[i].Code}.png`;

        if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas") {

        // creating a <td> element and put them at the end of the table row
        row.appendChild(getTdImg(flag));
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdElement(countries[i].Name.English));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));
        // adding the row to the end of the table body
        tb1Body.appendChild(row);
         }
        }
        tb1.appendChild(tb1Body);
    
        function getTdImg(text) {
         var cell = document.createElement("img");
         cell.src= flag;
         return cell;
        }

        // creating a <td> element and a text
        function getTdElement(text) {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }
}

function change5(e) {
    document.querySelector("#subtitle").innerHTML = "List of Countries and Dependencies - All countries in Asia";
    var tb1=document.querySelector("#outputTable");

    var tblExistingBody = tb1.querySelector("tbody");
    if (tblExistingBody) tb1.removeChild(tblExistingBody);
        var tb1Body= document.createElement("tbody");

        // creating all table rows
       for (var i = 0; i < countries.length; i++) {
        // creating a table row
        var row = document.createElement("tr");
        var flag= `flags/${countries[i].Code}.png`; 
        var lang= countries[i].Name.English;

        if ( countries[i].Continent == "Asia") {

        // creating a <td> element and placing it at the end of the table row
        row.appendChild(getTdImg(flag));
        row.appendChild(getTdElement(countries[i].Code));
        row.appendChild(getTdElement(lang));
        row.appendChild(getTdElement(countries[i].Continent));
        row.appendChild(getTdElement(countries[i].AreaInKm2));
        row.appendChild(getTdElement(countries[i].Population));
        row.appendChild(getTdElement(countries[i].Capital));

        // adding the row to the end of the table body
        tb1Body.appendChild(row);
         }
        }
        tb1.appendChild(tb1Body);

        function getTdImg(text) {
         var cell = document.createElement("img");
         cell.src= flag;
         return cell;
        }

        // creating a <td> element and a text
        function getTdElement(text) {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(text);
         cell.appendChild(cellText);
         return cell;
        }
}
