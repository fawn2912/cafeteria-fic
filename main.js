// Rolagem suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mensagem de boas-vindas no console (profissionalzinho rs)
console.log("Bem-vinda(o) à Cafeteria Aroma & Sabor ☕️");

// Exemplo de animação leve ao rolar (poderia usar animação em CSS depois)
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
