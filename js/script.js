const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Fechar menu com tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    toggleMenu();
  }
});

/* CONTATO */

function abrirEmail() {
  window.location.href = "mailto:contato@droneapi.tech";
}

function fazerLigacao() {
  if (confirm("Deseja ligar para (11) 91234-5678?")) {
    window.location.href = "tel:+5511912345678";
  }
}

function abrirChat() {
  if (watsonInstance) {
    watsonInstance.openWindow();
  } else {
    console.warn(
      "O chat ainda está carregando. Tente novamente em alguns segundos."
    );
  }
}

document.querySelectorAll(".cartao-contato").forEach((cartao) => {
  cartao.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
  });

  cartao.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// FAQ BOTAO
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".questao-field");
  const submitBtn = document.querySelector(".submit-btn");

  submitBtn.addEventListener("click", function () {
    const pergunta = inputField.value.trim();

    if (pergunta === "") {
      alert("Por favor, digite uma pergunta antes de enviar.");
      return;
    }

    console.log("Pergunta enviada:", pergunta);
    alert("Pergunta enviada com sucesso!");

    inputField.value = "";
  });

  inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      submitBtn.click();
    }
  });
});
