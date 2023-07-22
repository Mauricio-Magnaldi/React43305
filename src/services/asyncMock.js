// Simula las posibles respuestas de la BBDD del backend.


const productoFerreteria = [
    {
        idProducto: 1,
      nombreProducto: "Grifo Monocomando",
      descripcionProducto: "Grifo monocomando para bacha de cocina.",
      precioProducto: 13982,
      imagenProducto:
        "https://i.ibb.co/PwS7PwF/Grifo-monocomando.webp",
      categoriaProducto: "Agua",
      stockProducto: 50,
    },
    {
      idProducto: 2,
      nombreProducto: "Tanque de Agua 1000L",
      descripcionProducto: "Tanque de almacenamiento de agua de 1000 litros.",
      precioProducto: 61389.99,
      imagenProducto: "https://i.ibb.co/0KPLBft/Tanque-de-agua.jpg",
      categoriaProducto: "Agua",
      stockProducto: 20,
    },
    {
      idProducto: 3,
      nombreProducto: "Bomba de Agua Sumergible",
      descripcionProducto:
        "Bomba sumergible para extracción de agua de pozos o cisternas.",
      precioProducto: 137943.5,
      imagenProducto:
        "https://i.ibb.co/7G9tVz9/Bomba-de-agua.webp",
      categoriaProducto: "Agua",
      stockProducto: 15,
    },
    {
      idProducto: 4,
      nombreProducto: "Tubería de PVC de 1 metro",
      descripcionProducto: "Caño de PVC para la conducción de agua de 3/4.",
      precioProducto: 3235.75,
      imagenProducto:
        "https://i.ibb.co/R41vx9W/Ca-o-de-agua.webp",
      categoriaProducto: "Agua",
      stockProducto: 30,
    },
    {
      idProducto: 5,
      nombreProducto: "Filtro de Agua para Grifo",
      descripcionProducto: "Filtro para purificar el agua del grifo y eliminar impurezas.",
      precioProducto: 2445.99,
      imagenProducto:
        "https://i.ibb.co/p3Dvfzq/Filtro-de-agua.webp",
      categoriaProducto: "Agua",
      stockProducto: 40,
    },
    {
      idProducto: 6,
      nombreProducto: "Cable Eléctrico 16mm",
      descripcionProducto: "Cable eléctrico para instalación industrial por 10 m.",
      precioProducto: 15934.52,
      imagenProducto:
        "https://i.ibb.co/XDDbbbk/Cable-electrico.webp",
      categoriaProducto: "Electricidad",
      stockProducto: 25,
    },
    {
      idProducto: 7,
      nombreProducto: "Interruptor de Luz",
      descripcionProducto: "Interruptor de luz de pared para encender o apagar la iluminación.",
      precioProducto: 832.99,
      imagenProducto:
        "https://i.ibb.co/PYG4zm8/Interruptor-de-luz.webp",
      categoriaProducto: "Electricidad",
      stockProducto: 60,
    },
    {
      idProducto: 8,
      nombreProducto: "Regulador de Voltaje",
      descripcionProducto: "Regulador para estabilizar el voltaje eléctrico en dispositivos electrónicos.",
      precioProducto: 4222.25,
      imagenProducto:
        "https://i.ibb.co/Q8JGv4T/Regulador-de-voltaje.webp",
      categoriaProducto: "Electricidad",
      stockProducto: 10,
    },
    {
      idProducto: 9,
      nombreProducto: "Termocupla de calefactor",
      descripcionProducto: "Termocupla universal en marca y artefactos, ej: cocina, calefactor y calefón.",
      precioProducto: 1399.0,
      imagenProducto:
        "https://i.ibb.co/L0HMhTt/Termocupla.webp",
      categoriaProducto: "Gas",
      stockProducto: 5,
    },
    {
      idProducto: 10,
      nombreProducto: "Manguera para Gas",
      descripcionProducto: "Manguera flexible para conexiones de gas por metro.",
      precioProducto: 1342.99,
      imagenProducto:
        "https://i.ibb.co/cg5Qy1G/Manguera-para-gas.webp",
      categoriaProducto: "Gas",
      stockProducto: 40,
    },
    {
      idProducto: 11,
      nombreProducto: "Pintura Acrílica Blanca",
      descripcionProducto: "Pintura acrílica blanca por 20 l. para paredes y techos.",
      precioProducto: 29432.75,
      imagenProducto:
        "https://i.ibb.co/GF5K3hm/Pintura-acrilica-blanca.webp",
      categoriaProducto: "Pintura",
      stockProducto: 30,
    },
    {
      idProducto: 12,
      nombreProducto: "Rodillo de Pintura",
      descripcionProducto: "Rodillo de pintura para aplicar pintura en superficies grandes.",
      precioProducto: 835.56,
      imagenProducto:
        "https://i.ibb.co/KwKd8k0/Rodillo.webp",
      categoriaProducto: "Pintura",
      stockProducto: 50,
    },
    {
      idProducto: 13,
      nombreProducto: "Pintura Spray Negro",
      descripcionProducto: "Pintura en spray para retoques y detalles.",
      precioProducto: 656.99,
      imagenProducto:
        "https://i.ibb.co/hRctyYy/Pintura-spray.webp",
      categoriaProducto: "Pintura",
      stockProducto: 20,
    },
    {
      idProducto: 14,
      nombreProducto: "Brocha de Pintura",
      descripcionProducto: "Brocha de pintura para aplicar pintura en áreas pequeñas.",
      precioProducto: 486.25,
      imagenProducto:
        "https://i.ibb.co/M9j8hLx/Brocha.webp",
      categoriaProducto: "Pintura",
      stockProducto: 40,
    },
    {
      idProducto: 15,
      nombreProducto: "Grifo Termostático",
      descripcionProducto: "Grifo termostático para regular la temperatura del agua.",
      precioProducto: 3648.0,
      imagenProducto:
        "https://i.ibb.co/GHK6TBc/Grifo-termostatico.webp",
      categoriaProducto: "Agua",
      stockProducto: 15,
    },
    {
      idProducto: 16,
      nombreProducto: "Caldera de Gas",
      descripcionProducto: "Caldera de gas para calefacción y agua caliente.",
      precioProducto: 55343.0,
      imagenProducto:
        "https://i.ibb.co/VQLGmNr/Caldera-de-gas.webp",
      categoriaProducto: "Gas",
      stockProducto: 8,
    },
    {
      idProducto: 17,
      nombreProducto: "Enchufe Eléctrico",
      descripcionProducto: "Enchufe de pared doble para conectar dispositivos eléctricos.",
      precioProducto: 799.43,
      imagenProducto:
        "https://i.ibb.co/G9tNs9t/Enchufe.webp",
      categoriaProducto: "Electricidad",
      stockProducto: 100,
    },
    {
      idProducto: 18,
      nombreProducto: "Llave Ajustable",
      descripcionProducto: "Llave ajustable para apretar y aflojar tuercas y tornillos.",
      precioProducto: 2457.5,
      imagenProducto:
        "https://i.ibb.co/R9PPZdN/Llave-ajustable.webp",
      categoriaProducto: "Herramienta",
      stockProducto: 35,
    },
    {
      idProducto: 19,
      nombreProducto: "Amoladora",
      descripcionProducto: "Amoladora con cable de 2.5 m y para disco de 11,5 cm.",
      precioProducto: 28432.0,
      imagenProducto:
        "https://i.ibb.co/C1QCxcp/Amoladora.webp",
      categoriaProducto: "Herramienta",
      stockProducto: 25,
    },
    {
      idProducto: 20,
      nombreProducto: "Sellador de Silicona",
      descripcionProducto: "Sellador de silicona para juntas y grietas.",
      precioProducto: 1375.75,
      imagenProducto:
        "https://i.ibb.co/8XhTnYK/Sellador-de-silicona.webp",
      categoriaProducto: "Herramienta",
      stockProducto: 50,
    },
  ];

function obtenerDatos() {
    return new Promise ( ( resuelve, rechaza ) => {
        setTimeout(() => {
            resuelve(productoFerreteria)
        }, 3000)
    })
}

export default obtenerDatos; 