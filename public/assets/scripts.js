particlesJS.load('particles', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS.load('particles2', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

const moveText= document.querySelector(".texto1");
const llanta= document.querySelector(".llanta");
const contacS = document.querySelector(".contac");
const header = document.querySelector(".barrah")

const navButtons = document.querySelectorAll('.nav-button');
for(let button of navButtons) {
  button.addEventListener('click', moveToSection);
}

function moveToSection(event) {
  event.preventDefault();
  const sectionName = event.target.getAttribute('data-section');
  const section = document.querySelector('#' + sectionName);
  section.scrollIntoView({
    behavior: 'smooth'
  });
}
//
// Scroll fuction
document.addEventListener('scroll', scrollController);
function scrollController() {
  // Constante que guarda el valor del scroll que ha hecho la ventana
  const windowScroll = window.pageYOffset;
  console.log(windowScroll);
  moveLlanta(windowScroll);
  moveTxt(windowScroll);
  moveCont(windowScroll);
  headerMove(windowScroll);

}

function moveLlanta(windowScroll){
  let translateDistance = windowScroll - 650;
  let rotateSpeed = windowScroll * .5;
  if(windowScroll < 650) {
    llanta.style.transform = "translateX(" + translateDistance + "px) rotate(" + rotateSpeed + "deg)";
  }
}

function moveTxt(windowScroll){
  let translateDistanc = windowScroll - 650;
  let speed = windowScroll * .5;
  if(windowScroll < 650){
    moveText.style.transform = "translateX( " + translateDistanc + "px)";
  }
}

function moveCont(windowScroll){
  let translateDistanc = windowScroll - 1997;
  let speed = windowScroll * .1;
  if(windowScroll < 1997){
    contacS.style.transform = "translateX( " + translateDistanc + "px)";
  }
}

function headerMove(windowScroll){
  if(windowScroll > 100){
    header.classList.add("black-Header");
  }else {
    header.classList.remove("black-Header");
  }
}
