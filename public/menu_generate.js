document.addEventListener("DOMContentLoaded", function () {

    // Recupera o elemento <nav> onde o menu será gerado

    const navElement = document.querySelector('nav');

 

    // Define os itens do menu em um objeto

    const menuItems = [

      { text: 'Home', link: '/' },

      { text: 'Cadastro', link: '/cadastro' },

      { text: 'Login', link: '/login' },

      { text: 'Meu Perfil', link: '/perfilPaciente' },

      { text: 'Busca', link: '/busca' },

      { text: 'Medicamentos', link: '/medicamentos' },

      { text: 'Marcar consulta', link: '/marcar-consulta' },
      
      { text: 'Agendamentos', link: '/agendamentos' }

      

      

    ];

 

    // Cria uma lista não ordenada <ul> para os itens do menu

    const ulElement = document.createElement('ul');

 

    // Itera sobre os itens do menu e cria os elementos de lista <li> e <a>

    menuItems.forEach(item => {

      const liElement = document.createElement('li');

      const aElement = document.createElement('a');

      aElement.textContent = item.text;

      aElement.href = item.link;

      liElement.appendChild(aElement);

      ulElement.appendChild(liElement);

    });

 

    // Adiciona a lista de itens do menu ao elemento <nav>

    navElement.appendChild(ulElement);

  });