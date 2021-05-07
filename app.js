



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
        }else{
            console.log('Sorry, looks like there is no one with that name.');
        }

        return false;
    }
    

    // // Rather than console logging, you need to append the filteredPeople to a table.
    // if(filteredPeople.length > 0){
    //     console.log(filteredPeople);
    //     displayUpdatedTable(filteredPeople);
    // }else{
    //     console.log('Sorry, looks like there is no one with that name.');
    //     alert('Sorry, looks like there is no one with that name.');
    // }






//turn data sheet into table//

function displayTable(object){
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

function displayUpdatedTable(object){
    document.getElementById("data").innerHTML = ``;
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

function searchBySingle(){           //function is called when form is submitted. Searches for matches, makes new array, posts results in table.
    var userSelection = document.forms['singleForm']['selection'].value;
    let userInput = document.forms['singleForm']['prop-value'].value;

    let filteredPeople = people.filter(function (person) {
        if(person[userSelection] === userInput){
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
