const persona = {
  nombre: 'zane',
  apellido: 'fabri',
  edad: 90,
  direccion: {
    ciudad: 'new york',
    zip: 112233,
    lat: 90.90,
    lon: 89.89
  }
}

// console.table(persona)
// console.log(persona)


// const persona2 = persona
const persona2 = { ...persona }
persona2.nombre = 'peter'

console.log(persona)
console.log(persona2)