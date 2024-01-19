const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click',function(eventObject){
        console.log(eventObject)
        console.log(eventObject.target)
        if(eventObject.target.id==="grey"){
            body.style.backgroundColor=eventObject.target.id
        }
        if(eventObject.target.id==="white"){
            body.style.backgroundColor=eventObject.target.id
        }
        if(eventObject.target.id==="blue"){
            body.style.backgroundColor=eventObject.target.id
        }
        if(eventObject.target.id==="yellow"){
            body.style.backgroundColor=eventObject.target.id
        }
    })
})