alert("asociado");
let arreglo = ["", "", "","",""];
var vboxSelected = document.getElementById("boxSelected");
        var vboxBread = document.getElementById("boxBread");
        var vboxProtein = document.getElementById("boxProtein");
        var vboxCheese = document.getElementById("boxCheese");
        var vboxVege = document.getElementById("boxVege");
        var vboxSauce = document.getElementById("boxSauce");
        var vboxIngredient = document.getElementById("vboxIngredient");
        var ptin = document.getElementsByClassName("protein");
        var chees = document.getElementsByClassName("cheese");
        var vege = document.getElementsByClassName("vegetable");
        var brea = document.getElementsByClassName("bread");
        var sauc = document.getElementsByClassName("sauce");
        
    
        vboxSelected.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxSelected.addEventListener("drop",(ev) => drop(ev));
    
        vboxProtein.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxProtein.addEventListener("drop",(ev) => drop1(ev));
    
        vboxCheese.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxCheese.addEventListener("drop",(ev) => drop1(ev));
    
        vboxVege.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxVege.addEventListener("drop",(ev) => drop1(ev));

        //vboxIngredient.createElement("Table")

        for (var i=0; i<ptin.length; i++){
          brea[i].setAttribute("draggable","true");
          brea[i].addEventListener("dragstart",(ev) => startDrag(ev))
        }
    
        for (var i=0; i<ptin.length; i++){
          ptin[i].setAttribute("draggable","true");
          ptin[i].addEventListener("dragstart",(ev) => startDrag(ev))
        }
    
        for (var i=0; i<chees.length; i++){
          chees[i].setAttribute("draggable","true");
          chees[i].addEventListener("dragstart",(ev) => startDrag(ev))
        }
    
        for (var i=0; i<vege.length; i++){
          vege[i].setAttribute("draggable","true");
          vege[i].addEventListener("dragstart",(ev) => startDrag(ev))
        }

        for (var i=0; i<vege.length; i++){
          sauc[i].setAttribute("draggable","true");
          sauc[i].addEventListener("dragstart",(ev) => startDrag(ev))
        }
        function startDrag(ev) {
          ev.dataTransfer.setData("id", ev.target.id);
        }
        function allowDrop(ev) {
          console.log("Dropping");
          ev.preventDefault();
        }
        function drop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("id");
          vboxSelected.appendChild(document.getElementById(data));
          console.log(data);

          //if(arreglo[0] != "" && arreglo[1] !="" && arreglo[2] != ""){
          // if(arreglo[0]=="protein" && arreglo[1]=="vegetable" && arreglo[2]=="cheese"){
          // document.querySelector("h3").innerHTML = "Selected ingredients!"
         //  }
         // else{
          //  document.querySelector("h3").innerHTML = "Check your ingredients!"
          // }}
            console.log(arreglo);
          }
    
        function drop1(ev) {
          if(ClassName == "protein"){
            ev.preventDefault();
            var data = ev.dataTransfer.getData("id");
            vboxProtein.appendChild(document.getElementById(data));
            console.log("return"+[data]);
            console.log(vboxProtein);
          }
         else{
            if(ClassName == "cheese"){
              ev.preventDefault();
              var data = ev.dataTransfer.getData("id");
              vboxCheese.appendChild(document.getElementById(data));
              console.log("return"+[data]);}
            else{
              if(ClassName == "vegetable"){
                ev.preventDefault();
                var data = ev.dataTransfer.getData("id");
                vboxVege.appendChild(document.getElementById(data));
                console.log("return"+[data]);}
              }
            }
          }
    
        