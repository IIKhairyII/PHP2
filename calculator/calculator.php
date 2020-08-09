<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commercial Calculator</title>
    <style>
        #minusBtn:hover{
    background-color: #50382a;
    
}
    </style>
</head>
<body>
    <div id="container">
    <form action="" method="POST" id="">
        <div id="inputs">
            <input type="text" name="values" id="num" onkeydown="AddByKeyboard(event)" readonly>
            <input type="text" name="values2" id="num2" readonly>
        </div>
        <div style="display: flex;">
            <div id="leftPart" class="part">
                <div id="upperLeft">
                <div id="leftUpperRow">
                    <button type="button" id="mc">MC</button>
                    <button type="button" id="mr">MR</button>
                    <button type="button" id="mplus">M+</button>
                    <button type="button" id="ms">MS</button>
                    <button type="button" id="backspace" onclick="Backbtn()">⌫</button>
                </div>
            </div>
            <div id="lowerLeft">
                <div id="firstLowerLeftRow">
                    <button type="button" name = "btn7" onclick="AddByClick(7)" id="btn7">7</button>
                    <button type="button" name = "btn8" onclick="AddByClick(8)" id="btn8">8</button>
                    <button type="button" name = "btn9" onclick="AddByClick(9)" id="btn9">9</button>
                </div>
                <div id="secondLowerLeftRow">
                    <button type="button" name = "btn4" onclick="AddByClick(4)" id="btn4">4</button>
                    <button type="button" name = "btn5" onclick="AddByClick(5)" id="btn5">5</button>
                    <button type="button" name = "btn6" onclick="AddByClick(6)" id="btn6">6</button>
                </div>
                <div id="thirdLowerLeftRow">
                    <button type="button" name = "btn1" onclick="AddByClick(1)" id="btn1">1</button>
                    <button type="button" name = "btn2" onclick="AddByClick(2)" id="btn2">2</button>
                    <button type="button" name = "btn3" onclick="AddByClick(3)" id="btn3">3</button>
                </div>
                <div id="forthLowerLeftRow">
                    <button type="button" name = "btn0" onclick="AddByClick(0)" id="btn7">0</button>
                    <button type="button" name = "btn00" onclick="AddByClick('00')" id="btn7">00</button>
                    <button type="button" name = "btndot" onclick="AddByClick('.')" id="btn7">.</button>
                </div>
            </div>
            </div>
            <div id="rightPart" class="part">
                <div id="upperRight">
                   <!-- <p style="font-size: 2vh; font-family: 'Roboto', sans-serif; margin: 0.2vh;">Fraction</p> -->
                      <select name="" id="selection"> 
                         <option>Frc</option>
                         <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button id="btn" type="button">Apply</button>
                </div>
                <div id="lowerRight" style="display: flex; margin-top: 1vh;">
                    <div id="leftColumn" class="flex">
                        <button type="button" id="minusBtn" style="width: 7vh; height: 6vh; background-color: #FF8C42;" onclick="AddByClick('-')">-</button>
                        <button type="button" id="plusBtn" style="width: 7vh; height: 15vh;" onclick="AddByClick('+')">+</button>
                        <button type="button" id="submit" name="btn" style="width: 13vh; height: 5vh;">=</button>
                        <!-- <input type="button" name="btn" value="="  id="submit">-->
                        
                    </div>    
                    <div id="rightColumn" class="flex">
                        <button type="button" id="divideBtn">÷</button>
                        <button type="button" id="multiplyBtn">×</button>
                        <button type="button" id="inverseBtn">1/x</button>
                        <button type="button" id="bracketBtn">()</button>
                    </div> 
                </div>

            </div>
           
        </div>
    </form>
    <form action="" method="GET">
        <div id="results">
            <div id="table">
                <table class="content-table">
                    <thead>
                    <tr>
                        <th>Value</th>
                        <th>operator</th>
                        <th colspan="1"></th>
                    </tr>
                    </thead>
              
                    <tbody id="tableBody">
               
                </tbody>
                    <?php //endwhile; ?>
                   
                </table>
            </div>
            <div id="btnsRow">
                <button type="button" id="clear">C</button>
                <button type="button" id="sm">Sm</button>
                <button type="button" id="save">Sv</button>
                <button type="button" id="print">Print</button>
            </div>
        </div>
    </form>
</div>
<script src="ajax.js"></script>
<script src="history.js"></script>
</body>
</html>



<!-- echo $row['value'];
    echo $row['operator'];    -->