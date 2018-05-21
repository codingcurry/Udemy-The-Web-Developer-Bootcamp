let age = Number(prompt("What's your age?"));

if(age<0) {
	console.log("Error invalid age.");
}
if(age===21) {
	console.log("happy 21st birthday!");
}
if(Math.sqrt(age)%1===0) {
	console.log("perfect square!");
}
if(age%2!=0) {
	console.log("your age is odd");
}