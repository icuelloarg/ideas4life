

let plusparagraph1 = document.getElementById("readMore");
plusparagraph1.onclick = function readMore1(){
    
    document.getElementById("plusText").className = "plusParagraph1";
    plusparagraph1.className = "readMore-1";

    let lessParagraph = document.getElementById("readLess");
lessParagraph.onclick = () => {
    plusparagraph1.className = "readMore";
    document.getElementById("plusText").className = "plusParagraph"};
    
}

/* function moveHash(dataElement){
  window.location.hash = dataElement;
}

document.getElementById("formLi").onclick = function colales(){console.log("slidEd")};
document.getElementById("expLi").onclick = moveHash("slidExp"); */


function moverse(){
  location.hash = refSec;
}

let linkToggle = document.querySelectorAll('.slideOn');

for(i = 0; i < linkToggle.length; i++){

  linkToggle[i].onclick = function toggle (event){

    event.preventDefault();

    let container = document.getElementById(this.dataset.container);

    if (!container.classList.contains('active')) {
      
      container.classList.add('active');
      container.style.height = 'auto';

      let height = container.clientHeight + 'px';

      container.style.height = '0px';

      setTimeout(function () {
        container.style.height = height;
      }, 0);
      
    } else {
      
      container.style.height = '0px';

      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
      
    }
    setTimeout(moverse, 1500);
    
  };

}

function moverse(){
  location.hash = refSec;
}

const references = document.getElementById("refLi");

references.onclick = function (){
  setTimeout(moverse, 1500);
}