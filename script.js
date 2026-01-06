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
  // hide dining & delivery
  document.getElementById("dining-section").style.display = "none";
  document.getElementById("delivery-section").style.display = "none";

  // show dish results
  document.getElementById("dish-section").style.display = "block";

  // set title
  document.getElementById("dish-title").innerText =
    dish.charAt(0).toUpperCase() + dish.slice(1) + " Delivery in Nagpur";

  const results = document.getElementById("dish-results");
  results.innerHTML = "";

  // safety check
  if (!dishData[dish]) {
    results.innerHTML = "<p>No restaurants found</p>";
    return;
  }

  dishData[dish].forEach(item => {
    results.innerHTML += `
      <div class="card">
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
