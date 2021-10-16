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
 <div class="fila">
 <button class="btnVerde" key="btnmas" onClick={handleClic}>+</button>
 <button class="btnVerde" key="btnmen" onClick={handleClic}>-</button>
 <button class="btnVerde" key="btnmul" onClick={handleClic}>*</button>
 <button class="btnVerde" key="btndiv" onClick={handleClic}>/</button>
 </div>
 )
};

export default ButtOpe;