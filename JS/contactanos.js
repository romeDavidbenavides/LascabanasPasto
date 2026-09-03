emailjs.init({
  publicKey: "GbECErPoD58910Qkk"
});

// Refuerzo para que el video de fondo se reproduzca en iPhone/Safari.
(function reproducirVideoFondo() {
  const video = document.getElementById("videoFondo");
  if (!video) return;

  const intentar = () => { const p = video.play(); if (p) p.catch(() => {}); };

  intentar();
  video.addEventListener("loadedmetadata", intentar);
  video.addEventListener("canplay", intentar);
  ["touchstart", "click", "scroll"].forEach((evento) => {
    document.addEventListener(evento, intentar, { once: true, passive: true });
  });
})();

document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault();

  const form = event.currentTarget;
  const templateParams = {
    email: form.elements.email.value,
    subject: form.elements.subject.value,
    message: form.elements.message.value
  };

  emailjs.send("service_oileah", "template_fmvm3mg", templateParams)
    .then(function(){
      alert("Tu mensaje ha sido enviado con éxito");
      form.reset();
    })
    .catch(function(error){
      alert("Error al enviar");
      console.error("EmailJS:", error);
    });
});