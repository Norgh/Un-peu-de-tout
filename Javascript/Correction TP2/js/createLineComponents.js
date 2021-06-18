let lineComponents = (function () {

    function generateCol(value) {
        let col = document.createElement('td');
        col.style.textAlign = 'center';
        col.innerText = value;
        return col;
    }

    return {
        getLineComponent(index) {
            let row = document.createElement('tr');

            let name = generateCol(components.getName(index));
            let price = generateCol(components.getPrice(index));
            let needRecipe = generateCol(components.isNeedRecipe(index) == 1 ? 'Oui' : 'Non');
            let type = generateCol(components.getType(index));
            let buyInBulk = generateCol(components.isBuyInBulk(index) == 1 ? 'Oui' : 'Non');
            
            row.appendChild(name);
            row.appendChild(price);
            row.appendChild(needRecipe);
            row.appendChild(type);
            row.appendChild(buyInBulk);

            return row;
        },
    }
})();