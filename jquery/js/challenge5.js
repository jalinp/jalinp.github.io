var pics = $(".preview");
var msg = "Hover over an image below."

for (let i = 0; i < pics.length; i++){
	pics[i].onmouseover = function(){
		$("#image").css("backgroundImage", "url('"+pics[i].src+"')");
		$("#image").html(pics[i].alt);
	}
	pics[i].onmouseleave = function(){
		$("#image").css("backgroundImage", "url('')");
		$("#image").html(msg);
	}
	pics[i].onblur = function(){
		$("#image").css("backgroundImage", "url('')");
		$('#image').html(msg);
	}
}