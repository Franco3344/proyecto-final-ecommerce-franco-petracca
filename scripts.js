const productos = [
    {
        seccion:"notebooks",
        productos:
        [   
            {
                id:4,
                nombre:"Notebook Gamer Msi 15 Core I5-10500h 8gb 512ssd Rtx3060 W11",
                imagen:"recursos/productos/notebooks/notebookmsi.webp",
                precio:2107140
            },
            {
                id:5,
                nombre:"Notebook Lenovo Ideapad 1 15IAU7 Pantalla Táctil Fhd De 15,6 Pulgadas Core I3-1215u 8 Gb De Ram Ssd De 256 Gb Gris Nube",
                imagen:"recursos/productos/notebooks/notebooklenovo.webp",
                precio:889999
            },
            {
                id:6,
                nombre:"Notebook Gamer Acer Nitro Core I5 8gb Ssd 512gb Rtx3050 W11 Color Negro",
                imagen:"recursos/productos/notebooks/notebookacer.webp",
                precio:1570999
            },
            {
                id:7,
                nombre:"Netbook Exomate X5-s1441p Intel N4020c 4gb Ssd128gb 11,6 W11 Color Gris",
                imagen:"recursos/productos/notebooks/notebookexo.webp",
                precio:360000
            }
        ]
    },
    {
        seccion:"destacados",
        productos:
        [
            {
                id:0,
                nombre:"Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
                imagen:"recursos/productos/ofertas/ryzen7.webp",
                precio:150000
            },
            {
                id:1,
                nombre:"Flydigi-controlador de juego APEX 4 Black Myth Wukong",
                imagen:"recursos/productos/ofertas/apex4wukong.webp",
                precio:192000
            },
            {
                id:2,
                nombre:"Placa De Video Nvidia Zotac Gaming Geforce Rtx 4090 24 Gb",
                imagen:"recursos/productos/ofertas/placa4090.webp",
                precio:963000
            },
            {
                id:3,
                nombre:"Repetidor de señal inalámbrico TP-Link Ti-WA850re, 300 Mbps, Wi-Fi, color blanco, 110 V/220 V",
                imagen:"recursos/productos/ofertas/tplinkextender.webp",
                precio:29000
            }
        ]
    },
    {
        seccion:"perifericos",
        productos:
        [   
            {
                id:8,
                nombre:"Auriculares Hyperx Cloud Iii Red DTS Color Black/Red",
                imagen:"recursos/productos/perifericos/aurihyperx.webp",
                precio:132000
            },
            {
                id:9,
                nombre:"Teclado Gamer Razer Blackwidow V4 75%tactile Switch Naranja",
                imagen:"recursos/productos/perifericos/tecladorazer.webp",
                precio:399000
            },
            {
                id:10,
                nombre:"Mouse gamer de juego Redragon Centrophorus2 M601-RGB black",
                imagen:"recursos/productos/perifericos/mousereddragon.webp",
                precio:19999
            },
            {
                id:11,
                nombre:"Kit Gamer Teclado Mouse Auricular Pad Combo 4en1 Noga Nkb405 Color del mouse Negro Color del teclado Negro",
                imagen:"recursos/productos/perifericos/kitmouseteclado2.webp",
                precio:36500
            }
        ]
    }
];

let contenedorTarjeta = "";
let nombreSeccion = "";
let contenedorSeccionHTML;
let tarjeta = "";


