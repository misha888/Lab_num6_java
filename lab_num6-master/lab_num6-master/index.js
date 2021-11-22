var modal = document.getElementById('modalWindow');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("btnClose")[0];
var spant = document.getElementsByClassName("btnCloseText")[0];

btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
spant.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}