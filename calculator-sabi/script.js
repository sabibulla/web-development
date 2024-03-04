

function display(num){
    let input= document.getElementById("input");

input.value+=num;

}

function calculate(){

  input.value = eval(input.value)

}

function clear(){

 
  document.getElementById("input").value = "";

}

function del(){

 input.value = input.value.slice(0,-1)

 

}