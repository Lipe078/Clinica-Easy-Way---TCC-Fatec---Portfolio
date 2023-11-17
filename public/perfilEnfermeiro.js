document.addEventListener('DOMContentLoaded', function () {

    // Função para carregar os dados do enfermeiro do localStorage
    function loadEnfermeiroData() {
      const nomeEnfermeiro = document.getElementById('nomeEnfermeiro');
      // Adicione mais campos conforme necessário
  
      // Aqui, você deve obter o token do localStorage
      const token = localStorage.getItem('token');
  
      // Adicione a verificação do token para garantir a autenticação
      if (!token) {
        // Redirecione ou exiba uma mensagem de erro, pois o enfermeiro não está autenticado.
        // Exemplo: window.location.href = 'pagina-de-login.html';
        // Ou exibir uma mensagem de erro no perfil do enfermeiro.
        return;
      }
  
      // Se o token estiver disponível, você pode carregar os dados do enfermeiro
      const email = localStorage.getItem('emailEnfermeiro');
      const nome = localStorage.getItem('nomeEnfermeiro');
  
      // Atualize os campos na página de perfil com os dados do enfermeiro
      nomeEnfermeiro.textContent = nome;
      // Você pode adicionar mais campos conforme necessário
    }
  
    // Chame a função para carregar os dados do enfermeiro quando a página for carregada
    loadEnfermeiroData();
  
    const atualizarButton = document.getElementById('atualizarButton');
    atualizarButton.addEventListener('click', atualizarPerfil);
  
    // Função para lidar com a atualização do perfil
    function atualizarPerfil(event) {
      event.preventDefault();
  
      // Pegue o token do localStorage
      const token = localStorage.getItem('token');
  
      // Certifique-se de que o token existe
      if (!token) {
        alert('Token não fornecido. Faça o login novamente.');
        // Redirecione o usuário para a página de login ou tome outra ação apropriada.
        return;
      }
  
      // Pegue os valores dos campos do formulário
      const campo1 = document.getElementById('campo1').value;
      const campo2 = document.getElementById('campo2').value;
      // Adicione mais campos conforme necessário
  
      // Realize a validação dos campos, se necessário
  
      // Crie um objeto para enviar ao servidor
      const dadosEnfermeiro = {
        campo1,
        campo2,
        // Adicione mais campos conforme necessário
      };
  
      // Envie os dados para o servidor usando uma solicitação POST
      fetch('/atualizar-enfermeiro', {
        method: 'POST',
        body: JSON.stringify({ dadosEnfermeiro, token }), // Inclua o token no objeto de dados
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Envie o token no cabeçalho
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro na solicitação');
          }
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            alert('Perfil atualizado com sucesso!');
          } else {
            alert('Erro ao atualizar perfil: ' + data.message || 'Erro desconhecido');
          }
        })
        .catch((error) => {
          console.error('Erro na solicitação de atualização:', error);
          alert('Erro ao atualizar perfil: ' + error.message || 'Erro desconhecido');
        });
    }
  });
  