const express = require('express');
const path = require('path');

const app = express();

// Cambia "easy-finances/browser" por el nombre exacto de tu subcarpeta dentro de dist
const appFolder = 'dist/easy-finances/browser';

// Sirve los archivos estáticos de la carpeta "browser"
app.use(express.static(path.join(__dirname, appFolder)));

// Redirige todas las rutas al archivo "index.html"
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, appFolder, 'index.html'));
});

// Configura el puerto para Heroku
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
