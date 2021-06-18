// Fonction qui calcule le prix total
let calcPrice = function (index) {
    let totalPrice = 0
    for(let i = 0 ; i < products_data[index]["components"].length; i++){
        let a = Number(components_data[Recup_products.Components(index)[i]]["price"]);
        let b = Number(components_data[Recup_products.Components(index)[i]]["percentUsed"]);
        totalPrice += (a * b);
    }
    return(totalPrice);
}

// Fonction qui calcule le nombre de récipients
let calcRecipe = function (index) {
    let numberRecipe = 0;
    for(let i = 0 ; i < products_data[index]["components"].length; i++){
        if(Number(components_data[Recup_products.Components(index)[i]]["needRecipe"])) numberRecipe++;
    }
    return(numberRecipe);
}

// Fonction qui vérifie si tous les composants sont disponibles en vrac
let calcBuyInBulk = function (index) {
    let numberBulk = 0;
    for(let i = 0 ; i < products_data[index]["components"].length; i++){
        if(Number(components_data[Recup_products.Components(index)[i]]["buyInBulk"])) numberBulk++;
    }
    if(products_data[index]["components"].length == numberBulk) return("Oui");
    else return("Non")
}

// Fonction qui affiche les noms de tous les composants
let calcComponents = function (index) {
    let Name = [];
    for(let i = 0 ; i < products_data[index]["components"].length; i++){
        Name.push(String(components_data[Recup_products.Components(index)[i]]["name"]));
    }
    return Name.join(", ");
}

// Fonction qui affiche une ligne du tableau 'Products'
let afficheLineProducts = function (index) {
    let array = 0;
    let a = Recup_products.Name(index);
    let b = Recup_products.Time(index);
    let c = calcComponents(index);
    let d = calcPrice(index).toFixed(2);
    let e = calcRecipe(index);
    let f = calcBuyInBulk(index);
    array = [[a],[b],[c],[d],[e],[f]];
    for (let i = 0; i < array.length;i++){
        if(i==0) document.write("<tr>" + "<td>" + array[i]);
        else document.write("<td>" + array[i]);
    }
    document.write("</tr>");
}

// Fonction qui affiche une ligne du tableau 'Products'
let afficheProducts = function () {
for (let i = 0 ; i < 7;i++)
    afficheLineProducts(i);
}
