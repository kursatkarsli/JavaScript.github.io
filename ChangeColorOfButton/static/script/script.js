let all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [];
for (const button of all_buttons) {
    copyAllButtons.push(button.classList[1]);
}

function buttonColorChange(buttonThingy) {
     switch (buttonThingy.value) {
         case 'red':
             buttonsRed();
             break;
             case 'blue':
                buttonsBlue();
                break;
                case 'green':
                    buttonsGreen();
                    break;
                    case 'reset':
                        buttonsColorReset();
             break;
         case 'random':
             randomColors();
             break;
                
    
    }
    function buttonsRed() {
        for (const button of all_buttons) {
            button.classList.remove(button.classList[1]);
            button.classList.add('btn-danger');
        }
        
    }
    function buttonsGreen() {
        for (const button of all_buttons) {
            button.classList.remove(button.classList[1]);
            button.classList.add('btn-success');
        }
        
    }
    function buttonsBlue() {
        for (const button of all_buttons) {
            button.classList.remove(button.classList[1]);
            button.classList.add('btn-primary');
        }
        
    }
    function buttonsColorReset() {
        for (const button of all_buttons) {
            button.classList.remove(button.classList[1]);
            button.classList.add(copyAllButtons[button.id]);
        }
    }
    function randomColors() {
        const colors = ["btn-primary", "btn-danger", "btn-info", "btn-secondary","bg-light"];

        for (const button of all_buttons) {
            const random = Math.floor(Math.random() * 5);
            console.log(random)
            button.classList.remove(button.classList[1]);
            button.classList.add(colors[random]);
        }
    }    
}
