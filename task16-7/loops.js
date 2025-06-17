
/*1. Product List as Bullet Points
Create a ul using innerHTML. Loop through an array of 5 product names and display them as
bullet points.
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];*/


/*let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
let list = "";

for (let i = 0; i < products.length; i++) {
  list += `<li>${products[i]}</li>`;
}

document.getElementById("productList").innerHTML = list;

 /*2. Discount Table
 Loop through prices and display a table with Original Price and 10% Discounted Price.
 let prices = [1000, 2000, 3000, 1500];*/

/*let prices = [1000, 2000, 3000, 1500];
let tableHTML = "";

for (let i = 0; i < prices.length; i++) {
  let discount = prices[i] * 0.9;
  tableHTML += `
    <tr>
      <td>${prices[i]}</td>
      <td>${discount}</td>
    </tr>`;
}

document.getElementById("discountTable").innerHTML += tableHTML;*/

/*3. Display Product Cards
 Create product cards using loop. Each card should show name, price, and category.
 [
 ]
 { name: "Shirt", price: 500, category: "Clothing" },
 { name: "Watch", price: 1200, category: "Accessories" }
]*/

/*let items = [
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

document.getElementById("productCards").innerHTML = cards;*/


/*4. Build Order Summary Table
 Using an array of objects (name, quantity, price), create a table with:
 S.No | Product | Quantity | Price | Total*/
 







 /*11. Add to Cart Simulation
 Prompt the user repeatedly (via prompt) to enter items until 5 items are added. Show the list
 after completion*/

 /*let cart = [];

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

document.getElementById("cartList").innerHTML = listHTML;*/

