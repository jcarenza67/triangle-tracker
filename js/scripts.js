//Business logic



//User Interface
window.addEventListener("load", function () {
    
  });
  
  function display(event){
    const input1 = parseFloat(document.querySelector("input#input1").value);
    const input2 = parseFloat(document.querySelector("input#input2").value);
    const input3 = parseInt(document.querySelector("input#input3").value);
    event.preventDefault();
    

  
  }
  let result;
  if (input1 === input2 && input1 === input3){
    result = display
    document.getElementById("output").innerText = result;
  }
  