'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayUpdatedTable(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
        alert('Sorry, looks like there is no one with that name.');
    }

}

function displayDescendantInfo(idNumber){
    let selectionInfo = people.filter(function (person){
        if(person.id == idNumber){
            return true;
        }
    })
    document.getElementById("form").innerHTML = `<table><thead>
    <tr><strong>Selection's Info</strong></tr>
    <tr>
      <th>I.D. #</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>D.O.B.</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Eye Color</th>
      <th>Occupation</th>
      <th>Parents</th>
      <th>Current Spouse</th>
    </tr>
  </thead><tr>
    <td>${selectionInfo[0].id}</td>
    <td>${selectionInfo[0].firstName}</td>
    <td>${selectionInfo[0].lastName}</td>
    <td>${selectionInfo[0].gender}</td>
    <td>${selectionInfo[0].dob}</td>
    <td>${selectionInfo[0].height}</td>
    <td>${selectionInfo[0].weight}</td>
    <td>${selectionInfo[0].eyeColor}</td>
    <td>${selectionInfo[0].occupation}</td>
    <td>${selectionInfo[0].parents}</td>
    <td>${selectionInfo[0].currentSpouse}</td></tr></table>`;
    let filteredPeople = people.filter(function (person){
        if(person.parents == idNumber){
            return true;
        }
        document.getElementById("data").innerHTML = "";
        return false;
    });
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayDescendantTable(filteredPeople);
    }else{
        console.log('Sorry, looks like there are no descendants.');
        alert('Sorry, looks like there are no descendants.')
    }
}

function displayDescendantTable(object){
    document.getElementById("data").innerHTML = `<tr><strong>Descendant Info</strong></tr>`;
    object.map(function(el){
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

//turn data sheet into table//

function displayTable(object){
    object.map(function(el){
        document.getElementById("data").innerHTML += `<tr>
        <td><input type="button" id="button" onclick="displayDescendantInfo(${el.id})" value="${el.id}"></td>
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

function displayUpdatedTable(object){
    document.getElementById("data").innerHTML = ``;
    object.map(function(el){
        document.getElementById("data").innerHTML += `<tr>
        <td><input type="button" id="button" onclick="displayDescendantInfo(${el.id})" value="${el.id}"></td>
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

function searchBySingle(){           //function is called when form is submitted. Searches for matches, makes new array, posts results in table.
    var userSelection = document.forms['form']['selection'].value;
    let userInput = document.forms['form']['prop-value'].value;

    let filteredPeople = people.filter(function (person) {
        if(person[userSelection] == userInput){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        displayUpdatedTable(filteredPeople);
    }else{
        console.log('Sorry, no match.');
        alert('Sorry, no match.');
    }
}

displayTable(people);