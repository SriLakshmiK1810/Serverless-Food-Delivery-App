/* ---------- AUTH ---------- */
function isLoggedIn() {
  return localStorage.getItem("userId") !== null;
}

function openAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
}

function loginUser() {
  const user = document.getElementById("userInput").value.trim();
  if (!user) {
    alert("Enter User ID");
    return;
  }
  localStorage.setItem("userId", user);
  closeAuthModal();
  updateHeader();
}

function updateHeader() {
  const authArea = document.getElementById("authArea");
  const user = localStorage.getItem("userId");
  if (authArea && user) {
    authArea.innerHTML = `👤 ${user}`;
  }
}

/* ---------- TAB SWITCHING ---------- */
function showDining() {
  document.getElementById("dining-section").style.display = "block";
  document.getElementById("delivery-section").style.display = "none";
  setActiveTab(0);
}

function showDelivery() {
  document.getElementById("dining-section").style.display = "none";
  document.getElementById("delivery-section").style.display = "block";
  setActiveTab(1);
}

function setActiveTab(index) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  tabs[index].classList.add("active");
}

/* ---------- MENU DATA ---------- */
const menus = {
  greenhouse: [
    { name: "Grilled Starter", price: 320 },
    { name: "Meal Box", price: 520 },
    { name: "Biryani", price: 280 }
  ],
  kfc: [
    { name: "Zinger Burger", price: 190 },
    { name: "Chicken Bucket", price: 450 }
  ],
  sangeetha: [
    { name: "Masala Dosa", price: 90 },
    { name: "Veg Meals", price: 150 }
  ]
};

/* ---------- NAV ---------- */
function openMenu(r) {
  localStorage.setItem("restaurant", r);
  location.href = "menu.html";
}

/* ---------- CART ---------- */
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function addToCart(name, price) {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  cart[name]
    ? cart[name].qty++
    : cart[name] = { price, qty: 1 };

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added (${cart[name].qty})`);
}

function goToCart() {
  location.href = "cart.html";
}

function loadMenu() {
  const r = localStorage.getItem("restaurant");
  const div = document.getElementById("menuItems");
  if (!div || !menus[r]) return;

  div.innerHTML = "";
  menus[r].forEach(i => {
    div.innerHTML += `
      <div class="card">
        <div class="card-content">
          <h3>${i.name}</h3>
          <p>₹${i.price}</p>
          <button onclick="addToCart('${i.name}', ${i.price})">
            Add to Cart
          </button>
        </div>
      </div>`;
  });
}

function loadCart() {
  const list = document.getElementById("cartList");
  if (!list) return;

  let total = 0;
  list.innerHTML = "";

  for (let i in cart) {
    const t = cart[i].price * cart[i].qty;
    total += t;
    list.innerHTML += `<li>${i} × ${cart[i].qty} = ₹${t}</li>`;
  }

  const gst = Math.round(total * 0.05);
  document.getElementById("itemTotal").innerText = total;
  document.getElementById("gst").innerText = gst;
  document.getElementById("grandTotal").innerText = total + gst + 40;
}

function confirmOrder() {
  localStorage.removeItem("cart");
  location.href = "status.html";
}

/* ---------- INIT ---------- */
window.onload = () => {
  updateHeader();
  showDining();   // ✅ ensures correct default view
  loadMenu();
  loadCart();
};
