// Genera un numero casuale 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per creare Array con numeri casuali
function createRandomArray(minLength, maxLength) {
    const length = getRandomNumber(minLength, maxLength);
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(1, 10)); // Numeri casuali da 1 a 10
    }
    return array;
}

function ugualeArrays(arr1, arr2) {
    while (arr1.length !== arr2.length) {

        // Aggiungi un elemento casuale ad arr1 con numeri casuali da 1 a 10
        if (arr1.length < arr2.length) {
            arr1.push(getRandomNumber(1, 10));  

        // Aggiungi un elemento casuale ad arr2 con numeri casuali da 1 a 10
        } else {
            arr2.push(getRandomNumber(1, 10)); 
        }
    }
}

// Array di lunghezza casuale tra 1 e 10
const array1 = createRandomArray(2, 10); 
const array2 = createRandomArray(2, 10); 

// Mostro in console 2 Array con numeri casuali da 1 a 10 e con diverse quantità di numeri
console.log("Array 1:", array1);
console.log("Array 2:", array2);

// Uguaglianza degli Array
ugualeArrays(array1, array2);

// Mostro in console i due Array con numeri casuali da 1 a 10 e ma con uguali quantità di numeri
console.log("Array 1 (Quantità uguale):", array1);
console.log("Array 2 (Quantità uguale):", array2);
