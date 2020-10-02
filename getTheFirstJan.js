/**/


for(let i= 2014; i<=2050; i++){
	let d = new Date(i,0,1).getDay();
	if(d == 0){
		console.log(i);
	}
}

