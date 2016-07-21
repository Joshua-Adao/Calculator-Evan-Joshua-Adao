function c(val){
	document.getElementById("display").value = val;
}

function math(val){
	document.getElementById("display").value += val;
}

function E(){
	try{
		c(eval(document.getElementById("display").value));
	}
	catch(E){
		c('ERROR')
	}
}