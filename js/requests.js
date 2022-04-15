//insira sua privateKey aqui
const privateKey = "";
//insira sua publicKey aqui
const publicKey = "";
const maxCharacters = 1500;

function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}

function getCharacterList() {

    //tempo agora
    const timeStamp = Date.now().toString();
    //numero randomico de herois
    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    
    //hash para validar a requisição
    const hash = createHash(timeStamp);

    var count= 0;
    var urlAPI=[];
    var AuxId=[1009664,1009718,1009368,1009220,1009282,1009351,1009187,1009327,1009491];

    for (let i = 0; i <= 8; i++) {
    //const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=9&offset="+offset+"&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    urlAPI[i] = "http://gateway.marvel.com/v1/public/characters/"+AuxId[i]+"?ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
   
    }

    for (let index = 0; index <= 8; index++) {
     fetch(urlAPI[index], { method: 'GET' })
     .then((resp) => resp.json())
     .then(function(data) {
     getImages(data, index);
     })
     .catch(function(error) {
     console.log(error);
     });
     } 

}


function showHistorys(elemento) {

    const codigo = elemento.parentNode.getElementsByTagName("h5")[1].textContent.substring(4, 11);//codigo do personagem
    console.log(codigo);
    const timeStamp = Date.now().toString();//tempo agora
    const hash = createHash(timeStamp);//hash para validar a requisição

    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    console.log(urlAPI);
    
    fetch(urlAPI, { method: 'GET' })
     .then((resp) => resp.json())
     .then(function(data) {
        getHistorys(data);
     })
     .catch(function(error) {
     console.log(error);
     });

} 