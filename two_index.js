var url = require("url");
var parsedURL = url.parse("http://www.example.org/profile?name=barry");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);