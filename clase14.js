var daniel = {
  nombre: 'Daniel',
  apellido: 'Caldera',
  edad: 22,
  peso: 70
}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = daniel.peso - 3
var dias = 0

while (daniel.peso > META) {
  debugger
  if (comeMucho()) {
    aumentarDePeso(daniel)
  }
  if (realizaDeporte()) {
    adelgazar(daniel)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${daniel.nombre} adelgazó 3kg`)
