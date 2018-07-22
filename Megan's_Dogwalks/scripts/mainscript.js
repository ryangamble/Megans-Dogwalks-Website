function addTestimony() {
    var x = document.getElementById("form");
    var text = "";
    var i;
    for (i = 1; i <= x.length-1 ;i++) {
        text += x.elements[i].value;
		if(i == 1){
			document.getElementById("newh2").innerHTML = text;
		}
		if(i == 2){
			document.getElementById("newp").innerHTML = text;
		}
		text = "";
	}
}