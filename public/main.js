const baseURL = `http://localhost:5500`

const itemContainer = document.querySelector('#item-container')
const cartContainer = document.querySelector('#cart-container')

const mShirtLink = document.querySelector('#mShirtLink')
const fShirtLink = document.querySelector('#fShirtLink')
const mPantLink = document.querySelector('#mPantLink')
const fPantLink = document.querySelector('#fPantLink')

let cartCountText = document.querySelector("#cart-count");
let footer = document.querySelector("footer");

let commentForm = document.querySelector(".comment");
let commetnBtn = document.querySelector("#comment");





// const mshirtCallback = ({ data: mshirt }) => displayMShirt(mshirt)
// const fshirtCallback = ({ data: fshirt }) => displayFShirt(fshirt)
// const mpantCallback = ({ data: mpant }) => displayMPant(mpant)
// const fpantCallback = ({ data: fpant }) => displayFPant(fpant)
// const cartCallback = ({ data: cart }) => displayCart(cart)
const errCallback = err => console.log(err);



const getMShirt = () => axios.get(`${baseURL}/mshirt`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getFShirt = () => axios.get(`${baseURL}/fshirt`).then((res) => {displayFShirt(res.data)}).catch(errCallback)
const getMPant = () => axios.get(`${baseURL}/mpant`).then((res) => {displayMPant(res.data)}).catch(errCallback)
const getFPant = () => axios.get(`${baseURL}/fpant`).then((res) => {displayFPant(res.data)}).catch(errCallback)
// const getCart = () => axios.get(`${baseURL}/cart`).then(cartCallback).catch(errCallback)

const deleteItem = color => axios.delete(`${baseURL}/cart.${color}`).then(cartCallback).catch(errCallback)







mShirtLink.addEventListener("click", getMShirt);
fShirtLink.addEventListener("click", getFShirt);
mPantLink.addEventListener("click", getMPant);
fPantLink.addEventListener("click", getFPant);






function createItemCardMShirt(mshirt) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='shirt image' src=${mshirt.imageURL} class="shirt-pic"/>
    <p class="color">${mshirt.color}</p>
    <div class="btns-container">
    <button>Add to Cart</button>
    </div>
    `
    // replace button line with <button onclick="addToCart(${mshirt.id})"> when I get the addToCart fuction made.

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
    <button>Add to Cart</button>
    </div>
    `
    // replace button line with <button onclick="addToCart(${mshirt.id})"> when I get the addToCart fuction made.


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
    <button>Add to Cart</button>
    </div>
    `
    // replace button line with <button onclick="addToCart(${mshirt.id})"> when I get the addToCart fuction made.


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
    <button>Add to Cart</button>
    </div>
    `
    // replace button line with <button onclick="addToCart(${mshirt.id})"> when I get the addToCart fuction made.


    itemContainer.appendChild(itemCard)
}
function displayFPant(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardFPant(arr[i])
    }
}





let count = 0;

function addToCart() {
  count++;
  if (count === 1) {
    cartCountText.textContent = count + " Item";
  } else {
    cartCountText.textContent = count + " Items";
  }
}



// function commentSubmit() {
//     var confirmationMessage = document.createElement("p");
//     confirmationMessage.textContent =
//       "Thank you for leaving a comment."
  
//     commentForm.remove();
  
//     footer.appendChild(confirmationMessage);
//   }
  
//   commentBtn.addEventListener("click", commentSubmit);
  
  

