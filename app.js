const {
    crearBaseDeDatos,
  } = require('./mongoOperations');
  
  async function ejecutarOperaciones() {
    await crearBaseDeDatos();
    await crearColeccion('Clientes');
    await insertarDocumento('Clientes', { nombre: 'Juan', edad: 30 });
    await insertarDocumento('Clientes', { nombre: 'Ana', edad: 48 });
    await insertarDocumento('Clientes', { nombre: 'Rita', edad: 27 });
    await obtenerPrimerElemento("Clientes");
    await verTodos("Clientes");
    await querySimple("Clientes", { nombre: 'Ana'});
    await sortPorCampo("Clientes","nombre");
    await actualizarDocumento('Clientes', { nombre: 'Ana' }, { edad: 31 });
    await borrarDocumento('usuarios', { nombre: 'Juan' });
  }
  
  ejecutarOperaciones().catch(console.error);