import { Outlet } from 'react-router-dom';
import '../../Style/htmlquiz.css'; 
import Htmlque from '../Htmlque';
import { useState } from 'react';

export let Htmlquiz = ()=>{
    const [Questionidx,setQuestionidx]=useState(0);
    const [score,setScore]=useState(0);
    const [showScore,setshowScore]=useState(false);
    const Currentquestion = Htmlque[Questionidx];

    const selectOption = (idx)=>{
        console.log(idx);
        if(Currentquestion.answer === idx){
            setScore(score+1);
        }
        const nextQue = Questionidx + 1;
        if(nextQue < Htmlque.length){
        setQuestionidx(Questionidx+1);
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
    <div className="htmlquiz">
        {
            showScore ?
             (
            <>
                <h2 className='score'>Your Score is : {score}</h2>
                <button onClick={restart} className='button'>Restart Quiz</button>
             </>
             ) : (
                <div className="quizque">
            <h5>{Currentquestion.question}</h5> 
            <div className="quizopt">
                <ul className="quizul">
                    {Currentquestion.options.map((options,i)=>{
                        return <li className="quizli" onClick={()=>selectOption(i)}>{options}</li>
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