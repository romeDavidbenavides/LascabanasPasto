// Datos de contacto y enlaces usados para las reservas por WhatsApp.
const NUMERO_WHATSAPP = "573014260352";
const SITIO_WEB = "https://lascabanaspasto.com.co";

// Arma el enlace de WhatsApp con el número de la cabaña y la dirección
// de /r/<n>.html, que es la que aporta la foto de vista previa al chat.
function enlaceReservaWhatsApp(cabana) {
  const paginaConFoto = `${SITIO_WEB}/r/${cabana.id}.html`;
  const mensaje = `Hola, quiero reservar la ${cabana.id}\n${paginaConFoto}`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

const cabanas = [
{
  nombre:"Cabaña Finca #17",
  tipo:"jacuzzi",
  video:"../videos/c1.mp4",
  imagen:"../imagenes/c1.png",
  precio:"120.000 COP",
  info: `
  🛀 Jacuzzi<br>😈 Sillón del amor<br>🛌 Cama 2x2<br>
  🚿 Ducha caliente<br>📺 TV <br>
  🚗 Parqueadero<br>📱 WiFi<br>
  🛋Sala
  `
},
{
  nombre:"Cabaña Deluxe #14",
  tipo:"jacuzzi",
  video:"../videos/c2.mp4",
  imagen:"../imagenes/c2.png",
  precio:"140.000 COP",
  info: `
  🛀 Jacuzzi<br>🔥 Sillón del amor<br>🛌 Cama 2x2<br>
  🚿 Ducha caliente<br>📺 TV<br>🛋 Sala<br>
  🍻 Mini bar<br>📱 WiFi<br>🚗 Parqueadero
  `
},
{
  nombre:"Cabaña Premium #6",
  tipo:"premium",
  video:"../videos/c3.mp4",
  imagen:"../imagenes/C6.jpeg",
  precio:"130.000 COP",
  info: `
  🛀 Jacuzzi<br>😈 Sillón del amor<br>🛌 Cama 2x2<br>
  📺 TV<br>🍻 Mini bar<br>📱 WiFi
  `
},
{
  nombre:"Cabaña Grupal #12",
  tipo:"grupales",
  video:"../videos/c4.mp4",
  imagen:"../imagenes/C12.png",
  precio:"240.000 COP",
  info: `
  🛁 Jacuzzi 6 personas<br>🛏️ 2 camas<br>🎶 Sonido<br>
  🍸 Sala<br>🚽 2 baños<br>🚗 Parqueadero
  `
},
{
  nombre:"Cabaña Sencilla #28",
  tipo:"economicas",
  video:"../videos/C28.mp4",
  imagen:"../imagenes/C28.jpeg",
  precio:"110.000 COP",
  info: `
  🛀 Jacuzzi<br>🛌 Cama<br>📺 TV<br>
  🚿 Ducha<br>📱 WiFi
  `
},
{
  nombre:"Cabaña Presidencial #22",
  tipo:"premium",
  video:"../videos/c6.mp4",
  imagen:"../imagenes/C22.jpeg",
  precio:"140.000 COP",
  info: `
  🛌 Cama circular<br>🛀 Jacuzzi<br>
  📺 TV<br>🍻 Mini bar<br>📱 WiFi
  `
},
{
  nombre:"Cabaña Neón",
  tipo:"grupales",
  video:"../videos/c7.mp4",
  imagen:"../imagenes/C7.png",
  precio:"300.000 COP",
  info: `
  🎤 Karaoke<br>🎶 Sonido<br>💫 Luces disco<br>
  🛁 Jacuzzi<br>🏠 2 cuartos
  `
},
{
  nombre:"Alaska",
  tipo:"grupales",
  video:"../videos/C8.mp4",
  imagen:"../imagenes/C8.png",
  precio:"420.000 COP",
  info: `
  🛁 Jacuzzi 8 personas<br>🎶 Sonido<br>
  🎤 Karaoke<br>🏠 3 cuartos<br>🍾 Bar
  `
},
{
  nombre:"Cabañitas",
  tipo:"economicas",
  video:"../videos/c9.mp4",
  imagen:"../imagenes/S1.jpeg",
  precio:"80.000 COP",
  info: `
  🛏️ Cama doble<br>🚿 Ducha<br>
  📺 TV<br>🚗 Parqueadero
  `
},
{
  nombre:"BDSM Room #21",
  tipo:"jacuzzi",
  video:"../videos/c10.mp4",
  imagen:"../imagenes/C21.jpeg",
  precio:"140.000 COP",
  info: `
  🙊 Juguetes<br>🤩 Columpio<br>
  🛀 Jacuzzi<br>🛏️ Cama<br>
  📺 TV
  `
},
{
  nombre:"BDSM Room #20",
  tipo:"romanticas",
  video:"../videos/c11.mp4",
  imagen:"../imagenes/c11.png",
  precio:"90.000 COP",
  info: `
  🙊 Juguetes<br>🤩 Columpio<br>
  🛏️ Cama<br>📺 TV
  `
},
{
  nombre:"Tropical Party #19",
  tipo:"grupales",
  video:"../videos/c12.mp4",
  imagen:"../imagenes/C12.png",
  precio:"350.000 COP",
  info: `
  🛁 Jacuzzi 10 personas<br>🎶 Sonido<br>
  🎤 Karaoke<br>🏠 2 cuartos<br>🍾 Bar
  `
},
{
  nombre:"Cabaña 13",
  tipo:"economicas",
  video:"../videos/c13.mp4",
  imagen:"../imagenes/S2.jpeg",
  precio:"80.000 COP",
  info:`🛌 Cama cómoda<br>📺 TV<br>🚿 Ducha`
},
{
  nombre:"Cabaña 14",
  tipo:"economicas",
  video:"../videos/c14.mp4",
  imagen:"../imagenes/S3.jpeg",
  precio:"80.000 COP",
  info:`🛌 Cama<br>💡 Luces cálidas<br>🚿 Ducha`
},
{
  nombre:"Cabaña 15",
  tipo:"economicas",
  video:"../videos/c15.mp4",
  imagen:"../imagenes/S4.jpeg",
  precio:"80.000 COP",
  info:`🛌 Cama<br>📺 TV<br>🚿 Baño privado`
},
{
  nombre:"Cabaña 16",
  tipo:"premium",
  video:"../videos/c16.mp4",
  imagen:"../imagenes/c16.png",
  precio:"140.000 COP",
  info:`🛌 Cama<br>📱 WiFi<br>🚿 Ducha`
},
{
  nombre:"Cabaña 17",
  tipo:"economicas",
  video:"../videos/c17.mp4",
  imagen:"../imagenes/S6.jpeg",
  precio:"80.000 COP",
  info:`🛌 Cama king<br>🍻 Mini bar<br>📺 TV`
},
{
  nombre:"Cabaña 18",
  tipo:"premium",
  video:"../videos/c18.mp4",
  imagen:"../imagenes/C18.jpg",
  precio:"160.000 COP",
  info:`🛌 Cama grande<br>📺 TV<br>❄️ Calefacción`
},
{
  nombre:"Cabaña 19",
  tipo:"economicas",
  video:"../videos/c19.mp4",
  imagen:"../imagenes/S7.jpeg",
  precio:"80.000 COP",
  info:`🛏️ 2 camas<br>🛋 Sala<br>📺 TV`
},
{
  nombre:"Cabaña 20",
  tipo:"economicas",
  video:"../videos/c20.mp4",
  imagen:"../imagenes/S8.jpeg",
  precio:"80.000 COP",
  info:`🛌 Cama doble<br>💡 Luces<br>📺 TV`
},
{
  nombre:"Cabaña 21",
  tipo:"economicas",
  video:"../videos/c21.mp4",
  imagen:"../imagenes/S9.jpeg",
  precio:"80.000 COP",
  info:`Luces<br>🛌 Cama<br>📺 TV`
},
{
  nombre:"Cabaña 22",
  tipo:"economicas",
  video:"../videos/S10.mp4",
  imagen:"../imagenes/S10.jpg",
  precio:"80.000 COP",
  info:`🛌 Cama doble<br>💖 Decoración<br>📺 TV`
}
];


// Archivos organizados por el número que aparece en cada cabaña.
const fotosPorCabana = {
  1: ['../imagenes/CA1_1.jpeg', '../imagenes/CA1_2.jpeg', '../imagenes/CA1_3.jpeg'],
  2: ['../imagenes/CA2_1.jpeg'],
  3: ['../imagenes/CA3_1.jpeg', '../imagenes/CA3_2.jpeg', '../imagenes/CA3_3.jpeg'],
  4: ['../imagenes/CA4_1.jpeg', '../imagenes/CA4_2.jpeg'],
  5: ['../imagenes/CA5_1.jpeg', '../imagenes/CA5_2.jpeg'],
  6: ['../imagenes/CA6_1.jpeg', '../imagenes/CA6_2.jpeg'],
  7: ['../imagenes/CA7_1.jpeg', '../imagenes/CA7_2.jpeg', '../imagenes/CA7_3.jpeg'],
  8: ['../imagenes/CA8_1.jpeg', '../imagenes/CA8_2.jpeg'],
  9: ['../imagenes/CA9_1.jpeg', '../imagenes/CA9_2.jpeg', '../imagenes/CA9_3.jpeg'],
  10: ['../imagenes/CA10_1.jpeg', '../imagenes/CA10_2.jpeg'],
  11: ['../imagenes/CA11_1.jpeg', '../imagenes/CA11_2.jpeg'],
  12: ['../imagenes/CA12_1.png'],
  13: ['../imagenes/S2.jpeg'],
  14: ['../imagenes/CA14_1.jpeg', '../imagenes/CA14_2.jpeg', '../imagenes/CA14_3.jpeg'],
  15: ['../imagenes/CA15_1.jpeg', '../imagenes/CA15_2.jpeg', '../imagenes/CA15_3.jpeg'],
  16: ['../imagenes/CA16_1.jpeg', '../imagenes/CA16_2.jpeg', '../imagenes/CA16_3.jpeg'],
  17: ['../imagenes/CA17_1.png'],
  18: ['../imagenes/CA18_1.jpeg', '../imagenes/CA18_2.jpeg', '../imagenes/CA18_3.jpeg'],
  19: ['../imagenes/CA19_1.png'],
  20: ['../imagenes/CA20_1.png'],
  21: ['../imagenes/CA21_1.jpeg', '../imagenes/CA21_2.jpeg', '../imagenes/CA21_3.jpeg'],
  22: ['../imagenes/CA22_1.jpeg', '../imagenes/CA22_2.jpeg', '../imagenes/CA22_3.jpeg']
};

const videosPorCabana = {
  1: '../videos/CA1.mp4', 3: '../videos/CA3.mp4', 4: '../videos/CA4.mp4',
  5: '../videos/CA5.mp4', 6: '../videos/CA6.mp4', 7: '../videos/CA7.mp4',
  8: '../videos/CA8.mp4', 9: '../videos/CA9.mp4', 10: '../videos/CA10.mp4',
  11: '../videos/CA11.mp4', 12: '../videos/CA12.mp4', 14: '../videos/CA14.mp4', 16: '../videos/CA16.mp4',
  15: '../videos/CA15.mp4', 17: '../videos/CA17.mp4', 18: '../videos/CA18.mp4',
  19: '../videos/CA19.mp4', 20: '../videos/CA20.mp4', 21: '../videos/CA21.mp4', 22: '../videos/CA22.mp4'
};
// Cada card conserva su número aunque se eliminen o agreguen cabañas.
cabanas.forEach((cabana, indice) => {
  cabana.id = indice + 1;
});

// Se retira la cabaña identificada con el número 13.
const indiceCabana13 = cabanas.findIndex(cabana => cabana.id === 13);
if (indiceCabana13 !== -1) cabanas.splice(indiceCabana13, 1);

// Nuevas cabañas disponibles en el catálogo.
cabanas.push(
  { id: 23, nombre: 'Cabaña #23', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 24, nombre: 'Cabaña #24', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 25, nombre: 'Cabaña #25', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 26, nombre: 'Cabaña #26', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 27, nombre: 'Cabaña #27', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 28, nombre: 'Cabaña #28', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' },
  { id: 29, nombre: 'Cabaña #29', tipo: 'economicas', precio: 'Consultar disponibilidad', info: 'Información disponible al reservar.' }
);

Object.assign(fotosPorCabana, {
  23: ['../imagenes/CA23_1.jpeg', '../imagenes/CA23_2.jpeg'],
  24: ['../imagenes/CA24_1.jpeg', '../imagenes/CA24_2.jpeg', '../imagenes/CA24_3.jpeg'],
  25: ['../imagenes/CA25_1.jpeg', '../imagenes/CA25_2.jpeg', '../imagenes/CA25_3.jpeg'],
  26: ['../imagenes/CA26_1.jpeg', '../imagenes/CA26_2.jpeg', '../imagenes/CA26_3.jpeg'],
  27: ['../imagenes/CA27_1.png'],
  28: ['../imagenes/CA28_1.jpeg'],
  29: ['../imagenes/CA29_1.jpeg']
});

Object.assign(videosPorCabana, {
  23: '../videos/CA23.mp4', 24: '../videos/CA24.mp4', 25: '../videos/CA25.mp4',
  26: '../videos/CA26.mp4', 27: '../videos/CA27.mp4', 28: '../videos/CA28.mp4',
  29: '../videos/CA29.mp4'
});
// Clasificación múltiple: una cabaña puede aparecer en varios filtros.
const categoriasPorCabana = {
  1: ['sencillas'], 2: ['sencillas'], 3: ['sencillas'], 4: ['sencillas'],
  5: ['jacuzzi', 'premium'], 6: ['jacuzzi', 'grupales', 'premium'],
  7: ['sencillas'], 8: ['sencillas'], 9: ['sencillas'], 10: ['sencillas'],
  11: ['sencillas'], 12: ['grupales', 'jacuzzi'], 14: ['deluxe', 'jacuzzi', 'romanticas'],
  15: ['romanticas', 'sencillas'], 16: ['deluxe', 'jacuzzi'],
  17: ['romanticas', 'jacuzzi'], 18: ['sencillas', 'discapacitados'],
  19: ['grupales', 'jacuzzi'], 20: ['romanticas', 'bdsm'],
  21: ['romanticas', 'jacuzzi', 'bdsm'], 22: ['premium', 'jacuzzi'],
  23: ['sencillas'], 24: ['sencillas'], 25: ['sencillas', 'romanticas'],
  26: ['sencillas'], 27: ['grupales', 'jacuzzi', 'premium'],
  28: ['jacuzzi', 'romanticas'], 29: ['sencillas']
};

cabanas.forEach(cabana => {
  cabana.categorias = categoriasPorCabana[cabana.id] || [];
});
const serviciosSencilla = `
  🛏️ Cama doble<br>📺 TV<br>🚿 Ducha<br>🚗 Parqueadero<br>🛋️ Sillón del amor
`;

const detallesPorCabana = {
  1: { nombre: 'Cabaña Sencilla #1', precio: '80.000 COP', info: serviciosSencilla },
  2: { nombre: 'Cabaña Sencilla #2', precio: '80.000 COP', info: serviciosSencilla },
  3: { nombre: 'Cabaña Sencilla #3', precio: '80.000 COP', info: serviciosSencilla },
  4: { nombre: 'Cabaña Sencilla #4', precio: '80.000 COP', info: serviciosSencilla },
  5: { nombre: 'Cabaña #5', precio: '130.000 COP', info: `🛁 Jacuzzi<br>🛏️ Cama doble<br>🛋️ Sala<br>💃 Pole dance<br>🍸 Mini bar<br>🚗 Parqueadero<br>🚿 Ducha` },
  6: { nombre: 'Cabaña Premium #6', precio: '200.000 COP', info: `🛋️ Sillón del amor<br>🛏️ Cama doble<br>🚿 Ducha<br>🛁 Jacuzzi<br>🛋️ Sala<br>🍸 Mini bar<br>🚗 Parqueadero<br>👥 Máximo 3 personas` },
  7: { nombre: 'Cabaña Sencilla #7', precio: '80.000 COP', info: serviciosSencilla },
  8: { nombre: 'Cabaña Sencilla #8', precio: '80.000 COP', info: serviciosSencilla },
  9: { nombre: 'Cabaña Sencilla #9', precio: '80.000 COP', info: serviciosSencilla },
  10: { nombre: 'Cabaña Sencilla #10', precio: '80.000 COP', info: serviciosSencilla },
  11: { nombre: 'Cabaña Sencilla #11', precio: '80.000 COP', info: serviciosSencilla },
  12: { nombre: 'Cabaña Neón #12', precio: '240.000 COP', info: `🛋️ Sala de estar<br>🔊 Equipo de sonido<br>🛁 Jacuzzi<br>🛏️ 2 camas dobles<br>🚿 2 baños privados<br>🍸 Mini bar<br>👥 Máximo 6 personas` },
  14: { nombre: 'Cabaña Deluxe #14', precio: '140.000 COP', info: `🛁 Jacuzzi<br>🛋️ Sillón del amor<br>🛏️ Cama doble<br>🚿 Ducha<br>📺 TV<br>🍸 Mini bar<br>🛋️ Sala<br>🚗 Parqueadero` },
  15: { nombre: 'Cabaña Sencilla Romántica #15', precio: '80.000 COP', info: serviciosSencilla },
  16: { nombre: 'Cabaña Deluxe #16', precio: '140.000 COP', info: `🛁 Jacuzzi<br>🛋️ Sillón del amor<br>🛏️ Cama doble<br>🚿 Ducha<br>📺 TV<br>🍸 Mini bar<br>🛋️ Sala<br>🚗 Parqueadero` },
  17: { nombre: 'Cabaña Finca #17', precio: '120.000 COP', info: `🛁 Jacuzzi<br>🛋️ Sillón del amor<br>🛏️ Cama doble<br>🚿 Ducha<br>📺 TV<br>🛋️ Sala<br>🍸 Mini bar<br>🚗 Parqueadero` },
  18: { nombre: 'Cabaña #18', precio: '160.000 COP', info: `🛏️ Cama doble<br>📺 TV<br>🚿 Ducha<br>♿ Baño adaptado<br>🚗 Parqueadero` },
  19: { nombre: 'Tropical #19', precio: '350.000 COP', info: `🛁 Jacuzzi<br>🔊 Equipo de sonido<br>🪩 Discoteca<br>🛏️ 2 camas dobles<br>🍸 Barra tipo bar<br>🚗 Parqueadero` },
  20: { nombre: 'BDSM Room #20', precio: '90.000 COP', info: `💋 Juguetes<br>🛏️ Cama doble<br>🛋️ Sillón del amor<br>🪢 Arnés y columpio<br>📺 TV<br>❌ X del amor<br>🚗 Parqueadero` },
  21: { nombre: 'BDSM Room #21', precio: '140.000 COP', info: `💋 Juguetes<br>🛏️ Cama doble<br>🛋️ Sillón del amor<br>🪢 Arnés y columpio<br>📺 TV<br>❌ X del amor<br>🚗 Parqueadero<br>🛁 Jacuzzi` },
  22: { nombre: 'Presidencial #22', precio: '140.000 COP', info: `🛁 Jacuzzi<br>🛏️ Cama circular<br>📺 TV<br>🍸 Mini bar<br>🚗 Parqueadero` },
  23: { nombre: 'Cabaña Sencilla #23', precio: '80.000 COP', info: serviciosSencilla },
  24: { nombre: 'Cabaña Sencilla #24', precio: '80.000 COP', info: serviciosSencilla },
  25: { nombre: 'Cabaña Sencilla #25', precio: '80.000 COP', info: serviciosSencilla },
  26: { nombre: 'Cabaña Sencilla #26', precio: '80.000 COP', info: serviciosSencilla },
  27: { nombre: 'Alaska #27', precio: '420.000 COP', info: `🛁 Jacuzzi<br>🛋️ Sillón del amor<br>🪩 Discoteca<br>🏠 3 cuartos<br>🚗 Parqueadero<br>📺 TV<br>🍸 Barra tipo bar<br>👥 Máximo 8 personas` },
  28: { nombre: 'Cabaña Finca Sencilla #28', precio: '110.000 COP', info: `🛁 Jacuzzi<br>📺 TV<br>🛏️ Cama doble<br>🛋️ Sillón del amor<br>🚗 Parqueadero` },
  29: { nombre: 'Cabaña Sencilla #29', precio: '80.000 COP', info: serviciosSencilla }
};

cabanas.forEach(cabana => {
  const detalle = detallesPorCabana[cabana.id];
  if (detalle) Object.assign(cabana, detalle);
});
window.onload = () => {
  // Si se llega con ?ver=17 (por ejemplo desde un enlace de WhatsApp),
  // se muestra directamente esa cabaña.
  const cabanaSolicitada = new URLSearchParams(location.search).get("ver");
  if (cabanaSolicitada && /^\d+$/.test(cabanaSolicitada)) {
    mostrarCabanas(cabanas.filter(c => c.id.toString() === cabanaSolicitada));
  } else {
    filtrar('jacuzzi');
  }

  document.getElementById("buscador").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ejecutarBusqueda();
    }
  });

  contarVisita();
};

