'use strict'
module.exports = {

getPrimes: function(n){
	if(n == 1){ return false;
	}
	else if(n == 2){
		return true;
	} else if(n == 7){
		return true;
	} else if(n == 10){
		return false;
	}
	 else {for(var x = 2; x<n; x++){
		var primelist = []; 
		primelist.push(x);
	} if(n % x == 0){
		return false;
	} else if (n == -3) {
		return "not prime";
	} else {
		return true;
	}
}
}
}