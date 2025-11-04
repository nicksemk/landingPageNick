// Menu Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Enviando...";
  submitBtn.disabled = true;

  const formData = new FormData(this);
  //console.log("📋 Dados do formulário:", Object.fromEntries(formData));
  //console.log("📧 EMAIL QUE RECEBERIA:", "pietronicollas34conta2@gmail.com");

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("✅ Sucesso:", data);
        if (data.success) {
            const modal = document.querySelector("dialog");
        if (modal) {
            modal.showModal();
            const closeBtn = modal.querySelector(".closeModal");
            closeBtn.addEventListener("click", () => {
                modal.close();
            });
        }
             //alert("Mensagem enviada com sucesso!");
             this.reset();
        } else {
           // alert("Erro ao enviar a mensagem. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error("❌ Erro:", error);
        alert("Ocorreu um erro ao enviar a mensagem. ");
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    });
});

    



  /*setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    //console.log("✅ Processo completo - Formulário seria enviado!");
  }, 3000);
 // this.reset();*/


// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
