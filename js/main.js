/*
var image1 = document.getElementById("img#image1");
image1.addEventListener("click", function(){
  alert("Clicked " + this.target.id);
});

var image2 = document.getElementById("img#image2");
image2.addEventListener("click", function(){
  alert("Clicked " + this.target.id);
});
*/

$("img.dinnerImage").click(function(){
  console.log(this.id);
});