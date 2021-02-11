var botaoAdicionar = document.querySelector("#adicionarEvento");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//previne os Comportamentos padrão do clique do botão sem carregamento de página
    
    var form = document.querySelector("form");//Selecionando o form quando fomos pegar os input só é necessário colocar o name
    var organizacao = ObtemInformacoesForm(form);
    /*var erros = ValidaPaciente(organizacao);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }*/

    AdicionaOrganizacaoNaTabela(organizacao);
    form.reset();

    /*var mensagensErro = document.querySelector("#mensagensErro");
    mensagensErro.innerHTML = "";
    backgroundExcluir();
    ExcluirPaciente();*/

});

function AdicionaOrganizacaoNaTabela(organizacao){
    var criaTr = MontaTr(organizacao);
    var tabela = document.querySelector("#tabelaOrganizacoes");
    tabela.appendChild(criaTr);
}   



function ObtemInformacoesForm(form){
    var organizacao = {
        nome: form.nome.value,
        valor: form.valor.value,
        qtdeEquipes: form.qtdeEquipes.value,
        requisitos: form.requisitos.value,
        premiacao: form.premiacao.value,
        siteInscricao: form.siteInscricao.value
    }
    return organizacao;
}

function MontaTr(organizacao){

        var organizacaoTr = document.createElement("tr");
        organizacaoTr.classList.add("organizacao");
        var montatdSite = MontaTd(organizacao.nome, "img-localInscricao");
        montatdSite.setAttribute("a", organizacao.siteInscricao);
        montatdSite.setAttribute("href",organizacao.siteInscricao);
        
        organizacaoTr.appendChild(MontaTd(organizacao.nome, "info-nome"));
        organizacaoTr.appendChild(MontaTd(organizacao.valor, "info-valor"));
        organizacaoTr.appendChild(MontaTd(organizacao.qtdeEquipes, "info-equipes"));
        organizacaoTr.appendChild(MontaTd(organizacao.requisitos, "info-requisitos"));
        organizacaoTr.appendChild(MontaTd(organizacao.premiacao, "info-premiacao"));
        organizacaoTr.appendChild(criaColunaSite(organizacao),"localInscricao");

        return organizacaoTr;
}

function MontaTd(informacao, classe){
    var td = document.createElement("td");
    td.textContent = informacao;
    td.classList.add(classe);

    return td;
}


function ValidaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo Nome não pode ser em branco.");
    }

    if(!ValidaPeso(paciente.peso)){
        erros.push("Peso é inválido.");
    }

    if(!ValidaAltura(paciente.altura)){
        erros.push("Altura é inválido.");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo Gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo Peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo Altura não pode ser em branco.");
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


function criaColunaSite(infoSite){
    
    var tagA = document.createElement("a");
    tagA.setAttribute("href", infoSite.siteInscricao);

    tagA.textContent = infoSite.nome;


    var td = document.createElement("td");
    td.classList.add("localInscricao");

    td.appendChild(tagA);

    return td;
}