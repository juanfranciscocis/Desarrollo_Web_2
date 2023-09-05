//get image
const image = document.getElementById('image');

//get colors
const greyColorBtn = document.getElementById('colorGrey');
const blueColorBtn = document.getElementById('colorBlue');
const blackColorBtn = document.getElementById('colorBlack');

//get AUTO label
const autoLabel = document.getElementById('car-label');

//get AddToCart button
const addToCartBtn = document.getElementById('addToCart');

//change image based on color
greyColorBtn.addEventListener('click', () => {
    image.src = './images/greyCar.png';
    autoLabel.style.backgroundColor = 'grey';
    addToCartBtn.style.backgroundColor = 'grey';
});

blueColorBtn.addEventListener('click', () => {
    image.src = './images/blueCar.webp';
    autoLabel.style.backgroundColor = 'blue';
    addToCartBtn.style.backgroundColor = 'blue';
});

blackColorBtn.addEventListener('click', () => {
    image.src ='./images/blackCar.webp';
    autoLabel.style.backgroundColor = 'black';
    addToCartBtn.style.backgroundColor = 'black';
});

//change text on button
addToCartBtn.addEventListener('click', () => {
    addToCartBtn.textContent ='🥳Gran elección! Tu nuevo auto te espera!🎉';
});