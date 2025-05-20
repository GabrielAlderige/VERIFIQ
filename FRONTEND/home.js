fetch('http://localhost:3000/perfil', {
  credentials: 'include'
})
.then(res => {
  if (res.status === 200) return res.json();
  else throw new Error('Não autenticado');
})
.then(data => {
  if (!data.logado) {
    window.location.href = './login/index.html'; // volta para login se não está logado
  }
})
.catch(() => {
  window.location.href = './login/index.html'; // erro ou não logado, manda pro login
});
