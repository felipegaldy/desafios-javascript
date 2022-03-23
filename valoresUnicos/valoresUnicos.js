/* Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos. */
var array = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valorUnico(array){
    const mySet = new Set(array)

    return [...mySet]
}
console.log(valorUnico(array))