const findMinMax=(numberArray)=>{
	let minMax=[];

	let sort =(numberArray)=>{
             //let max=numberArray[0];
             for(counter = 0 ; counter < numberArray.length-1; counter++ )
             {
             	for(counter2=counter+1; counter2<numberArray.length;counter2++)
             	  if(numberArray[counter] > numberArray[counter2])
             	    {
             	    	 max = numberArray[counter];
             	    	 numberArray[counter] = numberArray[counter2];
             	    	 numberArray[counter2] = max;
             	    }
             }

            return numberArray;
	 }
	
	minMax[0] = sort(numberArray)[0];
	minMax[1] = sort(numberArray)[numberArray.length-1];
  
    if(minMax[0] === minMax[1])
        {
        	let value = minMax[0];
        	minMax= [];
        	minMax[0] = value;
        }
    return minMax;
    
}
exports.findMinMax= findMinMax;
