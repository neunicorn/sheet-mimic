    let key = [];

    let number = 2;

    function addRow(){
        console.log("tab was pressed");
            


            const tableBody = document.getElementById("tableBody");
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.setAttribute("id", number);
            td.textContent = number;
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");

        
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
    
            tableBody.appendChild(tr);
            number++;
    }

    const jendela = window;
    const badan = document.getElementById("thisisbody");
    badan.onkeydown = function(event){
        if(event.keyCode == 9){
            addRow();
        }
        
    }