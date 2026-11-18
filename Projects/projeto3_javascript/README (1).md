# Projeto 3 – Painel Interativo com JavaScript

## Tema
**Descubra seu caminho no Front-End**

Página interativa que recebe o nome do visitante, permite escolher entre HTML, CSS e JavaScript e apresenta uma orientação personalizada. Também permite alternar entre tema claro e tema escuro.

## Integrantes
Preencha antes da entrega:
- Integrante 1: Pedro Souza Ramos – RGM 47572957
- Integrante 2: Ruan Vitor Gonçalves da Silva – RGM 47836750

> Os dados dos integrantes devem ser informados somente na identificação da entrega/README, nunca na página pública.

## Organização dos arquivos
```text
projeto3_javascript/
├── index.html
├── README.md
├── css/
│   └── estilo.css
└── js/
    └── script.js
```

## Divisão das tarefas
Modelo sugerido (ajuste conforme o que o grupo realmente realizou):
- Integrante 1: estrutura HTML, textos e acessibilidade dos campos.
- Integrante 2: identidade visual, responsividade e temas claro/escuro.
- Integrante 3: JavaScript, testes e documentação.

Todos os integrantes devem acompanhar o desenvolvimento e conseguir explicar o funcionamento do código.

## Comandos JavaScript utilizados
- `document.getElementById()`: localiza os campos, botões e a área de resultado pelo ID.
- `const` e `let`: armazenam elementos e valores usados no programa.
- `addEventListener('submit', ...)`: executa a validação e a orientação quando o formulário é enviado.
- `addEventListener('click', ...)`: executa a troca de tema quando o botão é clicado.
- `event.preventDefault()`: impede o recarregamento da página ao enviar o formulário.
- `.value`: captura o conteúdo digitado ou selecionado.
- `.trim()`: remove espaços do início e do final do nome, permitindo identificar quando ele está vazio.
- `if/else`: valida os campos e verifica qual tema está ativo.
- `switch`: escolhe uma orientação conforme a tecnologia selecionada.
- Template string: monta uma mensagem com o nome do visitante, usando `` `Olá, ${nome}!` ``.
- `.textContent`: apresenta a mensagem diretamente na página.
- `.classList.add()` e `.classList.remove()`: aplicam ou removem a classe de erro.
- `.classList.toggle()`: alterna a classe CSS responsável pelo tema escuro.

## Como executar
1. Extraia a pasta do arquivo ZIP.
2. Abra o arquivo `index.html` em um navegador atualizado.
3. Digite um nome e selecione uma tecnologia.
4. Clique em **Gerar minha orientação**.
5. Clique em **Alterar tema** para alternar entre o tema claro e o escuro.

Não é necessário instalar programas, frameworks ou bibliotecas.

## Testes realizados / checklist
- [ ] Enviar o formulário com o nome vazio e conferir a mensagem de validação.
- [ ] Digitar somente espaços no nome e conferir a validação.
- [ ] Testar a opção HTML.
- [ ] Testar a opção CSS.
- [ ] Testar a opção JavaScript.
- [ ] Alternar entre tema claro e escuro.
- [ ] Conferir o layout em uma tela pequena.
- [ ] Preencher os nomes e RGMs dos integrantes.

## Funcionamento resumido
O HTML organiza os campos e as áreas da página. O CSS define o visual, a responsividade e a classe `tema-escuro`. O JavaScript captura os dados do formulário, valida o nome e a tecnologia escolhida, seleciona a orientação correspondente e mostra o resultado na própria página. O botão de tema usa `classList.toggle()` para alternar a classe no elemento `body`.
