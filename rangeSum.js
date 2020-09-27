const rangeSum = ([start, end]) =>{
	let ret =0;
	for(let i=start; i<=end; i++){
		ret+=i;
	}
	return ret;
}

//Other solution (arithmetic progression)
const rangeSum2 =([start,end]) =>{
	return((end-start+1)*(start+end))/2;
}

console.log(rangeSum([1,10]));
console.log(rangeSum2([1,10]));



