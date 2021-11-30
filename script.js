let a="";
let todo=[];

function task(){
    let b = document.getElementById("input").value;
    a+=b;
}
function addtodo(){
    todo.push(a);
    a="";
    maping();
    document.getElementById("input").value="";
}


function maping(){
    document.getElementById("count").innerHTML=`My Total todo's are ${todo.length}`;
    document.getElementById("mytodo").innerHTML = todo.map((i)=>{

        return `<div>${i}</div>`
    })
}
