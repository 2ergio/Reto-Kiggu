/*
Dada una lista (arreglo) de números enteros, implementa una función (o método) que retorne los
2 valores más frecuentes y
cuántas veces aparecen.
 */

function frecuencia(arr){
    arr.sort() // ordenamos el array en forma ascendente
    let unicos= [];
    let almacenavecesrepetidas =[];
    let contador = 1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] === arr[i]){ // como el arr esta ordenado de forma ascendente
            // cada numero repetido estara al lado del otro, y asi obtenemos los numeros repetidos
            contador++ // sumamos el contador de las veces repetidas

        }else{ // si el numero repetido no es igual al que esta adelante, entonces lo agrega
            // a los numeros unicos sin contar sus repeticiones
            unicos.push(arr[i]);
            almacenavecesrepetidas.push(contador); // guardamos las veces repetidas
            contador = 1; // volvemos el contador a 1
        } 
    }
    let frecuencias = [] // creamos un array para guardar el objeto con los numeros y cuantas veces se repiten
    for(let i = 0; i < unicos.length; i++){
        frecuencias.push({ valor: unicos[i], veces: almacenavecesrepetidas[i] });
    }
    // Ordenar el array por la cantidad de repeticiones (de mayor a menor)
    frecuencias.sort((a, b) => b.veces - a.veces);

    if(frecuencias[0].veces === frecuencias[1].veces){
        console.log("los dos valores se repiten las mismas veces: " + frecuencias[0].valor + ": " + frecuencias[0].veces + " veces " +" y " + frecuencias[1].valor + " : " + frecuencias[1].veces + " veces ");
    }
    else{
    console.log("El valor que más se repite es:", frecuencias[0].valor, "y se repite", frecuencias[0].veces, "veces.");
    console.log("El segundo valor que más se repite es:", frecuencias[1].valor, "y se repite", frecuencias[1].veces, "veces.");
    }

    
}

    const arreglo = [1,1,1,1,1,2,2,2,2,2,2,3,3];
    frecuencia(arreglo);