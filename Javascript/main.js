function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, purchaseQuantity) {
  const TAX_RATE = 0.1; // 10% tax rate
  let discountedPrice = price * (1 - (discountPercentage / 100)); // calculate price after discount
  let discountAmount = price - discountedPrice; // calculate amount of discount
  let taxAmount = discountedPrice * (taxPercentage / 100); // calculate amount of tax
  let totalPrice = discountedPrice + taxAmount; // calculate total price after tax
  
  let canPurchase = true; // flag to indicate if book can still be purchased
  
  for (let i = 1; i <= purchaseQuantity; i++) {
    if (stock < i) {
      canPurchase = false; // set flag to false if stock is depleted
      console.log(`Sorry, the stock of ${title} is not enough to fulfill the requested amount.`);
      break; // break out of loop if stock is depleted
    }
    stock -= i; // decrement stock by purchase quantity
  }
  
  // display results
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Price: $${price.toFixed(2)}`);
  console.log(`Discount: ${discountPercentage}%`);
  console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
  console.log(`Price after discount: $${discountedPrice.toFixed(2)}`);
  console.log(`Tax: ${taxPercentage}%`);
  console.log(`Tax amount: $${taxAmount.toFixed(2)}`);
  console.log(`Total price: $${totalPrice.toFixed(2)}`);
  
  if (canPurchase) {
    console.log(`You can still purchase ${stock} copies of ${title}.`);
  } else {
    console.log(`There are no more copies of ${title} available for purchase.`);
  }
}

// example usage
purchaseBook("THE SUBTLE ART OF NOT GIVING A FUCK", "Mark Manson", 320000, 20, 8.5, 10, 3);