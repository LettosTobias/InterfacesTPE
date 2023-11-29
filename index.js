// Obtén el encabezado y la imagen
var header = document.getElementById("main-header");
var logo = document.getElementById("logo");

// Función para manejar el evento de desplazamiento
window.onscroll = function () {
  // Obtén la posición de desplazamiento actual
  var scrollPos = window.scrollY;

  // Cambia el tamaño de la imagen y el color de fondo del encabezado al hacer scroll
  if (scrollPos > 10) {
    header.style.position = "fixed";
    header.style.height = "60px";
    header.style.backgroundColor = "#5499F8"; // Cambia el color de fondo a rojo
    logo.style.margin = "0px";
    logo.style.maxWidth = "140px"; // Cambia el tamaño de la imagen
  } else {
    logo.style.margin = "0px"; 
    header.style.height = "150px";
    header.style.background =
      "linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0.00) 100%)";// Restaura el color de fondo original
    logo.style.maxWidth = "100%"; // Restaura el tamaño de la imagen original
    
  }


  let texto1 = document.getElementById("texto1");
  let texto2 = document.getElementById("texto2");
  let texto3 = document.getElementById("texto3");
  let texto4 = document.getElementById("texto4");

  let imagen = document.querySelector(".imagenScroll");

  console.log(scrollPos);

  if(scrollPos>4100&&scrollPos<5500){

        imagen.style.position = "sticky";
        imagen.style.top = "150px";

        texto1.style.opacity = 1;





        if(scrollPos < 4400){
          imagen.src = "./img/scroll1.png";
        }
        if(scrollPos>4400){
            
            texto1.style.opacity = 0;
            
      
        }
        if(scrollPos> 4400 && scrollPos<4666){
            texto2.style.opacity = 1;
            imagen.src = "./img/scroll2.png";
        }
  
        if(scrollPos> 4666 || scrollPos < 4400 ){
    
            texto2.style.opacity= 0;
        }
        if(scrollPos> 4866 ){
            texto3.style.opacity= 1;
            imagen.src = "./img/scroll3.png";
        }
        if(scrollPos> 5100 || scrollPos < 4860 ){
       
            texto3.style.opacity= 0;

        }
        if(scrollPos> 5300){
            texto4.style.opacity= 1;
            imagen.src = "./img/scroll4.png";
        }

        if(scrollPos < 5300){
          texto4.style.opacity= 0;
        }
        
    
    }



  var posY = document.documentElement.scrollTop;
  var elem1 = document.querySelectorAll(".parallax1");
  var elem2 = document.querySelector(".parallax2");
  var duende = document.querySelector(".duendePx");

  var cardRuta1 = document.querySelector(".parallax3");
  var cardRuta2 = document.querySelector(".parallax4");
  var cardRuta3 = document.querySelector(".parallax5");



  elem1.forEach(function(elem){

    elem.style.bottom = posY * (0.4) + "px";  

  });
  

 
    elem2.style.bottom = posY * (0.05) + "px";  
    duende.style.bottom = -posY * (0.1) + "px";

    cardRuta1.style.bottom = -posY * (0.01) + "px";
    cardRuta2.style.bottom = -posY * (0.03) + "px";
    cardRuta3.style.bottom = -posY * (0.04) + "px";





    
      

};

// Obtén las referencias a los elementos
let cards = document.querySelectorAll(".spidersCards");



        

let spiderRosa = document.querySelector(".spRosaDos");
let spiderRojo = document.querySelector(".spDos");
let spiderNegro = document.querySelector(".spNegroDos");
let fondo = document.querySelector(".tresSpider");
let fondoCompleto = document.querySelector(".juntos");






function spiderHover(){


  spiderRosa.style.scale = "1.3";
  spiderNegro.style.scale = "0.8";
  spiderRojo.style.scale = "0.8";


  spiderNegro.style.filter = "blur(10px)";
  spiderRojo.style.filter = "blur(10px)";

  fondoCompleto.style.zIndex = 2;
  fondo.classList.add('fondoRosa');
}    

function spiderLeave(){

    spiderRosa.style.scale = "1";
    spiderNegro.style.scale = "1";
    spiderRojo.style.scale = "1";
  
  
    spiderNegro.style.filter = "blur(0px)";
    spiderRojo.style.filter = "blur(0px)";
    fondoCompleto.style.zIndex = 0; 
    
    fondo.classList.remove('fondoRosa');
    
}

function spiderHover2(){


  spiderRojo.style.scale = "1.3";
  spiderNegro.style.scale = "0.8";
  spiderRosa.style.scale = "0.8";


  spiderNegro.style.filter = "blur(10px)";
  spiderRosa.style.filter = "blur(10px)";

  fondoCompleto.style.zIndex = 2;
  fondo.classList.add('fondoAzul');
}    



function spiderLeave2(){

    spiderRosa.style.scale = "1";
    spiderNegro.style.scale = "1";
    spiderRojo.style.scale = "1";
  
  
    spiderNegro.style.filter = "blur(0px)";
    spiderRosa.style.filter = "blur(0px)";

    fondoCompleto.style.zIndex = 0;
    fondo.classList.remove('fondoAzul');
    
}

function spiderHover3(){


  spiderNegro.style.scale = "1.3";
  spiderRojo.style.scale = "0.8";
  spiderRosa.style.scale = "0.8";


  spiderRojo.style.filter = "blur(10px)";
  spiderRosa.style.filter = "blur(10px)";

  fondoCompleto.style.zIndex = 2;
  fondo.classList.add('fondoNegro');
}    


function spiderLeave3(){

    spiderRosa.style.scale = "1";
    spiderNegro.style.scale = "1";
    spiderRojo.style.scale = "1";
  
  
    spiderRosa.style.filter = "blur(0px)";
    spiderRojo.style.filter = "blur(0px)";
    fondoCompleto.style.zIndex = 0;

       
    fondo.classList.remove('fondoNegro');
    
}






