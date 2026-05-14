// =========================
// CART PAGE SCRIPT
// =========================

const cartItemsContainer =
document.querySelector(".cart-items");

const totalPrice =
document.getElementById("total-price");


// =========================
// LOAD CART ITEMS
// =========================

fetch("http://localhost:5000/api/cart/123")

.then(res => res.json())

.then(data => {

    let html = "";

    let total = 0;


    data.forEach(item => {

        const itemPrice = 100;

        total += item.quantity * itemPrice;


        html += `

        <div class="cart-card">

            <h2>Product ID: ${item.productId}</h2>

            <p>Quantity: ${item.quantity}</p>

            <p>Price: $${itemPrice}</p>

            <button onclick="removeItem('${item._id}')">

                Remove

            </button>

        </div>

        `;

    });


    cartItemsContainer.innerHTML = html;

    totalPrice.innerText = total;

})

.catch(err => {

    console.log(err);

    cartItemsContainer.innerHTML =

    "<h2>Failed To Load Cart ❌</h2>";

});



// =========================
// REMOVE ITEM
// =========================

function removeItem(id) {

    fetch(`http://localhost:5000/api/cart/${id}`, {
  method: "DELETE"
})

    .then(res => res.json())

    .then(data => {

        alert("Item Removed ✔");

        location.reload();

    })

    .catch(err => {

        console.log(err);

        alert("Remove Failed ❌");

    });

}