let findMinMax=(numberArray){
	let minMax=[];

	sortedNumArrayAsc = numberArray.sorted();
	
	minMax[0] = sortedNumArrayAsc[0];
	minMax[1] = sortedNumArrayAsc[sortedNumArrayAsc.length-1];

    return minMax;
    
}
exports.findMinMax= findMinMax;
