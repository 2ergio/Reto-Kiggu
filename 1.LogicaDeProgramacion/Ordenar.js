/*Tienes un array de objetos con la forma
{ id, prioridad }
, donde
prioridad
es un número de 1 a 5.
Se pide
ordenar
el array de modo que aparezcan primero
todas las prioridades impares
(1, 3, 5) y después
todas las pares
(2, 4),
manteniendo
el orden interno original dentro de cada categoría. */

const array = [ // creamos el array con objetos
    {
        id: 1,
        prioridad:1,
        
    },
    {
        id:2,
        prioridad: 2
    },
    {
        id:3,
        prioridad:3
    },
    {
        id:4,
        prioridad:4
    },
    {
        id:5,
        prioridad:5
    }
]
function ordenar(obj){
    let pares = []; // definimos dos array, uno para los pares y el otro para los impares
    let impares =[];
    obj.forEach((item) =>{ // por cada objeto revisamos si es divisible por 2 y su resultado es igual a 0
    if(item.prioridad % 2 == 0){
        pares.push(item); // si cumple entonces es un numero par y lo metemos al array
    }else{
        impares.push(item); // si no es impar
    }
    })
    const ordenado = impares.concat(pares); // definimos un nuevo array y con el metodo concat, unimos los
    // dos arrays en uno solo, siendo el impares el que iria en los primeros indices del array, y los pares al final
    console.log(ordenado)
}

ordenar(array);