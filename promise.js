const cart = ["Tv's", "shoes", "shirts"];
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return procedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .then(function (showOrderSummary) {
    console.log("Here's your delivey details");
  })
  .catch(function (err) {
    console.log(err.message);
  });
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}
function procedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment succeessful");
  });
}
function validateCart() {
  return true;
}
function showOrderSummary() {
  return true;
}
