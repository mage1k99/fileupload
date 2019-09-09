var dragobj = document.getElementsByName("file")
window.addEventListener("change",function (){
  console.log("OnChanged Called "+dragobj[0])
  
})