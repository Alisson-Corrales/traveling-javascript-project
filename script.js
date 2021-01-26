"use strict";

//this holds all the info you give
class User{
    constructor(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, chick, fish, veg, legroom, window, headphones, moreFood){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.chick = chick;
        this.fish = fish;
        this.veg = veg;
        this.legroom = legroom;
        this.window = window;
        this.headphones = headphones;
        this.moreFood = moreFood;
    }
}


let ID = 1987;
//array for holding values
let userList = [("Ludwig", "Van Pelt", "1/12/1890", 1986, ""), ("Mickard", "Mundy", "2/25/2001", 1935, "")]; //array with users

//this adds the inputted info
function addToList(){
    let firstName = document.getElementById("firstName").value; //this takes the value in the input and puts it in the new user
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

    let passenger = new User(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, chick, fish, veg, legroom, window); //the new user

    document.getElementById("firstName").value = ""; //this makes the place where you input empty
    document.getElementById("lastName").value = "";
    document.getElementById("DoB").value = "";
    document.getElementById("departing").value = "";
    document.getElementById("arriving").value = "";
    document.getElementById("leaveDate").value = "";
    document.getElementById("returnDate").value = "";
    document.getElementById("bags").value = "";
    document.getElementById("chick").value = "";
    document.getElementById("fish").value = "";
    document.getElementById("veg").value = "";
    document.getElementById("legroom").value = "";
    document.getElementById("window").value = "";
}