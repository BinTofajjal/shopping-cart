function productUpdate(product, increasing, price, totalPrice) {
  const productInput = document.getElementById(product);
  let productNumber = parseInt(productInput.value);
  if (increasing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  } else {
    alert('You have nothing to remove');
  }
  productInput.value = productNumber;
  // Handle Input Value Price
  const priceAmount = document.getElementById(totalPrice);
  const priceValue = parseInt(priceAmount.innerText);
  priceAmount.innerText = productNumber * price;
  calcPrice();
}

/* Handle Phones */
// Adding phones
document.getElementById('phone-plus').addEventListener('click', function () {
  productUpdate('phone-number', true, 1219, 'phone-price');
});
// Removing Phones
document.getElementById('phone-minus').addEventListener('click', function () {
  productUpdate('phone-number', false, 1219, 'phone-price');
});

/* Handle cases */
// Adding cases
document.getElementById('case-plus').addEventListener('click', function () {
  productUpdate('case-number', true, 59, 'case-price');
});
// Removing cases
document.getElementById('case-minus').addEventListener('click', function () {
  productUpdate('case-number', false, 59, 'case-price');
});

/* Handle subtotal tax and total */

function calcPrice() {
  const phonePrice = parseInt(document.getElementById('phone-price').innerText);
  const casePrice = parseInt(document.getElementById('case-price').innerText);
  const priceSub = casePrice + phonePrice;
  const subTotal = document.getElementById('subtotal');
  subTotal.innerText = priceSub;
  const tax = document.getElementById('tax');
  tax.innerText = parseInt(priceSub / 10);
  const total = document.getElementById('total');
  total.innerText = priceSub + parseInt(tax.innerText);
}
