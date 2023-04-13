const button = document.querySelector(".buttons")
const btn1 = button.querySelector("#previous")
const btn2 = button.querySelector("#ans-1")
const btn3 = button.querySelector("#ans-2")
const btn4 = button.querySelector("#next")
const inputs = document.querySelector("#end-btn")

let box = document.querySelector("input")
let text = document.getElementById("box")

let scoreBoard = 0;
let attempt = 0;


box.style.display = "none";
inputs.innerHTML = "START";
text.innerHTML = "Click the \"Start\" Button above to start the Bot.";

btn1.innerText = ""
btn2.innerText = ""
btn3.innerText = ""
btn4.innerText = ""

var btn = [btn2, btn3, btn4];

let questions = [
            [{
                word: "Who discovered the Human Cell \n  \n (A) Robbert Huke \n (B) Robert Hook \n (C) Robert Hooke",
                btn: ["A", "B", "C"],
                ans: "C"
            },
            {
                word: "The Law of Gravity was discovered by \n \n (A) Adam Newton \n (B) John Newton (C) Edmond Newton",
                btn: ["A", "B", "C"],
                ans: "C"
            },
            {
                word: "Friction occur when \n \n (A) When a fan is on speed \n(B) When two surfaces are rubbed together \n(C)When we work too much. ",
                btn: ["A", "B", "C"],
                ans: "B"
            },
            {
                word: "Earth has how many sattelite(s)? \n (A) 1 \n (B) 10 \n (C) 3 ",
                btn: ["A", "B", "C"],
                ans: "A"
            }],
            [{
                word: "Who defined Economics as a science \n \n (A) Adams Smith \n (B) Lord C. Robbins \n (C) Adam Smith",
                btn: ["A", "B", "C"],
                ans: "B"
            },
            {
                word: "Which of the words is more correct? \n \n (A) comittee \n (B) committee \n (C) commitee",
                btn: ["A", "B", "C"],
                ans: "A"
            },
            {
                word: "Who Discover River Naija? \n \n (A) Adam Smith \n (B) Williams Emmanuel \n (C) Mungo Park",
                btn: ["A", "B", "C"],
                ans: "C"
            },
            {
                word: "What\'s another name for Primary School \n \n (A) Tetiary Institution \n (B) Basic School \n (C) Junior School",
                btn: ["A", "B", "C"],
                ans: "B"
            },
            {
                word: "Which of this Options is not a contemporay Comedian \n \n (A) Brother Shagi \n (B) Funny Bros \n (C) Gbenga Adeboye",
                btn: ["A", "B", "C"],
                ans: "C"
            }]
        ]


inputs.addEventListener("click", start)
function start(){
        attempt = 0;
        scoreBoard = 0;
        text.innerHTML = "Kindly input your name below, Click on \"Continue\" below to Proceed"
        box.style.display = "block";
        inputs.innerText = "End Chat"
        inputs.addEventListener("click", start)
        btn1.innerText = ""
        btn2.innerText = ""
        btn3.innerText = ""
        btn4.innerText = "Continue"
        btn4.onclick = function(){
            box.style.display = "none";
            text.innerHTML = "Welcome " + box.value + " I am here to serve you with awesome quiz questions, \n I am loaded with questions from \"Science\" and \"Current-Affairs\" Kindly click \"A\" for Science and \"B\" for Current-Affairs." ;
            btn1.innerText = ""
            btn2.innerText = "A"
            btn3.innerText = "B"
            btn4.innerText = ""
            btn2.onclick = science;
            btn3.onclick = currentAffairs;
        }
}


function science(){
    text.innerHTML = "Welcome ones again " + box.value + " You pick to attempt Science Quiz. \n Note that you can click on \"END CHAT\" any moment you wish to go back or end the Quiz. \n click on \"Continue\" now to go the questions in store for you.";
    btn1.innerText = ""
    btn2.innerText = ""
    btn3.innerText = ""
    btn4.innerText = "Continue"
    btn1.onclick = ""
    btn2.onclick = ""
    btn3.onclick = ""
    btn4.onclick = scienceQuestions
}


function scienceQuestions(){
    nowQuest = questions[0][Math.floor(Math.random()*questions[0].length)];
    btn1.innerText = ""
    btn2.innerText = nowQuest.btn[0]
    btn3.innerText = nowQuest.btn[1]
    btn4.innerText = nowQuest.btn[2]
    if(attempt < 3){
        text.innerHTML = nowQuest.word;
        btn1.onclick = ""
        btn2.onclick = next;
        btn3.onclick = next;
        btn4.onclick = next;
        attempt++;
        
    }else{

        for(var i=0; i<btn.length; i++){
            for(var bt in btn){
                console.log()
            }
        }

        text.innerHTML = "You\'ve come to the end of the quiz " + box.value + " you score " + scoreBoard + " of " + attempt + "."

        
    }
    
    //if(questions.btn == questions.ans){
     // scoreBoard++;
     //     }
    
}

function next(){
    return scienceQuestions();
}

function currentAffairs(){

}
