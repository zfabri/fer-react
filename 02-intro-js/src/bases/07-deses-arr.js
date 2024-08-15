const personajes = ['personaje1', 'personaje2', 'personaje3',]

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])


// const [p1, p2, p3] = personajes
// const [,p2] = personajes
// const [,,p3] = personajes
// console.log(p3)


const retornaArr = () => {
  return ['abc', 123]
}

// const [p1, p2] = retornaArr()
// console.log(p1, p2)


// tarea
// 1. el primer valor del [], debe llamarse nombre
// 2. el segundo, setNombre
const userState = (valor) => {
  return [ valor, () => { console.log('hola mundo') }]
}

const [ nombre, setNombre ] = userState(1)
console.log(nombre)
setNombre()