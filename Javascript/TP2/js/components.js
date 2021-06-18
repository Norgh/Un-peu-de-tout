// Fonction qui vérifie si le composant est disponible en vrac
let calcBuyInBulk2 = function (index) {
    if(Number(components_data[index]["buyInBulk"]) == 1) return("Oui");
    else return("Non")
}

// Fonction qui affiche une ligne du tableau ''
let afficheLineComponents = function (index) {
    let array2  = 0;
    let g = Recup_components.Name(index);
    let h = Recup_components.NeedRecipe(index);
    let i = Recup_components.Price(index);
    let j = Recup_components.Type(index);
    let k = calcBuyInBulk2(index);
    let l = Recup_components.PercentUsed(index);
    array2 = [[g],[h],[i],[j],[k],[l]];

    for (let i = 0; i < array2.length;i++){
        if(i==0) document.write("<tr>" + "<td>" + array2[i]);
        else document.write("<td>" + array2[i]);
    }
    document.write("</tr>");
}

// Fonction qui affiche une ligne du tableau 'Components'
let afficheComponents = function () {
    for (let i = 0 ; i < 25;i++){
        afficheLineComponents(i);
    }
}