var botaoAdicionar = document.querySelector("#adicionarEvento");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//previne os Comportamentos padrão do clique do botão sem carregamento de página
    
    var form = document.querySelector("form");//Selecionando o form quando fomos pegar os input só é necessário colocar o name
    var time = ObtemInformacoesFormRecrutamento(form);

    var erros = ValidaInscricao(time);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    AdicionaTimeNaTabela(time);
    form.reset();

    var mensagensErro = document.querySelector("#mensagensErro");
    mensagensErro.innerHTML = "";
});


function ObtemInformacoesFormRecrutamento(form){
    var time = {
        nome: form.nome.value,
        qtdeVagas: form.qtdeVagas.value,
        requisitos: form.requisitos.value,
        localRecrutamento: form.localRecrutamento.value,
        dataFimInscricao: form.dataFimInscricao.value
    }
    return time;
}

function ValidaInscricao(time){

    var erros = [];

    if(time.nome.length == 0){
        erros.push("O campo 'Nome' não pode ser em branco.");
    }

    if(time.qtdeVagas.length == 0){
        erros.push("O campo ' Quantidades de vagas ' não pode ser em branco.");
    }

    if(time.requisitos.length == 0){
        erros.push("O campo ' Requisitos ' não pode ser em branco.");
    }

    if(time.localRecrutamento.length == 0){
        erros.push("O campo ' Local de recrutamento ' não pode ser em branco.");
    }

    if(time.dataFimInscricao.length == 0){
        erros.push("O campo ' Data fim inscrição ' não pode ser em branco.")
    }

    return erros;
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagensErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        li.classList.add("mensagensErro");
    });
}

function AdicionaTimeNaTabela(time){
    var criaTr = MontaTr(time);
    var tabela = document.querySelector("#tabelaTimes");
    tabela.appendChild(criaTr);
}   



function MontaTr(time){

    var timeTr = document.createElement("tr");
    timeTr.classList.add("time");
    
    timeTr.appendChild(MontaTd(time.nome, "info-time"));
    timeTr.appendChild(MontaTd(time.qtdeVagas, "info-qtdeVagas"));
    timeTr.appendChild(MontaTd(time.requisitos, "info-requisitos"));
    timeTr.appendChild(MontaTd(time.localRecrutamento, "info-localRecrutamento"));
    /*timeTr.appendChild(criaColunaSite(time),"localInscricao");*/

    return timeTr;
}

function MontaTd(informacao, classe){
var td = document.createElement("td");
td.textContent = informacao;
td.classList.add(classe);

return td;
}
