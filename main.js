const btn = document.querySelector("button");
const div= document.querySelector("div");
const welcome = document.querySelector("#welcome");
const input = document.querySelector("input");
const form = document.querySelector("form")
const h1 = document.querySelector("h1");
const introduction = document.querySelector("#introduction");
const pytanie1 = document.querySelector(".pytanie1");
const btnCheck = document.querySelector(".check");
const answerOne = document.querySelector("#one");
const answerGeneral = document.querySelector(".answerGeneral");
const btnNext = document.querySelector(".next");
const pytanie2 = document.querySelector(".pytanie2");
const answerThree = document.querySelector("#three");
const btnCheck2 = document.querySelector(".check2");
const answerGeneral2 = document.querySelector(".answerGeneral2");
const btnNext2 = document.querySelector(".next2");
const pytanie3 = document.querySelector(".pytanie3");
const answerTwo = document.querySelector("#two");
const btnCheck3 = document.querySelector(".check3");
const answerGeneral3 = document.querySelector(".answerGeneral3");
const btnNext3 = document.querySelector(".next3");
const finish = document.querySelector(".finish");

let score = 0;


const goToEnd = () => {
    // alert("zakończono quiz");
    pytanie3.classList.add("hide")
    finish.classList.remove("finish");

}

function tryAgain3() {
    answerGeneral3.textContent = "Najpierw odpowiedz poprawnie";
}

const checkAnswer3 = () => {
    // alert("drugie pytanie");
    
        if (answerTwo.checked) {
             
            console.log('DOBRA ODPOWIEDŹ');
            answerGeneral3.textContent = "Dobra odpowiedź :)";
            // var score2 = score1 + 1;
            // console.log(`Wynik to : ${score1}`);
           
            btnNext3.addEventListener("click", goToEnd);
            
        }
            else if (!answerTwo.checked) {
                answerGeneral3.textContent = "Spróbuj jeszcze raz :(";
                console.log('ZŁA ODPOWIEDŹ');
    
                btnNext3.addEventListener("click", tryAgain3);
            }
       
    }

const goToQuestion3 = () => {
    console.log('PYTANIE 3 DLA CIEBIE');
    // pytanie1.classList.remove("show");
    pytanie2.classList.add("pytanie2");
    pytanie3.classList.remove("pytanie3");

    btnCheck3.addEventListener("click", checkAnswer3);
}

function tryAgain2() {
    answerGeneral2.textContent = "Najpierw odpowiedz poprawnie";
}

const checkAnswer2 = () => {
// alert("drugie pytanie");

    if (answerThree.checked) {
         
        console.log('DOBRA ODPOWIEDŹ');
        answerGeneral2.textContent = "Dobra odpowiedź :)";
        // var score2 = score1 + 1;
        // console.log(`Wynik to : ${score1}`);
       
        btnNext2.addEventListener("click", goToQuestion3);
        
    }
        else if (!answerThree.checked) {
            answerGeneral2.textContent = "Spróbuj jeszcze raz :(";
            console.log('ZŁA ODPOWIEDŹ');

            btnNext2.addEventListener("click", tryAgain2);
        }
   
}

const goToQuestion2 = () => {
    console.log('PYTANIE 2 DLA CIEBIE');
    pytanie1.classList.remove("show");
    pytanie2.classList.remove("pytanie2");

    btnCheck2.addEventListener("click", checkAnswer2);
}

const tryAgain = () => {
    answerGeneral.textContent = "Najpierw odpowiedz poprawnie";
}



const checkAnswer = () => {
    if (answerOne.checked) {
         
        console.log('DOBRA ODPOWIEDŹ');
        answerGeneral.textContent = "Dobra odpowiedź :)";
        // var score1 = score + 1;
        // console.log(`Wynik to : ${score1}`);
       
        btnNext.addEventListener("click", goToQuestion2);
        
    }
        else if (!answerOne.checked) {
            answerGeneral.textContent = "Spróbuj jeszcze raz :(";
            console.log('ZŁA ODPOWIEDŹ');

            btnNext.addEventListener("click", tryAgain);
        }
   
}

const startQuiz = () => {
    console.log('hura');
    introduction.classList.add("hide");
    pytanie1.classList.add("show");

    btnCheck.addEventListener("click", checkAnswer);
}

const addName = (e) => {
    e.preventDefault();
    const name = input.value;
    if (input.value === "") {
        alert("Podaj imię");
    }
    console.log(name);
    
    welcome.innerHTML = `Witaj ${name} <br><br>
    <button id="begin">Zaczynamy</button>`
    // style.fontSize = "50px";
    // div.querySelector("e.value").style.fontSize = "50px";
    // let newName = this.name;
    // newName.style.fontSize = "50px";
    input.value = "";
    let btnStart = welcome.querySelector("button");

    btnStart.addEventListener("click", startQuiz)
  
}

form.addEventListener("submit", addName)