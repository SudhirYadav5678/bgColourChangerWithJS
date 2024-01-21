const colourgen=function(){
    let hex='0123456789ABCDEF'
    let colour='#'
    for (let index = 0; index < 6; index++) {
        colour+=hex[Math.floor(Math.random()*10)]
    }
    return colour;
}
let intervalid;
const startcolour=function(){
    if(!intervalid){intervalid=setInterval(changebg,1000)}
    function changebg(){document.body.style.backgroundColor=colourgen();}
}
const stopcolour=function(){
    clearInterval(intervalid)
    intervalid=null;
}
const start=document.querySelector('#start').addEventListener("click",startcolour)
const stop=document.querySelector('#stop').addEventListener("click",stopcolour)