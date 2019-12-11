var jocurivechi = ["Coșul tău: "]; 
document.getElementById("vechi").innerHTML=jocurivechi;

function nfshp2push(){
	jocurivechi.push("NFSHP", );
	document.getElementById("vechi").innerHTML=jocurivechi;	
}

function flatoutpush(){
	jocurivechi.push("FlatOut", );
	document.getElementById("vechi").innerHTML=jocurivechi;
}


function nascarpush(){
	jocurivechi.push("NascarRacing", );
	document.getElementById("vechi").innerHTML=jocurivechi;
}

function f1push(){
	jocurivechi.push("F1", );
	document.getElementById("vechi").innerHTML=jocurivechi;
}

function popvechi(){
	jocurivechi.pop();
	document.getElementById("vechi").innerHTML=jocurivechi;
	
}

var jocurivechi1=["NFSHP"];
var jocurivechi2=["F1"];

function concat(){
var concat=jocurivechi1.concat(jocurivechi2);
document.getElementById("vechi").innerHTML=concat;
}
var jocurinoi=["Coșul tău: "];




