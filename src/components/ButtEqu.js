
import React from 'react';

const Buttequ = ({values, setValues}) => {

    const handleClickEqu = () =>{
        let result=0;
        switch(values.operador){
            case '+':
                result= parseFloat(values.value) + parseFloat(values.value_aux);
            break;
            case '-':
                result=parseFloat(values.value)-parseFloat(values.value_aux);
            break;
            case '*':
                result=parseFloat(values.value)*parseFloat(values.value_aux);
            break;
            case '/':
                result=parseFloat(values.value)/parseFloat(values.value_aux);
            break;
        }

        setValues({
            'result':result,
            'value' : values.value,     // número actual
            'value_aux' : values.value_aux,  // valor 1 de una operacion
            'operator' : values.operador,  // operador tecleado
            'number' : values.number  
        });

    const handleClicCle = (e)=>{
        e.preventDefault();
        setValues({
            'result':'0',
            'value' : '',     // número actual
            'value_aux' : 0,  // valor 1 de una operacion
            'operator' :  '',  // operador tecleado
            'number' : 0  
        });
    }
    return (
        <div>
             <button onClick={handleClickEqu}>=</button>

            <button key ="btnCle" onClick={handleClicEqu}>CE</button>

        </div>
    );
}


export default Buttequ;

