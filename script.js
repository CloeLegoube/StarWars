function Open() {
	document.getElementById("myDropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'none';
	logo.style.display = 'none';
	close.style.display = 'block';
}
function Close() {
	document.getElementById("myDropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'block';
	logo.style.display = 'block';
	close.style.display = 'none';
}
$( document ).ready(function() {
	function Scroll(bottom) {
		var publicite = document.getElementById("publicite");
		var image = document.getElementById("img-publicite");
		var wpos = window.pageYOffset;
		var pubHeight = publicite.offsetHeight;
		if (wpos <= pubHeight)
			image.style.bottom = '-'+ (wpos) + 'px';
		else
			image.style.bottom = '-'+ (pubHeight) + 'px';
	}
	function Logo() {
		var logo = document.getElementById("logo");
		var header = document.getElementById("header");
		var publicite = document.getElementById("publicite");
		var pubPos = publicite.offsetTop;
		var wpos = window.pageYOffset;
		var headerHeight = header.offsetHeight;
		if (wpos <= headerHeight)
			logo.style.bottom = (wpos * 1.1) + 'px';
		else
			logo.style.bottom = bottom;
	}
	window.addEventListener("scroll", Scroll);
	window.addEventListener("scroll", Logo);
});
