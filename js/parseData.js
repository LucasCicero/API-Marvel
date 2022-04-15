function getImages(dados,index){

    
    let coisasPersonagens = dados["data"]["results"];
    
    
  // for (let index = 0; index < coisasPersonagens.length; index++) {    
        
        let primeiro = coisasPersonagens[0];
        console.log(primeiro);
        quadrado = document.querySelector("#c"+index+"");
        quadrado.querySelector("#i"+index+"").src = primeiro["thumbnail"]["path"] +"."+ primeiro["thumbnail"]["extension"];
        quadrado.querySelector("#cod"+index+"").textContent = "Id: "+primeiro["id"];
        quadrado.querySelector("#n"+index+"").textContent = "Nome: "+primeiro["name"];
        
        
        
// }

}

function getHistorys(dados){

    //<a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
    content = document.querySelector("#historys");
    if(dados["data"]["count"] < 0){
        //diz que n tem nenhuma historia
        return
    }


    dados["data"]["results"].forEach(element => {
        
        title = document.createElement("a");
        title.classList.add("list-group-item");
        title.classList.add("list-group-item-action");
        title.textContent = element["title"];
        content.appendChild(title);
    });
    
}

$("#exampleModal").on("hidden.bs.modal", function () {
    console.log("removendo");
    content = document.querySelector("#historys");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
});