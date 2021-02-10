var campoFiltro = document.querySelector("#filtrarTabela");

campoFiltro.addEventListener("input",function(){
    var organizacoes = document.querySelectorAll(".organizacao");

    if(campoFiltro.value.length > 0){
        organizacoes.forEach(function(organizacao){

            var tdNomeOrganizacao = organizacao.querySelector(".info-organizacao");
            var NomeOrganizacao = tdNomeOrganizacao.textContent;
            var expressao = new RegExp(campoFiltro.value,"i");

            if(!expressao.test(NomeOrganizacao)){
                organizacao.classList.add("invisivel");
            }
            else{
                organizacao.classList.remove("invisivel");
            }
            
        });
    }
    else{
        organizacoes.forEach(function(organizacao){
            organizacao.classList.remove("invisivel");
        });
    }
});

var radioGratis = document.querySelector("#radioGratis");
var radioValor = document.querySelector("#radioValor");
var inputValor = document.querySelector("#valor");


radioGratis.addEventListener("click",function(){
    inputValor.setAttribute("type","text");
    inputValor.value = 'Grátis';
    inputValor.disabled = true;
    
});

radioValor.addEventListener("click", function(){
    inputValor.setAttribute("type","number");
    inputValor.value = "";
    inputValor.disabled = false;
});



