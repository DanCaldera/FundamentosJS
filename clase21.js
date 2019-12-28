function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

const PERSONA_ALTA = 1.80

Persona.prototype.medirAltura = function() {
  if(this.altura >= PERSONA_ALTA) {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido} y mi altura es ${this.altura} por lo tanto soy alto`)
  } else {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido} y mi altura es ${this.altura} por lo tanto no soy alto`)
  }
}

var daniel = new Persona('Daniel', 'Caldera', 1.81)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.65)
