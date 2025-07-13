var popbg=document.getElementById("popbg")
var popup=document.getElementById("popup")
var plus=document.getElementById("plus")
plus.addEventListener("click",function(){
    popbg.style.display="block"
    popup.style.display="block"
})
var bookenter=document.getElementById("bookenter")
var authorenter=document.getElementById("authorenter")
var descriptionenter=document.getElementById("descriptionenter")
var addbookbtn=document.getElementById("addbookbtn")
var cancelbookbtn=document.getElementById("cancelbookbtn")
var bookcontainer=document.getElementById("bookcontainer")
addbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.innerHTML=`<h2 style="margin-bottom: 5px;">${bookenter.value}</h2>
    <h3 style="margin-bottom: 5px;">${authorenter.value}</h3>
    <p style="margin-bottom: 5px;">${descriptionenter.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    div.setAttribute("class","book")
    bookcontainer.append(div)
    bookenter.value=""
    authorenter.value=""
    descriptionenter.value=""
    popbg.style.display="none"
    popup.style.display="none"
})
cancelbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    bookenter.value=""
    authorenter.value=""
    descriptionenter.value=""
    popbg.style.display="none"
    popup.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}