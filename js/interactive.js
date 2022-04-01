// zulfan
// version 1.0
let key = [];

let number = 2;

function addRow(){
    console.log("tab was pressed");
            
    const tdNum = document.createElement("td");

    let coba = document.querySelectorAll("#nomor");
    console.log(coba);
    if (coba.length !== 0){
        tdNum.textContent = coba.length+2;
    }else{
        tdNum.textContent = number;
    }
    const tableBody = document.getElementById("tableBody");
    const tr = document.createElement("tr");

    tr.setAttribute("id", number);

    tdNum.setAttribute("id", "nomor");
    key.push(number);
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    const td5 = document.createElement("td");
    td5.setAttribute("class", "hide");

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.id = number;
    btn.onclick = function(){
    const nomorId = btn.getAttribute("id");
    deleteRow(nomorId);
    }
    td5.appendChild(btn);


    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("onclick", "this.select()");

    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("onclick", "this.select()");

    const input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("onclick", "this.select()");
            
   td2.appendChild(input2);
   td3.appendChild(input3);
   td4.appendChild(input4);

   tr.appendChild(tdNum);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);
   tr.appendChild(td5);
    
    tableBody.appendChild(tr);
    number++;
}

function resetRow(){
    let node = document.querySelectorAll("#nomor");

    let index = node.length + 3;
    console.log(index);

    let index2 = 0;

    for(let i = 2; i < index; i++){          
        console.log('hi');
        node[index2].textContent = i;
        index2++;
    }

    index2 =0;

}

function deleteRow(id){
    let parent = document.getElementById(id);
    parent.remove();
    key.pop();
    console.log(key);
    resetRow();

    console.log(parent);


}

let x;
let y;
document.onclick = function(event){
// console.log(event.clientX);
// console.log(event.clientY);
x = event.clientX;
y = event.clientY;
}

const jendela = window;
const badan = document.getElementById("thisisbody");
badan.onkeydown = function(event){
    if(event.keyCode == 9){
        const table = document.getElementById("tableBody");
        
            if(x > 560){
                addRow();
            }
        }
    }


// const print = function(){
//     console.log(x);
//     console.log(y);

// }
// setInterval(print, 1000);