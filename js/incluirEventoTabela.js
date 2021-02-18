var botaoAdicionar = document.querySelector("#adicionarEvento");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//previne os Comportamentos padrão do clique do botão sem carregamento de página
    
    var form = document.querySelector("form");//Selecionando o form quando fomos pegar os input só é necessário colocar o name
    var organizacao = ObtemInformacoesForm(form);

    console.log(organizacao.dataFimInscricao);
    var erros = ValidaInscricao(organizacao);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    AdicionaOrganizacaoNaTabela(organizacao);
    form.reset();

    var mensagensErro = document.querySelector("#mensagensErro");
    mensagensErro.innerHTML = "";
    /*backgroundExcluir();
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
        siteInscricao: form.siteInscricao.value,
        dataFimInscricao: form.dataFimInscricao.value
    }
    return organizacao;
}

function MontaTr(organizacao){

        var organizacaoTr = document.createElement("tr");
        organizacaoTr.classList.add("organizacao");
        
        organizacaoTr.appendChild(MontaTd(organizacao.nome, "info-organizacao"));
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


function ValidaInscricao(organizacao){

    var erros = [];

    if(organizacao.nome.length == 0){
        erros.push("O campo 'Nome' não pode ser em branco.");
    }

    if(organizacao.valor.length == 0){
        var nomeCampoVazio = document.createElement("a","Valor");
        nomeCampoVazio.classList.add("nomeCampoVazio");
        erros.push("O campo ' Valor ' não pode ser em branco.");
    }

    if(organizacao.qtdeEquipes.length == 0){
        erros.push("O campo ' Quantidades de Equipes ' não pode ser em branco.");
    }

    if(organizacao.requisitos.length == 0){
        erros.push("O campo ' Requisitos ' não pode ser em branco.");
    }

    if(organizacao.siteInscricao.length == 0){
        erros.push("O campo ' Site para inscrição ' não pode ser em branco.");
    }

    if(organizacao.premiacao.length == 0){
        erros.push("O campo ' Premiações ' não pode ser em branco.");
    }

    if(organizacao.qtdeEquipes % 2 != 0){
        erros.push("Apenas números pares são aceitos para definir as quantidades de equipes.");
    }

    if(organizacao.dataFimInscricao.length == 0){
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


function criaColunaSite(infoSite){
    



    var tagA = document.createElement("a");
    tagA.setAttribute("href", infoSite.siteInscricao);

    var imgSite = document.createElement("img");
    imgSite.src = "../imagens/imgSite.png";

    tagA.appendChild(imgSite);

    var td = document.createElement("td");
    td.classList.add("localInscricao");

    td.appendChild(tagA);

    return td;
}

