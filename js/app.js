// Define global variables
const numCats = 3;
const catUrls = ["http://notgoaway.com/wp-content/uploads/2017/08/Cute-Cat-80-Go.jpg", "https://i.pinimg.com/originals/c4/4d/99/c44d996ee46a1d39fe18aaa8fef06dec.jpg", "https://wallpaperstock.net/curious-cat-wallpapers_33445_1600x1200.jpg"];
const catNames = ["First Cat", "Second Cat", "Third Cat"];

const counterText = document.querySelector('.counter');
const image = document.querySelector('.image');
const sidebar = document.querySelector('.cat-list-items');

let counter = [0, 0, 0];

// Load the selected cat onto the page
function loadCat(index) {
  // Show cat image
  image.innerHTML = "";
  let cat = document.createElement('span');
  cat.classList = "cat-image";
  cat.innerHTML = `\<img src=\"${catUrls[index]}\" alt=\"${catNames[i]}\" class=\"cat-image\"\>`;
  image.appendChild(cat);

  // Show image title
  const title = document.createElement('p');
  title.classList = "image-title";
  title.innerHTML = `${catNames[index]}`;
  image.appendChild(title);

  // Reset counter
  counterText.textContent = counter[index];

  // Add event listener for image
  let catImage = document.querySelector('.cat-image');
  catImage.addEventListener('click', function() {
    counter[index]++;
    counterText.textContent = counter[index];
  }, false);
}

// Add cats to sidebar
for (i=0; i<numCats; i++) {
  let newCat = document.createElement('li');
  newCat.innerHTML = `${catNames[i]}`
  newCat.addEventListener('click', loadCat.bind(this, i));
  sidebar.appendChild(newCat);
}
