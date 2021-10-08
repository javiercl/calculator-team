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
        <>   <tr class="fila"></tr>
            <button className="btnNum" key="btn7" onClick={handleClic}>7</button>
            <button className="btnNum" key="btn8" onClick={handleClic}>8</button>
            <button className="btnNum" key="btn9" onClick={handleClic}>9</button>
            <tr class="fila"></tr>
            <button className="btnNum" key="btn4" onClick={handleClic}>4</button>
            <button className="btnNum" key="btn5" onClick={handleClic}>5</button>
            <button className="btnNum" key="btn6" onClick={handleClic}>6</button>
            <tr class="fila"></tr>
            <button className="btnNum" key="btn1" onClick={handleClic}>1</button>
            <button className="btnNum" key="btn2" onClick={handleClic}>2</button>
            <button className="btnNum" key="btn3" onClick={handleClic}>3</button>
            <tr class="fila"></tr>
            <button className="btnNum" key="btn0" onClick={handleClic}>0</button>
            <tr class="fila"></tr>
            
        </>
    )
};   

export default ButtNum;