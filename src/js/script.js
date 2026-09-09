let imagens = [
    "/src/assets/carro-azul.jpeg", 
    "/src/assets/carro-chapeu.jpeg", 
    "/src/assets/carro-mercedes.jpeg"
]

// Posição que vai iniciar as imagens
let index= 0 

// Tempo para trocar as imagens
let tempo = 3000 // 3 segundos

// Funjção do slideshow
function Slideshow(){
    // DOM - Pega o id e passa o caminho das imagens
    document.getElementById("imgBanner").src = imagens[index]    

    // Incremento
    index++

    // Estrutura condicional IF
    if(index == imagens.length){
        index = 0
    }

    // callback função que chama outra função
    setTimeout('Slideshow()', tempo)
}

Slideshow()

const menuIcone = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
})