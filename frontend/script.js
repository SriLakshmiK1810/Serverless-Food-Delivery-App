const BASE_URL = "https://t20kw4redi.execute-api.ap-south-1.amazonaws.com/dev";

const RESTAURANTS_API = `${BASE_URL}/restaurants`;
const ORDER_API = `${BASE_URL}/order`;
const TRACK_API = `${BASE_URL}/track`;

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
    authArea.innerHTML = ` ${user}`;
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
  document.getElementById("dish-section").style.display = "none";
  document.getElementById("restaurant-page").style.display = "none";
  document.getElementById("delivery-section").style.display = "block";

  setActiveTab(1);
}


function setActiveTab(index) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  tabs[index].classList.add("active");
}
const dishData = {

  biryani: [
    {
      name: "Hyderabadi Biryani Centre",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      rating: "4.1 ⭐",
      time: "29 min"
    },
    {
      name: "Bikkgane Biryani",
      img: "https://images.unsplash.com/photo-1600628422019-6c59f6a0b4f2",
      rating: "4.0 ⭐",
      time: "25 min"
    },
    {
      name: "Paradise Biryani",
      img: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833",
      rating: "4.3 ⭐",
      time: "32 min"
    },
    {
      name: "Behrouz Biryani",
      img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
      rating: "4.2 ⭐",
      time: "28 min"
    },
    {
      name: "Meghana Foods",
      img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d34",
      rating: "4.4 ⭐",
      time: "30 min"
    }
  ],

  pizza: [
    {
      name: "Domino's Pizza",
      img: "https://images.unsplash.com/photo-1548365328-8b849e6c7c8f",
      rating: "4.2 ⭐",
      time: "30 min"
    },
    {
      name: "Pizza Hut",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      rating: "4.1 ⭐",
      time: "28 min"
    },
    {
      name: "La Pino’z Pizza",
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      rating: "4.0 ⭐",
      time: "27 min"
    },
    {
      name: "Oven Story Pizza",
      img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      rating: "4.3 ⭐",
      time: "26 min"
    },
    {
      name: "MOJO Pizza",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      rating: "4.4 ⭐",
      time: "29 min"
    }
  ],

  vegmeal: [
    {
      name: "Sangeetha Veg",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
      rating: "4.3 ⭐",
      time: "24 min"
    },
    {
      name: "A2B Veg Restaurant",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      rating: "4.2 ⭐",
      time: "26 min"
    },
    {
      name: "Saravana Bhavan",
      img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
      rating: "4.4 ⭐",
      time: "28 min"
    },
    {
      name: "Murugan Idli Shop",
      img: "https://images.unsplash.com/photo-1626509653291-71b4ebf2bce7",
      rating: "4.1 ⭐",
      time: "22 min"
    },
    {
      name: "Annapoorna Veg",
      img: "https://images.unsplash.com/photo-1606788075765-42f95aef8d29",
      rating: "4.0 ⭐",
      time: "25 min"
    }
  ],

  chicken: [
    {
      name: "KFC",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
      rating: "4.1 ⭐",
      time: "27 min"
    },
    {
      name: "Al Baik",
      img: "https://images.unsplash.com/photo-1598514982845-9ed6c63b5fa2",
      rating: "4.3 ⭐",
      time: "30 min"
    },
    {
      name: "Meat & Eat",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      rating: "4.0 ⭐",
      time: "29 min"
    },
    {
      name: "Fried Nation",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      rating: "4.2 ⭐",
      time: "26 min"
    },
    {
      name: "Grill House",
      img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd1",
      rating: "4.1 ⭐",
      time: "31 min"
    }
  ],

  burger: [
    {
      name: "Burger King",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      rating: "4.1 ⭐",
      time: "28 min"
    },
    {
      name: "McDonald's",
      img: "https://images.unsplash.com/photo-1550317138-10000687a72b",
      rating: "4.0 ⭐",
      time: "26 min"
    },
    {
      name: "Wendy's",
      img: "https://images.unsplash.com/photo-1610970878459-a0e464d7592b",
      rating: "4.2 ⭐",
      time: "29 min"
    },
    {
      name: "Burger Singh",
      img: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181",
      rating: "4.3 ⭐",
      time: "27 min"
    },
    {
      name: "Louis Burger",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      rating: "4.4 ⭐",
      time: "30 min"
    }
  ]
};

