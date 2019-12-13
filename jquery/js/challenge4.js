$("#ch4form").submit(function(){
	var correct = true
	var name = $("#fullname");
	var address = $("#streetaddr");

	if(name.val().length == 0) {
		$("#nameerrormsg").css("display", "block");
		var correct = false
	}
	else {
		$("#nameerrormsg").css("display", "none");
	}

	if(address.val().length == 0){
		$("#addrerrormsg").css("display", "block");
		var correct = false
	}
	else {
		$("#addrerrormsg").css("display", "none");
	}
	return correct;
})