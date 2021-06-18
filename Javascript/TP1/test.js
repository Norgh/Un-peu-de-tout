function add(a, b)
{
    return a+b;
}

function substract(a, b)
{
    return a-b;
}

function multiply(a, b)
{
    return a*b;
}

function divide(a, b)
{
    return a/b;
}

function square(a)
{
    return a*a;
}

arrowadd = (a, b) => { return a+b; }

arrowsubstract = (a, b) => { return a-b; }

arrowmultiply = (a, b) => { return a*b; }

arrowdivide = (a, b) => { return a/b; }

arrowsquare = a => { return a*a; }

let a=5, b=10;
console.log(add(a,b));
console.log(substract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
console.log(square(a));
console.log(arrowadd(a,b));
console.log(arrowsubstract(a,b));
console.log(arrowmultiply(a,b));
console.log(arrowdivide(a,b));
console.log(arrowsquare(a));

let myArray = [1, 25, 81, 64, 4, 25, 16, 49, 9, 36, 0]

function extractNotOdds(myArray)
{
    let notOdds = myArray.filter(value => 0 != value%2)
    return notOdds;
}

function extractSqrt(myArray)
{
    let listOfSqrt = myArray.map(value => Math.sqrt(value));
    return listOfSqrt;
}

function numberOfSqrtIndex(myArray)
{
    let count=0;

    if([...new Set(myArray)] == myArray)
    {
        myArray.forEach(value => Math.sqrt(value) == myArray.indexOf(value) ? count++ : '')
    } 
    else
    {
        for(let [index, value] of myArray.entries())
        {
            Math.sqrt(value) == index ? count ++ : ''
        }

    }
}
console.log(extractNotOdds(myArray));
console.log(extractSqrt(myArray));
console.log(numberOfSqrtIndex(myArray));

let truth = "Nunc est bibendum, nunc pede libero pulsanda tellus"
console.table(myArray);
function readNoSpace(truth)
{
    for(var i =0; i< truth.length; i++)
    {
        if(truth[i] != ' ')
        {
            console.log(truth[i]);
        }
    }
}

readNoSpace(truth);
truth.replaceAll('bibendum', 'michelin');
console.log(truth);

function verif(nbservice){
    let nbpers = 200;
    let nbburgers = 0;
    let pourcentage = 0;
    let nbgoodservice = 0;
    let a;
    for(let i = 0; i < nbservice ; i++){
    for(let i = 0; i < nbpers; i++){
    a = Math.random();
    if(a <= 0.6) nbburgers += 1 ;
    }
    if(nbburgers <= 125){
        nbgoodservice += 1 ;
    }
    nbburgers = 0;
    }
    pourcentage = ((nbgoodservice) / nbservice ) * 100;
    if(pourcentage >= 75) console.log("L'estimation (75%) est correcte.");
    else console.log("L'estimation (75%) n'est pas correcte.");
    return pourcentage;
    }
    
    /*** TEST**/
    
    console.log(verif(100));