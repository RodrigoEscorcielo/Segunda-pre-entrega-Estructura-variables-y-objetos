// <-- Inicio - Segunda pre entrega: Estructura, variables y objetos --> 
const arrayPosters = [
    {   
        id: 1, 
        nombre: "Pulp Fiction", 
        precio: 1800, 
        tipo:"Pelicula",
        imagen: "imagenes/pulp.jpg"
    },
    {
        id: 2, 
        nombre: "Radio Head", 
        precio: 2000, 
        tipo:"Musica",
        imagen: "imagenes/radiohead.webp"
    },
    {
        id: 3, 
        nombre: "Oppenheimer", 
        precio: 1500, 
        tipo:"Pelicula",
        imagen: "imagenes/oppenheimer.jpg"
    }
] 

const arrayCarrito = [];

class Posters {
    constructor(id, nombre, precio, tipo, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.imagen = imagen;
    }
};

function mostrarPosters(){
    let mensajePoster = "Por favor, introduzca el póster de la película o música que le gustaría comprar: \n\n";
        arrayPosters.forEach(el => {
            mensajePoster += `${el.id}. ${el.nombre} Precio: $${el.precio} Tipo: ${el.tipo}\n`
        });

    const posterElegido = parseInt(prompt(mensajePoster)); 
    const idElegida = arrayPosters.find(el => el.id === posterElegido);

    if (idElegida !== undefined){
        const nuevoPoster = new Posters(idElegida.id, idElegida.nombre, idElegida.precio, idElegida.tipo, idElegida.imagen);
        arrayCarrito.push(nuevoPoster);
        mostrarCarrito();
        sugerirAgregarPoster();
    } else {
        alert("La opción que has ingresado no es correcta. Ingresaste '"+posterElegido+"'." +"\n\nVolverá al menú principal.");
    }
}

function mostrarCarrito(){
    let carrito = "Carrito: \n\n";
    let totalPrecios = 0;
    if(arrayCarrito.length > 0){
        arrayCarrito.forEach(el =>{
            carrito += `${arrayCarrito.indexOf(el) + 1}. Póster de ${el.tipo}: ${el.nombre} $${el.precio}\n`;
            totalPrecios += el.precio;
        });
        alert(carrito + "\nTotal a pagar: $" + totalPrecios);
    } else {
        alert("Tu carrito está vacío :(");
    }
}

function sugerirAgregarPoster(){
    let seguirAgregando = parseInt(prompt("¿Desea seguir agregando productos a su carrito?\n\nPresione el botón 'Aceptar' para volver a ver nuestros productos!\n\nIngrese '0' para volver al menú principal\n"));
    if (seguirAgregando !== 0) {
        mostrarPosters();
    } else {
        alert("Gracias por utilizar nuestro servicio. Volverá al menú principal.");
    }
}

function eliminarPoster(){
    let pregunta = "¿Qué póster del carrito desea eliminar?: \n\n";
    if(arrayCarrito.length > 0){
        arrayCarrito.forEach(el =>{
            pregunta += `${arrayCarrito.indexOf(el) + 1}. ${el.nombre} Precio: ${el.precio} Tipo: ${el.tipo}\n`
        });
    } else {
        alert("Tu carrito está vacío :(");
        return;
    }

    const posterEligidoEliminar= parseInt(prompt(pregunta));
    const objetoAEliminar = arrayCarrito.find(el => arrayCarrito.indexOf(el) + 1 === posterEligidoEliminar);

    if (objetoAEliminar !== undefined){
        const indiceAEliminar = arrayCarrito.indexOf(objetoAEliminar);
        arrayCarrito.splice(indiceAEliminar, 1);
        mostrarCarrito();
    } else {
        alert("La opción que has ingresado no es correcta. Ingresaste '" +posterEligidoEliminar+"'." +"\n\nVolverá al menu principal.");
    }
}

function mostrarProductos(arrayCarritoProductos){
    const container = document.getElementById("contendorProductos");

    arrayCarritoProductos.forEach(el =>{
    const producto = document.createElement("div");
    producto.className = "producto";

    const productoImagen = document.createElement("img");
    productoImagen.src = el.imagen;
    productoImagen.className = "productoImagen";

    const productoDetalles = document.createElement("div");
    productoDetalles.className = "productoDetalles";

    const productoTitulo = document.createElement("h1");
    productoTitulo.innerText = el.nombre;
    productoTitulo.className = "productoTitulo";

    const productoPrecio = document.createElement("h2");
    productoPrecio.innerText = el.precio;
    productoPrecio.className = "productoPrecio";

    const productoTipo = document.createElement("h4");
    productoTipo.innerText = el.tipo;
    productoTipo.className = "productoTipo";

    productoDetalles.appendChild(productoTitulo);
    productoDetalles.appendChild(productoTipo);
    productoDetalles.appendChild(productoPrecio);
    
    producto.appendChild(productoImagen);
    producto.appendChild(productoDetalles);
    
    container.appendChild(producto);
    })
}

confirm("¡Bienvenido a TiendaCirculo!\n\nUsted acaba de ingresar a nuestro comercio, elija los pósters de películas o música de su preferencia!!");
do  {
    opcionElegida = parseInt(prompt("Ingrese en nuestro menú principal el número de la acción que quiera realizar: \n\n1. Para elegir el póster de películas o música de su preferencia. \n2. Para ver su carrito. \n3. Para eliminar un producto de su carrito.\n0. Para salir de nuestra tienda.\n"));
    switch(opcionElegida){
        case 0:
            alert("TiendaCirulo\n\nEsperamos que nos vuelva a visitar!");
            mostrarProductos(arrayCarrito);
            break;
        case 1:
            mostrarPosters();
            break;
        case 2:
            mostrarCarrito();
            break;
        case 3:
            eliminarPoster();
            break;
        default:
            alert("La opción que ingresaste no es correcta. Ingresaste " + "'"+opcionElegida+"'." +"\n\nVolverá al menu principal.");
    }
} while (opcionElegida !== 0)
// <-- Fin - Segunda pre entrega: Estructura, variables y objetos --> 
