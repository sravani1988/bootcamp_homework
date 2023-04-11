// fortune teller

var job = ["tester","modeller","developer","seniorresearcher"];
var city = ["cincinnati","Batavia","Kentucky","Eventsville"];
var spouse = ["sravani","venkata","Naga","Lakshmi"];
var numkids = [0,1,2,3];
var xx = Math.floor(Math.random() * 4 )
function fortune(job,city,spouse,numkids) {
console.log("you will be a " + job +" in " + city + ", and married to " + 
spouse + " with " + numkids + " kids.");}

fortune(job[xx],city[xx],spouse[xx],numkids[xx])

