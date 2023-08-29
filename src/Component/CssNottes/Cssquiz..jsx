import { Outlet } from "react-router-dom";
import '../../Style/CssnotesStyle/cssquiz.css';
import Cssque from "../Cssque";
import { useState } from 'react';

export let Cssquiz = ()=>{
    const [Questionindx,setQuestionidx]=useState(0);
    const [score,setScore]=useState(0);
    const [showScore,setshowScore]=useState(false);
    const currentQuestion = Cssque[Questionindx];
    const selectOption = (idx)=>{
        console.log(idx);
        if(currentQuestion.answerscss === idx){
            setScore(score+1);
        }
        const nextQue = Questionindx + 1;
        if(nextQue < Cssque.length){
        setQuestionidx(Questionindx+1);
    }
    else{
        setshowScore(true);
    }
    };

    const restart =()=>{
        setQuestionidx(0);
        setScore(0);
        setshowScore(false);
    }
    return(
        <div className="cssquiz">
            {
            showScore ?
             (
            <>
                <h2>Your Score is : {score}</h2>
                <button onClick={restart} className="buttoncss">Restart Quiz</button>
             </>
             ) : (
       <div className="cssque">
        <h5>{currentQuestion.questioncss}</h5>
        <div className="cssopt">
        <ul className="cssopt_ul">
        {currentQuestion.options.map((options,i)=>{
                        return <li className="cssopt_li" onClick={()=>selectOption(i)}>{options}</li>
                    })} 
        </ul>
        </div>
       </div>
             )
            }
        <Outlet/>
        </div>
    )
}