/* ---------- DISH VIEW ---------- */
function showDish(dish) {
  const dishSection = document.getElementById("dish-section");
  const delivery = document.getElementById("delivery-section");
  const dining = document.getElementById("dining-section");

  delivery.style.display = "none";
  dining.style.display = "none";
  dishSection.style.display = "block";

  const title = document.getElementById("dish-title");
  const results = document.getElementById("dish-results");

  title.innerText =
    dish.charAt(0).toUpperCase() + dish.slice(1) + " Delivery in Nagpur";

  results.innerHTML = "";

  if (!dishData[dish]) {
    results.innerHTML = "<p>No restaurants found</p>";
    return;
  }

  dishData[dish].forEach(item => {
    results.innerHTML += `
      <div class="card" onclick="openRestaurant('${item.name}')">

        <img src="${item.img}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.rating}</p>
          <p>${item.time}</p>
        </div>
      </div>
    `;
  });
}
function openRestaurant(restaurantName) {
  document.getElementById("delivery-section").style.display = "none";
  document.getElementById("dish-section").style.display = "none";
  document.getElementById("restaurant-page").style.display = "block";

  document.getElementById("res-name").innerText = restaurantName;

  const list = document.getElementById("menu-items");
  list.innerHTML = "";

  const menu = restaurantMenus[restaurantName];
  if (!menu) {
    list.innerHTML = "<p>No menu available</p>";
    return;
  }

  menu.forEach((item, index) => {
    const key = `${restaurantName}-${index}`; // UNIQUE KEY

    list.innerHTML += `
      <div class="food-item">
        <div class="food-info">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <div class="food-right" id="action-${key}">
          <button class="add-btn" onclick="addItem('${key}', '${item.name}', ${item.price})">
            ADD
          </button>
        </div>
      </div>
    `;
  });
}
function addItem(key, name, price) {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  cart[key] = { name, price, qty: 1 };
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById(`action-${key}`).innerHTML = qtyUI(key);
  updateCartBar();
}

function increase(key) {
  cart[key].qty++;
  localStorage.setItem("cart", JSON.stringify(cart));

  updateQty(key);
  updateCartBar();
}


