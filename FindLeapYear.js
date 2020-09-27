let year = prompt("Please enter the year");

function findLeapYear(year){
	if(year%4==0){
		if(year%100 ==0)
		{
			if(year%400==0){
				return "Leap";
			}else{
				return "No Leap";
			}
		}else{
			return "Leap";
		}
	}else{
		return "No Leap";
	}
}

document.write(findLeapYear(year));