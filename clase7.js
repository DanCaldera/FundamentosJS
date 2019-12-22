var daniel = {
  nombre: 'Daniel',
  apellido: 'Caldera',
  edad: 22
}

var valeria = {
  nombre: 'Valeria',
  apellido: 'Oceguera',
  edad: 20
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas(valeria)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad({ nombre, edad }) {
  console.log('Hola, me llamo ' + nombre +  ' y tengo ' + edad +  ' años')
}

imprimirNombreYEdad(daniel)
imprimirNombreYEdad(valeria)
