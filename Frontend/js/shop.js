const productList = document.getElementById("productList");

fetch("http://localhost:5000/api/products")
  .then(response => response.json())
  .then(products => {

    let html = "";

    products.forEach(product => {

      html += `
        <div class="product-card">

          <h2>${product.name}</h2>

          <p>Price: $${product.price}</p>

          <button onclick="addToCart('${product.id}')">
            Add To Cart
          </button>

        </div>
      `;

    });

    productList.innerHTML = html;

  })
  .catch(error => {

    console.log(error);

    productList.innerHTML =
      "<h2>Failed to load products ❌</h2>";

  });


// ADD TO CART
function addToCart(productId) {

  fetch("http://localhost:5000/api/cart/add", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({

      userId: "123",
      productId: productId,
      quantity: 1

    })

  })

  .then(res => res.json())

  .then(data => {

    alert("Added To Cart ✔");

    console.log(data);

  })

  .catch(err => {

    console.log(err);

    alert("Cart Error ❌");

  });

}