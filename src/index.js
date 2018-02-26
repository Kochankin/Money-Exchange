module.exports = function makeExchange(currency) {
    var nomH = 50;
	var nomQ = 25;
	var nomD = 10;
	var nomN = 5;
	var nomP = 1;
	
	var result = {};
	
	if (currency >= 10000){
		result.error = "You are rich, my friend! We don't have so much coins for exchange";
		return result;
	} else if (currency <= 0){
		return result; 
	} else{
		var countH = Math.floor(currency/nomH); //199
		var residue = currency - nomH*countH; // 49
		var countQ = Math.floor(residue/nomQ); //1
		residue = residue - nomQ*countQ; // 24
		var countD = Math.floor(residue/nomD); // 2
		residue = residue - nomD*countD; // 4
		var countN = Math.floor(residue/nomN); // 0
		residue = residue - nomN*countN; // 4
		var countP = Math.floor(residue/nomP); //4

	if (countH !== 0){
		result["H"] = countH;
	}
	if (countQ !== 0){
		result["Q"] = countQ;
	}
	if (countD !== 0){
		result["D"] = countD;
	}
	if (countN !== 0){
		result["N"] = countN;
	}
	if (countP !== 0){
		result["P"] = countP;
	}
		
		return result;
	}
}
