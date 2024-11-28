let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let button = document.getElementById("generate");
let cont = document.getElementsByClassName("container")[0];

button.onclick = function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    cont.style.height = "350px";
}




