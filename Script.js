const addForm=document.getElementById('addForm')
const item=document.getElementById('item')
const itemlist=document.getElementById('items')
const filter=document.getElementById('filter')
// console.log(filter)

function addHandler(e){
   
    // console.log('hello')
    e.preventDefault()
    let btn=document.createElement('button')
   
    let li=document.createElement('li')
   li.appendChild(document.createTextNode(item.value))
itemlist.appendChild(li)
li.appendChild(btn)
btn.appendChild(document.createTextNode("X"))
li.className="list-group-item"
btn.className="btn btn-danger btn-sm float-right delete"
item.value=""


}
addForm.addEventListener("submit",addHandler)

function deleteHandler(x){
  if(x.target.classList.contains('delete')){
    itemlist.removeChild(x.target.parentElement)
    
    alert("are you sure!!")
  }else{
    alert("you are wrong!!")
  }
   
}
itemlist.addEventListener("click",deleteHandler)

function search(x){
   let text=x.target.value.toLowerCase()
   let li=document.getElementsByTagName('li')
   let arr=Array.from(li)
   arr.forEach(function(el){
    if(el.firstChild.textContent.toLowerCase().indexOf(text)!=-1){
        el.style.display="block"
    }else{
        el.style.display="none"
    }
   })
}


filter.addEventListener("input",search)