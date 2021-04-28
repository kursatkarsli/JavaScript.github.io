const pressed = [];
const secretCode= "hello";

window.addEventListener('keyup',(e)=>{
    cornify_add();

    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1,pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        console.log("DING DING");
    }
    console.log(pressed);
});