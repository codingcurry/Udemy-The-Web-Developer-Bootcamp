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