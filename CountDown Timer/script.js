const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelector('[data-time]')
let countdown;
function timer(seconds){
    // Clear any existing timer
    clearInterval(countdown);
    // setInterval(function (){
    // seconds--;
    // },1000)
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log(now);
    console.log(then);

    countdown= setInterval(()=>{
        const secondsLeft =Math.round((then-Date.now())/1000);

        if(secondsLeft<0){
            return;
        }
        displayTimeleft(secondsLeft);
        displayTimeEnd(then)


    },1000);

}
function displayTimeleft(seconds){
    const min = Math.floor(seconds/60);
    const remainderSeconds = seconds%60;
    const display =`${min}:${remainderSeconds<10?'0':""}${remainderSeconds}`;
    timerDisplay.textContent=display;

}
function displayTimeEnd(timestamp){
    const end = new Date(timestamp);//This will help to get any time object(like hour);
    const hour = end.getHours();
    const minute = end.getMinutes();
    endTime.textContent=`Be Back At ${hour}:${minute}`;
}
function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds)
}
buttons.forEach(button=>{ button.addEventListener('click', startTimer)});
document.customForm.addEventListener('submit',function (e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
})