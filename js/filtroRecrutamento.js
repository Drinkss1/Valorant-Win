var campoFiltro = document.querySelector("#filtrarTabela");

campoFiltro.addEventListener("input",function(){
    var times = document.querySelectorAll(".time");
    
    if(campoFiltro.value.length > 0){

        times.forEach(function(time){

            var tdNomeTime = time.querySelector(".info-time");
            var NomeTime = tdNomeTime.textContent;
            var expressao = new RegExp(campoFiltro.value,"i");

            if(!expressao.test(NomeTime)){
                time.classList.add("invisivel");
            }
            else{
                time.classList.remove("invisivel");
            }
                
        });
    }
    else{
        times.forEach(function(time){
            time.classList.remove("invisivel");
        });
    }
});

