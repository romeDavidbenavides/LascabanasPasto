emailjs.init({
  publicKey: "GbECErPoD58910Qkk"
});

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