console.log("Checkout Working 🔥");


// LOAD CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// SELECT ELEMENTS
const summaryItems = document.getElementById("summary-items");

const finalTotal = document.getElementById("final-total");

const orderBtn = document.querySelector(".order-btn");


// RENDER ITEMS
function renderCheckout() {

    summaryItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.innerHTML = `
            <p>
                ${item.name}
                × ${item.quantity}
                = $${item.price * item.quantity}
            </p>
        `;

        summaryItems.appendChild(div);
    });

    finalTotal.innerText = total;
}

renderCheckout();


// ORDER BUTTON
orderBtn.addEventListener("click", () => {

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");

    window.location.href = "./index.html";
});