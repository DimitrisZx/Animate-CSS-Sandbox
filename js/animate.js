
var animatedText = document.getElementById('animateMe');

function changeClass(){
  var newClass = document.getElementById('selection').value;
  animatedText.className = "";
  animatedText.classList.add("animated");
  animatedText.classList.add(newClass);
  console.log(animatedText.classList);
}
