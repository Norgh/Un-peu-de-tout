let Recup_components=(function(){
    const compData = components_data;
    return{
        Id :  id => compData[id]["idComp"],
        Name :  id => compData[id]["name"],
        NeedRecipe :  id => compData[id]["needRecipe"],
        Price : id => compData[id]["price"],
        Type : id => compData[id]["type"],
        BuyInBulk : id => compData[id]["buyInBulk"],
        PercentUsed : id => compData[id]["percentUsed"],
    }
})();