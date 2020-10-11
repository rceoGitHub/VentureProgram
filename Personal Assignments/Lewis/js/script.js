// All the questions from a JSON file
var currentQuestion = 0;
var currentTypes = ["Accounting", "EV", "M&A", "DCF"];

console.log(questionArray.length);
console.log(questionArray[1].Question);


// Randomize the question number based on which questions types are chosen
function randomizeQuestion() {
    currentQuestion = Math.floor((Math.random() * 287) + 1);
    console.log(currentTypes);

    while(!correctType(currentQuestion)) {
        currentQuestion = Math.floor((Math.random() * 287) + 1);
    }

    var question = questionArray[currentQuestion - 1].Question;
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();

}

// Goes to the next question in the list
function nextQuestion() {
    if (currentQuestion < 287) {
        currentQuestion++;
    } else {
        currentQuestion = 1;
    }
    var question = questionArray[currentQuestion - 1].Question;
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();
}

// Goes to the next question in the list
function prevQuestion() {  
    if (currentQuestion > 1) {
        currentQuestion--;
    } else {
        currentQuestion = 287;
    }

    var question = questionArray[currentQuestion - 1].Question;
    document.querySelector("#question-box").innerHTML = question;

    document.querySelector("#answer-box").innerHTML = "";
    document.querySelector("#question-span").innerHTML = currentQuestion.toString();
}

// Shows the answer to the question
function showAnswer() {
    var answer = questionArray[currentQuestion - 1].Answer;
    document.querySelector("#answer-box").innerHTML = answer;
}

// Switches the accounting toggle
function accountingToggle() {
    if ($('#customSwitch1').is(':checked')) {
        currentTypes.push("Accounting");
    } else {
        currentTypes.splice(currentTypes.indexOf("Accounting"), 1);
    }
}

// Switches the EV toggle
function evToggle() {
    if ($('#customSwitch2').is(':checked')) {
        currentTypes.push("EV");
    } else {
        currentTypes.splice(currentTypes.indexOf("EV"), 1);
    }
}

// Switches the M&A toggle
function mandaToggle() {
    if ($('#customSwitch4').is(':checked')) {
        currentTypes.push("M&A");
    } else {
        currentTypes.splice(currentTypes.indexOf("M&A"), 1);
    }
}

// Switches the DCF toggle
function dcfToggle() {
    if ($('#customSwitch3').is(':checked')) {
        currentTypes.push("DCF");
    } else {
        currentTypes.splice(currentTypes.indexOf("DCF"), 1);
    }
}

// Check if current question is correct type
function correctType(number) {
    return currentTypes.includes(questionArray[number].Type);   
}








