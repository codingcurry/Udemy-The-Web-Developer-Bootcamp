function isEven(num) {
	if (num%2 === 0) {
		return true;
	}
	return false;
}

function factorial(num) {
	let answer = 1;
	for (let i=1; i<=num; i++) {
		answer = answer * i;
	}
	return answer;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}