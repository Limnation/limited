const getProducts = () => {

    fetch('/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderProducts(data);
    });
};


function renderProducts(data) {
    let products= [];
    for ( var i = 0; i < data.length; i++ ) {
        products.push(data[i]); 
    }
    products.forEach(product => {
        $(".products").append(generateHtml(product));
    })
}


function generateHtml(product) {
    return `
    <div class="product">
        <img src="images/store/Product-image.png" alt="image of ${product.image_name}" />
        <p class="product-name">${product.product_name}</p>
        <p class="product-price">${product.price}</>
    </div>`
}


getProducts();