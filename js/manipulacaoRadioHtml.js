var radioValorGratis = document.querySelector("#radioGratis");
var radioValor = document.querySelector("#radioValor");
var inputValor = document.querySelector("#valor");


var radioSemRequisitos = document.querySelector("#radioSemRequisitos");
var radioRequisitos = document.querySelector("#radioRequisitos");
var inputRequisitos = document.querySelector("#requisitos");


radioValorGratis.addEventListener("click",function(){
    inputValor.setAttribute("type","text");
    inputValor.value = 'Grátis';
    inputValor.disabled = true;
    
});

radioValor.addEventListener("click", function(){
    inputValor.setAttribute("type","number");
    inputValor.value = "";
    inputValor.disabled = false;
});

radioSemRequisitos.addEventListener("click",function(){
    inputRequisitos.value = "Sem requisitos";
    inputRequisitos.disabled = true;
});

radioRequisitos.addEventListener("click",function(){
    inputRequisitos.value = "";
    inputRequisitos.disabled = false;
});

