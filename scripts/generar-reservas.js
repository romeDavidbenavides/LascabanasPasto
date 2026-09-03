/*
 * Genera las páginas /r/<n>.html con etiquetas Open Graph.
 * Sirven para que, al enviar el enlace por WhatsApp, aparezca la
 * foto de la cabaña como vista previa dentro del mensaje.
 *
 * Uso:  node scripts/generar-reservas.js
 *
 * Si agregas, quitas o renombras cabañas, edita la tabla CABANAS.
 * "foto" es el nombre del archivo dentro de /imagenes/og/ (versión
 * liviana para la vista previa); si no existe esa carpeta se usa la
 * foto original de /imagenes/.
 */

const fs = require("fs");
const path = require("path");

const SITIO_WEB = "https://lascabanaspasto.com.co";
const NUMERO_WHATSAPP = "573014260352";

// n = número visible de la cabaña · foto = archivo de portada en /imagenes/
const CABANAS = [
  { n: 1,  nombre: "Cabaña Sencilla #1",           precio: "80.000 COP",  foto: "CA1_1.jpeg" },
  { n: 2,  nombre: "Cabaña Sencilla #2",           precio: "80.000 COP",  foto: "CA2_1.jpeg" },
  { n: 3,  nombre: "Cabaña Sencilla #3",           precio: "80.000 COP",  foto: "CA3_1.jpeg" },
  { n: 4,  nombre: "Cabaña Sencilla #4",           precio: "80.000 COP",  foto: "CA4_1.jpeg" },
  { n: 5,  nombre: "Cabaña #5",                    precio: "130.000 COP", foto: "CA5_1.jpeg" },
  { n: 6,  nombre: "Cabaña Premium #6",            precio: "200.000 COP", foto: "CA6_1.jpeg" },
  { n: 7,  nombre: "Cabaña Sencilla #7",           precio: "80.000 COP",  foto: "CA7_1.jpeg" },
  { n: 8,  nombre: "Cabaña Sencilla #8",           precio: "80.000 COP",  foto: "CA8_1.jpeg" },
  { n: 9,  nombre: "Cabaña Sencilla #9",           precio: "80.000 COP",  foto: "CA9_1.jpeg" },
  { n: 10, nombre: "Cabaña Sencilla #10",          precio: "80.000 COP",  foto: "CA10_1.jpeg" },
  { n: 11, nombre: "Cabaña Sencilla #11",          precio: "80.000 COP",  foto: "CA11_1.jpeg" },
  { n: 12, nombre: "Cabaña Neón #12",              precio: "240.000 COP", foto: "CA12_1.png" },
  { n: 14, nombre: "Cabaña Deluxe #14",            precio: "140.000 COP", foto: "CA14_1.jpeg" },
  { n: 15, nombre: "Cabaña Sencilla Romántica #15", precio: "80.000 COP", foto: "CA15_1.jpeg" },
  { n: 16, nombre: "Cabaña Deluxe #16",            precio: "140.000 COP", foto: "CA16_1.jpeg" },
  { n: 17, nombre: "Cabaña Finca #17",             precio: "120.000 COP", foto: "CA17_1.png" },
  { n: 18, nombre: "Cabaña #18",                   precio: "160.000 COP", foto: "CA18_1.jpeg" },
  { n: 19, nombre: "Tropical #19",                 precio: "350.000 COP", foto: "CA19_1.png" },
  { n: 20, nombre: "BDSM Room #20",                precio: "90.000 COP",  foto: "CA20_1.png" },
  { n: 21, nombre: "BDSM Room #21",                precio: "140.000 COP", foto: "CA21_1.jpeg" },
  { n: 22, nombre: "Presidencial #22",             precio: "140.000 COP", foto: "CA22_1.jpeg" },
  { n: 23, nombre: "Cabaña Sencilla #23",          precio: "80.000 COP",  foto: "CA23_1.jpeg" },
  { n: 24, nombre: "Cabaña Sencilla #24",          precio: "80.000 COP",  foto: "CA24_1.jpeg" },
  { n: 25, nombre: "Cabaña Sencilla #25",          precio: "80.000 COP",  foto: "CA25_1.jpeg" },
  { n: 26, nombre: "Cabaña Sencilla #26",          precio: "80.000 COP",  foto: "CA26_1.jpeg" },
  { n: 27, nombre: "Alaska #27",                   precio: "420.000 COP", foto: "CA27_1.png" },
  { n: 28, nombre: "Cabaña Finca Sencilla #28",    precio: "110.000 COP", foto: "CA28_1.jpeg" },
  { n: 29, nombre: "Cabaña Sencilla #29",          precio: "80.000 COP",  foto: "CA29_1.jpeg" },
];

const raiz = path.join(__dirname, "..");
const carpetaSalida = path.join(raiz, "r");
const hayOptimizadas = fs.existsSync(path.join(raiz, "imagenes", "og"));

fs.mkdirSync(carpetaSalida, { recursive: true });

const escapar = (texto) =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

for (const cabana of CABANAS) {
  const url = `${SITIO_WEB}/r/${cabana.n}.html`;
  const destinoHumano = `${SITIO_WEB}/HTML/catalogo.html?ver=${cabana.n}`;
  const imagen = hayOptimizadas
    ? `${SITIO_WEB}/imagenes/og/${cabana.n}.jpg`
    : `${SITIO_WEB}/imagenes/${cabana.foto}`;
  const titulo = `${cabana.nombre} — Las Cabañas Pasto`;
  const descripcion = `${cabana.precio} · Escríbenos por WhatsApp para reservar la cabaña ${cabana.n}.`;
  const mensajeWa = `Hola, quiero reservar la ${cabana.n}\n${url}`;
  const enlaceWa = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensajeWa)}`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapar(titulo)}</title>
<meta name="description" content="${escapar(descripcion)}">
<meta property="og:title" content="${escapar(titulo)}">
<meta property="og:description" content="${escapar(descripcion)}">
<meta property="og:image" content="${imagen}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Las Cabañas Pasto">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${imagen}">
<link rel="canonical" href="${destinoHumano}">
<meta http-equiv="refresh" content="0; url=${destinoHumano}">
<script>location.replace(${JSON.stringify(destinoHumano)});</script>
</head>
<body style="font-family:'Poppins',Arial,sans-serif;text-align:center;padding:48px 20px;color:#3d3d3d">
<p>Abriendo el catálogo…</p>
<p><a href="${destinoHumano}">Ver la cabaña ${cabana.n} en el catálogo</a></p>
<p><a href="${escapar(enlaceWa)}">Reservar la ${cabana.n} por WhatsApp</a></p>
</body>
</html>
`;

  fs.writeFileSync(path.join(carpetaSalida, `${cabana.n}.html`), html, "utf8");
}

console.log(
  `Generadas ${CABANAS.length} páginas en /r/  (og:image ${
    hayOptimizadas ? "desde /imagenes/og/" : "desde /imagenes/ — conviene optimizar)"
  }`
);
