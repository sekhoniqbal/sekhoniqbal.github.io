window.onclick =makeRipple;
window.ontouchstart = makeRipple;
 function makeRipple(e){
  console.log(e);
  posx = e.pageX;
  posy = e.pageY;
  left = (posx-200)+"px"
  top = (posy-200)+"px"
  condiv = document.createElement("div");
  condiv.style.position = "absolute";
  condiv.style.left = posx+"px";
  condiv.style.top = posy+"px";
  document.body.append(condiv);
  color = randomColor();
  condiv.innerHTML = `
  <div class="wave wave1" style="border:2px solid ${color};"></div>
  <div class="wave wave2" style="border:2px solid ${color};"></div>
  <div class="wave wave3" style="border:2px solid ${color};"></div>
  <div class="wave wave4" style="border:2px solid ${color};"></div>
`;
setTimeout(function(condiv){condiv.remove();}, 12000, condiv);

}

function randomColor(){
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}
