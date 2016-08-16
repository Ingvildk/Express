 var Mustache = require("mustache");
 var result = Mustache.render("Hi, {{ first }} {{ last }}!", {
 	first: "Alicia",
 	last: "Vikander"
 });
console.log(result); 