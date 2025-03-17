let mainimg = document.getElementById('#mainimg')
let smallimg = document.querySelector('.smallimg')

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src
}