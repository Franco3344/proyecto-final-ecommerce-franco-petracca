console.log("ok");

const productos = [
    {
        seccion:"notebooks",
        productos:
        [   
            {
                nombre:"Notebook Gamer Msi 15 Core I5-10500h 8gb 512ssd Rtx3060 W11",
                imagen:"recursos/productos/notebooks/notebookmsi.webp",
                precio:2107140
            },
            {
                nombre:"Notebook Lenovo Ideapad 1 15IAU7 Pantalla Táctil Fhd De 15,6 Pulgadas Core I3-1215u 8 Gb De Ram Ssd De 256 Gb Gris Nube",
                imagen:"recursos/productos/notebooks/notebooklenovo.webp",
                precio:889999
            },
            {
                nombre:"Notebook Gamer Acer Nitro Core I5 8gb Ssd 512gb Rtx3050 W11 Color Negro",
                imagen:"recursos/productos/notebooks/notebookacer.webp",
                precio:1570999
            },
            {
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
                nombre:"Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
                imagen:"recursos/productos/ofertas/ryzen7.webp",
                precio:150000
            },
            {
                nombre:"Flydigi-controlador de juego APEX 4 Black Myth Wukong",
                imagen:"recursos/productos/ofertas/apex4wukong.webp",
                precio:192000
            },
            {
                nombre:"Placa De Video Nvidia Zotac Gaming Geforce Rtx 4090 24 Gb",
                imagen:"recursos/productos/ofertas/placa4090.webp",
                precio:963000
            },
            {
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
                nombre:"Auriculares Hyperx Cloud Iii Red DTS Color Black/Red",
                imagen:"recursos/productos/perifericos/aurihyperx.webp",
                precio:132000
            },
            {
                nombre:"Teclado Gamer Razer Blackwidow V4 75%tactile Switch Naranja",
                imagen:"recursos/productos/perifericos/tecladorazer.webp",
                precio:399000
            },
            {
                nombre:"Mouse gamer de juego Redragon Centrophorus2 M601-RGB black",
                imagen:"recursos/productos/perifericos/mousereddragon.webp",
                precio:19999
            },
            {
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
for (let indiceSeccion = 0; indiceSeccion < productos.length;indiceSeccion++){
    
    //Se obtiene el nombre de la seccion
    nombreSeccion = productos[indiceSeccion].seccion;
    
    //Instanciamos la seccion
    contenedorSeccionHTML = document.getElementById(nombreSeccion);

    //Se crea el inicio del contenedor de tarjeta
    contenedorTarjeta = `<div class="contenedor-tarjetas">`;

    //Agregamos todos los productos de la seccion
    for (let indiceProductos = 0; indiceProductos<productos[indiceSeccion].productos.length;indiceProductos++){
        //instanciamos el producto actual
        let producto = productos[indiceSeccion].productos[indiceProductos];
        contenedorTarjeta+=`<div class="tarjeta">
                                <span>${producto.nombre}</span>
                                <img src=${producto.imagen} alt="">
                                <span>$${producto.precio}</span>
                                <button>Agregar Al Carrito</button>
                            </div>`;
    }

    //Se cierra el tag y se agrega el elemento al contenedor de seccion
    contenedorTarjeta+="</div>";
    contenedorSeccionHTML.innerHTML += contenedorTarjeta;
}