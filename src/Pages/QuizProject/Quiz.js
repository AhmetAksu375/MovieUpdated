import React, { useState } from "react";
import "./quiz.css";
export default function Quiz() {
  const questionList = [
    { question: "What is 2 + 2", answers: ["4", "2", "3", "5","77"], answerIndex:0},
    { question: "What is 16 + 32", answers: ["42", "38", "51", "48","23"] ,answerIndex:3},
    { question: "What is 17 + 25", answers: ["42", "39", "45", "47","23"] , answerIndex:0},
    { question: "What is 1 + 1", answers: ["42", "2", "45", "47","46"] , answerIndex:1},
    { question: "What is 12 + 12", answers: ["42", "39", "24", "47","45"] , answerIndex:2},
    { question: "What is 11 + 18", answers: ["32", "39", "45", "47","29"] , answerIndex:4}

  ];
  const [answerList, setAnswerList] = useState(["-1", "-1", "-1", "-1","-1","-1"]);
  const [isChecked, setIsChecked] = useState(false);
  
  
  function answerHandler(index, answer) {
    if(!isChecked){
        const newArray = [...answerList];
        newArray[index] = answer;
        setAnswerList(newArray);
        console.log(newArray);

    }

  }

  

  function resultHandler(){
        setIsChecked(true);
        let allButtons = document.getElementsByClassName("quizBtn");

        let choosedButtons = document.getElementsByClassName("choosedQuizBtn");
        
        let count3 = 0;
        console.log(answerList);

       if(choosedButtons.length > 0){
        for(let b = 0; b<allButtons.length; b++){
          if(b % questionList[0].answers.length == 0 && b > 0){
            count3++;
        }
        
        if(answerList[count3] != questionList[count3].answerIndex){
          if(count3 < choosedButtons.length){
            choosedButtons[count3].classList.add("wrongChoose");
          }
          }
        }
       }
        
        let count1 = 0; 
        let count2 = 0;

        for(let a = 0; a<allButtons.length; a++){
          if(a % questionList[0].answers.length == 0 && a > 0){
            count1++;
            count2+=questionList[0].answers.length;

           }
           
           allButtons[questionList[count1].answerIndex+count2].classList.add("trueChoose");

           
          
        }




       
  }

  return (
    <div className="grid w-screen bg-slate-100 scroll-smooth pt-24 quizPart">
      {questionList.map((question, index) => (
        <div
        id={`question${index}`}
          className="quePart grid w-100 grid-cols-1 bg-slate-100 h-screen space-y-3 place-content-center px-16 sm:px-72 h-screen pt-12 mb-48 sticky top-0 pb-12"
          key={index}
        >
          <button className="quizQuestion border-b-2 border-slate-400 h-12 px-3 font-bold text-xl">
            {index + 1}. {question.question}
          </button>

          <button
              className={answerList[index] == 0 ? "quizBtn choosedQuizBtn" : "quizBtn"}
              onClick={() => answerHandler(index, "0")}
            >
              {`A) ${question.answers[0]}`}
            </button>
            <button
              className={answerList[index] == 1 ? "quizBtn choosedQuizBtn" : "quizBtn"}
              onClick={() => answerHandler(index, "1")}
            >
              {`B) ${question.answers[1]}`}
            </button>
            <button
              className={answerList[index] == 2 ? "quizBtn choosedQuizBtn" : "quizBtn"}
              onClick={() => answerHandler(index, "2")}
            >
              {`C) ${question.answers[2]}`}
            </button>
            <button
              className={answerList[index] == 3 ? "quizBtn choosedQuizBtn" : "quizBtn"}
              onClick={() => answerHandler(index, "3")}
            >
              {`D) ${question.answers[3]}`}
            </button>
            <button
              className={answerList[index] == 4 ? "quizBtn choosedQuizBtn" : "quizBtn"}
              onClick={() => answerHandler(index, "4")}
            >
              {`E) ${question.answers[4]}`}
            </button>
          <div className="flex w-full space-x-3">
       
           <a
           
           href={index+1 == questionList.length ? `#result` : `#question${index+1}`}
              className="next h-24 rounded-lg shadow-2xl ml-auto"
              
            >Next</a>
          </div>
          
        </div>
      ))}
  <div 
    id="result"
  className='grid w-screen place-content-center pt-12 bg-slate-100 h-screen sticky'>
            <h2 className='finishText text-2xl font-bold'>You Finished The Exam</h2>
            <h2 className='finishText finishText2 text-2xl font-bold'>Well Down</h2>
            <a href="#quiz" onClick={() => resultHandler()} className='resultBtn scroll-smooth text-center align-middle pt-3'>Show Results</a>

    </div>
     

    </div>
  );
}
