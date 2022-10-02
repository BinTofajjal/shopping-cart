function productUpdate(product, increasing) {
  const productInput = document.getElementById(product);
  let productNumber = parseInt(productInput.value);
  if (increasing) {
    productInput.value = productNumber + 1;
  } else if (productNumber > 0) {
    productInput.value = productNumber - 1;
  } else {
    alert('You have nothing to remove');
  }
}

/* Handle Phone */
// Adding phones
document.getElementById('phone-plus').addEventListener('click', function () {
  productUpdate('phone-number', true);
});
// Removing Phones
document.getElementById('phone-minus').addEventListener('click', function () {
  productUpdate('phone-number', false);
});

// Adding cases
document.getElementById('case-plus').addEventListener('click', function () {
  productUpdate('case-number', true);
});
// Removing cases
document.getElementById('case-minus').addEventListener('click', function () {
  productUpdate('case-number', false);
});
