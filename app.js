"use strict"


function searchByFirstName(peoplelist){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.firstName === firstNameInput){
            return true;
            }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;

    }else{
        alert('Sorry, there is no one with that first name.');
        // return false;
    }
}

function searchByLastName(peoplelist){
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.lastName === lastNameInput) {
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;

    }else{
        alert('Sorry, there is no one with that last name.');
        // return false;
    }
}

function searchByGender(peoplelist) {
    let genderInput = document.forms['nameForm']['gender'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.gender === genderInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByDob(peoplelist){
    let dobInput = document.forms['nameForm']['dob'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.dob === dobInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}
   
function searchByHeight(peoplelist){
    let heightInput = document.forms['nameForm']['height'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.height == heightInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByWeight(peoplelist){
    let weightInput = document.forms['nameForm']['weight'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.weight == weightInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByEyeColor(peoplelist){
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.eyeColor === eyeColorInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByOccupation(peoplelist){
    let occupationInput = document.forms['nameForm']['occupation'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.occupation === occupationInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByParents(peoplelist){
    let parentsInput = document.forms['nameForm']['parents'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.parents == parentsInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}

function searchByCurrentSpouse(peoplelist){
    let currentSpouseInput = document.forms['nameForm']['currentSpouse'].value;
    let list = peoplelist;
    let filteredPeople = list.filter(function (person) {
        if(person.currentSpouse == currentSpouseInput){
            return true;
        }
        return false;
    });

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayTable(filteredPeople);
        return filteredPeople;
    }
    else{
        // return false;
    }
}
       

//turn data sheet into table//

function displayTable(array){
    array.map(function(el){
        document.getElementById("data").innerHTML += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>`
})
}

function displayUpdatedTable(array){
    document.getElementById("data").innerHTML = ``;
    array.map(function(el){
        document.getElementById("data").innerHTML += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>`
})
}

function masterSearch(){
    let masterSearchFilteredPeople = people;
    if (document.forms["nameForm"]["fname"].value != ""){
        masterSearchFilteredPeople = searchByFirstName();
    }
    if (document.forms["nameForm"]["lname"].value != ""){
        masterSearchFilteredPeople = searchByLastName(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["gender"].value != ""){
        masterSearchFilteredPeople = searchByGender(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["dob"].value != ""){
        masterSearchFilteredPeople = searchByDob(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["height"].value != ""){
        masterSearchFilteredPeople = searchByHeight(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["weight"].value != ""){
        masterSearchFilteredPeople = searchByWeight(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["eyeColor"].value != ""){
        masterSearchFilteredPeople = searchByEyeColor(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["occupation"].value != ""){
        masterSearchFilteredPeople = searchByOccupation(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["parents"].value != ""){
        masterSearchFilteredPeople = searchByParents(masterSearchFilteredPeople);
    }
    if (document.forms["nameForm"]["currentSpouse"].value != ""){
        masterSearchFilteredPeople = searchByCurrentSpouse(masterSearchFilteredPeople);
    }
        console.log(masterSearchFilteredPeople);
    displayUpdatedTable(masterSearchFilteredPeople);
}

displayTable(people);

