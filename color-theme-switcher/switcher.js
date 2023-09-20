
document.getElementById("plum").onclick=switchPlum;
document.getElementById("cornflowerblue").onclick=switchCornflowerblue;
document.getElementById("goldenrod").onclick=switchGoldenrod;
document.getElementById("mediumseagreen").onclick=switchMediumseagreen;
function switchPlum()
{
   document.getElementsByTagName("body")[0].style.backgroundColor="plum";
}
function switchCornflowerblue()
{
   document.getElementsByTagName("body")[0].style.backgroundColor="cornflowerblue";
}
function switchGoldenrod()
{
   document.getElementsByTagName("body")[0].style.backgroundColor="goldenrod";
}
function switchMediumseagreen()
{
   document.getElementsByTagName("body")[0].style.backgroundColor="mediumseagreen";
}