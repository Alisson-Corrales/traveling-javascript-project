"use strict";

//this goes through the Extras checkboxes and
function checkbox(){
    let extras = document.getElementsByName("extra");
    let extraArray = [];
    for(let i = 0; i < extras.length; i++){
        if(extras[i].checked){
            extraArray.push(extras[i].value);
        }
    }
    return extraArray.join(", ")
}

//this holds all the info you give
class User{
    constructor(firstName, lastName, Id, DoB, departing, arriving, leaveDate, returnDate, bags, meal){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Id = Id;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.extras = checkbox();
    }
}



let userId = 1987;
//array for holding users, empty for our convenience
let userList = []
let user = new User("Ludwig", "Van Pelt", "1987", "1-12-1890", "Huttsburg, Germany", "Teufort, NM", "4-18-1960", "4-20-1960", 3, "chick") 
userList.push(user);

user = new User ("Mickard", "Mundy", "1936", "2-25-2001", "Victoria, Australia", "Teufort, NM", "4-18-1960", "4-18-1960", 1, "fish");
userList.push(user);

console.log(userList)



//this adds the inputted info
function addToList(){
    //this takes the value in the input and puts it in the new user
    let firstName = document.getElementById("firstName").value; 
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let chick = document.getElementById("chick").value;
    let fish = document.getElementById("fish").value;
    let veg = document.getElementById("veg").value;
    let legroom = document.getElementById("legroom").value;
    let window = document.getElementById("window").value;
    let headphones = document.getElementById("headphones").value;
    let moreFood = document.getElementById("moreFood").value;

    userId++;

    //the user's info
    let passenger = new User(firstName, lastName, userId, DoB, departing, arriving, leaveDate, returnDate, bags, chick, fish, veg, legroom, window, headphones, moreFood); //the new user

    userList.push(passenger);

    //cleans out the left block
    document.getElementById("firstName").value = ""; //this makes the place where you input empty
    document.getElementById("lastName").value = "";
    document.getElementById("DoB").value = "";
    document.getElementById("departing").value = "";
    document.getElementById("arriving").value = "";
    document.getElementById("leaveDate").value = "";
    document.getElementById("returnDate").value = "";
    document.getElementById("bags").value = "";
    document.getElementById("chick").checked = true; //leaves the checks/radio buttons empty (except for one radio button)
    document.getElementById("fish").checked = false;
    document.getElementById("veg").checked = false;
    document.getElementById("legroom").checked = false;
    document.getElementById("window").checked = false;
    document.getElementById("headphones").checked = false;
    document.getElementById("moreFood").checked = false;

    console.log(passenger);

    let outdurration = leaveDate - returnDate;
    
    let cost = 300
    if(checkbox.value = true){
        cost +10;
    }
    document.getElementById("outfirstName").value = firstName;
    document.getElementById("outlastName").value = lastName;
    document.getElementById("outDoB").value = DoB;
    document.getElementById("outbags").value = bags;
    document.getElementById("outdeparting").value = departing;
    document.getElementById("outarriving").value = arriving;
    document.getElementById("outleaveDate").value = leaveDate;
    document.getElementById("outreturnDate").value = returnDate;
    document.getElementById("outdurration").value = outdurration;
    //document.getElementById("outmeal").value = ;
    //document.getElementById("outage").value = ;
    //document.getElementById("outextras").value = ;
    document.getElementById("outcost").value = cost;
}


function print(){
    let names = document.getElementById("names");

    names.innerHTML = "";
    for(let i = 0; i < userList.length; i++){
        names.innerHTML += 
        `<div> ${userList[i].firstName} ${userList[i].lastName} ${userList[i].Id} </div>`;
    }
}


//should update the same user
function updateList(){
    name = document.getElementById("updateList");

    let outfirstName = document.getElementById("");

    document.getElementById("outfirstName").value = outfirstName;
    document.getElementById("outlastName").value = outlastName;
    document.getElementById("outDoB").value = outDoB;
    document.getElementById("outbags").value = outbags;
    document.getElementById("outdeparting").value = outdeparting;
    document.getElementById("outarriving").value = outarriving;
    document.getElementById("outleaveDate").value = outleaveDate;
    document.getElementById("outreturnDate").value = outreturnDate;
    document.getElementById("outdurration").value = outdurration;
    //document.getElementById("outmeal").value = ;
    //document.getElementById("outage").value = ;
    //document.getElementById("outextras").value = ;
    //document.getElementById("outcost").value = cost;
}


function search(){
    let options = document.getEle.value;
    let users = userList.length;
    let input = document.getElementById("").value
    input = input.toLowerCase();

    for(i = 0; i < x[i].length; i++){
        if(users[i].innerHTML.includes(input)){
            document.getElementById("name").;
        }

    for()
    }
}