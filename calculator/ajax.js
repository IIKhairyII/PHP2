const display = document.getElementById("num");
const display2 = document.getElementById("num2");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const select = document.getElementById("selection");
const btn = document.getElementById("btn");
const tableBody = document.getElementById("tableBody");
/*const showValue = document.getElementById("valueShow");
const showOperator = document.getElementsByClassName("operatorShow");*/
var recive;
function AddByClick(a){
    display.value+=a;
} 
function AddByKeyboard(event){
    var keyValue = event.key;
    var check = ["+", "-", "0", "1", "2", "3", "4", "5", "6", '7', '8', '9', "Shift", ".", 'Backspace', 'ArrowRight', 'Enter'];
    if(check.includes(keyValue)){
        if (keyValue == "Shift"){
            display.value+="00";
        }else if(keyValue == "Backspace"){
           display.value = display.value.substring(0,display.value.length-1);
        }else if(keyValue == "ArrowRight"){
            display.value="";
        }else if(keyValue == "Enter"){
            let xhr = new XMLHttpRequest();
            let number = display.value;
            let send = JSON.stringify(number);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                   recive =JSON.parse(xhr.responseText);
                    display2.value =parseFloat(recive['submission']).toFixed(select.value);
                    let html = "";
                   for(let a =0 ; a < recive.length; a++){
                      let valueHistory = parseFloat(recive['value']).toFixed(select.value); 
                      let operarorHistory = recive['operator'];
                      html+= "<tr>";
                      if (operarorHistory == "+"){
                      html+= '<td style= "color: #21bf73;">' + valueHistory + "</td>";
                      html+= '<td style= "color: #21bf73; text-align: center;">' + operarorHistory + "</td>";
                      }else{
                       html+= '<td style= "color: #fa1616;">' + valueHistory + "</td>";
                       html+= '<td style= "color: #fa1616; text-align: center;">' + operarorHistory + "</td>";
                      }
                      html+= "</tr>";
                 }
                  tableBody.innerHTML = html;
                }
              };
            console.log (send);
            xhr.open("POST", "calculation.php");
            xhr.send(send);
             // second request
           /*  let xhrTwo = new XMLHttpRequest();
            xhrTwo.onreadystatechange = function() {
            if (xhrTwo.readyState == 4 && xhrTwo.status == 200) {
            console.log(xhrTwo.responseText);
            let reciveTwo = JSON.parse(xhrTwo.responseText);
            
            let html = "";
            for(let a =0 ; a < reciveTwo.length; a++){
              let valueHistory = parseFloat(reciveTwo[a]['value']).toFixed(select.value); 
              let operarorHistory = reciveTwo[a]['operator'];
              html+= "<tr>";
              if (operarorHistory == "+"){
              html+= '<td style= "color: #21bf73;">' + valueHistory + "</td>";
              html+= '<td style= "color: #21bf73; text-align: center;">' + operarorHistory + "</td>";
              }else{
               html+= '<td style= "color: #fa1616;">' + valueHistory + "</td>";
               html+= '<td style= "color: #fa1616; text-align: center;">' + operarorHistory + "</td>";
              }
              html+= "</tr>";
          }
          tableBody.innerHTML = html;
       }
     };
   xhrTwo.open("GET", "history.php", true);
   xhrTwo.send();*/
        }
        else{
           display.value+=keyValue;
        }
        
    }else{
        display.value+=""; 
    }}
    function Backbtn(){
        display.value = display.value.substring(0,display.value.length-1);
    };
    clear.addEventListener("click", function(){
        display.value="";
    }); 
    submit.addEventListener("click", function(){
        let xhr = new XMLHttpRequest();
        let number = display.value;
        let send = JSON.stringify(number);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                recive =JSON.parse(xhr.responseText);
                display2.value =parseFloat(recive['submission']).toFixed(select.value);
            }
          };
        console.log (send);
        console.log(xhr.responseText);
        xhr.open("POST", "calculation.php", true);
        xhr.send(send);
        // second request
        let xhrTwo = new XMLHttpRequest();
         xhrTwo.onreadystatechange = function() {
        if (xhrTwo.readyState == 4 && xhrTwo.status == 200) {
            console.log(xhrTwo.responseText);
          let reciveTwo = JSON.parse(xhrTwo.responseText);  
           let html = "";
           for(let a =0 ; a < reciveTwo.length; a++){
               let valueHistory = parseFloat(reciveTwo[a]['value']).toFixed(select.value); 
               let operarorHistory = reciveTwo[a]['operator'];
               html+= "<tr>";
               if (operarorHistory == "+"){
               html+= '<td style= "color: #21bf73;">' + valueHistory + "</td>";
               html+= '<td style= "color: #21bf73; text-align: center;">' + operarorHistory + "</td>";
               }else{
                html+= '<td style= "color: #fa1616;">' + valueHistory + "</td>";
                html+= '<td style= "color: #fa1616; text-align: center;">' + operarorHistory + "</td>";
               }
               html+= "</tr>";
           }
           tableBody.innerHTML = html;
        }
      };
    xhrTwo.open("GET", "history2.php", true);
    xhrTwo.send();
        
    });
    btn.addEventListener("click", function(){
        if (select.value == "Frc") {
            display2.value= parseFloat(recive['submission']).toFixed(0);
           
        }
        else if (select.value == 0){
            display2.value= parseFloat(recive['submission']).toFixed(0);
           
        } else if (select.value == 1){
            display2.value= parseFloat(recive['submission']).toFixed(1);
           
        } else if (select.value == 2){
            display2.value= parseFloat(recive['submission']).toFixed(2);
           
        } else if (select.value == 3){
            display2.value= parseFloat(recive['submission']).toFixed(3);
           
        } else{
            display2.value= parseFloat(recive['submission']).toFixed(4);
           
        }
    })
    