// Contador de visitas del catálogo mediante un servicio gratuito.
// Si el servicio no responde, simplemente no se muestra el número.
function contarVisita() {
  const contador = document.getElementById("contador-visitas");
  if (!contador) return;

  fetch("https://abacus.jasoncameron.dev/hit/lascabanaspasto.com.co/catalogo")
    .then(respuesta => (respuesta.ok ? respuesta.json() : Promise.reject()))
    .then(datos => {
      const total = datos && (datos.value ?? datos.count);
      if (typeof total !== "number") return;
      contador.textContent = `👁 ${total.toLocaleString("es-CO")} visitas`;
      contador.hidden = false;
    })
    .catch(() => {});
}

function mostrarCabanas(lista){
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  if (!lista.length) {
    contenedor.innerHTML = `
      <div class="sin-resultados">
        <h3>No encontramos resultados</h3>
        <p>Intenta buscar por nombre, categoría o número.</p>
        <p class="sugerencias">Sugerencias: <span>jacuzzi</span><span>deluxe</span><span>22</span><span>4</span></p>
      </div>
    `;
    return;
  }

  lista.forEach(c => {
    const numeroDeOrden = c.id;
    const fotos = fotosPorCabana[numeroDeOrden] || (c.imagen ? [c.imagen] : []);
    const portada = fotos[0] || "../imagenes/fachada.png";
    const video = videosPorCabana[numeroDeOrden];

    contenedor.innerHTML += `
      <div class="card">
        <!-- El número ahora aparece completamente limpio -->
        <div class="badge-numero">${numeroDeOrden}</div>
        ${fotos.length ? `<button type="button" class="btn-galeria" data-indice="${numeroDeOrden}" aria-label="Ver fotos de ${c.nombre}"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="8.5" cy="10" r="1.5"></circle><path d="m5 17 5-5 3.5 3 2-2 3 4"></path></svg></button>` : ""}
        
        <img src="${portada}" class="preview">
        ${video ? `<video data-src="${video}" muted loop playsinline webkit-playsinline preload="none" poster="${portada}"></video>` : ""}

        <div class="overlay">
          <h3>${c.nombre}</h3>
          <p>${c.precio}</p>
          <p>${c.info}</p>
          <a class="btn-wa" href="${enlaceReservaWhatsApp(c)}" target="_blank" rel="noopener">
            Continuar en WhatsApp
          </a>
        </div>

        <div class="info">
          ${c.info}
        </div>
      </div>
    `;
  });

  activarVideos();
  activarGaleria();
}

