const form = document.getElementById('form-contatos');
const contatos = [];
const telefone = [];

let linhas = '';
let ids = 1;

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(contatos.includes(inputNomeContato.value)) {
        alert(`Contato ${inputNomeContato.value} já foi inserido`);
} else{

       contatos.push(inputNomeContato.value);
       telefone.push(parseFloat(inputTelefoneContato.value));

       let linha = '<tr>';
       let id = 1;
       linha += `<td>${Number(ids)}`
       linha += `<td>${inputNomeContato.value}</td>`;
       linha += `<td>${inputTelefoneContato.value}</td>`;
       linha += '</tr>';
    
       linhas += linha;
       ids += id ;
}

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
