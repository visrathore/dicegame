var randomnumber1=Math.floor(Math.random()*6+1);
// for image 1
var dicee1="images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",dicee1);

// for image2
var randomnumber2=Math.floor(Math.random()*6+1);
var dicee2="images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",dicee2);

if(randomnumber1===randomnumber2)
{
  document.querySelector("h1").innerHTML= "Draw!";
}
else if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
