const chalk = require('chalk');
const readlineSync = require('readline-sync');

let catalogo = [
  {
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    genero: 'Fantasía',
    paginas: 256
  }
];

function mostrarMenu() {
  console.log(chalk.blue.bold('\n📚 Bienvenido a El Rincón del Saber 📚'));
  console.log(chalk.yellow('1. Agregar libro'));
  console.log(chalk.yellow('2. Mostrar catálogo'));
  console.log(chalk.yellow('3. Buscar libro por título'));
  console.log(chalk.yellow('4. Eliminar libro'));
  console.log(chalk.yellow('5. Ver estadísticas'));
  console.log(chalk.yellow('6. Ordenar libros'));
  console.log(chalk.yellow('7. Editar libro'));
  console.log(chalk.yellow('8. Salir'));
}

function agregarLibro() {
  console.log(chalk.cyan('\n📝 Agregar un nuevo libro'));
  const titulo = readlineSync.question(chalk.green('Título: '));
  const autor = readlineSync.question(chalk.green('Autor: '));
  const genero = readlineSync.question(chalk.green('Género: '));
  const paginas = readlineSync.questionInt(chalk.green('Número de páginas: '));

  const nuevoLibro = { titulo, autor, genero, paginas };
  catalogo.push(nuevoLibro);
  console.log(chalk.magenta('\n✅ ¡Libro agregado correctamente!'));
}

function mostrarCatalogo() {
  console.log(chalk.cyan('\n📖 Catálogo de libros:'));
  catalogo.forEach((libro, index) => {
    console.log(chalk.yellow(`\nLibro ${index + 1}:`));
    console.log(chalk.white(`Título: ${libro.titulo}`));
    console.log(chalk.white(`Autor: ${libro.autor}`));
    console.log(chalk.white(`Género: ${libro.genero}`));
    console.log(chalk.white(`Páginas: ${libro.paginas}`));
  });
}

function buscarLibro() {
  const tituloBuscar = readlineSync.question(chalk.green('\n🔍 Ingresa el título a buscar: '));
  const libroEncontrado = catalogo.find(libro => libro.titulo.toLowerCase() === tituloBuscar.toLowerCase());

  if (libroEncontrado) {
    console.log(chalk.magenta('\n📚 Libro encontrado:'));
    console.log(chalk.white(`Título: ${libroEncontrado.titulo}`));
    console.log(chalk.white(`Autor: ${libroEncontrado.autor}`));
    console.log(chalk.white(`Género: ${libroEncontrado.genero}`));
    console.log(chalk.white(`Páginas: ${libroEncontrado.paginas}`));
  } else {
    console.log(chalk.red('\n❌ Libro no encontrado.'));
  }
}

function eliminarLibro() {
  const tituloEliminar = readlineSync.question(chalk.green('\n🗑️ Ingresa el título del libro a eliminar: '));
  const index = catalogo.findIndex(libro => libro.titulo.toLowerCase() === tituloEliminar.toLowerCase());

  if (index !== -1) {
    catalogo.splice(index, 1);
    console.log(chalk.magenta('\n✅ ¡Libro eliminado exitosamente!'));
  } else {
    console.log(chalk.red('\n❌ No se encontró el libro.'));
  }
}

function verEstadisticas() {
  console.log(chalk.cyan('\n📊 Estadísticas del catálogo:'));
  console.log(chalk.white(`Total de libros: ${catalogo.length}`));
}

function ordenarLibros() {
  catalogo.sort((a, b) => a.titulo.localeCompare(b.titulo));
  console.log(chalk.magenta('\n✅ Libros ordenados alfabéticamente.'));
}

function editarLibro() {
  const tituloEditar = readlineSync.question(chalk.green('\n✏️ Ingresa el título del libro a editar: '));
  const libro = catalogo.find(libro => libro.titulo.toLowerCase() === tituloEditar.toLowerCase());

  if (libro) {
    libro.titulo = readlineSync.question(chalk.green('Nuevo título: ')) || libro.titulo;
    libro.autor = readlineSync.question(chalk.green('Nuevo autor: ')) || libro.autor;
    libro.genero = readlineSync.question(chalk.green('Nuevo género: ')) || libro.genero;
    const nuevasPaginas = readlineSync.question(chalk.green('Nuevo número de páginas: '));
    if (nuevasPaginas) {
      libro.paginas = parseInt(nuevasPaginas);
    }
    console.log(chalk.magenta('\n✅ ¡Libro editado exitosamente!'));
  } else {
    console.log(chalk.red('\n❌ No se encontró el libro.'));
  }
}

// Programa principal
let opcion = 0;
do {
  mostrarMenu();
  opcion = readlineSync.questionInt(chalk.green('\nElige una opción: '));

  switch (opcion) {
    case 1:
      agregarLibro();
      break;
    case 2:
      mostrarCatalogo();
      break;
    case 3:
      buscarLibro();
      break;
    case 4:
      eliminarLibro();
      break;
    case 5:
      verEstadisticas();
      break;
    case 6:
      ordenarLibros();
      break;
    case 7:
      editarLibro();
      break;
    case 8:
      console.log(chalk.magenta('\n👋 ¡Gracias por usar El Rincón del Saber!'));
      break;
    default:
      console.log(chalk.red('\n❗ Opción inválida. Intenta otra vez.'));
  }

} while (opcion !== 8);
