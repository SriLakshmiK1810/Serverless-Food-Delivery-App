let cart = JSON.parse(localStorage.getItem("cart")) || {};

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  Object.keys(cart).forEach(key => {
    const item = cart[key];
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    container.innerHTML += `
      <div class="cart-item">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>₹${item.price} × ${item.qty}</p>
        </div>

        <div class="cart-qty">
          <button onclick="changeQty('${key}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${key}', 1)">+</button>
        </div>
      </div>
    `;
  });

  const gst = Math.round(total * 0.05);
  const grand = total + gst + 40;

  document.getElementById("itemTotal").innerText = total;
  document.getElementById("gst").innerText = gst;
  document.getElementById("grandTotal").innerText = grand;
}

function changeQty(key, delta) {
  cart[key].qty += delta;

  if (cart[key].qty <= 0) {
    delete cart[key];
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function confirmOrder() {
  alert("Proceeding to payment...");
  // next step: payment page
}

renderCart();
