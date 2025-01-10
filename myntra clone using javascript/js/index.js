let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage(); //function call//
  displayBagIcon();
}


function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }

}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');

  if (!itemsContainerElement === undefined) {
    return;
  }

  /*we don't have bckend that is why used this data  for only one but we need alot data so that i made items.js
  /*let item = {
    item_image:'images/download (1).jpg',
    rating:{
      stars:4.5,
      noOfReviews:1400,
    },
    company_name:'Cartlon London',
    item_name: 'Rhodium-Plated CZ Floral studs',
    current_price: 900,
    original_price: 1500,
    discount_per: 45,
  }*/

  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
   <div class="item-container">
      <img class="item-image" src = "${item.image}" alt "shoes">
      <div class="rating">  
       ${item.rating.stars} ⭐ | ${item.rating.count}
     </div>
     <div class="company-name">  ${item. company_name}</div>
     <div class="item-name"> ${item.item_name}</div>
     <div class="price-container">
       <span class="current-price">Rs ${item.current_price} </span>
       <span class="original-price">Rs ${item.original_price} </span>
       <span class="discount-per"> (${item.discount_per} % OFF)</span>
     </div>
     <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>
   </div> `
  });
  itemsContainerElement.innerHTML = innerHTML;
}