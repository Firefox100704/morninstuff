



 // all jQuery method
//$().click(function(){
  //$("div").animate({left: '150px'});


// paragraph.innerHTML = "people can see this";
// var videoBanner = document.getElementsById('videoBanner');
// videoBanner.appendchild(paragraph);
// var paragraph = document.createElements("p");

// //new header 
// var newHeader = document.createElements("h2");
// newHeader.innerHTML = 'ladies and gentlemen';
// videoBanner.insertbefore(newHeader,paragraph);

// //removing stuff
// videoBanner.removeChild('paragraph');
// videoBanner.removeChild("newHeader");

var button = document.getElementById("button");
button.addEventListener('click', myFunction);

function myFunction() {
  var x = document.getElementById("hideMe");

  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}
var y = document.getElementsById("hobby")
if (y.style.display === "none") {
	y.style.display = "none";
} else {
	y.style.display = "block";
}



