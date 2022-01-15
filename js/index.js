

let plusparagraph1 = document.getElementById("readMore");
plusparagraph1.onclick = function readMore1(){
    
    document.getElementById("plusText").className = "plusParagraph1";
    plusparagraph1.className = "readMore-1";

    let lessParagraph = document.getElementById("readLess");
lessParagraph.onclick = () => {
    plusparagraph1.className = "readMore";
    document.getElementById("plusText").className = "plusParagraph"};
    
}