function filtrar(categoria){
  const filtradas = cabanas.filter(c => c.categorias.includes(categoria));
  mostrarCabanas(filtradas);
}
function activarVideos(){
  // En pantallas táctiles no hay "hover": el video se reproduce al tocar la tarjeta.
  const hayHover = window.matchMedia("(hover: hover)").matches;

  const cargar = (video) => {
    // La ruta solo se asigna la primera vez, para no descargar todos los videos.
    if (!video.dataset.loaded) {
      video.src = video.dataset.src;
      video.dataset.loaded = "true";
      video.load();
    }
  };

  const reproducir = (card, video) => {
    cargar(video);
    card.classList.add("reproduciendo");
    video.play().catch(() => {
      // El navegador reproducirá cuando tenga datos suficientes.
    });
  };

  const detener = (card, video) => {
    card.classList.remove("reproduciendo");
    video.pause();
    try {
      video.currentTime = 0;
    } catch (error) {
      // Si aún no hay metadatos, no hay posición que reiniciar.
    }
  };

  document.querySelectorAll(".card").forEach(card => {
    const video = card.querySelector("video");
    if (!video) return;

    if (hayHover) {
      card.addEventListener("mouseenter", () => reproducir(card, video));
      card.addEventListener("mouseleave", () => detener(card, video));
    }

    // Toque en móvil/tablet: alterna reproducción sin estorbar a los enlaces ni a la galería.
    card.addEventListener("click", (evento) => {
      if (hayHover || evento.target.closest("a, .btn-galeria")) return;
      if (card.classList.contains("reproduciendo")) {
        detener(card, video);
      } else {
        reproducir(card, video);
      }
    });
  });
}
function activarGaleria(){
  document.querySelectorAll('.btn-galeria').forEach(boton => {
    boton.addEventListener('click', (evento) => {
      evento.preventDefault();
      evento.stopPropagation();
      const indice = Number(boton.dataset.indice);
      abrirGaleria(fotosPorCabana[indice] || [], cabanas[indice - 1].nombre);
    });
  });
}

