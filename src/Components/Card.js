
import { useState } from "react";
import { RxSlash,RxPlus,RxMinus } from "react-icons/rx";
import { TbAsterisk } from "react-icons/tb";


const Card = ()=>{
    // set both inputs from user in useState
    const [x,setX] = useState("");
    const [y,setY] = useState("");
    const [answer,setAnswer] = useState(0);

    function containsOnlyNumbers(inputString) {
        const numberRegex = /^[-+]?\d+(\.\d+)?$/;
        return numberRegex.test(inputString);
    }

    function validateUserInput(num1,num2){
        const errorMessage = document.getElementById('error');
        const resultMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success');
        const correctMessage = document.getElementById('result');
        if(num1 === '' || num2 === ''){
            successMessage.innerText = '';
            errorMessage.innerText = 'Error!'
            resultMessage.innerText = 'Input can not be Empty.'
            correctMessage.style.display = 'none';
            resultMessage.style.display = 'block';
            return false;
        }
        else if(!containsOnlyNumbers(num1) || !containsOnlyNumbers(num2)){
            successMessage.innerText = '';
            errorMessage.innerText = 'Error!'
            resultMessage.innerText = 'Invalid input'
            correctMessage.style.display = 'none';
            resultMessage.style.display = 'block';
            return false;
        }else if(Number(num1) < 0 || Number(num2) < 0){
            console.log("Negative Number");
            return true;
        }
        return true;
    }

    function sum(){
        if(validateUserInput(x,y)){
            let sum = Number(x)+Number(y);
            setAnswer(sum);
            document.getElementById('error').innerText = '';
            document.getElementById('success').innerText = 'Success!';
            document.getElementById('result').style.display = 'block'; 
            document.getElementById('error-message').style.display = 'none';
        }
    }

    function substract(){
        if(validateUserInput(x,y)){
            let sum = Number(x)-Number(y);
            setAnswer(sum);
            document.getElementById('error').innerText = '';
            document.getElementById('success').innerText = 'Success!';
            document.getElementById('result').style.display = 'block'; 
            document.getElementById('error-message').style.display = 'none';
        }
    }

    function multiplication(){
        if(validateUserInput(x,y)){
            let sum = Number(x)*Number(y);
            setAnswer(sum);
            document.getElementById('error').innerText = '';
            document.getElementById('success').innerText = 'Success!';
            document.getElementById('result').style.display = 'block'; 
            document.getElementById('error-message').style.display = 'none';
        }
    }

    function division(){
        if(validateUserInput(x,y)){
            let sum = Number(x)/Number(y);
            setAnswer(sum);
            document.getElementById('error').innerText = '';
            document.getElementById('success').innerText = 'Success!';
            document.getElementById('result').style.display = 'block'; 
            document.getElementById('error-message').style.display = 'none';
        }
    }

    return(
        <div className="card">
            <header>
                <h2>React Calculator</h2>
            </header>
            <div className="inputs">
                <input type="text" id="num1" placeholder="Num1" onChange={(event)=>{setX(event.target.value)}} />
                <input type="text" id="num2" placeholder="Num2" onChange={(event)=>{setY(event.target.value)}} />
            <div className="opeartion-btns">
                <button className="btn" onClick={sum}> <RxPlus /> </button>
                <button className="btn" onClick={substract} ><RxMinus /> </button>
                <button className="btn" onClick={multiplication}><TbAsterisk /></button>
                <button className="btn" onClick={division}><RxSlash /></button>
            </div>
            </div>
            <div className="messages">
                <p id="error" className="color red"></p>
                <p id="success" className="color blue"></p>
                <p id="error-message" className="message"></p>
                <p id="result" className="message">Result- {answer.toString()}</p>
            </div>
        </div>
    );
}

export default Card;