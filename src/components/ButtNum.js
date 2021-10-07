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
            <button key="btn7" onClick={handleClic}>7</button>
            <button key="btn8" onClick={handleClic}>8</button>
            <button key="btn9" onClick={handleClic}>9</button>
            <button key="btn4" onClick={handleClic}>4</button>
            <button key="btn5" onClick={handleClic}>5</button>
            <button key="btn6" onClick={handleClic}>6</button>
            <button key="btn1" onClick={handleClic}>1</button>
            <button key="btn2" onClick={handleClic}>2</button>
            <button key="btn3" onClick={handleClic}>3</button>
            <button key="btn0" onClick={handleClic}>0</button>
        </>
    )
};   

export default ButtNum;