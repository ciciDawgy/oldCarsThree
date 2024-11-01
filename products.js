const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img');
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.item-box');

for( let i = 0; i < list.length;  i++ ){
list[i].addEventListener('click', function(){
    for(let j = 0; j < list.length; j++){
        list[j].classList.remove('active');
    }
    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k<itemBox.length; k++){
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || 
        dataFilter == 'all'){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
})
}

/*cart */
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger');

  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChanged)
  }

  var addCart = document.querySelector('.addCart');

  console.log(addCart.parentElement);
  

  var addToCartButtons = document.getElementsByClassName('addCart')
  for(var j = 0; j < addToCartButtons.length; j++) {
      var button = addToCartButtons[j]
      button.addEventListener('click', addToCartClicked)
  }


  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}


function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  const buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('bottom')[0].innerText
  var price = shopItem.getElementsByClassName('cartPrice')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}



   function addItemToCart(title, price, imageSrc) {
      var cartRow = document.createElement('div')
      cartRow.classList.add('cart-row')
      var cartItems = document.getElementsByClassName('cart-items')[0]
      var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
        for (var i = 0; i < cartItemNames.length; i++) {
          if (cartItemNames[i].innerText == title) {
              alert('This item has already been added to the cart')
              return
          }
        }

      var cartRowContents = `
          <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
      `
      cartRow.innerHTML = cartRowContents
      cartItems.append(cartRow)
      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
      cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
  }


function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$',''))
      var quantity = quantityElement.value 
      total = total + (price * quantity)
  }

  total = Math.round(total * 100) / 100

  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

var showContain = document.querySelector('.showContainer');
var cart = document.querySelector('.cart')
var containerTwo = document.querySelector('.containerTwo');
var removeCart = document.querySelector('.fa-times');

function showContainer() {
  containerTwo.classList.add('showContainer');
}

cart.addEventListener('click', showContainer);

removeCart.addEventListener('click', () => {
   containerTwo.classList.remove('showContainer');
})

// set up library somehow - figure out how to do that 
// learn the best way to do an ecommerce store
// Get a job - Home Deppt, church, and Janellia - neuroscience - what do I need to do to get a neuroscience certificate
// How to heal my sjogrens, thyroid, spells - friends, diet, service 
// Be a temple worker 
// Start fasting again
// Get Businesses going again -card, books, ( drawing code, drag and drop, photoshop, similar to scrapbooking software 
// peope will be able to upload their photos - see if I can find out what my scrapbook software was coded in
// animal (?), help Mike and Lisa, Dad, Mom, freelancing, songwriting, music production
// Get freekance business going
// Learn photoshop
// Do situps everyday
// Get off sodas - stick to a healthy diet - help Dad to eat healthy
// Personal training and nutrition certificate
// Masters in sociology
// Put all of my journals onto evernote
// Get back into my email - get all ideas for business back 
// Heal appearance -rosacea mask, learn how to wear makeup, nutrition, sleep, confidence, reduce stress, hair, teeth, contacts
// Teach Dad to code - Get Dad to teach me guitar and how to cook
// Use sewing machine, sign up for a class at Michaels, be a missionary, read books,use all the presents Dad has gottent me
// Leann the piano - teach Dad
// Learn the drums
// Improve appearance
// Learn family history
// Start playing tennis
// Start doing my ministering every month
// Finish all udemy courses
// Finish come follow me 
// Finish all church talks
// Get teeth fixed
// Pay Dad back for everything and a lot more
// Heal memory, keep thankful log every day, affirmations every day, practice being positive every day - not saying or thinking negative
// things about people - read articles about how to be optimisic / positive
// Expand my mind - read books - read news - would really help my memory - read out loud
// Keep noteboooks
// Read the infinite atonement again - understand God's love 
// Find a way to serve - Family history, temple service, missionary work
// Learn Comedy