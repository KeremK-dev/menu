let body = document.getElementsByTagName("body")[0]
body.id = "body1"

let lele = document.getElementById("lele")

lele.style.transform=("rotate(-20deg)")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")


let topp = document.getElementById("top")

function renkClear(){
    btn1.style.backgroundColor="black"
    btn2.style.backgroundColor="black"
    btn3.style.backgroundColor="black"
    btn4.style.backgroundColor="black"
    btn5.style.backgroundColor="black"
    btn6.style.backgroundColor="black"
}

topp.style.left="8.3%"
btn1.style.backgroundColor="rgb(48,48,48)"

btn1.onclick=()=>{
    topp.style.left="8.3%"
    renkClear()
    btn1.style.backgroundColor="rgb(48, 48, 48)"
    body.id = "body1"
    lele.style.transform=("rotate(-20deg)")
}
btn2.onclick=()=>{
    topp.style.left="24.7%"
    renkClear()
    btn2.style.backgroundColor="rgb(15, 0, 150)"
    body.id = "body2"
    lele.style.transform=("rotate(-10deg)")
}
btn3.onclick=()=>{
    topp.style.left="41.4%"
    renkClear()
    btn3.style.backgroundColor="rgb(82, 0, 0)"
    body.id = "body3"
    lele.style.transform=("rotate(0deg)")
}
btn4.onclick=()=>{
    topp.style.left="58.2%"
    renkClear()
    btn4.style.backgroundColor="rgb(120, 0, 147)"
    body.id = "body4"
    lele.style.transform=("rotate(0deg)")
}
btn5.onclick=()=>{
    topp.style.left="74.8%"
    renkClear()
    btn5.style.backgroundColor="rgb(119, 0, 69)"
    body.id = "body5"
    lele.style.transform=("rotate(10deg)")
}
btn6.onclick=()=>{
    topp.style.left="91.7%"
    renkClear()
    btn6.style.backgroundColor="rgb(255, 123, 0)"
    body.id = "body6"
    lele.style.transform=("rotate(20deg)")
}
