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
		 
		var countH, countQ, countD, countN, countP; 

		var residue = currency; 

		function getCount (nominal) {
			var count = Math.floor(residue/nominal);
			residue = residue - nominal*count; 
			return count;
		}

		countH = getCount(nomH);
		countQ = getCount(nomQ);
		countD = getCount(nomD);
		countN = getCount(nomN);
		countP = getCount(nomP);

		function addToResult(nom, count){
			if (count !== 0){
				result[nom] = count;
			}
		}

		addToResult("H", countH);
		addToResult("Q", countQ);
		addToResult("D", countD);
		addToResult("N", countN);
		addToResult("P", countP);

		return result;
	}
}

