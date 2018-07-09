// Global variables
const counterText = document.querySelector('.counter');
const images = document.querySelector('.images');
let counter = 0;

// Add another cat image
const secondCat = document.createElement('span');
secondCat.classList = "individual-image"
secondCat.innerHTML = `<img src="https://i.pinimg.com/originals/c4/4d/99/c44d996ee46a1d39fe18aaa8fef06dec.jpg" alt="Second Cat" class="cat-image">`;
images.appendChild(secondCat);

// Define cat image variable
const catImages = document.querySelectorAll('.cat-image');
const catImage = document.querySelectorAll('.individual-image')

// Add event listeners for each image
catImage[0].addEventListener('click', function() {
  counter++;
  counterText.textContent = counter;
}, false);

catImage[1].addEventListener('click', function() {
  counter++;
  counterText.textContent = counter;
}, false);

// Add titles on top of images
const firstTitle = document.createElement('span');
const secondTitle = document.createElement('span');
firstTitle.classList = "image-title";
secondTitle.classList = "image-title";
firstTitle.innerHTML = "First Cat";
secondTitle.innerHTML = "Second Cat";
catImage[0].appendChild(firstTitle);
catImage[1].appendChild(secondTitle);
