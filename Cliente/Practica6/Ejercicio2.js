const persona1 = {
  nombre: "Francisco",
  apellidos: "Navarro De Juan",
  edad: 22,
  id: 1,
};
const persona2 = {
  nombre: "Antonio",
  apellidos: "Flores",
  edad: 20,
  id: 2,
};

const persona3 = {
  nombre: "José",
  apellidos: "Muñoz",
  edad: 21,
  id: 3,
};

const persona4 = {
  nombre: "Geronimo",
  apellidos: "Fernandez",
  edad: 15,
  id: 4,
};

const persona5 = {
  nombre: "Jorge",
  apellidos: "Gimenez",
  edad: 99,
  id: 5,
};

const arrayPersonas = [persona1, persona2, persona3, persona4, persona5];
var arrayCopia;

function toString(persona) {
  console.log(
    persona.nombre +
      " " +
      persona.apellidos +
      " " +
      persona.edad +
      " años la id de la persona es: " +
      persona.id
  );
}
function compareTo(persona1, persona2) {
  return persona2.edad-persona1.edad;
}

function equals(persona1, persona2) {
  if (persona1.id === persona2.id) {
    return true;
  } else {
    return false;
  }
}

function ejercicio1Practica2() {
  for (let i = 0; i <= arrayPersonas.length - 1; i++) {
    toString(arrayPersonas[i]);
  }
}

function ejercicio2Practica2() {
  arrayPersonas.sort(compareTo);
}

function ejercicio3Practica2() {
  let idAEliminar = parseInt(prompt("Introduzca la ID a eliminar"));
  let indice = arrayPersonas.findIndex(a => a.id === idAEliminar) 
  if ( indice !== idAEliminar) {
    arrayPersonas.splice(indice,1);
    console.log("Se ha eliminado la ID : " + idAEliminar);
  } else {
    alert("No se ha eliminado ninguna ID ya que no se encuentra en el array");
  }
}
function ejercicio4Practica2() {
  arrayCopia = structuredClone(arrayPersonas);
  for (let i = 0; i <= arrayCopia.length - 1; i++) {
    toString(arrayCopia[i]);
  }
}
function ejercicio5Practica2() {
  let arrayConcatenados = [].concat(arrayPersonas).concat(arrayCopia);
  for (let i = 0; i <= arrayConcatenados.length - 2; i++) {
    for (let j = i + 1; j <= arrayConcatenados.length - 1; j++) {
      if (
        parseInt(arrayConcatenados[i].id) === parseInt(arrayConcatenados[j].id)
      ) {
        arrayConcatenados.splice(j, 1);
      }
    }
  }
  for (let i = 0; i <= arrayConcatenados.length - 1; i++) {
    toString(arrayConcatenados[i]);
  }
}
