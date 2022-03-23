/**Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores. */

const myMap = new Map();
myMap.set('Felipe', 'admin');
myMap.set('Nayara', 'admin');
myMap.set('Serena', 'user');
myMap.set('Isadora', 'user');
myMap.set('Sofia', 'user');
myMap.set('Lorena', 'user');

const getAdmins = () => {
    for(var element of myMap) {
       if ( element[1] === 'admin'){
           console.log(element)
       }
    }
}

getAdmins(myMap)

const getAdmins2 = (map) => {
    let admin = [];
    for([key, value] of map){
        if(value === 'admin')
        admin.push(key)
    }
    console.log(admin)
}

getAdmins2(myMap)