function js() {
    let msg = window.document.querySelector('div.secaodiva');

    let paragraph = document.createElement('p');
    paragraph.textContent = '🚀 JavaScript - Crie sites interativos e dinâmicos. Aprenda manipulação do DOM, eventos, requisições assíncronas e frameworks modernos.';
    
    msg.innerHTML = '';  
    msg.appendChild(paragraph);  
}
function html(){
    let html = window.document.querySelector('div.secaodivb')

    html.innerHTML = `🌎 HTML - A base da web. Estruture páginas, use tags semânticas e aprenda boas práticas para SEO e acessibilidade.`
}
function java(){
    let java = window.document.querySelector('div.secaodivc')

    java.innerHTML = `☕ Java - Crie sistemas robustos e escaláveis. Aprenda Programação Orientada a Objetos e desenvolva aplicações desktop, mobile e corporativas.`
}
function php(){
    let php = window.document.querySelector('div.secaodivd')

    php.innerHTML = `🖥️ PHP - Desenvolva o back-end de sites e sistemas. Trabalhe com bancos de dados, autenticação e APIs REST.`
}
function sair1(){
    let msgg = window.document.querySelector('div.secaodiva');


    msgg.innerHTML = '';  

    let img = document.createElement('img');
    img.src = 'midia/js.png';
    img.alt = 'Javascript';

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Javascript'; 

    msgg.appendChild(img);
    msgg.appendChild(paragraph);
}
function sair2(){
    let msggg = window.document.querySelector('div.secaodivb');


    msggg.innerHTML = '';  

    let img = document.createElement('img');
    img.src = 'midia/html.png';
    img.alt = 'Html';

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Html 5'; 

    msggg.appendChild(img);
    msggg.appendChild(paragraph);
}
function sair3(){
    let msgg = window.document.querySelector('div.secaodivc');


    msgg.innerHTML = '';  

    let img = document.createElement('img');
    img.src = 'midia/java.png';
    img.alt = 'Java';

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Java'; 

    msgg.appendChild(img);
    msgg.appendChild(paragraph);
}
function sair4(){
    let msgg4 = window.document.querySelector('div.secaodivd');


    msgg4.innerHTML = '';  

    let img = document.createElement('img');
    img.src = 'midia/php.png';
    img.alt = 'Php';

    let paragraph = document.createElement('p');
    paragraph.textContent = 'PHP'; 

    msgg4.appendChild(img);
    msgg4.appendChild(paragraph);
}
