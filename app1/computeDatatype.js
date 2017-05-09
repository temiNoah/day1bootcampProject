const 
dataTypes=(data)=>{
	if(data === null)
	{
        return 'no value';
	}
	else if(data === undefined)
	{
        return 'no value';
	}
	else if(typeof(data) === "string")
	    return data.length;
	
	else if(typeof(data) === "boolean")
	     return data;
	else if(typeof(data) === "number")     
	 {
	 	  if(data < 100)
	          return 'less than 100';
	      else if(data > 100)
	      	   return 'more than 100';
	      else if(data === 100)
	       return 'equal to 100';
	}
    else if(typeof(data) === "object")
    	  {
    	  	 
    	     if(data.length >= 3)	
    	     	return data[2];
    	     else if(data.length < 3) 
    	     	return undefined;
    	  }
    else if(typeof(data) === "function")
    {
             return 'called callback';
    }

}

exports.dataTypes = dataTypes;