function decrease(key) {
  cart[key].qty--;

  if (cart[key].qty === 0) {
    delete cart[key];

    document.getElementById(`action-${key}`).innerHTML = `
      <button class="add-btn"
        onclick="addItem(
          '${key}',
          '${cart[key]?.name || ""}',
          ${cart[key]?.price || 0}
        )">
        ADD
      </button>
    `;
  } else {
    updateQty(key);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBar();
}


function updateQty(key) {
  document.getElementById(`count-${key}`).innerText = cart[key].qty;
}

function qtyUI(key) {
  return `
    <div class="qty-box">
      <button onclick="decrease('${key}')">−</button>
      <span id="count-${key}">1</span>
      <button onclick="increase('${key}')">+</button>
    </div>
  `;
}

function getTotalQty() {
  return Object.values(cart)
    .reduce((sum, item) => sum + item.qty, 0);
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
function updateCartBar() {
  const cartBar = document.getElementById("cart-bar");
  const cartCount = document.getElementById("cart-count");

  let totalQty = 0;

  Object.values(cart).forEach(item => {
    totalQty += item.qty;
  });

  if (totalQty > 0) {
    cartBar.style.display = "flex";
    cartCount.innerText = totalQty;
  } else {
    cartBar.style.display = "none";
  }
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

localStorage.removeItem("cart");



/* ---------- RESTAURANT MENU DATA ---------- */
const restaurantMenus = {

  /* ================= BIRYANI ================= */

  "Hyderabadi Biryani Centre": [
    { name: "Chicken Dum Biryani", price: 280 },
    { name: "Mutton Dum Biryani", price: 360 },
    { name: "Egg Biryani", price: 220 },
    { name: "Chicken 65", price: 190 },
    { name: "Double Masala Biryani", price: 320 },
    { name: "Chicken Fry Biryani", price: 300 },
    { name: "Mirchi Ka Salan", price: 60 },
    { name: "Raita", price: 40 },
    { name: "Chicken Lollipop", price: 210 },
    { name: "Family Pack", price: 650 }
  ],

  "Bikkgane Biryani": [
    { name: "Signature Chicken Biryani", price: 299 },
    { name: "Boneless Chicken Biryani", price: 329 },
    { name: "Mutton Biryani", price: 379 },
    { name: "Egg Biryani", price: 229 },
    { name: "Chicken Fry", price: 249 },
    { name: "Pepper Chicken", price: 259 },
    { name: "Chicken 65", price: 199 },
    { name: "Raita", price: 49 },
    { name: "Gulab Jamun", price: 89 },
    { name: "Family Combo", price: 699 }
  ],

  "Paradise Biryani": [
    { name: "Classic Chicken Biryani", price: 289 },
    { name: "Mutton Biryani", price: 369 },
    { name: "Egg Biryani", price: 219 },
    { name: "Chicken Kebab", price: 239 },
    { name: "Chicken Fry Piece Biryani", price: 329 },
    { name: "Paneer Biryani", price: 259 },
    { name: "Curd Raita", price: 45 },
    { name: "Sweet Double Ka Meetha", price: 99 },
    { name: "Chicken Tikka", price: 279 },
    { name: "Jumbo Pack", price: 799 }
  ],

  "Behrouz Biryani": [
    { name: "Royal Chicken Biryani", price: 349 },
    { name: "Lucknowi Mutton Biryani", price: 429 },
    { name: "Dum Gosht Biryani", price: 459 },
    { name: "Paneer Subz Biryani", price: 299 },
    { name: "Chicken Kebab Platter", price: 329 },
    { name: "Veg Galouti Kebab", price: 249 },
    { name: "Raita", price: 49 },
    { name: "Phirni", price: 99 },
    { name: "Murgh Afghani", price: 289 },
    { name: "Family Feast", price: 899 }
  ],

  "Meghana Foods": [
    { name: "Chicken Biryani", price: 299 },
    { name: "Boneless Chicken Biryani", price: 349 },
    { name: "Mutton Biryani", price: 399 },
    { name: "Chicken Fry", price: 259 },
    { name: "Chicken 65", price: 239 },
    { name: "Pepper Chicken", price: 279 },
    { name: "Egg Curry", price: 199 },
    { name: "Curd Rice", price: 129 },
    { name: "Raita", price: 49 },
    { name: "Family Pack", price: 749 }
  ],

  /* ================= PIZZA ================= */

  "Domino's Pizza": [
    { name: "Margherita", price: 199 },
    { name: "Farmhouse", price: 299 },
    { name: "Peppy Paneer", price: 329 },
    { name: "Veg Extravaganza", price: 399 },
    { name: "Chicken Pepperoni", price: 449 },
    { name: "Garlic Bread", price: 149 },
    { name: "Stuffed Garlic Bread", price: 179 },
    { name: "Choco Lava Cake", price: 109 },
    { name: "Cheesy Dip", price: 39 },
    { name: "Taco Mexicana", price: 199 }
  ],

  "Pizza Hut": [
    { name: "Veggie Supreme", price: 319 },
    { name: "Chicken Supreme", price: 399 },
    { name: "Cheese Lovers", price: 299 },
    { name: "Pepperoni Pizza", price: 429 },
    { name: "Spicy Paneer", price: 349 },
    { name: "Garlic Breadsticks", price: 159 },
    { name: "Chicken Wings", price: 249 },
    { name: "Pasta Italiano", price: 219 },
    { name: "Brownie", price: 129 },
    { name: "Cheese Garlic Bread", price: 189 }
  ],

  "La Pino’z Pizza": [
    { name: "Cheese Burst Pizza", price: 279 },
    { name: "Mexican Green Wave", price: 319 },
    { name: "BBQ Chicken Pizza", price: 359 },
    { name: "Paneer Tikka Pizza", price: 339 },
    { name: "Peri Peri Fries", price: 149 },
    { name: "Garlic Bread", price: 129 },
    { name: "Cheesy Sticks", price: 159 },
    { name: "Cold Drink", price: 49 },
    { name: "Brownie", price: 99 },
    { name: "Combo Meal", price: 499 }
  ],

  "Oven Story Pizza": [
    { name: "Classic Veg Pizza", price: 299 },
    { name: "Chicken Tikka Pizza", price: 369 },
    { name: "Paneer Makhani Pizza", price: 349 },
    { name: "Cheese Overload", price: 329 },
    { name: "Garlic Bread", price: 159 },
    { name: "Chicken Wings", price: 269 },
    { name: "Pasta Bowl", price: 239 },
    { name: "Chocolate Mousse", price: 119 },
    { name: "Cold Drink", price: 49 },
    { name: "Family Combo", price: 699 }
  ],

  "MOJO Pizza": [
    { name: "2x Toppings Pizza", price: 299 },
    { name: "Paneer & Capsicum Pizza", price: 319 },
    { name: "BBQ Chicken Pizza", price: 359 },
    { name: "Cheesy Garlic Bread", price: 169 },
    { name: "Peri Peri Fries", price: 149 },
    { name: "Chicken Nuggets", price: 199 },
    { name: "Chocolate Brownie", price: 119 },
    { name: "Cold Drink", price: 49 },
    { name: "Combo Meal", price: 549 },
    { name: "Family Box", price: 799 }
  ],

  /* ================= VEG MEAL ================= */

  "Sangeetha Veg": [
    { name: "Mini Tiffin", price: 180 },
    { name: "South Indian Meals", price: 220 },
    { name: "Masala Dosa", price: 120 },
    { name: "Ghee Roast", price: 150 },
    { name: "Idli (2 pcs)", price: 70 },
    { name: "Vada (2 pcs)", price: 80 },
    { name: "Curd Rice", price: 110 },
    { name: "Poori Masala", price: 140 },
    { name: "Filter Coffee", price: 40 },
    { name: "Sweet Pongal", price: 90 }
  ],

  "A2B Veg Restaurant": [
    { name: "Veg Meals", price: 230 },
    { name: "Masala Dosa", price: 130 },
    { name: "Rava Dosa", price: 150 },
    { name: "Idli", price: 75 },
    { name: "Vada", price: 85 },
    { name: "Curd Rice", price: 120 },
    { name: "Tomato Rice", price: 140 },
    { name: "Pongal", price: 110 },
    { name: "Coffee", price: 45 },
    { name: "Kesari", price: 90 }
  ],

  "Saravana Bhavan": [
    { name: "Mini Tiffin", price: 190 },
    { name: "South Indian Meals", price: 240 },
    { name: "Masala Dosa", price: 130 },
    { name: "Ghee Roast", price: 160 },
    { name: "Idli", price: 75 },
    { name: "Vada", price: 85 },
    { name: "Curd Rice", price: 120 },
    { name: "Poori", price: 150 },
    { name: "Coffee", price: 45 },
    { name: "Sweet", price: 90 }
  ],

  "Murugan Idli Shop": [
    { name: "Idli (4 pcs)", price: 120 },
    { name: "Podi Idli", price: 140 },
    { name: "Ghee Pongal", price: 150 },
    { name: "Vada", price: 90 },
    { name: "Masala Dosa", price: 140 },
    { name: "Curd Rice", price: 120 },
    { name: "Sambar Rice", price: 140 },
    { name: "Coffee", price: 50 },
    { name: "Sweet Pongal", price: 100 },
    { name: "Combo Meal", price: 299 }
  ],

  "Annapoorna Veg": [
    { name: "Veg Meals", price: 210 },
    { name: "Masala Dosa", price: 125 },
    { name: "Idli", price: 70 },
    { name: "Vada", price: 80 },
    { name: "Poori Masala", price: 135 },
    { name: "Curd Rice", price: 110 },
    { name: "Lemon Rice", price: 120 },
    { name: "Coffee", price: 40 },
    { name: "Kesari", price: 85 },
    { name: "Combo", price: 299 }
  ],

  /* ================= CHICKEN ================= */

  "KFC": [
    { name: "Zinger Burger", price: 199 },
    { name: "Hot & Crispy Chicken", price: 179 },
    { name: "Chicken Popcorn", price: 149 },
    { name: "Peri Peri Strips", price: 199 },
    { name: "Chicken Bucket (6 pcs)", price: 499 },
    { name: "Smoky Red Chicken", price: 219 },
    { name: "Rice Bowl", price: 179 },
    { name: "French Fries", price: 99 },
    { name: "Pepsi", price: 49 },
    { name: "Chocolate Lava Cake", price: 109 }
  ],

  "Al Baik": [
    { name: "Fried Chicken", price: 249 },
    { name: "Chicken Nuggets", price: 199 },
    { name: "Chicken Burger", price: 179 },
    { name: "Chicken Wrap", price: 169 },
    { name: "French Fries", price: 99 },
    { name: "Chicken Popcorn", price: 149 },
    { name: "Coleslaw", price: 79 },
    { name: "Cold Drink", price: 49 },
    { name: "Combo Meal", price: 399 },
    { name: "Family Bucket", price: 699 }
  ],

  "Meat & Eat": [
    { name: "Grilled Chicken Burger", price: 199 },
    { name: "Chicken Wrap", price: 169 },
    { name: "Fried Chicken", price: 249 },
    { name: "Chicken Wings", price: 229 },
    { name: "Chicken Popcorn", price: 149 },
    { name: "French Fries", price: 99 },
    { name: "Cold Drink", price: 49 },
    { name: "Brownie", price: 119 },
    { name: "Combo Meal", price: 399 },
    { name: "Family Pack", price: 699 }
  ],

  "Fried Nation": [
    { name: "Fried Chicken", price: 239 },
    { name: "Chicken Burger", price: 189 },
    { name: "Chicken Wings", price: 219 },
    { name: "Chicken Popcorn", price: 159 },
    { name: "French Fries", price: 99 },
    { name: "Onion Rings", price: 99 },
    { name: "Cold Drink", price: 49 },
    { name: "Brownie", price: 109 },
    { name: "Combo", price: 399 },
    { name: "Family Bucket", price: 699 }
  ],

  "Grill House": [
    { name: "Grilled Chicken", price: 299 },
    { name: "Chicken Shawarma", price: 179 },
    { name: "Chicken Burger", price: 189 },
    { name: "BBQ Chicken Wings", price: 239 },
    { name: "Chicken Wrap", price: 169 },
    { name: "French Fries", price: 99 },
    { name: "Garlic Sauce", price: 39 },
    { name: "Cold Drink", price: 49 },
    { name: "Combo Meal", price: 399 },
    { name: "Family Combo", price: 699 }
  ],

  /* ================= BURGER ================= */

  "Burger King": [
    { name: "Whopper", price: 199 },
    { name: "Veg Whopper", price: 179 },
    { name: "Chicken Whopper", price: 219 },
    { name: "Crispy Veg Burger", price: 99 },
    { name: "Chicken Crispy Burger", price: 129 },
    { name: "French Fries", price: 89 },
    { name: "Onion Rings", price: 99 },
    { name: "Chicken Nuggets", price: 149 },
    { name: "Cold Coffee", price: 129 },
    { name: "Brownie Sundae", price: 149 }
  ],

  "McDonald's": [
    { name: "McAloo Tikki", price: 99 },
    { name: "McChicken", price: 149 },
    { name: "McVeggie", price: 139 },
    { name: "Chicken Nuggets", price: 149 },
    { name: "French Fries", price: 99 },
    { name: "Veg Pizza Puff", price: 69 },
    { name: "Coke", price: 49 },
    { name: "McFlurry", price: 119 },
    { name: "Combo Meal", price: 299 },
    { name: "Happy Meal", price: 249 }
  ],

  "Wendy's": [
    { name: "Classic Chicken Burger", price: 199 },
    { name: "Veg Burger", price: 179 },
    { name: "Cheese Burger", price: 219 },
    { name: "French Fries", price: 99 },
    { name: "Chicken Nuggets", price: 149 },
    { name: "Cold Coffee", price: 129 },
    { name: "Brownie", price: 119 },
    { name: "Combo Meal", price: 349 },
    { name: "Family Combo", price: 699 },
    { name: "Cold Drink", price: 49 }
  ],

  "Burger Singh": [
    { name: "Amritsari Murgh Burger", price: 199 },
    { name: "Paneer Burger", price: 179 },
    { name: "Chicken Keema Burger", price: 219 },
    { name: "French Fries", price: 99 },
    { name: "Cheese Fries", price: 129 },
    { name: "Chicken Nuggets", price: 149 },
    { name: "Cold Coffee", price: 129 },
    { name: "Brownie", price: 119 },
    { name: "Combo Meal", price: 399 },
    { name: "Family Pack", price: 699 }
  ],

  "Louis Burger": [
    { name: "Classic Smash Burger", price: 229 },
    { name: "Cheese Burger", price: 249 },
    { name: "Chicken Burger", price: 259 },
    { name: "Loaded Fries", price: 149 },
    { name: "Onion Rings", price: 119 },
    { name: "Chicken Nuggets", price: 159 },
    { name: "Cold Drink", price: 49 },
    { name: "Brownie", price: 129 },
    { name: "Combo Meal", price: 449 },
    { name: "Family Combo", price: 799 }
  ]
};
function goToCart() {
  window.location.href = "cart.html";
}




/* ---------- INIT ---------- */
window.onload = () => {
  updateHeader();
  showDining();
  loadMenu();
  loadCart();
  // 👈 ADD THIS
};

