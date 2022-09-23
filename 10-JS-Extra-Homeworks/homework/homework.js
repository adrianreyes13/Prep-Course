// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz=[]
  for(propiedad in objeto){
    matriz.push([propiedad,objeto[propiedad]])
  }
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var carac={};
  for(i=0; i< string.length;i++){
    if (carac.hasOwnProperty(string[i])) {
      carac[string[i]]++
    }      
    else{
      carac[string[i]]=1
    }
    }
    return carac
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = ''
  var min = ''
  for(i=0;i<s.length;i++){
    if(s[i] !== s[i].toUpperCase())
    min+=s[i]
    else may+=s[i]
  }
  return may + min
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  palase=str.split(' ')
  frasein=[]
  for(i=0;i<palase.length;i++){
   /* frasein.push(palase[i].split("").reverse().join(""));*/
   palain=''
   palain=palase[i].split("")
   palain=palain.reverse()
   palain=palain.join("")
   frasein.push(palain)
  }
  frasein=frasein.join(' ')
  console.log(frasein)
  return frasein
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  stri=numero.toString()
  for (let i = 0; i < stri.length/2; i++) 
  if (stri[i]==stri[stri.length-1-i])
  return "Es capicua"
  else
  {
    return  "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  palai=''
  for(i=0;i<cadena.length;i++){
    if(cadena[i] !== 'a' && cadena[i]  !== 'b' && cadena[i] !== 'c')
  palai+=cadena[i]
  }
  return palai
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  do {
    pala=false
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i].length > arr[i+1].length) {
     var alma=arr[i+1]
      arr[i+1]=arr[i]
      arr[i]=alma
      pala=true
      }
    }
  } while (pala);
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  nuear=[]
  for (let i = 0; i < arreglo1.length; i++) {
    const ele = arreglo1[i];
    for (let j = 0; j < arreglo2.length; j++) {
      if (ele== arreglo2[j]) {
        nuear.push(ele)
      }
    }
  }
  return nuear
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

