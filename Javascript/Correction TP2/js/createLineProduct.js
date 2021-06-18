let lineProducts = (function () {

    function generateCol(value) {
        let col = document.createElement('td');
        col.style.textAlign = 'center';
        col.innerText = value;
        return col;
    }

    return {
        getLineProduct(index) {
            let row = document.createElement('tr');

            let name = generateCol(products.getName(index));
            let time = generateCol(products.getTime(index));
            let componentsList = generateCol(products.getComponentsList(index));
            let justWithBulk = generateCol(products.getIsJustWithBulk(index) == 1 ? 'Oui' : 'Non');
            let nbRecipes = generateCol(products.getNumberOfRecipes(index));
            let totalTruePrice = generateCol(products.getTotalTruePrice(index).toFixed(2));
            
            row.appendChild(name);
            row.appendChild(time);
            row.appendChild(componentsList);
            row.appendChild(totalTruePrice);
            row.appendChild(nbRecipes);
            row.appendChild(justWithBulk);

            return row;
        },
    }
})();