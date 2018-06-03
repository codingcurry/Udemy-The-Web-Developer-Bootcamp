function printReverse(arr) {

	for(let i = arr.length-1; i>=0; i--) {
		console.log(arr[i]);
	}

}

function isUniform(arr) {

	let key = arr[0];
	for(let i = 1; i<arr.length; i++) {
		if(key !== arr[i]) {
			return false;
		}
	}
	return true;

}

function sumArray(arr) {

	let sum = 0;
	for(let i = 0; i<arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}