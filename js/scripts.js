window.addEventListener("load", function () {
  const form = document.getElementById("triangle");
  form.addEventListener("submit", display);
});

function display(event){
  const input1 = parseFloat(document.querySelector("input#input1").value);
  const input2 = parseFloat(document.querySelector("input#input2").value);
  const input3 = parseFloat(document.querySelector("input#input3").value);
  event.preventDefault();

  let result;
  if (input1 === input2 && input2 === input3){
    result = "This is an Equilateral triangle";
  } else if (input1 === input2 && input1 !== input3){
    result = "This is an isosceles triangle";
  } else {
    result = "This is a scalene triangle";
  }
  document.getElementById("output").innerText = result;
}

