
const productos = [
  {
    id: 1,
    nombre: "Grifo Monocomando",
    descripcion: "Grifo monocomando para bacha de cocina.",
    precio: 13982,
    imagen:
      "https://i.ibb.co/PwS7PwF/Grifo-monocomando.webp",
    categoria: "Agua",
    stock: 50,
  },
  {
    id: 2,
    nombre: "Tanque de Agua 1000L",
    descripcion: "Tanque de almacenamiento de agua de 1000 litros.",
    precio: 61389.99,
    imagen: "https://i.ibb.co/0KPLBft/Tanque-de-agua.jpg",
    categoria: "Agua",
    stock: 20,
  },
  {
    id: 3,
    nombre: "Bomba de Agua Sumergible",
    descripcion:
      "Bomba sumergible para extracción de agua de pozos o cisternas.",
    precio: 137943.5,
    imagen:
      "https://i.ibb.co/7G9tVz9/Bomba-de-agua.webp",
    categoria: "Agua",
    stock: 15,
  },
  {
    id: 4,
    nombre: "Tubería de PVC de 1 metro",
    descripcion: "Caño de PVC para la conducción de agua de 3/4.",
    precio: 3235.75,
    imagen:
      "https://i.ibb.co/R41vx9W/Ca-o-de-agua.webp",
    categoria: "Agua",
    stock: 30,
  },
  {
    id: 5,
    nombre: "Filtro de Agua para Grifo",
    descripcion: "Filtro para purificar el agua del grifo y eliminar impurezas.",
    precio: 2445.99,
    imagen:
      "https://i.ibb.co/p3Dvfzq/Filtro-de-agua.webp",
    categoria: "Agua",
    stock: 40,
  },
  {
    id: 6,
    nombre: "Cable Eléctrico 16mm",
    descripcion: "Cable eléctrico para instalación industrial por 10 m.",
    precio: 15934.52,
    imagen:
      "https://i.ibb.co/XDDbbbk/Cable-electrico.webp",
    categoria: "Electricidad",
    stock: 25,
  },
  {
    id: 7,
    nombre: "Interruptor de Luz",
    descripcion: "Interruptor de luz de pared para encender o apagar la iluminación.",
    precio: 832.99,
    imagen:
      "https://i.ibb.co/PYG4zm8/Interruptor-de-luz.webp",
    categoria: "Electricidad",
    stock: 60,
  },
  {
    id: 8,
    nombre: "Regulador de Voltaje",
    descripcion: "Regulador para estabilizar el voltaje eléctrico en dispositivos electrónicos.",
    precio: 4222.25,
    imagen:
      "https://i.ibb.co/Q8JGv4T/Regulador-de-voltaje.webp",
    categoria: "Electricidad",
    stock: 10,
  },
  {
    id: 9,
    nombre: "Termocupla de calefactor",
    descripcion: "Termocupla universal en marca y artefactos, ej: cocina, calefactor y calefón.",
    precio: 1399.0,
    imagen:
      "https://i.ibb.co/L0HMhTt/Termocupla.webp",
    categoria: "Gas",
    stock: 5,
  },
  {
    id: 10,
    nombre: "Manguera para Gas",
    descripcion: "Manguera flexible para conexiones de gas por metro.",
    precio: 1342.99,
    imagen:
      "https://i.ibb.co/cg5Qy1G/Manguera-para-gas.webp",
    categoria: "Gas",
    stock: 40,
  },
  {
    id: 11,
    nombre: "Pintura Acrílica Blanca",
    descripcion: "Pintura acrílica blanca por 20 l. para paredes y techos.",
    precio: 29432.75,
    imagen:
      "https://i.ibb.co/GF5K3hm/Pintura-acrilica-blanca.webp",
    categoria: "Pintura",
    stock: 30,
  },
  {
    id: 12,
    nombre: "Rodillo de Pintura",
    descripcion: "Rodillo de pintura para aplicar pintura en superficies grandes.",
    precio: 835.56,
    imagen:
      "https://i.ibb.co/KwKd8k0/Rodillo.webp",
    categoria: "Pintura",
    stock: 50,
  },
  {
    id: 13,
    nombre: "Pintura Spray Negro",
    descripcion: "Pintura en spray para retoques y detalles.",
    precio: 656.99,
    imagen:
      "https://i.ibb.co/hRctyYy/Pintura-spray.webp",
    categoria: "Pintura",
    stock: 20,
  },
  {
    id: 14,
    nombre: "Brocha de Pintura",
    descripcion: "Brocha de pintura para aplicar pintura en áreas pequeñas.",
    precio: 486.25,
    imagen:
      "https://i.ibb.co/M9j8hLx/Brocha.webp",
    categoria: "Pintura",
    stock: 40,
  },
  {
    id: 15,
    nombre: "Grifo Termostático",
    descripcion: "Grifo termostático para regular la temperatura del agua.",
    precio: 3648.0,
    imagen:
      "https://i.ibb.co/GHK6TBc/Grifo-termostatico.webp",
    categoria: "Agua",
    stock: 15,
  },
  {
    id: 16,
    nombre: "Caldera de Gas",
    descripcion: "Caldera de gas para calefacción y agua caliente.",
    precio: 55343.0,
    imagen:
      "https://i.ibb.co/VQLGmNr/Caldera-de-gas.webp",
    categoria: "Gas",
    stock: 8,
  },
  {
    id: 17,
    nombre: "Enchufe Eléctrico",
    descripcion: "Enchufe de pared doble para conectar dispositivos eléctricos.",
    precio: 799.43,
    imagen:
      "https://i.ibb.co/G9tNs9t/Enchufe.webp",
    categoria: "Electricidad",
    stock: 100,
  },
  {
    id: 18,
    nombre: "Llave Ajustable",
    descripcion: "Llave ajustable para apretar y aflojar tuercas y tornillos.",
    precio: 2457.5,
    imagen:
      "https://i.ibb.co/R9PPZdN/Llave-ajustable.webp",
    categoria: "Herramienta",
    stock: 35,
  },
  {
    id: 19,
    nombre: "Amoladora",
    descripcion: "Amoladora con cable de 2.5 m y para disco de 11,5 cm.",
    precio: 28432.0,
    imagen:
      "https://i.ibb.co/C1QCxcp/Amoladora.webp",
    categoria: "Herramienta",
    stock: 25,
  },
  {
    id: 20,
    nombre: "Sellador de Silicona",
    descripcion: "Sellador de silicona para juntas y grietas.",
    precio: 1375.75,
    imagen:
      "https://i.ibb.co/8XhTnYK/Sellador-de-silicona.webp",
    categoria: "Herramienta",
    stock: 50,
  },
];


function obtenerDato() {
    return new Promise ( ( resuelve, rechaza ) => {
      setTimeout(() => {
            const fecha = new Date().toLocaleDateString;
            resuelve(productos, fecha);
        }, 2000)
    })
}
//En el mismo archivo se exporta más de una función, por ello una sola se escribe como export default
export function obtenerDatoProducto(idURL) {
  return new Promise ( ( resuelve, rechaza ) => {
    const productoRequerido = productos.find((item) => item.id === parseInt(idURL)
    );      
      setTimeout(() => {
        resuelve(productoRequerido);
      }, 2000);
    });
  }

export function obtenerDatoCategoria (categoryURL) {
  return new Promise ( ( resuelve, rechaza ) => {
    const categoriaRequerida = productos.filter((item) => { 
      return item.categoria.toLowerCase() === categoryURL.toLowerCase();
    });
    setTimeout(() => {
      resuelve(categoriaRequerida);
    }, 2000);
  });
}

export default obtenerDato; 