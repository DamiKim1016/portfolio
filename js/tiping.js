const INTRO = "Hi. I'm Dami.  ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = INTRO[i++];
    text.innerHTML += txt;
    if (i > INTRO.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200);