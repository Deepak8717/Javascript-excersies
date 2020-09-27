/*Challange 1 

	Output the following sample;

	==== > Today is : Saturday.
	==== > Current time is : 08 PM:30:38 

*/



let d = new Date();
let weekday = new Array(7);
weekday[0] ="Sunday";
weekday[1] ="Monday";
weekday[2] ="Tuesday";
weekday[3] ="Wednesday";
weekday[4] ="Thursday";
weekday[5] ="Friday";
weekday[6] ="Saturday";
 let h = d.getHours();
 let m = d.getMinutes();
 let s = d.getSeconds();

function addZero(n){
	if(n<10){
		n = "0"+n;
	}
	return n;
}
function AMPM(n){
	
	if(n>12){
		n = n-12;
		n = addZero(n);
		n = n+" PM";
	}else{
		n = addZero(n);
		n = n+" AM";
	}
	return n;
}

console.log("Today is", weekday[d.getDay()]);
console.log("Current Time is", AMPM(h)+":"+addZero(m)+":"+addZero(s));

/*
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/



console.log(addZero(d.getMonth())+"-"+addZero(d.getDate())+"-"+addZero(d.getFullYear()));