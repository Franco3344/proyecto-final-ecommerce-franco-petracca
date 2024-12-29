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
        seccion:"ofertas",
        productos:
        [
            {
                nombre:"Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
                imagen:"recursos/productos/ofertas/ryzen7.webp",
                precio_original:233000,
                precio_oferta:150000
            },
            {
                nombre:"Flydigi-controlador de juego APEX 4 Black Myth Wukong",
                imagen:"recursos/productos/ofertas/apex4wukong.webp",
                precio_original:274000,
                precio_oferta:192000
            },
            {
                nombre:"Placa De Video Nvidia Zotac Gaming Geforce Rtx 4090 24 Gb",
                imagen:"recursos/productos/ofertas/placa4090.webp",
                precio_original:1660000,
                precio_oferta:963000
            },
            {
                nombre:"Repetidor de señal inalámbrico TP-Link Ti-WA850re, 300 Mbps, Wi-Fi, color blanco, 110 V/220 V",
                imagen:"recursos/productos/ofertas/tplinkextender.webp",
                precio_original:38000,
                precio_oferta:29000
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

let contenedorTarjeta = `
                <div class="contenedor-tarjetas">
                    <div class="tarjeta"><span>Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada</span><img src="recursos/productos/ofertas/ryzen7.webp" alt=""><s>$233.000</s><span>$150.000</span></div>
                    <div class="tarjeta"><span>Flydigi-controlador de juego APEX 4 Black Myth Wukong</span><img src="recursos/productos/ofertas/apex4wukong.webp" alt=""><s>$274.000</s><span>$192.000</span></div>
                    <div class="tarjeta"><span>Placa De Video Nvidia Zotac Gaming Geforce Rtx 4090 24 Gb</span><img src="recursos/productos/ofertas/placa4090.webp" alt=""><s>$1.660.000</s><span>$963.000</span></div>
                    <div class="tarjeta"><span>Repetidor de señal inalámbrico TP-Link Ti-WA850re, 300 Mbps, Wi-Fi, color blanco, 110 V/220 V</span><img src="recursos/productos/ofertas/tplinkextender.webp" alt=""><s>$38.000</s><span>$29.000</span></div>
                </div>
`

