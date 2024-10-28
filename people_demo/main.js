// let people = [{
//     id: 1,
//     firstName: "Ezra",
//     lastName: "Aiden",
//     email: "e.aiden@basshall.com",
//     ipAddress: "18.6.24.104"
//   }, {

// defer until body exist
document.addEventListener("DOMContentLoaded", ()=>{
    // Ways to loop through all the people and add a section of each person to a select list

    peopleSelect.innerHTML += people.map(p => `<option>${p.firstName} ${p.lastName}</option>`).join(""); // Adds first and last name to select option

    people.map(p => new Option(p.ipAddress)).forEach(option => peopleSelect2.appendChild(option)) // Adds IP to select option
    
    people.map(p => peopleSelect3.appendChild(new Option(p.email))); // Adds email to select option

}); // End load
