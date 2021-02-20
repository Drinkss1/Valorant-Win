var radioSemRequisitos = document.querySelector("#radioSemRequisitos");
var radioRequisitos = document.querySelector("#radioRequisitos");
var inputRequisitos = document.querySelector("#requisitos");


radioSemRequisitos.addEventListener("click",function(){
    inputRequisitos.value = "Sem requisitos";
    inputRequisitos.disabled = true;
});

radioRequisitos.addEventListener("click",function(){
    inputRequisitos.value = "";
    inputRequisitos.disabled = false;
});

