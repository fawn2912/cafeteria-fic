function falarConosco() {
  const numero = "5599999999999"; // número fictício com DDI
  const mensagem = "Olá! Gostaria de saber mais sobre o cardápio.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
