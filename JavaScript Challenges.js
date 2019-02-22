// Challenge One //
function test65(x,y) {
if (x == 65|| y == 65) {
return true;

} else if (x + y == 65) {
return true;
} else {
return false; }
}
test65(56,65);




// Challenge Two //
function triArea(side1, side2, side3)
{
	var s = (side1 + side2 + side3)/2;
	var area = Math.sqrt(s*((s - side1) * (s - side2) * (s - side3)));
	console.log(area);
	}
	triArea (7,8,9);




	
	//Challenge Three //

	function largest( num1, num2, num3) 
	{
       if ( num1 > num2 && num1 > num3) 
       {
   	       return num1;
	   } 
	 else if ( num2 > num1 && num2 > num3)
	  {
		return num2; 	
      }
		else 
		{
			return num3;
	    }
	}
		largest (23,10,97);





// Challenge Four //

function time_convert(num)
{
var hours = Math.floor(num/60);
var minutes = num % 60;
return hours + ":" + minutes;
}
time_convert(1997);





// Challenge Five //

function commonCharacters(str1, str2)
{
	var one = str1;
	var two = str2;
	var result = [];
	for (var i = 0; i < one.length; i ++) {
	if (two.indexOf(one[i]) !== -1 && result
	.indexOf(one[i]) === -1) {
	result.push (one[i]);
	} }
	return result.join("");

}
console.log(commonCharacters('immune','mummy'));