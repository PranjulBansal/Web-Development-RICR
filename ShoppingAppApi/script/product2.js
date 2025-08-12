async function getProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  // console.log(data);array of object
  const products = document.getElementById("productList");
  data.forEach((element) => {
    console.log(element);
    const productCol = document.createElement("div");
    productCol.classList.add("col-3","border","border-light","my-4","align-items-center");
    productCol.innerHTML = `
   
          <img src="${element.image}" alt="error" class="w-50 h-50 mx-5 my-3">
         <a href="../pages/productDetailpage.html" class="productDetail"> <h2 class="fs-5">${
           element.title.length > 50
             ? element.title.slice(0, 50) + "..."
             : element.title
         }</h2></a>
          <h3 class="fs-5">${element.category}</h3>
          <span>
           ${element.rating.rate}/5 (${element.rating.count}reviews)
          </span>
          <div>
            ₹ ${(element.price * 85).toFixed(2)}
          </div>
        `;
    productCol.querySelector(".productDetail").addEventListener("click", () => {
      sessionStorage.setItem("currentProduct", JSON.stringify(element));
    });
    products.appendChild(productCol);
  });
}
getProductList();
