let Recup_products = (function(){
    const prodData = products_data;
    return{
        Id : id => prodData[id]["idProd"],
        Name : id => prodData[id]["name"],
        Time : id => prodData[id]["time"],
        Components : id => prodData[id]["components"]
    }
})();

