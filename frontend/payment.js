let cart = JSON.parse(localStorage.getItem("cart")) || {};

function loadPayment() {
  let total = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.qty;
  });

  const gst = Math.round(total * 0.05);
  const grand = total + gst + 40;

  document.getElementById("itemTotal").innerText = total;
  document.getElementById("gst").innerText = gst;
  document.getElementById("grandTotal").innerText = grand;
}

function placeOrder() {
  alert("✅ Order placed successfully!");

  // clear cart
  localStorage.removeItem("cart");

  // redirect to success page
  window.location.href = "order-success.html";
}

loadPayment();
