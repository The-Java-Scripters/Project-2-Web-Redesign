$(document).ready(function(){
  $('.slider').bxSlider();
});

function validateForm() {
var name = document.getElementById("fname").value;
var email = document.getElementById("em").value;
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
if (name === '' || email === '') {
  alert("Must fill in all fields");
  return false;}
  else {
    return true;
  }
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
