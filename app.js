function quickSort(array) {

    if (array.length < 1) {
        return [];
    }
    var izq = [];
    var der = [];
    var pivote = array[0];
    for (var i = 1; i < array.length; i++) {
        const temp = array[i];
        if (temp < pivote) {
            izq.push(temp)
        } else if (temp > pivote) {
            der.push(temp);
        }
    }
    return [].concat(quickSort(izq), pivote, quickSort(der));
}

;
console.log(quickSort([5, 4, 6, 3, 7, 2, 8, 1]));











