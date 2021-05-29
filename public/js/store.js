// functions to generate products dynamically to the dom
// generates all products to the store page
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
        renderAllProducts(data);
    });
};

function renderAllProducts(data) {
    let products= [];
    for ( var i = 0; i < data.length; i++ ) {
        products.push(data[i]); 
    }
    products.forEach(product => {
        $(".products").append(generateProductsHtml(product));
    });
};

//<img src="images/store/${product.image_name}.png" alt="image of ${product.image_name}" />
function generateProductsHtml(product) {
    return `
    <div class="product">
        <img src="images/store/Product-image.png" alt="image of ${product.image_name}" />
        <p class="product-name">${product.product_name}</p>
        <p class="product-price">${product.price}</>
    </div>`
};

// functions to generate the types of shoes that can be filtered
const getTypes = () => {

    fetch('/api/types', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderAllTypes(data);
    });
};

function renderAllTypes(data) {
    let types = [];
    for ( var i = 0; i < data.length; i++ ) {
        types.push(data[i]);
    }
    types.forEach(type => {
        $(".ul-footwear").append(generateTypesHtml(type));
    });
};

function generateTypesHtml(type) {
    return `
    <li class="li-footwear" value="${type.id}">${type.type_name}</li>`
};

// handles the click function for the type filter options
$(".ul-footwear").on('click', '.li-footwear', function() {
    filterTypes(this.value);
    $(".product").remove();
});

// functions to generate the products with the type being filtered
const filterTypes = (value) => {
    console.log('heard the click');
    console.log(value);
    fetch(`api/searches/${value}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderType(data);
        console.log(data);
    });     
};

const renderType = (data) => {
    data.Products.forEach(product => {
        $(".products").append(generateProductsHtml(product));
        console.log(product)
    })
}

// initial functions to populate all products to the store page
function init() {
    getProducts();
    getTypes()
}


init();