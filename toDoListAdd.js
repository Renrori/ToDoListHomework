//註冊新增事項按鈕事件
var addBtn = document.getElementById('btnInput');
addBtn.addEventListener("click",Keyin)
var tbInp = document.getElementById('tbInput');
// tbInp.addEventListener("click",KeyReady)
var countUl = document.querySelectorAll('.ul')

function Keyin(){
    if (tbInp.value === ""){
        alert("未輸入事項內容!");
    }
    else{
        AddList();
        CountList();
    }
}

function CountList(){
    var targetP=document.getElementById('toDoListCount')
    var tempcount = 0;
    countUl.forEach(function(ulElement){
        tempcount += ulElement.childElementCount;
    });
    targetP.innerHTML="還有"+tempcount +"件待辦事項";
    
}
//新增LI項目按鈕的方法
function AddList(){
    // var inpBtn =document.getElementById('tbInput');
    var targetUl=document.getElementById('listUL');
    
    
    //為LI填入按鈕與內容
    var addLi = document.createElement('li');
    var addBtn = document.createElement('button');
    addBtn.setAttribute("class","delList");
    addBtn.innerText="刪除這則事項";
    addLi.innerHTML=tbInp.value;

    //錄入DOM內容
    addLi.append(addBtn);
    targetUl.append(addLi);

    //為按鈕註冊刪除事件
    addBtn.addEventListener("click",DelList);
    
}


function DelList(){ 
    var listNode=this.parentNode;
    listNode.remove();
    CountList();
}





//載入時遍歷所有的按鈕註冊刪除事件
// var delBtn= document.querySelectorAll('.delList')
// for(i =0; i < delBtn.length;i++){
//     delBtn[i].addEventListener("click",DelList)
// }

// function KeyReady(){
//     if(tbInp.value == "在此輸入事情內容"){
//     tbInp.value = "";
//     }
// }