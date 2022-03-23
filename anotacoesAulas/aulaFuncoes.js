function sum(x,y,z) {
    return x+y+z;
}
const numbers = [1,2,3]
sum(...numbers)
console.log(sum(...numbers))

const pessoa = {
    name: 'Felipe',
    age: 26,
    address: 'Morato',
    id: 01,
    fullInfo: function()  {
        return this.name + ' ' + this.age + ' ' + this.address
    }
}

console.log(pessoa.fullInfo())