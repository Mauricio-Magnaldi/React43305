`Introducción`

Este proyecto lo realice para el curso de React JS dictado por un profesor de CoderHouse.
Tal proyecto trata de un ecommerce de productos de ferretería, cada producto tiene una foto, nombre, descripción, stock, precio, descuento según corresponda.

`Desarrollo del software`

Visual Studio Code (VS Code) es el editor de código fuente gratuito desarrollado por Microsoft utilizado para el desarrollo. Tal editor tiene la particularidad que permite su utilización en HTML5, CSS, JS, REACT, etc.
Las tecnologías utilizadas en el proyecto fueron React, react-router-dom. A través de react-router-dom utilizo BrowserRouter, Routes y Route para definir las rutas.
Además utilizo CartContextProvider el cual es un contexto que proporciona información util del carrito de compra. 

`Base de Datos No Relacional`

También utilice Firestore de Firebase para implementar la base de datos de productos, es decir, el catálogo de items como también así para registrar cada una de las ordenes de compra.

`Imagenes`

Las imagenes de los diversos productos que componen el catálogo las almaceno en https://imgbb.com/. El mismo es un hosting gratuito para las imágenes.

`Github`

El proyecto se sube a Github, la cual es una plataforma de desarrollo colaborativo en la nube. 

Si gustas puedes clonar en tu laptop este proyecto, aunque primero debieras contar con Git instalado, si no lo tienes entonces puedes descargarlo de git-scm.com

Luego,

A continuación la URL del repositorio en Github

https://github.com/Mauricio-Magnaldi/React43305.git

Debes realizar un `git clone https://github.com/Mauricio-Magnaldi/React43305.git` , luego un `npm install` y finalmente un `npm start` 

El código esta estructurado en diversos componentes. Lo que tiene como ventaja el hecho de focalizarse en un solo aspecto manejado por un único componente. Tal es así que hay un componente que contiene los métodos de un array que será el carrito, tales métodos se utilizan a través de funciones para resolver una necesidad en particular. Luego hay otro componente que se ocupa de manejar el detalle que se muestra del producto, otro componente se ocupa de indicar que cantidad de items de un mismo producto se agregan al carrito, etc.
