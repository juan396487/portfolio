$(function() {

	// Custom JS







});



$('.button').mousedown(function() {
	$(this).addClass('down');
});


$('.button').mouseup(function() {
	$(this).removeClass('down');
});


function viewProjects(type) {

	if(type == 'developer') { var othertype = 'designer'; }
	if(type == 'designer') { var othertype = 'developer'; }

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById(type).innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", type + "-projects.html", true);
	xhttp.send();

	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById(othertype).innerHTML = this.responseText;
		}
	};
	xhttp2.open("GET", othertype + "-skills.html", true);
	xhttp2.send();

	if ($(window).width() > 750) {
		$('#' + type).addClass('scroll');
	$('#' + othertype).removeClass('scroll');
	 }

	

}

