//Business logic



//User Interface
window.addEventListener("load", function () {
    const form = document.getElementById("triangle");
    form.onsubmit = function(event) {
    let EqDorito = document.getElementById ("Equilateral");
    EqDorito.setAttribute("class", "hidden");
    let IsoPizza = document.getElementById ("Isosceles");
    IsoPizza.setAttribute("class", "hidden");
    let ScaleneTruck = document.getElementById ("Scalene");
    ScaleneTruck.setAttribute("class", "hidden");
    }
  });
  
  function displayPicture(event){
    const input1 = parseFloat(document.querySelector("input#input1").value);
    const input2 = parseFloat(document.querySelector("input#input2").value);
    const input3 = parseInt(document.querySelector("input#input3").value);
    event.preventDefault();
    

    document.querySelector("div#Equilateral").removeAttribute("class");
    document.querySelector("div#Isosceles").removeAttribute("class");
    document.querySelector("div#Scalene").removeAttribute("class");

  }
  let result;
  if (input1 === input2 && input1 === input3){
    result = EqDorito.removeAttribute("class")
  }
  