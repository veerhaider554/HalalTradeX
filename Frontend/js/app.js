// =========================
// HALALTRADEX MAIN APP
// =========================

console.log("HalalTradeX Loaded Successfully 🔥");


// =========================
// PRODUCT DATA
// =========================

const products = [
    {
        id: 1,
        name: "Halal Chicken Pack",
        price: 10
    },

    {
        id: 2,
        name: "Islamic Book Set",
        price: 15
    },

    {
        id: 3,
        name: "Halal Perfume",
        price: 25
    },

    {
        id: 4,
        name: "Organic Dates",
        price: 8
    }
];


// =========================
// LOAD CART
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =========================
// ADD TO CART
// =========================

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if(product){

        // CHECK EXISTING ITEM
        const existingItem = cart.find(item => item.id === productId);

        if(existingItem){

            existingItem.quantity += 1;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        // SAVE
        localStorage.setItem("cart", JSON.stringify(cart));

        // UPDATE UI
        updateCartUI();

        alert(product.name + " added to cart 🛒");
    }
}


// =========================
// UPDATE CART COUNT
// =========================

function updateCartUI(){

    const cartCount = document.querySelector(".cart-count");

    if(cartCount){

        let totalCount = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
        });

        cartCount.innerText = totalCount;
    }
}


// =========================
// RUN ON LOAD
// =========================

updateCartUI();
fetch("http://localhost:5000/api/products")
.then(res => res.json())
.then(data => {
  console.log(data);
});