const arreglo = [];
  const prices = [];
  let stringTable ="<tr><th>Ingrediente</th><th>Price</th></tr>";
        var vboxSelected = document.getElementById("boxSelected");
        var vboxBread = document.getElementById("boxBread");
        var vboxProtein = document.getElementById("boxProtein");
        var vboxCheese = document.getElementById("boxCheese");
        var vboxVege = document.getElementById("boxVege");
        var vboxSauce = document.getElementById("boxSauce");
        var brea = document.getElementsByClassName("bread");
        var ptin = document.getElementsByClassName("protein");
        var chees = document.getElementsByClassName("cheese");
        var vege = document.getElementsByClassName("vegetable");
        var sauc = document.getElementsByClassName("sauce");

        
        const listofSelected = {
          'white_Bread':1.25 , 'whole_Bread':1.50 , 'garlic_Bread':1.75 ,
          'roast_Beaf':5 , 'grill_chick':4 , 'mushrooms':3 ,
          'cheddar' :2 , 'gruyere':3 , 'mozzarella':4 ,
          'green_Lettuce': 1 , 'pikles':1.25 , 'purple_Lettuce':2 ,
          'hot_Sauce':1.5 , 'mustard_Sauce':1.75 , 'mayo_Sauce':1.25
        };
        

        const listaDeClases = ["bread", "protein", "cheese", "vegetable", "sauce"];
    
        vboxSelected.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxSelected.addEventListener("drop",(ev) => drop(ev));
    
        vboxProtein.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxProtein.addEventListener("drop1",(ev) => drop1(ev));
    
        vboxCheese.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxCheese.addEventListener("drop1",(ev) => drop1(ev));
    
        vboxVege.addEventListener("dragover",(ev) => allowDrop(ev));
        vboxVege.addEventListener("drop1",(ev) => drop1(ev));


        for (var i=0; i<brea.length; i++){
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
          arreglo.push(data);
          console.log(arreglo);

          switch (data) {
            case "white_Bread":
                var price = listofSelected.white_Bread;
                break;
            case "whole_Bread":
                var price = listofSelected.whole_Bread;
                break;
            case "garlic_Bread":
                var price = listofSelected.garlic_Bread;
                break;
            case "roast_Beaf":
                var price = listofSelected.roast_Beaf;
                break;
            case "grill_chick":
                var price = listofSelected.grill_chick;
                break;
            case "mushrooms":
                var price = listofSelected.mushrooms;
                break;
            case "cheddar":
                var price = listofSelected.cheddar;
                break;
            case "gruyere":
                var price = listofSelected.gruyere;
                break;
            case "mozzarella":
                var price = listofSelected.mozzarella;
                break;
            case "green_Lettuce":
                var price = listofSelected.green_Lettuce;
                break;
            case "pikles":
                var price = listofSelected.pikles;
                break;
            case "purple_Lettuce":
                var price = listofSelected.purple_Lettuce;
                break;              
            case "hot_Sauce":
                var price = listofSelected.hot_Sauce;
                break;
            case "mustard_Sauce":
                var price = listofSelected.mustard_Sauce;
                break;
            case "mayo_Sauce":
                var price = listofSelected.mayo_Sauce;
                break;    
            default:
                console.log("Choose the ingredient.");
          }
          prices.push(price);
          const OnlyValue = Object.values(prices);
          const suma = OnlyValue.reduce((acumulador , elemento) => acumulador + elemento, 0);
          console.log(suma);
          let printTotal= document.getElementById("total");
          printTotal.innerHTML = "<b>Total: </b>" + suma;
        

          if (arreglo.length==5){
          document.querySelector("h3").innerHTML = "Selected ingredients!"
        }
          else{
            {document.querySelector("h3").innerHTML = "Sandwich in process..."}
          }
          let createTable = function(arreglo){
             let stringTable ="<tr><th>Ingrediente</th><th>Price</th></tr>";
           for (i=0;i<arreglo.length;i++){
              
              let fila = "<tr><td>"
                fila += arreglo[i];
                fila += "</td>"
                fila += "<td>"
                fila += prices[i];
                fila += "</td>"  

                fila += "</tr>";
                stringTable += fila;
            }
              return stringTable;
          };
          document.getElementById("ingredients").innerHTML = createTable(arreglo);
          createTable(arreglo);
          
          }
    
        function drop1(ev) {
          if(ClassName == "protein"){
            ev.preventDefault();
            var data = ev.dataTransfer.getData("id");
            vboxProtein.appendChild(document.getElementById(data));
            console.log("return"+[data]);
            console.log(vboxProtein);
          }}

        function showimage(){
        var imagen = document.getElementById("orderSandwich");
        if (imagen.style.display === "none") {
          imagen.style.display = "block"; // Muestra la imagen
        } else {
          imagen.style.display = "none"; // Oculta la imagen
        }
        
      }

      function toastFunct(x){
        document.getElementById("final").innerHTML = "<b id='final'>Final SelfSandwich! - </b>" + x;
      }
