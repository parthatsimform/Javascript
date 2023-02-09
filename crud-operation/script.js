const selected = document.getElementsByClassName("navbar");
const content = document.getElementById("content");

let products = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#allProducts" || e.target.location.hash == "") {
        showData();
    } else if (e.target.location.hash == "#addProduct") {
        addNewProduct();
    } else if (e.target.location.hash == "#editProduct") {
        editfunction(localStorage.getItem("editProductId"));
    }
});

window.addEventListener("popstate", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#allProducts" || e.target.location.hash == "") {
        showData();
    } else if (e.target.location.hash == "#addProduct") {
        addNewProduct();
    } else if (e.target.location.hash == "#editProduct") {
        editfunction(localStorage.getItem("editProductId"));
    }
})

const routes = {
    "": "./pages/allproducts.html",
    "#": "./pages/allproducts.html",
    "#allProducts": "./pages/allproducts.html",
    "#addProduct": "./pages/addproduct.html",
    "#editProduct": "./pages/editproduct.html"
}

Array.from(selected).forEach(element => {
    element.addEventListener("click", async (e) => {
        const res = await fetch(routes[e.target.attributes.href.nodeValue]);
        const data = await res.text();
        content.innerHTML = data;
        if (e.target.attributes.href.nodeValue == "#allProducts" || e.target.attributes.href.nodeValue == "#") {
            showData();
        } else if (e.target.attributes.href.nodeValue == "#addProduct") {
            addNewProduct();
        }
    })
})

function addNewProduct() {
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
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        window.location.href = "/";
    })
}

function showData() {
    const productlist = document.getElementById("product-list");
    const searchinput = document.getElementById("searchinput");
    let data = "";
    products.length == 0 ? data = `<tr><td colspan="6" class="producterror">No Products Available!</td></tr>` : (
        products.map((product) => {
            data += `<tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>Image</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td><button type="button" class="editbtn" onclick="editproduct(this)">Edit</button></td>
                <td><button type="button" class="deletebtn" onclick="deleteproduct(this)">Delete</button></td>
            </tr>`;
    }))
    productlist.innerHTML = data;
    searchinput.addEventListener("keyup", (e) => {
        console.log(e.target.value);
        data = "";
        let searchproduct = [...products]
        searchproduct = searchproduct.filter(product => product.id == e.target.value);
        if (e.target.value == "") {
            searchproduct = products;
        }
        searchproduct.length == 0 ? data = `<tr><td colspan="6" class="producterror">No Products Available!</td></tr>` : (
            searchproduct.map((product) => {
                data += `<tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>Image</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td><button type="button" class="editbtn" onclick="editproduct(this)">Edit</button></td>
                <td><button type="button" class="deletebtn" onclick="deleteproduct(this)">Delete</button></td>
            </tr>`;
            })
        )
        productlist.innerHTML = data;
    })
}

function deleteproduct(e) {
    p = e.parentElement.parentElement.children[0].textContent;
    let copyproducts = [...products];
    copyproducts = copyproducts.filter(cp => cp.id !== p);
    products = copyproducts;
    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "/";
}

function editproduct(e) {
    window.location.hash = "#editProduct";
    p = e.parentElement.parentElement.children[0].textContent;
    let p_id = products.findIndex(product => product.id == p);
    localStorage.setItem("editProductId", p_id);                //store edit-product-id in local storage to be able retrieve when reload
    editfunction(p_id);
}

const editfunction = (pid) => {
    setTimeout(() => {                                          //setTimeout to wait for get the form id
        let editproduct = document.getElementById("editproductForm");
        editproduct.elements.productID.value = products[pid].id;
        editproduct.elements.productName.value = products[pid].name;
        editproduct.elements.productPrice.value = products[pid].price;
        editproduct.elements.productDescription.value = products[pid].description;

        editproduct.addEventListener("submit", (e) => {             
            e.preventDefault();
            products[pid].id = editproduct.productID.value;
            products[pid].name = editproduct.productName.value;
            products[pid].price = editproduct.productPrice.value;
            products[pid].description = editproduct.productDescription.value;
            localStorage.setItem("products", JSON.stringify(products));
            window.location.href = "/";
        })
    }, 100)
}