const strbtn =document.querySelector(".startbtn");
const quizbox =document.querySelector(".quiz-sec");
const que_text =quizbox.querySelector(".question");
const optionBox =quizbox.querySelector(".answer");
const nextbtn = document.querySelector(".next-btn");
const total_qus=document.querySelector(".quiz-footer .total_count");
const cur_qus=document.querySelector(".quiz-footer .qus_count");
const resBox=document.querySelector(".result-sec");
const total_question=document.querySelector(".total-quiz-que");
const rightAns=document.querySelector(".right-quiz-que");
const wrong = document.querySelector(".wrong-quiz-que");
const percentage = document.querySelector(".Percentage span");

const again_quiz=document.querySelector(".quiz-footer .agn-quiz ");
const exit = document.querySelector(".quiz-footer .exit");

const mark_wrong='<i class="fa fa-times"></i>';
const mark_check='<i class="fa fa-check"></i>';


// const currentQue=0;

strbtn.onclick = () =>{
    quizbox.classList.remove("inactive");
    strbtn.classList.add("inactive");
}

var question_box =[
    {
    num :1,
    qus: "What is the value of π (pi) to two decimal places?",
    answer : 3.14,
    option : [
            3.12,
            3.14,
            3.16,
            3.18
          ]
    },
    {
        num :2,
    qus : "Solve for x: 2x + 5 = 15",
    answer : "x = 5",
    option : [
         "x = 5",
         "x = 7",
         "x = 10",
         "x = 12"
         ]
    },
    {
        num :3,
    qus : "What is the square root of 64?",
    answer :  8,
    option : [
         6,
         7,
         8,
         9
         ]
    },
    {
        num :4,
    qus : " What is the area of a rectangle with length 5 units and width 3 units?",
    answer :  "15 square units",
    option : [
         "8 square units",
         "10 square units",
         "12 square units",
         "15 square units"
         ]
    },
    {
        num :5,
    qus : "If a car travels at 60 miles per hour, how far will it travel in 3 hours?",
    answer : "180 miles",
    option : [
        " 120 miles",
         "150 miles",
         "180 miles",
         "210 miles"
         ]
    },
    {
        num :6,
    qus : "Simplify: 3(2x + 5) - 2(3x - 4)",
    answer : 23,
    option : [
        "4x + 7",
        "6x + 15",
        "7x - 2",
        23
         ]
    },
    {
        num :7,
    qus : " What is the next number in the sequence: 2, 4, 8, 16, ...",
    answer : 32,
    option : [
        24,
        28,
        32,
        36
        ]
    },
    {
        num :8,
    qus : " If a pizza has a diameter of 12 inches, what is its circumference? (Use π = 3.14)",
    answer : "37.68 inches",
    option : [
        "34.56 inches",
         "37.68 inches",
         "40.82 inches",
        " 45.36 inches"
         ]
    },
    {
        num :9,
    qus : "Solve for y: 2y - 7 = 11",
    answer :  "y = 9",
    option : [
        "y = 5",
        "y = 7",
        "y = 9",
        "y = 11"
         ]
    },
    {
        num :10,
    qus : "What is the sum of the angles in a triangle?",
    answer :  "180 degrees",
    option : [
        "90 degrees",
        "120 degrees",
        "150 degrees",
        "180 degrees"
         ]
    },


];
total_qus.innerText=question_box.length;

let qus_ind=0;
let right_answers=0;
let wrong_answers=0;
cur_qus.innerText= qus_ind+1;

showqus(qus_ind);
function showqus(qus_ind){
    que_text.innerText = question_box[qus_ind].num+". "+ question_box[qus_ind].qus;
    let option_statement = "";
    for(let i=0;i<question_box.length-6;i++){
    option_statement += `<div class="option_1">${question_box[qus_ind].option[i]}</div>`;
}
optionBox.innerHTML = option_statement;
let alloption =optionBox.querySelectorAll(".option_1");
    for(let j=0;j<alloption.length;j++){
        alloption[j].setAttribute("onclick","userAns(this)");
    }
    nextbtn.classList.remove("inactive");
}
nextbtn.onclick=()=>{
    qus_ind++;
   
    if(question_box.length>qus_ind)
    {
        cur_qus.innerText= qus_ind+1;
        showqus(qus_ind);
    }
    else{
        console.log("question completed");
        quizbox.classList.add("inactive");
        resBox.classList.remove("inactive");
        rightAns.innerText = right_answers;
        wrong.innerText = question_box.length-right_answers;
    }
    if(question_box.length-1==qus_ind){
        nextbtn.innerText="finish";

    }
}
function userAns(answers){
    let ans_user=answers.innerText;
    let correctans=question_box[qus_ind].answer;
    let alloption2 =optionBox.querySelectorAll(".option_1");
    if(ans_user==correctans){
        console.log("%c right answe","color:green");
        answers.classList.add("correct");
        answers.insertAdjacentHTML("beforeend",mark_check);
        right_answers++;
    }
    else{
        console.log("%c wrong answer","color:red");
        answers.classList.add("incorrect");
        answers.insertAdjacentHTML("beforeend",mark_wrong);
        for(let i=0;i<alloption2.length;i++){
           if(alloption2[i].innerText==correctans){
            alloption2[i].classList.add("correct");
            alloption2[i].insertAdjacentHTML("beforeend",mark_check);
           }
        }  
      }

    for(let j=0;j<alloption2.length;j++){
        alloption2[j].classList.add("disabled");
    }
}
total_question.innerText = question_box.length;
