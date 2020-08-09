const btnTwo = document.getElementById("submit");
const displayTwo = document.getElementById("num2");
const showValue = document.getElementById("valueShow");
const showOperator = document.getElementById("operatorShow");
//const tableBody = document.getElementById("tableBody");
//btnTwo.addEventListener("click", function(){
   /* let xhrTwo = new XMLHttpRequest();
    xhrTwo.onreadystatechange = function() {
        if (xhrTwo.readyState == 4 && xhrTwo.status == 200) {
          let reciveTwo = JSON.parse(xhrTwo.responseText);
            console.log(reciveTwo);
           let html = "";
           for(let a =0 ; a < reciveTwo.length; a++){
               let valueHistory = reciveTwo[a]['value'];
               let operarorHistory = reciveTwo[a]['operator'];
               html+= "<tr>";
               if (operarorHistory == "+"){
               html+= '<td style= "color: #21bf73;">' + valueHistory + "</td>";
               html+= '<td style= "color: #21bf73;">' + operarorHistory + "</td>";
               }else{
                html+= '<td style= "color: #fa1616;">' + valueHistory + "</td>";
                html+= '<td style= "color: #fa1616;">' + operarorHistory + "</td>";
               }
               html+= "</tr>";
           }
           tableBody.innerHTML = html;
        }
      };
    xhrTwo.open("GET", "history.php", true);
    xhrTwo.send();
});*/
