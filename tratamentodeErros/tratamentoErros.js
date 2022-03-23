

const tiposErros = (array, num) => {
    try {
        if (!array || !num) throw new ReferenceError('Envie os parâmetros')

        if (typeof array !== 'object') throw new TypeError('Array não é do tipo objeto')
    
        if (typeof num !== 'number') throw new TypeError('Envie um parâmetro do tipo number')
    
        if (array.lenght !== num) throw new RangeError(`Tamanho de array diferente de ${num}`)
        
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Esse é um erro ReferenceError')
            console.log(error.message)
        }else if (error instanceof TypeError) {
            console.log('O tipo da array ou do numero está errado TypeError')
            console.log(error.message)
        }else if (error instanceof RangeError) {
            console.log('RangerError: ' + error )
        }
    }
}

console.log(tiposErros([], 'a'));

