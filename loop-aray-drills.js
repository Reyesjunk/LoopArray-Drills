
function min(numbers){
	var i = 0
	var smallest;
	while(i < numbers.length) {
		if (typeof smallest === 'undefined'){
			smallest = numbers[i];
		}
		if (numbers[i] < smallest) {
			smallest = numbers[i];
		}
		i++;
	}
	console.log(smallest);
}

function max(numbers){
	var j = 0;
	var largest;
		if (typeof smallest === 'undefined'){
			largest = numbers[j];
		}
		while(j < numbers.length) {
		if (numbers[j] > largest) {
			largest = numbers[j];
		}
		j++;
	}
	console.log(largest);

}
min([4,7,2,1,-5,11]);
max([4,7,2,1,0,11]);
//AVERAGE
function average(numberArray){
	let av = 0;
	numberArray.forEach(number => av+=number);
	return av/numberArray.length;
}
console.log(average([4,5,6,7,8,8]));

//FIZZ BUZZ
function fizzBuzz(countTo){
	let newArray = [];
	for(let i = 1; i<=countTo; i++){
		switch(true){
			case i % 15 === 0:
				newArray.push('fizzbuzz');
				break;
			case i % 3 === 0:
				newArray.push('fizz');
				break;
			case i % 5 === 0:
				newArray.push('buzz');
				break;		
			default:
				newArray.push(i);
				break;

		}
	};
	return newArray;
}
console.log(fizzBuzz(20));