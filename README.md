# APP SSR REACT

## Descripcion 

El SSR es una técnica utilizada en aplicaciones web para generar el HTML en el servidor antes de que se envíe al navegador del cliente. Esto es especialmente útil en React para mejorar la velocidad de carga inicial de la página y optimizar el SEO, ya que los motores de búsqueda pueden indexar el contenido de manera más eficiente.

En el contexto de React, SSR implica renderizar los componentes de React en el servidor utilizando ReactDOMServer. Este proceso convierte tus componentes React en HTML, que luego se envía al navegador. Cuando el navegador recibe este HTML, muestra la página inmediatamente, incluso antes de descargar todo el JavaScript.



## Contenido
´´´
RAPPID BACKEND APP/
├─ client/
│  ├─ index.js
├─ components/
│  ├─ components/
│  ├─ edits/
│  │  ├─ data.json
│  │  ├─ styles.json
│  ├─ public/
│  │  ├─ index.html
│  ├─ Home.jsx
├─ server/
│  ├─ public/
│  │  ├─ index.html
│  │  ├─ img/
│  ├─ index.js
´´´
## Despliegue

Clonar branch master

´´´
git clone -b master https://github.com/rappidtech/ssr-react-app.git
cd ssr-react-app
npm install
´´´

### Para iniciar en desarrollo:
´´´
npm run build-dev
´´´
Esto creara un archivo bundle.js en server/public/
Luego iniciar el servidor en el puerto 3000 con
´´´
npm run dev
´´´
Esto deberia renderizar todo el contenido y los estilos en la nueva pagina de enlaces
server/index.js es el que genera el servidor y maneja las rutas de donde se levanta el nuevo archivo

### Para iniciar producción
´´´
npm run build-esbuild
´´´
Esto compilara los archivos bundle.js, bundle.js.map y el archivo server/public/index.html se podra ejecutar en el navegador, abriendo el archivo


## Construido con

* [React](https://es.reactjs.org/) - El framework web usado
* [Node.js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript
* [Express](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js

