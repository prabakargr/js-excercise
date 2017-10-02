/*----alert----*/
	function alertFunction() {
		var a=document.getElementById('input').value;
		alert(a)
	}
/*----Onkeyup----*/

	function myFunction(){
		var b=document.getElementById('getvalue').value;
		document.getElementById('result').innerHTML=b;
	}
/*----Onkeyup with array find true or false----*/	
	function findVariable(){
		var nums = ["1","2","3","4","5","6","7","8","9","10"];
		var c = document.getElementById('findvarb').value
		if (nums.indexOf(c)!=-1){
			document.getElementById('trueofalse').innerHTML=true;
		}else{
			document.getElementById('trueofalse').innerHTML=false;
		}
	}
	//switch case---------
	function checkSwitch(){
		var text;
		var foods=document.getElementById('defineabt').value;
		switch(foods) {
			case "parota":
			text="very worst food";
			break;
			case"chappathi":
			text="good for health"
			break;
			default:
			text="i dont know abt"
		}
		document.getElementById('note').innerHTML=text;
	}
	//For Loop--------------
	function loopFunction() {
	var inpvalue=document.getElementById('ipv').value;
	var text=0;
	var numsArray=[1,2,3,4,5,1,2,3,4,5,6,1,2,3,4,5,6,7,1,2,3,4,5,6,7,8]
	for ( i = 0; i < numsArray.length; i++) {
	   if(numsArray[i]==inpvalue){
	   	text++
	   }
	}
	document.getElementById('output').innerHTML=text;
	document.getElementById('stdval').innerHTML=inpvalue;
}