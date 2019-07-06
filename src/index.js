module.exports = function check(str, bracketsConfig) {
var str;
var v2;
var bracketsConfig;
var iv = 0;
var ic =0;
var d=0;
var t1=-1;
var t2=-1;
var text;
var numbe;
var test=0;

d=Math.ceil(str.length/2);
d1=Math.floor(str.length/2);
if (d!=d1){
	test=1;
} else
{
v2=str;
for (iv=0; iv<d; iv++)
{	
	for (ic=0; ic<bracketsConfig.length; ic++) {
	
		if (v2 != "")
			{
			t1 =v2.indexOf(bracketsConfig[ic][0]);
			if (t1>-1)
			{
				t2 = v2.indexOf(bracketsConfig[ic][1]);				
			if (t2>-1)
			{
				if (t1<t2)
				{
				v2=del(v2,t1);
				v2=del(v2,t2-1); 				
				} else if(t1>t2)
				{
				test=1;        			     
				};	
			t1=-1;
			t2=-1;			
			} else {
			test=1;
			};
			};
		};
		
		
		
    };    
};
};

if (test>0)
{
	return false;
} else 
{
	return true;
};
function del(text, numbe){	
    var text1 = text.substring(0, numbe);
    var text2 = text.substring(numbe+1, text.length);
    text=text1+text2;	
    return text;
};
  // your solution
}
