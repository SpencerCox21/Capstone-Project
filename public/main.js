const baseURL = `http://localhost:5500/api`

const itemContainer = document.querySelector('#item-container')
const cartContainer = document.querySelector('#cart-container')


const mshirtCallback = ({ data: mshirt }) => displayMShirt(mshirt)
const fshirtCallback = ({ data: fshirt }) => displayFShirt(fshirt)
const mpantCallback = ({ data: mpant }) => displayMPant(mpant)
const fpantCallback = ({ data: fpant }) => displayFPant(fpant)
const cartCallback = ({ data: cart }) => displayCart(cart)
const errCallback = err => console.log(err);



const getShirtM = () => axios.get(`${baseURL}/mshirt`).then(mshirtCallback).catch(errCallback)
const getShirtF = () => axios.get(`${baseURL}/fshirt`).then(fshirtCallback).catch(errCallback)
const getPantM = () => axios.get(`${baseURL}/mpant`).then(mpantCallback).catch(errCallback)
const getPantF = () => axios.get(`${baseURL}/fpant`).then(fpantCallback).catch(errCallback)
const getCart = () => axios.get(`${baseURL}/cart`).then(cartCallback).catch(errCallback)

const deleteItem = color => axios.delete(`${baseURL}/${color}`).then(cartCallback).catch(errCallback)







let cartCountText = document.querySelector("#cart-count");
let footer = document.querySelector("footer");

let commentForm = document.querySelector(".comment");
let commetnBtn = document.querySelector("#comment");







let count = 0;

function addToCart() {
  count++;
  if (count === 1) {
    cartCountText.textContent = count + " Item";
  } else {
    cartCountText.textContent = count + " Items";
  }
}


function commentSubmit() {
  var confirmationMessage = document.createElement("p");
  confirmationMessage.textContent =
    "Thank you for leaving a comment."

  commentForm.remove();

  footer.appendChild(confirmationMessage);
}

commentBtn.addEventListener("click", commentSubmit);






// function createItemCard(house) {
//     const itemCard = document.createElement('div')
//     itemCard.classList.add('house-card')

//     itemCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
//     <p class="address">${house.address}</p>
//     <div class="btns-container">
//         <button onclick="updateHouse(${house.id}, 'minus')">-</button>
//         <p class="house-price">$${house.price}</p>
//         <button onclick="updateHouse(${house.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteHouse(${house.id})">delete</button>
//     `


//     housesContainer.appendChild(itemCard)
// }

function createItemCardMShirt(mshirt) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='shirt image' src=${mshirt.imageURL} class="shirt-pic"/>
    <p class="color">${mshirt.color}</p>
    <div class="btns-container">
    <button onclick="deleteItem(${cart.color})">delete</button>
    </div>
    `


    itemContainer.appendChild(itemCard)
}
function displayMShirt(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardMShirt(arr[i])
    }
}


function createItemCardFShirt(fshirt) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='shirt image' src=${fshirt.imageURL} class="shirt-pic"/>
    <p class="color">${fshirt.color}</p>
    <div class="btns-container">
    <button onclick="deleteItem(${cart.color})">delete</button>
    </div>
    `


    itemContainer.appendChild(itemCard)
}
function displayFShirt(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardFShirt(arr[i])
    }
}


function createItemCardMPant(mpant) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='pant image' src=${mpant.imageURL} class="shirt-pic"/>
    <p class="color">${mpant.color}</p>
    <div class="btns-container">
    <button onclick="deleteItem(${cart.color})">delete</button>
    </div>
    `


    itemContainer.appendChild(itemCard)
}
function displayMPant(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardMPant(arr[i])
    }
}


function createItemCardFPant(fpant) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='pant image' src=${fpant.imageURL} class="shirt-pic"/>
    <p class="color">${fpant.color}</p>
    <div class="btns-container">
    <button onclick="deleteItem(${cart.color})">delete</button>
    </div>
    `


    itemContainer.appendChild(itemCard)
}
function displayFPant(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardFPant(arr[i])
    }
}










































// var blackBtn = document.querySelector("#black-btn");
// var whiteBtn = document.querySelector("#white-btn");
// var greyBtn = document.querySelector("#grey-btn");
// var redBtn = document.querySelector("#red-btn");
// var blueBtn = document.querySelector("#blue-btn");
// var orangeBtn = document.querySelector("#orange-btn");
// var greenBtn = document.querySelector("#green-btn");
// var yellowBtn = document.querySelector("#yellow-btn");
// var purpleBtn = document.querySelector("#purple-btn");
// var maroonBtn = document.querySelector("#maroon-btn");
// var babyBlueBtn = document.querySelector("#babyBlue-btn");
// var pinkBtn = document.querySelector("#pink-btn");



// blackBtn.addEventListener("click", addToCart);
// whiteBtn.addEventListener("click", addToCart);
// greyBtn.addEventListener("click", addToCart);
// redBtn.addEventListener("click", addToCart);
// blueBtn.addEventListener("click", addToCart);
// orangeBtn.addEventListener("click", addToCart);
// greenBtn.addEventListener("click", addToCart);
// yellowBtn.addEventListener("click", addToCart);
// purpleBtn.addEventListener("click", addToCart);
// maroonBtn.addEventListener("click", addToCart);
// babyBlueBtn.addEventListener("click", addToCart);
// pinkBtn.addEventListener("click", addToCart);
