let home = 12
let guest = 5

let homeScore = document.getElementById("home-score")

console.log(homeScore)




//function will increment score count according to assigned button   

function onePoint() {
    home = home + 1 
    console.log(home)
    homeScore.textContent = home

 }
 onePoint()

function twoPoints() {
    home = home + 2 
    homeScore.textContent = home
 }
 twoPoints()

function threePoints() {
    home = home + 3 
    homeScore.textContent = home
 }
 threePoints()


