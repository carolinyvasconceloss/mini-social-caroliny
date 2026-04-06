let likeCount = 0;
let curtido = false; // flag booleana

function curtir() {

 if(curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;
 }else{
    likeCount--;
    curtido = false;
    document.getElementById("likeCount").innerText = likeCount;
 }

  
}

document.getElementById("likeBtn").addEventListener("click", curtir);


let deslikeCount = 0;
let descurtir = false; // flag booleana

function descurtir() {

 if(descurtir == false){
    deslikeCount++;
    descurtir = true;
    document.getElementById("deslikeCount").innerText = deslikeCount;
 }else{
    deslikeCount--;
    descurtir = false;
    document.getElementById("deslikeCount").innerText = deslikeCount;
 }

  
}

document.getElementById("deslikeBtn").addEventListener("click", descurtir);