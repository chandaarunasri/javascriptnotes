// 1. Product List as Bullet Points
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
let list = "";
for (let i = 0; i < products.length; i++) {
  list += `<li>${products[i]}</li>`;
}
document.getElementById("productList").innerHTML = list;


// 2. Discount Table
let prices = [1000, 2000, 3000, 1500];
let tableHTML = "";
for (let i = 0; i < prices.length; i++) {
  let discount = prices[i] * 0.9;
  tableHTML += `
    <tr>
      <td>${prices[i]}</td>
      <td>${discount}</td>
    </tr>`;
}
document.getElementById("discountTable").innerHTML = tableHTML;


// 3. Product Cards
let items = [
  { name: "Shirt", price: 500, category: "Clothing" },
  { name: "Watch", price: 1200, category: "Accessories" }
];
let cards = "";
for (let i = 0; i < items.length; i++) {
  cards += `
    <div style="border: 1px solid gray; padding: 10px; width: 150px;">
      <h4>${items[i].name}</h4>
      <p>Price: ₹${items[i].price}</p>
      <p>Category: ${items[i].category}</p>
    </div>
  `;
}
document.getElementById("productCards").innerHTML = cards;


// 4. Build Order Summary Table
let orders = [
  { name: "Pen", quantity: 2, price: 10 },
  { name: "Notebook", quantity: 1, price: 50 }
];
let summary = "";
for (let i = 0; i < orders.length; i++) {
  let total = orders[i].quantity * orders[i].price;
  summary += `
    <tr>
      <td>${i + 1}</td>
      <td>${orders[i].name}</td>
      <td>${orders[i].quantity}</td>
      <td>${orders[i].price}</td>
      <td>${total}</td>
    </tr>
  `;
}
document.getElementById("orderSummary").innerHTML = summary;


// 11. Add to Cart Simulation
let cart = [];
while (cart.length < 5) {
  let item = prompt(`Enter item ${cart.length + 1}:`);
  if (item) {
    cart.push(item);
  }
}
let listHTML = "";
for (let i = 0; i < cart.length; i++) {
  listHTML += `<li>${cart[i]}</li>`;
}
document.getElementById("cartList").innerHTML = listHTML;
