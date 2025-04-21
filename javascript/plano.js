// Função para alterar o conteúdo da primeira seção (JavaScript)
function js() {
    // Seleciona o elemento <div> com a classe 'secaodiva'
    let msg = window.document.querySelector('div.secaodiva');

    // Altera o conteúdo HTML do elemento selecionado
    msg.innerHTML = '🚀 JavaScript - Crie sites interativos e dinâmicos. Aprenda manipulação do DOM, eventos, requisições assíncronas e frameworks modernos.';
}

// Função para alterar o conteúdo da segunda seção (HTML)
function html(){
    // Seleciona o elemento <div> com a classe 'secaodivb'
    let html = window.document.querySelector('div.secaodivb');

    // Altera o conteúdo HTML do elemento selecionado
    html.innerHTML = `🌎 HTML - A base da web. Estruture páginas, use tags semânticas e aprenda boas práticas para SEO e acessibilidade.`;
}

// Função para alterar o conteúdo da terceira seção (Java)
function java(){
    // Seleciona o elemento <div> com a classe 'secaodivc'
    let java = window.document.querySelector('div.secaodivc');

    // Altera o conteúdo HTML do elemento selecionado
    java.innerHTML = `☕ Java - Crie sistemas robustos e escaláveis. Aprenda Programação Orientada a Objetos e desenvolva aplicações desktop, mobile e corporativas.`;
}

// Função para alterar o conteúdo da quarta seção (PHP)
function php(){
    // Seleciona o elemento <div> com a classe 'secaodivd'
    let php = window.document.querySelector('div.secaodivd');

    // Altera o conteúdo HTML do elemento selecionado
    php.innerHTML = `🖥️ PHP - Desenvolva o back-end de sites e sistemas. Trabalhe com bancos de dados, autenticação e APIs REST.`;
}

// Função para restaurar o conteúdo da primeira seção (JavaScript) ao seu estado original
function sair1(){
    // Seleciona o elemento <div> com a classe 'secaodiva'
    let msgg = window.document.querySelector('div.secaodiva');

    // Limpa o conteúdo HTML do elemento selecionado
    msgg.innerHTML = '';  

    // Cria um novo elemento <img> com a imagem do JavaScript
    let img = document.createElement('img');
    img.src = 'midia/js.png';  // Caminho da imagem
    img.alt = 'Javascript';  // Texto alternativo para a imagem

    // Cria um novo parágrafo com o texto 'Javascript'
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Javascript'; 

    // Adiciona a imagem e o parágrafo ao elemento 'div.secaodiva'
    msgg.appendChild(img);
    msgg.appendChild(paragraph);
}

// Função para restaurar o conteúdo da segunda seção (HTML) ao seu estado original
function sair2(){
    // Seleciona o elemento <div> com a classe 'secaodivb'
    let msggg = window.document.querySelector('div.secaodivb');

    // Limpa o conteúdo HTML do elemento selecionado
    msggg.innerHTML = '';  

    // Cria um novo elemento <img> com a imagem do HTML
    let img = document.createElement('img');
    img.src = 'midia/html.png';  // Caminho da imagem
    img.alt = 'Html';  // Texto alternativo para a imagem

    // Cria um novo parágrafo com o texto 'Html 5'
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Html 5'; 

    // Adiciona a imagem e o parágrafo ao elemento 'div.secaodivb'
    msggg.appendChild(img);
    msggg.appendChild(paragraph);
}

// Função para restaurar o conteúdo da terceira seção (Java) ao seu estado original
function sair3(){
    // Seleciona o elemento <div> com a classe 'secaodivc'
    let msgg = window.document.querySelector('div.secaodivc');

    // Limpa o conteúdo HTML do elemento selecionado
    msgg.innerHTML = '';  

    // Cria um novo elemento <img> com a imagem do Java
    let img = document.createElement('img');
    img.src = 'midia/java.png';  // Caminho da imagem
    img.alt = 'Java';  // Texto alternativo para a imagem

    // Cria um novo parágrafo com o texto 'Java'
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Java'; 

    // Adiciona a imagem e o parágrafo ao elemento 'div.secaodivc'
    msgg.appendChild(img);
    msgg.appendChild(paragraph);
}

// Função para restaurar o conteúdo da quarta seção (PHP) ao seu estado original
function sair4(){
    // Seleciona o elemento <div> com a classe 'secaodivd'
    let msgg4 = window.document.querySelector('div.secaodivd');

    // Limpa o conteúdo HTML do elemento selecionado
    msgg4.innerHTML = '';  

    // Cria um novo elemento <img> com a imagem do PHP
    let img = document.createElement('img');
    img.src = 'midia/php.png';  // Caminho da imagem
    img.alt = 'Php';  // Texto alternativo para a imagem

    // Cria um novo parágrafo com o texto 'PHP'
    let paragraph = document.createElement('p');
    paragraph.textContent = 'PHP'; 

    // Adiciona a imagem e o parágrafo ao elemento 'div.secaodivd'
    msgg4.appendChild(img);
    msgg4.appendChild(paragraph);
}
