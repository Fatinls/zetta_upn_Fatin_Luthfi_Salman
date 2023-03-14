function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, purchased, creditTerm) {
  const TAX_RATE = 0.1; // 10% tax rate
  let discountedPrice = price * (1 - (discountPercentage / 100)); // calculate price after discount
  let discountAmount = price - discountedPrice; // calculate amount of discount
  let taxAmount = discountedPrice * (taxPercentage / 100); // calculate amount of tax
  let totalPrice = discountedPrice + taxAmount; // calculate total price after tax
  let canPurchase = true;
  
  for (let i = 0; i < creditTerm.length; i++) {
    let termPrice = totalPrice / creditTerm.length;
    if (purchased + i > stock) {
      canPurchase = false;
      break;
    }
    console.log(`Term ${i+1}: $${termPrice.toFixed(2)}`);
  }
  
  if (canPurchase) {
    console.log(`You can purchase ${creditTerm.length} term(s) of ${title}.`);
  } else {
    console.log(`You can only purchase ${stock - purchased} term(s) of ${title}.`);
  }
}

// example usage
purchaseBook("THE SUBTLE ART OF NOT GIVING A FUCK", "Mark Manson", 320000, 20, 8.5, 10, 2, [1, 2, 3]);