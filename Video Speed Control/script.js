const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleChange(e){
    const y = e.pageY - this.offsetTop;
    const percent = y/this.offsetHeight
    const min = 0.4;
    const max = 4;
    const height=Math.round(percent*100)+'%'
    const playbackRate = percent*(max-min)+min;
    bar.style.height=height;
    bar.textContent=playbackRate.toFixed(2)+'x';
    video.playbackRate =playbackRate;
    console.log(percent);
}
speed.addEventListener('mousemove',handleChange);22