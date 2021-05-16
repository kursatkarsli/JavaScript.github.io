const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
.map(node =>node.dataset.time)
.map(time =>{
    const[min,second] = time.split(':').map(parseFloat);
    return (min*60)+second
}).reduce((total,vidSecond)=> total+vidSecond)
let secondsLeft = seconds
const hour = Math.floor(seconds/3600);
secondsLeft = secondsLeft%3600;
const min = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft%60;

console.log("The Data time is" ,hour,min,secondsLeft);
