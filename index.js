const express = require('express');


// Creación del servidor de express
const app = express();


app.listen( 4000, () => {
    console.log( `Servidor Corriendo en el puerto ${ 4000 }`);
});
