// desestructuracion
// asignacion desestructurante

const persona = {
  nombre: 'zane',
  edad: 90,
  clave: 'password',
  rango: 'main'
}

const { clave: clave2, edad, nombre, } = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave2)


const usarContext = ({nombre, edad, clave, rango = 'master'}) => {
  // console.log(usuario)

  // const { nombre, edad, clave } = usuario

  // console.log(nombre, edad, clave, rango)

  return {
    palabraClave: clave,
    anios: edad,
    latlng: {
      lat: 123,
      lon: 908,
    }
  }
}

const { palabraClave, anios, latlng: { lat, lon } } = usarContext(persona)

console.log(palabraClave, anios)
console.log(lat, lon)