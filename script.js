"use strict";

//this goes through the Extras checkboxes and
function checkbox(name) {
    let extras = document.getElementsByName(name);
    let extraArray = [];
    for (let i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            extraArray.push(extras[i].value);
        }
    }
    return extraArray
}

//this holds all the info you give
class User {
    constructor(firstName, lastName, Id, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extras) {
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
        this.extras = extras;
    }

    formatDate(date){
        console.log(date);
        date = new Date(date);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if(month < 10){
            month = "0" + month;
        }
        if(day < 10){
            day = "0" + day;
        }
        return `${year}-${month}-${day}`
    }

    getAge(){
        let DoB = this.DoB.getTime();
        let today = Date.now();
        let age = Math.floor((today - DoB)/(1000 * 60 * 60 * 24 * 365.25));
        return age;
    }

    getDurration(){
        let leaveDate = this.leaveDate;
        let returnDate = this.returnDate;
        let durration = Math.floor((returnDate - leaveDate)/(1000 * 60 * 60 * 24));
        return durration;
    }

    getCost(){
        let price = 300;
        let extras = this.extras;
        let add = 0;
        if(extras.value == true){
            add = add + 10;
        }
        let finalPrice = Math.floor((price + add));
        return finalPrice;
    }
}



let userId = 1987;
//array for holding users, empty for our convenience
let userList = []
let user = new User("Ludwig", "Van-Pelt", "1987", "1-12-1890", "Huttsburg, Germany", "Teufort, NM", "4-18-1960", "4-20-1960", 3, ["chick"], [""])
userList.push(user);

user = new User("Mickard", "Mundy", "1936", "2-25-2001", "Victoria, Australia", "Teufort, NM", "4-18-2000", "4-20-2000", 1, ["fish"], [""]);
userList.push(user);

console.log(userList);



//this adds the inputted info
function addToList() {    //this takes the value in the input and puts it in the new user
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    DoB = new Date(DoB);
    DoB = DoB.getTime()+(1000 * 60 * 60 * 7);
    DoB = new Date(DoB);
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    leaveDate = new Date(leaveDate);
    leaveDate = leaveDate.getTime()+(1000 * 60 * 60 * 7);
    leaveDate = new Date(leaveDate);
    let returnDate = document.getElementById("returnDate").value;
    returnDate = new Date(returnDate);
    returnDate = returnDate.getTime()+(1000 * 60 * 60 * 7);
    returnDate = new Date(returnDate);
    let bags = document.getElementById("bags").value;
    let meal = checkbox('meal').join(", ");
    let extras = checkbox('extra').join(", ")

    userId++;

    //the user's info
    let passenger = new User(firstName, lastName, userId, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extras); //the new user

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
}

function print(){
    let names = document.getElementById("names");

    names.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        names.innerHTML +=
            `<div> ${userList[i].firstName} ${userList[i].lastName} ${userList[i].Id} </div>`;
    }
}


//should update the same user
function updateList() {
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


function search() {
    let name = document.getElementById("search").value;
    name = name.split(" ");

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].firstName == name[0] && userList[i].lastName == name[1]) {
            let user = userList[i];

            document.getElementById("outfirstName").value = user.firstName;
            document.getElementById("outlastName").value = user.lastName;
            document.getElementById("outDoB").value = user.formatDate(user.DoB);
            document.getElementById("outbags").value = user.bags;
            document.getElementById("outdeparting").value = user.departing;
            document.getElementById("outarriving").value = user.arriving;
            document.getElementById("outleaveDate").value = user.formatDate(user.leaveDate);
            document.getElementById("outreturnDate").value = user.formatDate(user.returnDate);
            document.getElementById("outdurration").textContent = user.getDurration();
            document.getElementById("outmeal").value = user.meal;
            document.getElementById("outage").textContent = user.getAge();
            document.getElementById("outextras").value = user.extras;
            document.getElementById("outcost").textContent = user.getCost();
        }
}}