window.onload = function(){
    var indiceAtual = 0;
    var indiceMax = $(".slider img").length; 
    var delay = 6000;

    inislider();
    cliqueSlider();

    function inislider(){
        for(var i = 0; i < indiceMax; i++){
            if (i == 0){
                $(".bolinhas-navegacao").append("<span></span>");
            }else{
                $(".bolinhas-navegacao").append("<span></span>");
            }
        }
        $(".slider img").eq(0).fadeIn();
        setInterval (function(){
            alternarSlider();
        },delay);
    }

    function cliqueSlider(){
        $(".bolinhas-navegacao span").click(function(){
            $(".slider img").eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $(".slider img").eq(indiceAtual).stop().fadeIn(1000); 
            $(".bolinhas-navegacao span").css("background-color","black");
            $(this).css("background-color","#069");
        });
    }
    function alternarSlider(){
        $(".slider img").eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual += 1;
        if(indiceAtual == indiceMax)
            indiceAtual = 0;
        $(".bolinhas-navegacao span").css("background-color","black");
        $(".bolinhas-navegacao span").eq(indiceAtual).css("background-color","#069");
        $(".slider img").eq(indiceAtual).stop().fadeIn(2000);    
    }
}