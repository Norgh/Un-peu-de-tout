let components = (function () {

    const data = components_data;

    return {
        getData: () => data,
        getName(index) {
            return data[index].name;
        },
        isNeedRecipe(index) {
            return data[index].needRecipe == 0 ? false : true;
        },
        getPrice(index) {
            return Number(data[index].price);
        },
        getType(index) {
            return data[index].type;
        },
        isBuyInBulk(index) {
            return data[index].buyInBulk == 0 ? false : true;
        },
        getPercentUsed(index) {
            return Number(data[index].percentUsed);
        }
    }
})();