function abrirGaleria(fotos, nombre){
  if (!fotos.length) return;

  let fotoActual = 0;
  const modal = document.createElement('div');
  modal.className = 'galeria-modal';
  modal.innerHTML = `
    <div class="galeria-contenido" role="dialog" aria-modal="true" aria-label="Fotos de ${nombre}">
      <button type="button" class="galeria-cerrar" aria-label="Cerrar">×</button>
      <img class="galeria-imagen" alt="">
      <button type="button" class="galeria-anterior" aria-label="Foto anterior">‹</button>
      <button type="button" class="galeria-siguiente" aria-label="Foto siguiente">›</button>
      <p class="galeria-contador"></p>
    </div>`;

  const imagen = modal.querySelector('.galeria-imagen');
  const contador = modal.querySelector('.galeria-contador');
  const actualizarFoto = () => {
    imagen.src = fotos[fotoActual];
    imagen.alt = `${nombre} - foto ${fotoActual + 1}`;
    contador.textContent = `${fotoActual + 1} de ${fotos.length}`;
  };
  const cerrar = () => {
    document.body.style.overflow = '';
    modal.remove();
  };

  modal.querySelector('.galeria-cerrar').addEventListener('click', cerrar);
  modal.querySelector('.galeria-anterior').addEventListener('click', () => {
    fotoActual = (fotoActual - 1 + fotos.length) % fotos.length;
    actualizarFoto();
  });
  modal.querySelector('.galeria-siguiente').addEventListener('click', () => {
    fotoActual = (fotoActual + 1) % fotos.length;
    actualizarFoto();
  });
  modal.addEventListener('click', (evento) => {
    if (evento.target === modal) cerrar();
  });

  actualizarFoto();
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}
function ejecutarBusqueda() {
  const terminoOriginal = document.getElementById("buscador").value.trim();
  const normalizar = (texto) => texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (!terminoOriginal) {
    mostrarCabanas(cabanas);
    return;
  }

  const termino = normalizar(terminoOriginal);
  const esNumeroPuro = /^\d+$/.test(termino);

  if (esNumeroPuro) {
    mostrarCabanas(cabanas.filter(c => c.id.toString() === termino));
    return;
  }

  // Se ignoran conectores y palabras genéricas para buscar las palabras útiles.
  const palabrasIgnoradas = ["con", "de", "del", "la", "el", "las", "los", "una", "un", "casa", "cabana", "habitacion", "cuarto"];
  const sinonimos = { cabanitas: "sencillas" };
  const palabras = termino
    .split(/[^a-z0-9]+/)
    .filter(palabra => palabra && !palabrasIgnoradas.includes(palabra))
    .map(palabra => sinonimos[palabra] || palabra);

  const filtradas = cabanas.filter(c => {
    const textoCabana = normalizar(`${c.nombre} ${c.categorias.join(" ")}`);

    // Basta una coincidencia útil: "con jacuzzi" encuentra "jacuzzi".
    return palabras.some(palabra => {
      if (/^\d+$/.test(palabra)) return c.id.toString() === palabra;
      return textoCabana.includes(palabra);
    });
  });

  mostrarCabanas(filtradas);
}