/* ===== TO-DO APP ===== */
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo}
      <button onclick="removeTodo(${i})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  if (!input.value) return;
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  renderTodos();
}

function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();

/* ===== PRODUCTS ===== */
const products = [
  { name: "Smart Watch", category: "tech", price: 199, rating: 4.5 },
  { name: "Wireless Earbuds", category: "tech", price: 149, rating: 4.7 },
  { name: "Mint Hoodie", category: "fashion", price: 59, rating: 4.3 },
  { name: "Eco Sneakers", category: "fashion", price: 89, rating: 4.6 }
];

const grid = document.getElementById("productGrid");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>⭐ ${p.rating}</p>
      </div>
    `;
  });
}

function applyFilters() {
  let filtered = [...products];
  const cat = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  if (sort === "priceLow") filtered.sort((a,b)=>a.price-b.price);
  if (sort === "priceHigh") filtered.sort((a,b)=>b.price-a.price);
  if (sort === "rating") filtered.sort((a,b)=>b.rating-a.rating);

  renderProducts(filtered);
}

document.getElementById("categoryFilter").onchange = applyFilters;
document.getElementById("sortFilter").onchange = applyFilters;

renderProducts(products);
