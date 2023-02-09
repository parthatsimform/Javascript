let productForm = document.getElementById("productForm");
const allProducts = document.getElementById("allProducts");
const addProduct = document.getElementById("addProduct");
const productlist = document.getElementById("product-list");
selected = document.getElementsByClassName("navbar");
const content = document.getElementById("content");
const editbtn = document.getElementsByClassName("editbtn");

window.addEventListener("load", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#allProducts" || e.target.location.hash == "") {
        showData();
    } else if (e.target.location.hash == "#addProduct") {
        document.getElementById("productForm").addEventListener("submit", (e) => {
            e.preventDefault();
            let productID = e.target.productID.value;
            let productName = e.target.productName.value;
            let productPrice = e.target.productPrice.value;
            let productDescription = e.target.productDescription.value;
            let product = {
                id: productID,
                name: productName,
                price: productPrice,
                description: productDescription
            }
            storeProduct(product);
            window.location.href = "/";
        })
    }
});

window.addEventListener("popstate", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#allProducts" || e.target.location.hash == "") {
        showData();
    } else if (e.target.location.hash == "#addProduct") {
        document.getElementById("productForm").addEventListener("submit", (e) => {
            e.preventDefault();
            let productID = e.target.productID.value;
            let productName = e.target.productName.value;
            let productPrice = e.target.productPrice.value;
            let productDescription = e.target.productDescription.value;
            let product = {
                id: productID,
                name: productName,
                price: productPrice,
                description: productDescription
            }
            storeProduct(product);
            window.location.href = "/";
        })
    }
})

const routes = {
    "": "./pages/allproducts.html",
    "#": "./pages/allproducts.html",
    "#allProducts": "./pages/allproducts.html",
    "#addProduct": "./pages/addproduct.html"
}

Array.from(selected).forEach(element => {
    element.addEventListener("click", async (e) => {
        const res = await fetch(routes[e.target.attributes.href.nodeValue]);
        const data = await res.text();
        content.innerHTML = data;
        if (e.target.attributes.href.nodeValue == "#allProducts" || e.target.attributes.href.nodeValue == "#") {
            showData();
        } else if (e.target.attributes.href.nodeValue == "#addProduct") {
            document.getElementById("productForm").addEventListener("submit", (e) => {
                e.preventDefault();
                let productID = e.target.productID.value;
                let productName = e.target.productName.value;
                let productPrice = e.target.productPrice.value;
                let productDescription = e.target.productDescription.value;
                let product = {
                    id: productID,
                    name: productName,
                    price: productPrice,
                    description: productDescription
                }
                storeProduct(product);
                window.location.href = "/";
            })
        }
    })
})


let products = JSON.parse(localStorage.getItem("products")) || [];


function storeProduct(product) {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
}

function showData() {
    let data = "";
    products.map((product) => {
        data+=`<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>Image</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td><button type="button" class="editbtn">Edit</button></td>
        <td><button type="button" class="deletebtn">Delete</button></td>
    </tr>`
    })
    document.getElementById("product-list").innerHTML = data;
    //productlist.innerHTML = data;
}