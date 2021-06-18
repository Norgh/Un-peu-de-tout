let products = (function () {

    const data = products_data;

    pComponentsList = index => data[index].components;

    pComponentsListWithNames = index => {
        let str = '';
        data[index].components.forEach(comp => {
            str += components.getName(comp) + ', ';
        });
        return str.slice(0, -2); ;
    }

    getCompTruePrice = comp => components.getPrice(comp) * components.getPercentUsed(comp);

    getCompRecipes = index => {
        let totalRecipes = 0;
        let pComponents = pComponentsList(index);

        for (const comp of pComponents) {
            if(components.isNeedRecipe(comp)) {
                totalRecipes++;
            }
        }

        return totalRecipes;
    }
    
    checkAllAreInBulks = index => {
        let pComponents = this.pComponentsList(index);

        for (const comp of pComponents) {
            if(!components.isBuyInBulk(comp)) {
                return false;
            }
        }

        return true;
    };


    return {
        getData: () => data,
        getName(index) {
            let result = data.filter(obj => {
                return obj.idProd == index
            });

            return result[0].name;
        },
        getTime(index) {
            return data[index].time;
        },
        getComponentsList(index) {
            return pComponentsListWithNames(index);
        },
        getIsJustWithBulk(index) {
            return checkAllAreInBulks(index);
        },
        getNumberOfRecipes(index) {
            return getCompRecipes(index);
        },
        getTotalTruePrice(index) {
            let total = 0;
            let pComponents = pComponentsList(index);

            for (const comp of pComponents) {
                total += getCompTruePrice(comp);
            }

            return total;
        },
    }
})();