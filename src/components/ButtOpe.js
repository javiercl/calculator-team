import React from "react";

const ButtOpe =  ({values, setValues}) =>{

const handleClic = (e) => {
    e.preventDefault();

    if(values.value !== ''){
        if(!values.number){
            setValues({
                'result': values.result,
                'value': values.value,
                'value_aux': parseFloat(values.value),
                'operator': e.target.textContent,
                'number': 1,  
            });
        };
        if(values.number){
            const result_aux =
            values.operator ===  '*' ? (values.value_aux * parseFloat(values.value)):
            values.operator ===  '/' ? (values.value_aux / parseFloat(values.value)):
            values.operator ===  '+' ? (values.value_aux + parseFloat(values.value)):
            values.operator ===  '-' ? (values.value_aux - parseFloat(values.value)):0;

            setValues({
                'result': result_aux,
                'value': values.value,
                'value_aux': result_aux,
                'operator': e.target.textContent,
                'number': 1,    
            });
        };
    };
}

return (
 <>
 <button key="btnmas" className="btnVerde" onClick={handleClic}>+</button>
 <button key="btnmen" className="btnVerde" onClick={handleClic}>-</button>
 <button key="btnmul" className="btnVerde" onClick={handleClic}>*</button>
 <button key="btndiv" className="btnVerde" onClick={handleClic}>/</button>
 </>
 )
};

export default ButtOpe;