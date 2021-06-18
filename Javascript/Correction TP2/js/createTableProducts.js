let tableProducts = (function () {
    return {
        createTabProducts() {
            let table = document.getElementById('products').firstElementChild;
            
            for (const product of products.getData()) {
                table.appendChild(lineProducts.getLineProduct(product.idProd));
            }
        }
    }
})();