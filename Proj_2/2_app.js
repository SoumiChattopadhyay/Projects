const img = document.querySelector("img");
const inputFile = document.querySelector("input");

inputFile.onchange = function(){
    img.src = URL.createObjectURL(inputFile.files[0]);
}

let mySelect = document.getElementById("mySelect");
mySelect.onchange = ()=>{
    let mySelectvalue = mySelect.value;
    if(mySelectvalue)
    document.getElementById("demo").innerHTML="You selected: "+mySelectvalue;
    else
    document.getElementById("demo").innerHTML="";
}