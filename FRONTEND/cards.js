window.addEventListener('load', async () => {
    try {
      const response = await fetch('http://localhost:3000/perfil', {
        method: 'GET',
        credentials: 'include', // IMPORTANTE: envia o cookie de sessão
      });

      if (response.status === 401) {
        // Usuário não está logado, redireciona para login
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = './login/index.html';
        return;
      }

      const data = await response.json();
      if (!data.logado) {
        // Também trata se a resposta diz que não está logado
        window.location.href = './login/index.html';
      }

      // Se quiser, mostrar o nome do usuário na página
      console.log('Usuário logado:', data.usuario.nome);

    } catch (error) {
      console.error('Erro ao verificar sessão:', error);
      // Em caso de erro, força logout
      window.location.href = './login/index.html';
    }
  });


function logoutUsuario() {
  fetch('http://localhost:3000/logout', {
    method: 'GET',
    credentials: 'include'
  }).then(() => {
    window.location.href = '../login/index.html';
  });
}