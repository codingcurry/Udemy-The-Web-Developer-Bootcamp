console.log("WHILE LOOPS");
let count;
console.log("Print all numbers between -10 and 19");
count = -10;
while (count<20) {
	console.log(count);
	count++;
}
console.log("even numbers between 10 and 40");
count = 10;
while (count<41) {
	console.log(count);
	count += 2;
}
console.log("odd numbers between 300 333");
count = 301;
while (count<334) {
	console.log(count);
	count += 2;
}
console.log("numbers divisible by 5 and 3, between 5 and 50");
count = 5;
while (count<51) {
	if (count%5===0 && count%3===0) {
		console.log(count);
	}
	count++;
}
console.log("FOR LOOPS");
console.log("Print all numbers between -10 and 19");
for (let i=-10; i<20; i++) {
	console.log(i);
}
console.log("even numbers between 10 and 40");
for (let i=10; i<41; i+=2) {
	console.log(i);
}
console.log("odd numbers between 300 333");
for (let i=301; i<334; i+=2) {
	console.log(i);
}
console.log("numbers divisible by 5 and 3, between 5 and 50");
for (let i=5; i<51; i++) {
	if (i%5===0 && i%3===0) {
		console.log(i);
	}
}