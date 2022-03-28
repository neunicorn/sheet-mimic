    let key = [];

    let row = 2;
    let index = 0;
    let number = 2;
    let numberArr = [];

    function addRow(){
        console.log("tab was pressed");

            numberArr.push(number);

            const tableBody = document.getElementById("tableBody");
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            tr.setAttribute("id", row);
            td.textContent = numberArr[index];
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");

            const td5 = document.createElement("td");
            td5.setAttribute("class", "hide");
            const btn = document.createElement("button");
            btn.textContent = "X";
            btn.id = row;
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

           tr.appendChild(td);
           tr.appendChild(td2);
           tr.appendChild(td3);
           tr.appendChild(td4);
           tr.appendChild(td5);
    
            tableBody.appendChild(tr);
            number++;
            row++;
            index++;
    }

    function refreshNumber(i){

    }

    function deleteRow(id){
        const parent = document.getElementById(id);
        parent.remove();
        numberArr.splice(id-1, 1);

        console.log(numberArr);

        console.log(parent);
    }

    const jendela = window;
    const badan = document.getElementById("thisisbody");
    badan.onkeydown = function(event){
        if(event.keyCode == 9){
            addRow();
        }
        
    }