//Se agregan los productos por seccion
function inicializarProductos(){


    for (var indiceSeccion = 0; indiceSeccion < productos.length;indiceSeccion++){
        
        //Se obtiene el nombre de la seccion
        nombreSeccion = productos[indiceSeccion].seccion;
        
        //Instanciamos la seccion
        contenedorSeccionHTML = document.getElementById(nombreSeccion);

        //Se crea el inicio del contenedor de tarjetas
        contenedorTarjeta = `<div class="contenedor-tarjetas">`;

        //Agregamos todos los productos de la seccion
        for (var indiceProductos = 0; indiceProductos<productos[indiceSeccion].productos.length;indiceProductos++){
            //instanciamos el producto actual
            var producto = productos[indiceSeccion].productos[indiceProductos];
            contenedorTarjeta+=`<div class="tarjeta">
                                    <span>${producto.nombre}</span>
                                    <img src=${producto.imagen} alt="">
                                    <span>$${producto.precio}</span>
                                    <button class="boton-agregar">Agregar Al Carrito</button>
                                </div>`;
        }

        //Se cierra el tag y se agrega el elemento al contenedor de seccion
        contenedorTarjeta+="</div>";
        contenedorSeccionHTML.innerHTML += contenedorTarjeta;
    }
}

//Carrito

//funcion que retorna el objeto producto segun el indice recibido
function buscarProducto(indice){
    var producto;
    for (var indiceSeccion = 0; indiceSeccion < productos.length;indiceSeccion++){
        
        //Se obtiene el nombre de la seccion
        nombreSeccion = productos[indiceSeccion].seccion;

        for (var indiceProductos = 0; indiceProductos<productos[indiceSeccion].productos.length;indiceProductos++){
            producto = productos[indiceSeccion].productos[indiceProductos];
            if(producto.id==indice){
                return producto;
            }
        }
    }
}

// function inicializarBotonBorrar(botonBorrar){
//     var botonesBorrar = document.querySelectorAll(".boton-borrar");
//     var botonBorrar;
//     for (let indice = 0; indice < botonesBorrar.length; indice++){
//         botonBorrar = botonesBorrar[indice];
//         function borrarDeCarrito(){
//             console.log(botonBorrar);
//             var itemABorrar = botonBorrar.parentElement;
//             itemABorrar.remove();
//         }
//         botonBorrar.addEventListener("click",borrarDeCarrito);
//     }
// }

function inicializarBotonesCompra(){
    var botonesAgregar = document.querySelectorAll(".boton-agregar");

    for(let indice=0;indice<botonesAgregar.length;indice++){
        
        function agregarACarrito(){
            //Instanciar label total a pagar y obtener su valor
            var ulProductos = document.querySelector("#carrito ul");
            var labelTotalAPagar = document.querySelector(".total-a-pagar");
            var totalAPagar = parseInt(labelTotalAPagar.innerHTML.split(":")[1].replace("$",""));
            var producto = buscarProducto(indice);
            

             // Crear el div del producto dentro del carrito
            var nuevoProducto = document.createElement('div');
            nuevoProducto.innerHTML = `
                <p>${producto.nombre} $${producto.precio}</p>
                <button class="boton-borrar">
                    <img src="recursos/iconos/trash-can-svgrepo-com.svg">
                </button>
            `;

            // Agregar el nuevo producto al carrito
            ulProductos.appendChild(nuevoProducto);
            

            totalAPagar += producto.precio;
            labelTotalAPagar.innerHTML = "Total a pagar: $ " + totalAPagar;
            

            //funcionalidad del boton borrar
            var botonBorrar = ulProductos.querySelectorAll(".boton-borrar")[ulProductos.querySelectorAll(".boton-borrar").length - 1];
            botonBorrar.addEventListener("click", function() {

    
                var labelTotalAPagar = document.querySelector(".total-a-pagar");
                var totalAPagar = parseInt(labelTotalAPagar.innerHTML.split(":")[1].replace("$",""));
                
                totalAPagar-=producto.precio;

                labelTotalAPagar.innerHTML = "Total a pagar: $ " + totalAPagar;
                var itemABorrar = botonBorrar.parentElement;
                itemABorrar.remove();
                
            });
        }
        botonesAgregar[indice].addEventListener("click",agregarACarrito);
    }

    
}

function inicializarBotonPagar(){
    var botonPagar = document.querySelector(".boton-pagar");
    botonPagar.addEventListener("click",function (){
        alert("FEATURE EN PROGRESO");
    });
}
inicializarProductos();

inicializarBotonesCompra();

inicializarBotonPagar()