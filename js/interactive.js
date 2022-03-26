    const jendela = window;
    jendela.onkeydown = function(event){
        if(event.keyCode == 9){
            console.log("tab was pressed");
            const tableBody = document.getElementById("tableBody");

            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            const input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            const input3 = document.createElement("input");
            input3.setAttribute("type", "text");
            
           td.appendChild(input);
           td2.appendChild(input2);
           td3.appendChild(input3);
           tr.appendChild(td);
           tr.appendChild(td2);
           tr.appendChild(td3);
            // for (let index = 0; index < 3; index++) {
            //     td.appendChild(input);
            //     tr.appendChild(td);
                
            // }
    
            tableBody.appendChild(tr);
        }
        
    }
    


