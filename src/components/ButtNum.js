import React from "react";

const ButtNum = ({values, setValues}) => {
    const handleClic = (e) => {
        e.preventDefault();
        if(!values.number){
        setValues({
            'result': values.value + e.target.textContent,
            'value': values.value + e.target.textContent,
            'value_aux': values.value_aux,
            'operator': values.operator,
            'number': values.number,
            });
        }else{
            setValues({
                'result': e.target.textContent,
                'value': e.target.textContent,
                'value_aux': values.value_aux,
                'operator': values.operator,
                'number': 0,
            
            });
        }
    }
    return (
        <>
        
        <div class="fila">
            <button class="btnNum" key="btn7" onClick={handleClic}>7</button>
            <button class="btnNum" key="btn8" onClick={handleClic}>8</button>
            <button class="btnNum" key="btn9" onClick={handleClic}>9</button>
        </div>
        <div class="fila">
            <button class="btnNum" key="btn4" onClick={handleClic}>4</button>
            <button class="btnNum" key="btn5" onClick={handleClic}>5</button>
            <button class="btnNum" key="btn6" onClick={handleClic}>6</button>
        </div>
        <div class="fila">
            <button class="btnNum" key="btn1" onClick={handleClic}>1</button>
            <button class="btnNum" key="btn2" onClick={handleClic}>2</button>
            <button class="btnNum" key="btn3" onClick={handleClic}>3</button>
        </div>
        <div class="fila">
            <button class="btnNum" key="btn0" onClick={handleClic}>0</button>
        </div>
       
        </>
    )
};   

export default ButtNum;