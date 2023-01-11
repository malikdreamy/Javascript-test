function countDown(){
    questions();
let startCount = 60;
let endCount = 1;
for (var i = 0; i < endCount ; i++){
const theTimer = setInterval(counter, 1000);
function counter(){
let time =  document.getElementById("timer").textContent = startCount + --endCount;
if (time == 0){
alert("Times Up! Try Again!");
clearInterval(theTimer);}}}}
var timeButton = document.getElementById("timerButton");
timeButton.addEventListener("click", countDown)
allQuestions = document.querySelectorAll(".question");
 for (let i = 0; i < allQuestions.length; i++ ){
     allQuestions[i].style.display = "none";
 }
const questions = () => {
for (let i = 1; i < allQuestions.length; i++ ){
allQuestions[0].style.display = "block";
allQuestions[i].style.display = "none";
}
}
//questions();
let allButtons = document.querySelectorAll(".btn");
let quesArray = Array.from(allQuestions);
const nextQuestion = () =>{
if (quesArray[0].style.display = "block"){
quesArray[0].innerHTML = "";
quesArray.shift();
quesArray[0].style.display = "block";
} 
};
allButtons.forEach(btn => {
    btn.addEventListener("click", nextQuestion)
});
let myScore = "";
const showScore = () => {
let officialScore = document.getElementById("score");
officialScore.textContent += myScore;
}
showScore();
const incorrect1 = () =>{
    alert("Incorrect NaN means Not A Number");
    myScore =+ 0;
}
const correct1 = () =>{
    alert("Correct!");
    myScore = 10;  
}
let quest1ChoiceR = document.querySelector(".quest1ChoiceR");
quest1ChoiceR.addEventListener("click", correct1);
let quest1Choice = document.querySelectorAll(".quest1Choice");
let quest1Choices = Array.from(quest1Choice);
quest1Choices.forEach(choice => {
    choice.addEventListener("click", incorrect1);
});

const incorrect2 = () =>{
    alert("Incorrect It returns first selected item with given selector");
    myScore = 0 + myScore; 
}
const correct2 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;  
}
let quest2ChoiceR = document.querySelector(".quest2ChoiceR");
quest2ChoiceR.addEventListener("click", correct2);
let quest2Choice = document.querySelectorAll(".quest2Choice");
let quest2Choices = Array.from(quest2Choice);
quest2Choices.forEach(choice => {
    choice.addEventListener("click", incorrect2);
});
const incorrect3 = () =>{
    alert("Incorrect It allows you to set an item to storage taking two parameters");
    myScore = 0 + myScore;   
}
const correct3 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;   
}
let quest3ChoiceR = document.querySelector(".quest3ChoiceR");
quest3ChoiceR.addEventListener("click", correct3);
let quest3Choice = document.querySelectorAll(".quest3Choice");
let quest3Choices = Array.from(quest3Choice);
quest3Choices.forEach(choice => {
    choice.addEventListener("click", incorrect3);
});
const incorrect4 = () =>{
    alert("Incorrect It returns element with given id selector in parentheses");
    myScore = 0 + myScore;  
}
const correct4 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;  
}
let quest4ChoiceR = document.querySelector(".quest4ChoiceR");
quest4ChoiceR.addEventListener("click", correct4);
let quest4Choice = document.querySelectorAll(".quest4Choice");
let quest4Choices = Array.from(quest4Choice);
quest4Choices.forEach(choice => {
    choice.addEventListener("click", incorrect4);
});
const incorrect5 = () =>{
    alert("Incorrect It is for(var i = 0; i &lt; number; i++){}");
    myScore = 0 + myScore;   
}
const correct5 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;  
}
let quest5ChoiceR = document.querySelector(".quest5ChoiceR");
quest5ChoiceR.addEventListener("click", correct4);
let quest5Choice = document.querySelectorAll(".quest5Choice");
let quest5Choices = Array.from(quest5Choice);
quest5Choices.forEach(choice => {
    choice.addEventListener("click", incorrect5);
});
const incorrect6 = () =>{
    alert("Incorrect It takes a function in first parameter and runs it the amount of time given in second parameter in miliseconds");
    myScore = 0 + myScore;
}
const correct6 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;
}
let quest6ChoiceR = document.querySelector(".quest6ChoiceR");
quest6ChoiceR.addEventListener("click", correct4);
let quest6Choice = document.querySelectorAll(".quest6Choice");
let quest6Choices = Array.from(quest6Choice);
quest6Choices.forEach(choice => {
    choice.addEventListener("click", incorrect6);
});
const incorrect7 = () =>{
    alert("Incorrect It waits for an event then it runs a function");
    myScore = 0 + myScore;  
}
const correct7 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;  
}
let quest7ChoiceR = document.querySelector(".quest7ChoiceR");
quest7ChoiceR.addEventListener("click", correct7);
let quest7Choice = document.querySelectorAll(".quest7Choice");
let quest7Choices = Array.from(quest7Choice);
quest7Choices.forEach(choice => {
    choice.addEventListener("click", incorrect7);
});
const incorrect8 = () =>{
    alert("Incorrect It iterates over all of the elements given the condition");
    myScore = 0 + myScore; 
}
const correct8 = () =>{
    alert("Correct!");
    myScore = 10 + myScore; 
}
let quest8ChoiceR = document.querySelector(".quest8ChoiceR");
quest8ChoiceR.addEventListener("click", correct8);
let quest8Choice = document.querySelectorAll(".quest8Choice");
let quest8Choices = Array.from(quest8Choice);
quest8Choices.forEach(choice => {
    choice.addEventListener("click", incorrect8);
});
const incorrect9 = () =>{
    alert("Incorrect It adds created HTML Element to selected element");
    myScore = 0 + myScore;  
}
const correct9 = () =>{
    alert("Correct!");
    myScore = 10 + myScore;
}
let quest9ChoiceR = document.querySelector(".quest9ChoiceR");
quest9ChoiceR.addEventListener("click", correct7);
let quest9Choice = document.querySelectorAll(".quest9Choice");
let quest9Choices = Array.from(quest9Choice);
quest9Choices.forEach(choice => {
    choice.addEventListener("click", incorrect9);
});
const incorrect10 = () =>{
    alert("Incorrect It returns a Nodelist of Elements given what selector was used in paretheses");
    myScore = 0 + myScore + "%";
    showScore();
}
const correct10 = () =>{
    alert("Correct!");
    myScore = 10 + myScore + "%";
    showScore();
}
let quest10ChoiceR = document.querySelector(".quest10ChoiceR");
quest10ChoiceR.addEventListener("click", correct10);
let quest10Choice = document.querySelectorAll(".quest10Choice");
let quest10Choices = Array.from(quest10Choice);
quest10Choices.forEach(choice => {
    choice.addEventListener("click", incorrect10);
});
document.getElementById("userScore").addEventListener("click", function(){
let userName = document.getElementById("username").value;
localStorage.setItem("username", userName);
document.getElementById("username").value = "";
document.getElementById("username").placeholder = "Saved!";
});
document.getElementById("getScore").addEventListener("click", function(){
localStorage.setItem("score", myScore)
const showOffScore = () => {
let offScore = document.getElementById("officialScore");
offScore.textContent += localStorage.getItem("username") + ": " + localStorage.getItem("score");
}
showOffScore();
});
let lastScore = document.getElementById("lastScore");
lastScore.textContent += localStorage.getItem("username") + ": " + localStorage.getItem("score");
//localStorage.getItem("username") + localStorage.getItem("score");

