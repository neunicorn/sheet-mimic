    let key = [];

    let number = 2;

    function addRow(){
        console.log("tab was pressed");
            


            const tableBody = document.getElementById("tableBody");
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            tr.setAttribute("id", number);
            td.textContent = number;
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

           tr.appendChild(td);
           tr.appendChild(td2);
           tr.appendChild(td3);
           tr.appendChild(td4);
           tr.appendChild(td5);
    
            tableBody.appendChild(tr);
            number++;
    }

    function deleteRow(id){
        const parent = document.getElementById(id);
        parent.remove();


        console.log(parent);
    }

    const jendela = window;
    const badan = document.getElementById("thisisbody");
    badan.onkeydown = function(event){
        if(event.keyCode == 9){
            addRow();
        }
        
    }