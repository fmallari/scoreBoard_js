let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let home = 12
let guest = 5

//Increment home score according to assigned button   

function homeOne() {
    home += 1 
    homeScore.textContent = home

 }

function homeTwo() {
    home += 2 
    homeScore.textContent = home
 }

function homeThree() {
    home += 3 
    homeScore.textContent = home
 }

 // increment guest score according to assigned button

function guestOne() {
    guest += 1 
    guestScore.textContent = guest

 }

function guestTwo() {
    guest += 2 
    guestScore.textContent = guest
 }

function guestThree() {
    guest += 3 
    guestScore.textContent = guest
 }



