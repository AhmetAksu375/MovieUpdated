import React, { useEffect, useLayoutEffect, useState } from "react";
import "./quiz.css";
import Fade from "react-reveal/Fade";

export default function () {
  const questionList = [
    {
      question: "What is the best language in software which Ahmet loves.",
      answers: ["4", "2", "3", "5", "77"],
      answerIndex: 0,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 2,
    },
    {
      question: "What is 17 + 25",
      answers: ["42", "39", "45", "47", "23"],
      answerIndex: 1,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
    {
      question: "What is 2 + 2",
      answers: ["4", "2", "3", "5", "77"],
      answerIndex: 0,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
    {
      question: "What is 17 + 25",
      answers: ["42", "39", "45", "47", "23"],
      answerIndex: 1,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 2,
    },
    {
      question: "What is 2 + 2",
      answers: ["4", "2", "3", "5", "77"],
      answerIndex: 0,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
    {
      question: "What is 17 + 25",
      answers: ["42", "39", "45", "47", "23"],
      answerIndex: 1,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
    {
      question: "What is 2 + 2",
      answers: ["4", "2", "3", "5", "77"],
      answerIndex: 0,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
    {
      question: "What is 17 + 25",
      answers: ["42", "39", "45", "47", "23"],
      answerIndex: 0,
    },
    {
      question: "What is 16 + 32",
      answers: ["42", "38", "51", "48", "23"],
      answerIndex: 3,
    },
  ];
  const [isInResultPage, setIsInResultPage] = useState(false);
  const [answerList, setAnswerList] = useState([
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
  ]);
  const [checkedAnswers, setcheckedAnswers] = useState([
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
  ]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function questionHandler(value) {
    if (value === "next") {
      if (questionIndex == questionList.length - 1) {
        setIsInResultPage(true);

      }
      if(questionIndex < questionList.length-1){
        setQuestionIndex(questionIndex + 1);

      }
      

  
    }
    if (value === "prev" && questionIndex != 0) {
      if (questionIndex + 1 == questionList.length) {
        setIsInResultPage(false);
      }
      if(questionIndex < questionList.length && !isInResultPage){

        setQuestionIndex(questionIndex - 1);
      }
      }
      

      
   
    
  }

  function answerHandler(index) {
    if(!isChecked){
      if(answerList[questionIndex] == index){
        const newArray = [...answerList];
        newArray[questionIndex] = -1;
        setAnswerList(newArray);

      }else{
        const newArray = [...answerList];
        newArray[questionIndex] = index;
        setAnswerList(newArray);
      }
      
    }
   
  }

  function setQuestionByIndex(index) {
    setIsInResultPage(false);
    setQuestionIndex(index);
  }
  function resultHandler() {
    setIsChecked(true);
    let quizIndexBtns = document.getElementsByClassName("quizIndexBtn");
    
    for(let a = 0; a<quizIndexBtns.length; a++){
      if(answerList[a] == questionList[a].answerIndex){
        quizIndexBtns[a].classList.add("trueChoose");
      }else{
        if(answerList[a] != -1){
          quizIndexBtns[a].classList.add("wrongChoose");

        }else{
          quizIndexBtns[a].classList.add("emptyChoose");
        }

      }
    }
  }

  useEffect(()=>{
    console.log("optimizee")
    let btns = document.getElementsByClassName("quizIndexBtn");
    for(let a = 0; a<btns.length; a++){
      if(btns[a].classList.contains("activatedBtn")){
        btns[a].classList.remove("activatedBtn")
      }
    }

    btns[questionIndex].classList.add("activatedBtn");
  })
  useEffect(() =>{
    let chooses = document.getElementsByClassName("quizChoose");
    if(chooses && isChecked){
      for(let a = 0; a<chooses.length; a++){
        chooses[a].classList.add("quizBtn3");

          if(chooses[a].classList.contains("trueChoose")){
            chooses[a].classList.remove("trueChoose");
          }
        }
      
      for(let a = 0; a<chooses.length; a++){
        if(chooses[a].classList.contains("choosedQuizBtn2") && a != questionList[questionIndex].answerIndex){
          chooses[a].classList.add("wrongChoose");

        }
        if(questionList[questionIndex].answerIndex == a){
          chooses[a].classList.add("trueChoose");
        }
      }

      
    }
  })
 
  return (
    <div className="h-[100%] pb-24 pt-8 sm:pt-32 w-full bg-slate-300 grid grid-cols-1 place-content-none sm:place-content-center">
      <div className="w-[80%] sm:w-[70%] md:w-[60%] h-[auto] bg-slate-300 shadow-xl shadow-slate-400 pb-12 px-6 pt-4 m-auto sm:mt-[-50px]">
        {isInResultPage ? (
          <div>
            <h3 className="text-3xl sm:text-4xl  font-semibold text-slate-800 text-center pt-12 mb-6">
              Finished The Exam
            </h3>
            <div className="text-center mb-6">
              <button
                onClick={() => resultHandler()}
                className="text-3xl bg-slate-400 py-3 px-6 rounded-lg shadow-lg font-semibold duration-300    ease-out hover:bg-slate-600 hover:text-slate-200 cursor-pointer"
              >
                See Results
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="row-span-1 text-2xl text-slate-800 font-semibold pl-0 sm:pl-4 sm:font-4xl  pt-8 pb-  border-b-2 border-slate-800 ">
              {questionIndex + 1}. {questionList[questionIndex].question}
            </div>
            <div className="text-[1.35rem] font-medium mt-0 row-span-full pt-6 px-2">
              <button
                onClick={() => answerHandler(0)}
                className={
                  answerList[questionIndex] == 0
                    ? "quizChoose choosedQuizBtn2"
                    : "quizChoose quizBtn2"
                }
              >{`A) ${questionList[questionIndex].answers[0]}`}</button>
            </div>
            <div className="text-[1.35rem] font-medium mt-0 row-span-full pt-3 px-2">
              <button
                onClick={() => answerHandler(1)}
                className={
                  answerList[questionIndex] == 1
                    ? "quizChoose choosedQuizBtn2"
                    : "quizChoose quizBtn2"
                }
              >{`B) ${questionList[questionIndex].answers[1]}`}</button>
            </div>

            <div className="text-[1.35rem] font-medium mt-0 row-span-full pt-3 px-2">
              <button
                onClick={() => answerHandler(2)}
                className={
                  answerList[questionIndex] == 2
                    ? "quizChoose choosedQuizBtn2"
                    : "quizChoose quizBtn2"
                }
              >{`C ${questionList[questionIndex].answers[2]}`}</button>
            </div>

            <div className="text-[1.35rem] font-medium mt-0 row-span-full pt-3 px-2">
              <button
                onClick={() => answerHandler(3)}
                className={
                  answerList[questionIndex] == 3
                    ? "quizChoose choosedQuizBtn2"
                    : "quizChoose quizBtn2"
                }
              >{`D) ${questionList[questionIndex].answers[3]}`}</button>
            </div>

            <div className="text-[1.35rem] font-medium mt-0 row-span-full pt-3 px-2">
              <button
                onClick={() => answerHandler(4)}
                className={
                  answerList[questionIndex] == 4
                    ? "quizChoose choosedQuizBtn2"
                    : "quizChoose quizBtn2"
                }
              >{`E) ${questionList[questionIndex].answers[4]}`}</button>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 pt-6 px-2 gap-2">
          <button
            className="text-lg bg-slate-400 h-12 px-6 rounded-lg w-full col-span-1 duration-300 hover:bg-slate-500"
            onClick={() => questionHandler("prev")}
          >
            Prev
          </button>

          <button
            className="text-lg bg-slate-400 h-12 ml-auto px-6 rounded-lg w-full col-span-1 duration-300 hover:bg-slate-500"
            onClick={() => questionHandler("next")}
          >
            {questionIndex+2 > questionList.length ? "Results" : "Next"}
          </button>

          <div className="grid grid-cols-4 col-span-full gap-2 w-full m-auto sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {questionList.map((question, index) => (
              <button
              key={index}
                className={
                  answerList[index] != -1
                    ? "quizIndexBtn text-lg bg-amber-400 h-12 px-4 rounded-lg duration-300 shadow-lg"
                    : "quizIndexBtn text-lg bg-slate-400 h-12 px-4 rounded-lg duration-300 hover:bg-slate-500 shadow-lg"
                }
                onClick={() => setQuestionByIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
