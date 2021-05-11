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
    }
}

// beginning of decendant table

function displayDescendantInfo(idNumber){
    let selectionInfo = people.filter(function (person){
        if(person.id == idNumber){
            return true;
        }
        else{
            return false;
        }
    })
    document.getElementById("nameForm").innerHTML = `<table><thead>
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
    let filteredPeople = [];
    
    findDescendants(selectionInfo[0], people, filteredPeople)

    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        document.getElementById("data").innerHTML = "";
        displayDescendantTable(filteredPeople);
    }else{
        document.getElementById("data").innerHTML = "";
        console.log('Sorry, looks like there are no descendants.');
        alert('Sorry, looks like there are no descendants.')
    }
    immediateFamily(idNumber, selectionInfo[0]);
}

function findDescendants(isParent, peopleList, arrayToPush){
    let kids = peopleList.filter(function (person){
        for(let i = 0; i < person.parents.length; i++){
            if(person.parents[i] == isParent.id){
                arrayToPush.push(person);
                findDescendants(person, peopleList, arrayToPush);
                return true;
            }
        }
    })
}

function displayDescendantTable(object){
    document.getElementById("data").innerHTML = `<tr><strong>Descendant Info</strong></tr><thead>
    <tr>
      <th scope="col">I.D.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">D.O.B</th>
      <th scope="col">Height</th>
      <th scope="col">Weight</th>
      <th scope="col">Eye Color</th>
      <th scope="col">Occupation</th>
      <th scope="col">Parents</th>
      <th scope="col">Current Spouse</th>
    </tr>
  </thead>`;
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

function displayTable(array){
    document.getElementById("data").innerHTML = `<thead>
    <tr>
      <th scope="col">I.D.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">D.O.B</th>
      <th scope="col">Height</th>
      <th scope="col">Weight</th>
      <th scope="col">Eye Color</th>
      <th scope="col">Occupation</th>
      <th scope="col">Parents</th>
      <th scope="col">Current Spouse</th>
    </tr>
  </thead>`;
    array.map(function(el){
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

function displayUpdatedTable(array){
    document.getElementById("data").innerHTML = `<thead>
    <tr>
      <th scope="col">I.D.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">D.O.B</th>
      <th scope="col">Height</th>
      <th scope="col">Weight</th>
      <th scope="col">Eye Color</th>
      <th scope="col">Occupation</th>
      <th scope="col">Parents</th>
      <th scope="col">Current Spouse</th>
    </tr>
  </thead>`;
    array.map(function(el){
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

// single select
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

function masterSearch(){
    let masterSearchFilteredPeople = people;
    if (document.forms["nameForm"]["fname"].value != ""){
        masterSearchFilteredPeople = searchByFirstName(masterSearchFilteredPeople);
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

function immediateFamily(id, selectedPerson){
    let kids = people.filter(function (person){
            if(person.parents[0] == id || person.parents[1] == id){
                return true;
            }
            return false;
    })
    if(kids.length > 0){
        document.getElementById("data").innerHTML += `<tr><table><thead>
        <tr><strong>Children</strong></tr>            
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
    </thead>`
        kids.map(function(el){
            document.getElementById("data").innerHTML += `
            <tr>
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
            <td>${el.currentSpouse}</td></tr>`;
        })
        document.getElementById("data").innerHTML += `</table></tr><br>`;
    }
    let siblings = people.filter(function (person){
        for(const i = 0; i < person.parents.length; i++){
            if(person.parents[i] == selectedPerson.parents[0] || person.parents[i] == selectedPerson.parents[1]){
                return true;
            }
            return false;
        }
    })
    if(siblings.length > 0){
        document.getElementById("data").innerHTML += `<tr><table><thead>
        <tr><strong>Siblings</strong></tr><tr>
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
    </thead>`
        siblings.map(function(el){
            document.getElementById("data").innerHTML += `
            <tr>
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
            <td>${el.currentSpouse}</td></tr>`;
        })
        document.getElementById("data").innerHTML += `</table></tr><br>`;
    }
    let parents = people.filter(function (person){
            if(person.id == selectedPerson.parents[0] || person.id == selectedPerson.parents[1]){
                return true;
            }
            return false;
    })
    if(parents.length > 0){
        document.getElementById("data").innerHTML +=`<tr><table><thead>
        <tr><strong>Parents</strong></tr><tr>
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
    </thead>`
        parents.map(function(el){
            document.getElementById("data").innerHTML += `
            <tr>
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
            <td>${el.currentSpouse}</td></tr>`;
        })
        document.getElementById("data").innerHTML += `</table></tr><br>`;
    }
}

displayTable(people);
