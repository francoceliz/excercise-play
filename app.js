const fs = rerequire('fs');
const dataPersona = require('./objetoLiteral')
console.log(dataPersona.nombre);
const dataPersonaJSON = fs.readFileSync('./personaJSON.json', 'utf-8')
let nombreCompleto = dataPersona + " " + dataPersona.apellido

console.log(typeof dataPersona)
console.log(typeof dataPersonaJSON)