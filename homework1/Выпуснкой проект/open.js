function myFunction() {
  document.getElementById("mav").classList.toggle("showa");
  document.getElementById("mava").classList.toggle("showa");
}
window.onclick = function(event) {
if (!event.target.matches('.header__btn-menu')) {

var dropdowns = document.getElementsByClassName("menu");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
  openDropdown.classList.remove('show');
}
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('showa')) {
  openDropdown.classList.remove('showa');
}
}
}
}
