// Sénéchal Pierre & Mariage Augustin
var Array1 = [4, 1, 8, 3, 10, 5, 6, 2, 9, 10, 5];
var Array2 = [8, 12, 3, 3, 10, 8, 0, 2, 9, 17, 15];
var Array3 = [4, 1, 8, 3];
var Array4 = [4, 1, 8, 3, 10, 5, 12, 21, 12, 14, 15, 5, 6, 2, 9, 10, 5, 12, 23, 0, 0, 1, 4, 0, 1];
var Array5 = [4, 1];

function fillArray(Array, max)  // This function is called with a Array.map to fill the array (see the function below)
{
    return (Array.map(value => fillChar(value, max)));
}

function fillChar(value, max) // This function is used to fill the array with '#' or '.' depending on the value
{
    let Array = [];

    for (let i = 0 ; i < max ; i++) 
    {
        Array.unshift((value > 0) ? '#' : '.');
        value--;
    }
    return (Array);
}

function DisplayArray(Array, max) // This function is called to display the array
{
    let Array2 = [];

    for (let i = 0 ; i < max ; i++) 
    {
        Array2.push(Array.map(list => list[i]));
    }
    console.table(Array2);
}

function Histogramme(Array) // The main function called "Histogramme" as required... is calling all the functions needed to complete the aim of this exercise.
{
    let max = Math.max(...Array); // I could've done another function but as someone told me this is working well... it's easier and it takes less lines to find out the maximum value of the array
    let Array2 = fillArray(Array, max); // Filling the array (see the function for further information)

    DisplayArray(Array2, max); // Display the final array (see the function for further information)
}

Histogramme(Array1); // We call the main function, now all you need is to execute the script :)
Histogramme(Array2);
Histogramme(Array3);
Histogramme(Array4);
Histogramme(Array5);
