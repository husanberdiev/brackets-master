var str;
var bracketsConfig=new Array();

module.exports = function check(str, bracketsConfig) {
var stepC;
var stepS;
var t1=-1;
var t2=-1;
var strCopy= new Array();
var text;
var numbe;
var test=0;

	if ((str.length % 2) == 1)
    { 
    	test=1; 	    
    } else
    {
    	strCopy= str;
    	for (stepC=0; stepC<bracketsConfig.length; stepC++)
    	{        	
    		for (stepS=0; stepS<strCopy.length; stepS++)
            {            
            	t1 = strCopy.indexOf(bracketsConfig[stepC][0],stepS);            
                if (t1 >-1)
                {
                	t2= strCopy.indexOf(bracketsConfig[stepC][1],t1+1);
            
                    if (t1==(t2-1))
                    {            
                    	strCopy=del(strCopy,t1);
                        t1=-1;
                        t2=-1;
                        stepS=-1;
                        stepC=0;            
                    }
               }
            }
    	}
    }    
    if ((test>0) || (strCopy.length >0))
	{
	return false;
	} else 
	{
	return true;
	}	
    function del(text, numbe)
    {	
    	var text1 = text.substring(0, numbe);
    	var text2 = text.substring(numbe+2, text.length);
    	text=text1+text2;	
    	return text;
    };
  // your solution
}
