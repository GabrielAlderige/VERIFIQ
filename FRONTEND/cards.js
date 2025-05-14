function pagar(priceId) {
  const userId = localStorage.getItem('userId'); // pegando o ID do usuário logado

  if (!userId) {
    alert('Você precisa estar logado para comprar tokens.');
    return;
  }

  fetch('http://localhost:3000/criar-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, priceId })
  })
    .then(res => res.json())
    .then(data => {
      window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    })
    .catch(err => console.error('Erro ao criar pagamento:', err));
}
