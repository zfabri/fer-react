const nombre = 'zane'
const apellido = 'fabri'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)


function getSaludo(nombre) {

  return `Hola ${nombre}`
}

console.log(`...: ${getSaludo(nombreCompleto)}`)