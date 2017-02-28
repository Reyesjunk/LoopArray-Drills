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
			largest = numbers[i];
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
