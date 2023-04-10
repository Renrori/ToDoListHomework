//註冊新增事項按鈕事件
var addBtn = document.getElementById('btnInput')
addBtn.addEventListener("click",AddList)

//註冊動態式遍歷所有的刪除按鈕事件
var delBtn= document.querySelectorAll('.delList')
for(i =0; i < delBtn.length;i++){
    delBtn[i].addEventListener("click",DelList)
}


//新增LI項目按鈕的方法
function AddList(){
    var tInput =document.getElementById('tbInput');
    var targetUl=document.getElementById('listUL')
    
    
    
    var addLi = document.createElement('li');
    var addBtn = document.createElement('button');
    addBtn.setAttribute("class","delList");
    addBtn.innerText="刪除這則事項";
    addLi.innerHTML=tInput.value;

    addLi.append(addBtn);
    targetUl.append(addLi);

}


function DelList(){

}