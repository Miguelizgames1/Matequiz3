function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_awnser = parseInt(number1) * parseInt(number2)
}

question_number = "<h4>" + number1 + "X"+ number2 +"</h4>"

question_word = "<h4>"+ number1 + " X "+ number2 +"</h4>";
inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row =  question_word + inputBox + checkButton ; 

number1 = document.getElementById("number1").value = ""
number2 = document.getElementById("number2").value = ""
    


