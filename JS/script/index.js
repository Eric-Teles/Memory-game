const painel = [];


for (let i = 0; i < 10; i++) {
    painel.push(document.getElementById("bt" + (i + 1)));
    console.log(i);
}


for (let i = 0; i < 9; i++){
 
        if (painel[i]){
            painel[i].onclick = function(){
                console.log("Botão ativado:", this.id, "| Valor:", this.innerHTML);
                 
                


        }
    }
    
}