import React, { useState, useEffect } from 'react';
import './Quizz.css';
import data from '../Data/Data.js';
import Axios from 'axios';



const Quizz = (props) => {

    const [answers, setAnswers] = useState('question');
    const [questionOrExplanation, setQuestionOrExplanation] = useState('question');
    const [avatarImage, setAvatarImage] = useState();

    // const [dino, setDino]= useState({});

    // useEffect(()=> {
    //     const avatar_id = props.match.params.id
    //     console.log(props.match.params.id)
    //     Axios.get(`http://localhost:8080/api/dinosaurs/${avatar_id}`)
    //     .then(res=> setAvatarImage(res.data.image))
    // }, [])

    // useEffect(()=> {
    //     Axios
    //     .get('/api/dinosaurs/:id')
    //     .then((response)=> response.data)
    //     .then((data)=> setDino(data))
    
    // })

   const restart  = () => {
       setQuestionOrExplanation('question')
       setAnswers('question')
   }

    const chooseHandler = (event) => {
        switch(event.target.textContent) {
            case 'a mal aux dents':
                setAnswers('carries')
                break;
            
            case 'a des boutons rouges':
                setAnswers('varicelle')
                break;
            
            case 'a la tête qui gratte':
                setAnswers('poux')
                break;
            case 'a mal au ventre':
                setAnswers('diarrhée')
                break;

            case 'a mal quand il mange une glace?':
            case 'a une dent qui bouge ?':
            case 'a du sang dans la bouche ?':
            case 'a un appareil dentaire ?':
                setQuestionOrExplanation('explanation')
                break;
            
            case 'sur le ventre?':
            case 'sur les bras?':
            case 'sur les jambes ?':
            case 'sur le visage ?':
                setQuestionOrExplanation('explanation')
                break;
            
            case 'il se gratte tout le temps':
            case 'a des lentes sur les cheveux':
            case 'de petites piqures sur la tête':
            case 'a des croutes sur la tête':
                setQuestionOrExplanation('explanation')
                break;

            case 'a le ventre qui gargouille':
            case 'a les crottes de couleur clair':
            case 'a les crottes plutôt liquide':
            case 'ne peut se retenir d\allez aux toilettes':
                setQuestionOrExplanation('explanation')
                break;
            default: console.log('Something bad happened');
        }
    }
    return (
        {
            question:
            <div className='QuizzContainer' style={{backgroundImage: `url(${data[answers].image})`}}>
                <div className='PortraitContainer'>
                    <div className='Portrait'>
                        <img src={require(`../../img/dino${props.match.params.id}.png`)} alt = '' />
                    </div>
                </div>
                    <div className='Question'>
                        {data[answers].question}
                    </div>
                    <div className='AnswersContainer'>
                    <div className='AnswerBlock'>
                        <div className='Answer' onClick={(event) => chooseHandler(event)}>
                            {data[answers].choice1}
                        </div>
                        <div className='Answer' onClick={(event) => chooseHandler(event)}>
                        {data[answers].choice2}
                        </div>
                    </div>
                    <div className='AnswerBlock'>
                        <div className='Answer' onClick={(event) => chooseHandler(event)}>
                            {data[answers].choice3}
                        </div>
                        <div className='Answer' onClick={(event) => chooseHandler(event)}>
                            {data[answers].choice4}
                        </div>
                    </div>
                    </div>
            </div>,

            explanation: 
                <div className='QuizzContainer' style={{backgroundImage: `url(${data[answers].image})`}}>
                    <div className='PortraitContainer'>
                        <div className='Portrait'>
                        </div>
                    </div>
                    <div className='Explanation' style={{height: data[answers].height}}>
                        <p>{data[answers].explanation1}</p>
                        <p>{data[answers].explanation2}</p>
                        <p>{data[answers].explanation3}</p>
                    </div>
                    <button className= "Quizz-button" onClick={restart}>Recommencer le quizz</button>
                </div>
        }[questionOrExplanation]
            
        
        
    )
}


 
export default Quizz;