//quest1Choice.addEventListener("click", quest1Ans)

// const nextQuestion1 = () => {
//     let theQuest = document.querySelectorAll(".question1");
//     const changeQuest = () =>{
//         allQuestions[0].style.display = "none";
//         allQuestions[1].style.display = "block";  
//     }
//     theQuest.forEach(quest =>{
//         quest.addEventListener("click", changeQuest)
//     });  
// }
// nextQuestion1();

// const nextQuestion2 = () => {
//     let theQuest = document.querySelectorAll(".question2");
//     const changeQuest = () =>{
//         allQuestions[1].style.display = "none";
//         allQuestions[2].style.display = "block";
//     }
//     theQuest.forEach(quest =>{
//         quest.addEventListener("click", changeQuest)
//     });  
// }
// nextQuestion2();

// const nextQuestion3 = () => {
//     let theQuest = document.querySelectorAll(".question3");
//     const changeQuest = () =>{
//         allQuestions[2].style.display = "none";
//         allQuestions[3].style.display = "block";
//     }
//     theQuest.forEach(quest =>{
//         quest.addEventListener("click", changeQuest)
//     });  
// }
// nextQuestion3();

// const nextQuestion4 = () => {
//     let theQuest = document.querySelectorAll(".question4");
//     const changeQuest = () =>{
//         allQuestions[3].style.display = "none";
//         allQuestions[4].style.display = "block";
//     }
//     theQuest.forEach(quest =>{
//         quest.addEventListener("click", changeQuest)
//     });  
// }
// nextQuestion4();

// const nextQuestion5 = () => {
//     let theQuest = document.querySelectorAll(".question5");
//     const changeQuest = () =>{
//         allQuestions[4].style.display = "none";
//         allQuestions[5].style.display = "block";
//     }
//     theQuest.forEach(quest =>{
//         quest.addEventListener("click", changeQuest)
//     });  
// }
// nextQuestion5();


















// function createBox(){
// box1 = document.createElement("div");
// button1 = document.createElement("button");
// button2 = document.createElement("button");
// button3 = document.createElement("button");
// button4 = document.createElement("button");
// button1.classList.add("btn");
// button2.classList.add("btn");
// button3.classList.add("btn");
// button4.classList.add("btn");
// button4.setAttribute("id", "btn4")
// button1.innerHTML = "Unkown Error";
// button2.innerHTML = "No variable is being references";
// button3.innerHTML = "This Value is Not A Number";
// button4.innerHTML = "This Value is not a string";
// box1.classList.add("test");
// quest1 = "What does NaN mean?<br/>";
// box1.innerHTML = quest1;

// box1.append(button1, button2, button3, button4);// put all buttons in same class and edit css to make them display: block
// element = document.getElementById("quiz");
// element.appendChild(box1);
// }


// function callButtons(){
//     allButtons = document.querySelectorAll(".btn");
//     for (var i = 0; i < allButtons.length; i++){
//         allButtons[i].style.display = "block";
        
//     }
    
// }
// createBox();
// callButtons();


// box1.style.display = "none";
// function displayQuest() {
//     box1.style.display = "block";
// }
// timeButton.addEventListener("click", displayQuest)

// let score = "";
// points = 10;

// function firstQuest(){
// function yourRight(){
//    newscore = score + points; 
//    alert("Correct! ")
// }
// button3.addEventListener("click", yourRight);
// button1.onclick = function(){
//     alert("Your Wrong!")
// }
// button2.onclick = function(){
//     alert("Your Wrong!")
// }
// button4.onclick = function(){
//     alert("Your Wrong!")
// }
// function nextQuest(){
//     box1.style.display = "none";
//     quest2();
// }
// allButtons[0].addEventListener("click", nextQuest);
// allButtons[1].addEventListener("click", nextQuest);
// allButtons[2].addEventListener("click", nextQuest);
// allButtons[3].addEventListener("click", nextQuest);
// }
// firstQuest();


