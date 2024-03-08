let arreglo = ["", "", ""];
function allowDrop(ev){
   ev.preventDefault();
}

function drag(ev){
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
   if (arreglo[parseInt(ev.target.id)] == ""){
      var data = ev.dataTransfer.getData("text");
      arreglo[parseInt(ev.target.id)] = data;
      ev.target.appendChild(document.getElementById(data));
   }

   if(arreglo[0] != "" && arreglo[1] !="" && arreglo[2] != ""){
    if(arreglo[0]=="protein" && arreglo[1]=="vegetable" && arreglo[2]=="cheese"){
        document.querySelector("h2").innerHTML = "Selected ingredients!"
    }
    else{
        document.querySelector("h2").innerHTML = "Check your ingredients!"
    }
   }

}