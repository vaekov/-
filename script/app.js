let one = document.querySelector("#one");
let two = document.getElementById("two");
let three = document.getElementById("three");
//let styleOne = window.getComputedStyle(ones,null).getPropertyValue("left");
console.log(one.style.backgroundcolor == "rgba(1, 138, 190, 1)");

one.onclick = function(){
  
    one.style.backgroundcolor = "#018ABE";
    one.style.width = "380px";
    one.style.height = "250px";
    one.style.opacity = "1";
    one.style.left = "380px";
    one.style.top = "0";

    two.style.backgroundcolor = "rgba(1, 138, 190, 1)";
    two.style.width = "330px";
    two.style.height = "200px";
    two.style.opacity = ".3";
    two.style.left = "810px";
    two.style.top = "25px";
    
    three.style.zIndex = "-1";
    three.style.right = "810px";
 
    

  }