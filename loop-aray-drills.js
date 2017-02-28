function min(numbers){
	var i = 0
	let smallest = undefined;
	while(i < numbers.length) {
		if (smallest === undefined){
			smallest = i;
		}
		if (i < smallest) {
			smallest = i;
		}
		i++;
	}
	return smallest;
}

function max(numbers){

}
min([4,7,2,1,0,11]);
max([4,7,2,1,0,11]);
