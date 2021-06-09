
// Challange 1 Your age in Days
function ageInDays() {
    const dt = new Date(Date.now());
    const fy = dt.getFullYear();
    let birthYear = prompt("Which year were you born...! ");
    let ageInDayss = (fy - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are' + ageInDayss + 'days year old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}
