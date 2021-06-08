const button = document.getElementById("cat-gen-button");
const button2 = document.getElementById('change');
let size = "small";
let count = 0;

// Generate Cat

function generateCat() {
    const image = document.createElement('img');

    let div = document.querySelector('.flex-box-container-2');
    image.src =`https://thecatapi.com/api/images/get?format=src&type=gif&size=${size}`
    div.appendChild(image);
    console.log(size)

}
button.addEventListener("click", generateCat);

function changeCat() {
    count++;
    console.log(count,
    size)
    if (count === 1) {
        size = 'medium';
    }
    else if (count === 2) {
        size = 'large';
    }
    else if(count>2) {
        count = 0;
        size = 'small';
    }
    const image = document.querySelectorAll('img');
    image.forEach(element => {
        element.src=`https://thecatapi.com/api/images/get?format=src&type=gif&size=${size}`
    })

}
button2.addEventListener('click', changeCat);

