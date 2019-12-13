// ch3form.onsubmit = function() {
// 	let fruit = document.querySelectorAll('input[name="fruit"]')
// 	for (Let i = 0, )

// 	alert("Pick a fruit!")
// 	return false;
// }

$("#ch3form").submit(function(){
	var fruit = $('input[name="fruit"]')

	for (let i = 0; i < fruit.length; i++) {
		if (fruit[i].checked)
			return true;
	}
	alert("Pick a fruit first!")
	return false;
})

$("#ch3form").submit(function(){
	var year = $('input[name="standing"]')

	for (let i = 0; i < year.length; i++){
		if (year[i].checked)
			return true;
	}
	alert("Pick a year in college!")
	return false;
})