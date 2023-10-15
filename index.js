var randomnumber = (Math.random()*6)+1;
randomnumber = Math.floor(randomnumber);
var imageselect = "dice"+randomnumber+".png";
var folder = "images/"+imageselect;
var img = document.querySelectorAll("img")[0];
img.setAttribute("src",folder);

var random2 = (Math.random()*6)+1;
random2 = Math.floor(random2);
var img1 =  "dice"+random2+".png";
var fold = "images/"+img1;


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",fold);

if(randomnumber>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random2>randomnumber){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
//  this is used to generate and set attribute in a html file


