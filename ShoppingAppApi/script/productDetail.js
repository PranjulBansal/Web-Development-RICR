function getdata() {
  const product = JSON.parse(sessionStorage.getItem("currentProduct"));
  // const product = sessionStorage.getItem("currentProduct")
  console.log(product);
  const description = document.getElementById("colList");

  const colAdd = document.createElement("div");
  colAdd.classList.add(
    "row",
    "border",
    "border-light",
    "shadow",
    "p-3",
    "m-auto",
    "my-5",
    "align-items-center"
  );
  colAdd.innerHTML = `
         <div class="col-5">
        <img src="${product.image}" alt="" class="h-75 w-75 mx-4 rounded"/>
      </div>
      <div class="col-7 border border-black">
        <h1 class="fs-2">
          ${product.title}
        </h1>
        <p>${product.category}</p>
        <a href="home.html">Visit the ShoPMeHii Store</a>
        <p>${product.rating.rate}/5 (${product.rating.count} ratings)</p>
        <p><b>200+bought </b>in past months</p>
        <div>-14% <sup>₹</sup>${product.price * 14} </div>
        <div>M.R.P.: <del>₹${product.price * 100}.</del></div>
        <p>Inclusive of all taxes</p>
        <p>EMI starts at ₹1,544. No Cost EMI available</p>
        <h4>About this item</h4>
        <p>${product.description}</p>
        <div class="d-flex gap-3">
        <button class="btn btn-light">Buy Now</button>
        <button class="btn btn-light">Add to Cart</button>
        </div>
        </div>
        `;
  // });
  description.appendChild(colAdd);
}

getdata();
