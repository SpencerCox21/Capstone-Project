const baseURL = `http://localhost:5500`

const itemContainer = document.querySelector('#item-container')
const cartCount = document.querySelector('#cart-count')
const cartContainer = document.querySelector('#cart-container')


const mShirtLink = document.querySelector('#mShirtLink')
const fShirtLink = document.querySelector('#fShirtLink')
const mPantLink = document.querySelector('#mPantLink')
const fPantLink = document.querySelector('#fPantLink')
const showCart = document.querySelector('#show-cart-btn')

let cartCountText = document.querySelector("#cart-count");
let footer = document.querySelector("footer");

let commentForm = document.querySelector("#commentForm");
let commentBtn = document.querySelector("#commentBtn");




const errCallback = err => console.log(err);



const getMShirt = () => axios.get(`${baseURL}/mshirt`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getFShirt = () => axios.get(`${baseURL}/fshirt`).then((res) => {displayFShirt(res.data)}).catch(errCallback)
const getMPant = () => axios.get(`${baseURL}/mpant`).then((res) => {displayMPant(res.data)}).catch(errCallback)
const getFPant = () => axios.get(`${baseURL}/fpant`).then((res) => {displayFPant(res.data)}).catch(errCallback)
const getCart = () => axios.get(`${baseURL}/cart`).then((res) => {displayCart(res.data)}).catch(errCallback)







mShirtLink.addEventListener("click", getMShirt);
fShirtLink.addEventListener("click", getFShirt);
mPantLink.addEventListener("click", getMPant);
fPantLink.addEventListener("click", getFPant);
showCart.addEventListener("click", getCart);













function createItemCardMShirt(mshirt) {

    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='shirt image' src=${mshirt.imageURL} class="shirt-pic"/>
    <p class="color">${mshirt.color}</p>
    <div class="btns-container">
    <button class="addToCartBtn" id="btn_${mshirt.id}">Add to Cart</button>
    </div>
    `
    
    itemContainer.appendChild(itemCard)
    const addToCartBtn = document.querySelector(`#btn_${mshirt.id}`)

    addToCartBtn.addEventListener("click", () => {
        addToCart(mshirt)
    })
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
    <button class="addToCartBtn" id="btn_${fshirt.id}">Add to Cart</button>
    </div>
    `
    


    itemContainer.appendChild(itemCard)
    const addToCartBtn = document.querySelector(`#btn_${fshirt.id}`)

    addToCartBtn.addEventListener("click", () => {
        addToCart(fshirt)
    })
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
    <button class="addToCartBtn" id="btn_${mpant.id}">Add to Cart</button>
    </div>
    `


    itemContainer.appendChild(itemCard)
    const addToCartBtn = document.querySelector(`#btn_${mpant.id}`)

    addToCartBtn.addEventListener("click", () => {
        addToCart(mpant)
    })
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
    <button class="addToCartBtn" id="btn_${fpant.id}">Add to Cart</button>
    </div>
    `
    

    itemContainer.appendChild(itemCard)
    const addToCartBtn = document.querySelector(`#btn_${fpant.id}`)

    addToCartBtn.addEventListener("click", () => {
        addToCart(fpant)
    })
}
function displayFPant(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCardFPant(arr[i])
    }
}








function addToCart(item) {

    axios.post(`${baseURL}/cart`, item).then((res) => {
        console.log(res.data)
        cartCount.textContent = `${res.data.length} Item(s)`
    })
}






function addToCartSection(cart) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('shirt-border')

    itemCard.innerHTML = `<img alt='item image' src=${cart.imageURL} class="shirt-pic"/>
    <p class="color">${cart.color}</p>
    <div class="btns-container">
    <button class="deleteFromCartBtn" cart-id="${cart.id}" onclick="deleteFromCart(event)" id="btn_${cart.id}">Delete from Cart</button>
    </div>
    `
    
    cartContainer.appendChild(itemCard)
    const deleteFromCartBtn = document.querySelector(`#btn_${cart.id}`)
    
    deleteFromCartBtn.addEventListener("click", () => {
        deleteFromCart(cart)
    })
}
function displayCart(arr) {
    cartContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        addToCartSection(arr[i])
    }
    cartCount.textContent = `${arr.length} Item(s)`
}




function deleteFromCart(event) {
// console.log(event)
let item = event.target.getAttribute("cart-id")
// console.log(item)
    axios.delete(`${baseURL}/cart/${item}`).then((res) => {
        // console.log(res.data)

        displayCart(res.data)
        cartCount.textContent = `${res.data.length} Item(s)`
    })
}





function commentSubmit() {
    // var confirmationMessage = document.createElement("p");
    // confirmationMessage.textContent =
    //   "Thank you for leaving a comment."
  
    commentForm.innerHTML = "Thank you for your feedback!"
  
    // footer.appendChild(confirmationMessage);
  }
  
  commentBtn.addEventListener("click", commentSubmit);
  
  
getCart()
