const products = [
  {
    productImage: "/pi,
    productName: "Phone",
    price: 10000,
    discount: 10,
    stock: 3
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Laptop",
    price: 50000,
    discount: 15,
    stock: 0
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Watch",
    price: 2000,
    discount: 5,
    stock: true
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Shoes",
    price: 3000,
    discount: 20,
    stock: false
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Bag",
    price: 1500,
    discount: 25,
    stock: 5
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Speaker",
    price: 2500,
    discount: 30,
    stock: 0
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Headphones",
    price: 3500,
    discount: 10,
    stock: true
  },
  {
    productImage: "https://via.placeholder.com/150",
    productName: "Tablet",
    price: 15000,
    discount: 12,
    stock: 2
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const originalPrice = product.price;
  const discountedPrice = originalPrice - (originalPrice * product.discount) / 100;
  const isAvailable = product.stock === true || product.stock >= 1;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.productImage}" alt="${product.productName}" width="100" height="100" />
    <h3>${product.productName}</h3>
    <p><s>₹${originalPrice}</s> <strong>₹${discountedPrice}</strong></p>
    <p class="${isAvailable ? 'available' : 'out-of-stock'}">
      ${isAvailable ? 'Available' : 'Out of Stock'}
    </p>
  `;

  container.appendChild(card);
});