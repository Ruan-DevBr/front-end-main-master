// Localiza os elementos da página
const formulario = document.getElementById('formOrientacao');
const campoNome = document.getElementById('nomeUsuario');
const campoTecnologia = document.getElementById('tecnologia');
const botaoTema = document.getElementById('btnTema');
const areaResultado = document.getElementById('areaResultado');

// Gera a orientação quando o formulário é enviado
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Lê os valores e remove espaços extras
    const nome = campoNome.value.trim();
    const tecnologia = campoTecnologia.value;

    // Valida o preenchimento do nome
    if (nome === '') {
        areaResultado.textContent = 'Por favor, preencha seu nome para receber uma orientação.';
        areaResultado.classList.add('erro');
        campoNome.focus();
        return;
    }

    if (tecnologia === '') {
        areaResultado.textContent = 'Por favor, escolha uma tecnologia para continuar.';
        areaResultado.classList.add('erro');
        campoTecnologia.focus();
        return;
    }

    // Define uma orientação diferente para cada tecnologia
    let orientacao = '';

    switch (tecnologia) {
        case 'HTML':
            orientacao = 'Comece aprendendo a estrutura das páginas com tags, elementos semânticos, títulos, parágrafos, links e formulários. Pratique criando sua primeira página web!';
            break;

        case 'CSS':
            orientacao = 'Continue praticando cores, fontes, espaçamentos, Flexbox, Grid e responsividade. Experimente criar layouts e deixar suas páginas mais bonitas e organizadas!';
            break;

        case 'JavaScript':
            orientacao = 'Explore variáveis, tipos de dados, condições, funções e eventos. Depois, pratique selecionando elementos do HTML e modificando o conteúdo da página!';
            break;

        default:
            orientacao = 'Escolha uma das tecnologias disponíveis para receber sua orientação.';
    }

    // Exibe a mensagem personalizada na própria página
    areaResultado.classList.remove('erro');
    areaResultado.textContent = `Olá, ${nome}! ${orientacao}`;
});

// Alterna a classe do tema escuro
botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');

    // Atualiza o texto do botão conforme o tema atual
    if (document.body.classList.contains('tema-escuro')) {
        botaoTema.textContent = '☀ Alterar tema';
    } else {
        botaoTema.textContent = '☾ Alterar tema';
    }
});
