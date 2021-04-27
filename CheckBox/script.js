let checkBoxes= document.querySelectorAll('.inbox input[type="checkbox"] ');
 let lastChecked;
function handleCheck (e){
    let isBetween = false;
if (e.shiftKey && this.checked){
checkBoxes.forEach(checkbox =>{
    if(checkbox ===this || checkbox===lastChecked){
        isBetween=!isBetween;

    }
    if(isBetween){
        checkbox.checked=true;

    }

})}
lastChecked = this;
}
checkBoxes.forEach(checkbox=>{
    checkbox.addEventListener('click',handleCheck);
})
