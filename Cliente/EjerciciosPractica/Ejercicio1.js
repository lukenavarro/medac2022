function esVocal(caracter){
    let vocales = "aeiou";
    return vocales.includes(caracter.toLowerCase());
}

console.log(esVocal("A"));
console.log(esVocal("f"));

