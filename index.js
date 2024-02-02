var player = 0;
var cpu = 0;
function play(option,name,img){
  var originalDiv = document.getElementById('contenedorSeleccion').innerHTML;
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.disabled = true;
  });
  var cpOption = Math.floor(Math.random() * 3) + 1;
  var divContenedor = document.getElementById("contenedorSeleccion");
  var marker = document.getElementById("marker");
  var result = "";
  //Opcion Jugador
  var divPly = document.getElementById("selected");
  var img1 = document.createElement("img");
  var text1 = document.createElement("h1");
  img1.src = img;
  img1.style.width = "60%"
  text1.textContent = name;
  divPly.appendChild(img1);
  divPly.appendChild(text1);
  //Opcion CPU
  var divCpu = document.getElementById("selected_pc");
  var img2 = document.createElement("img");
  var text2 = document.createElement("h1");
  img2.style.width = "60%"
  //
  switch(cpOption){
    case 1:
      switch (option){
        case 1:
            result= "Empate";
        break;
        case 2:
            result= "Perdiste";
        break;
        case 3:
            result= "Ganaste";
        break;
      }
      img2.src = "img/paper.jpg";
      text2.textContent = "Papel";
    break;
    case 2:
      switch (option){
        case 1:
            result= "Ganaste";
        break;
        case 2:
            result= "Empate";
        break;
        case 3:
            result= "Perdiste";
        break;
      }
      img2.src = "img/rock.jpg";
      text2.textContent = "Piedra";
    break;
    case 3:
      switch (option){
        case 1:
            result= "Perdiste";
        break;
        case 2:
            result= "Ganaste";
        break;
        case 3:
            result= "Empate";
        break;
      }
      img2.src = "img/scizor.jpg";
      text2.textContent = "Tijera";
    break;
  }
  divCpu.appendChild(img2);
  divCpu.appendChild(text2);
  setTimeout(function() {
    divContenedor.innerHTML = "<h1>"+result+"</h1>";
    switch (result){
      case "Ganaste":
        player++;
        document.getElementById('player').textContent = player;
      break;
    case "Perdiste":
        cpu++;
        document.getElementById('cpu').textContent = cpu;
      break;
    }
    setTimeout(function() {
      divContenedor.innerHTML = originalDiv;
      botones.forEach(function(boton) {
        boton.disabled = false;
      });
    }, 1000);
  }, 1000);
}