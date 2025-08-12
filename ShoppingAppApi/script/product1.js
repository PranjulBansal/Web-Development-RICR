async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const products = document.getElementById("productList");
  data.forEach((element) => {
    const productRow = document.createElement("div");
    productRow.classList.add(
      "card",
      "mb-3",
      "w-75",
      "m-auto",
      "mt-4",
      "border",
      "border-light"
    );
    productRow.innerHTML = `
        <div class="d-flex gap-2">
          <div class="col-md-4">
            <img
              src=${element.image}
              class="rounded px-5 py-3 w-75 h-75"
              alt="..."
            />
          </div>
          <div class="d-flex flex-column gap-4 mt-2">
            <div class="card-body align-items-center">
              <h2 class="card-title fs-4">${element.title.length>50?element.title.slice(0,50)+ "...":element.title}</h2>
              <p class="card-text">${(element.price * 85).toFixed(2)}</p>
              <p class="card-text">
                <small class="text-body-secondary">${element.rating.rate}/5 (${element.rating.count}reviews)</small>
              </p>
              <div class="d-flex gap-3">
                <button class="btn btn-light">Buy Now</button>
                <button class="btn btn-light">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
    products.appendChild(productRow);
  });
}
getProducts();
