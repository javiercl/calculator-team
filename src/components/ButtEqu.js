import React from 'react';

const Buttequ = ({values, setValues}) => {
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

    const handleClicEqu = (e)=>{
        e.preventDefault();
        if(values.value !== ''){
            const result_aux =
                values.operator ===  '*' ? (values.value_aux * parseFloat(values.value)):
                values.operator ===  '/' ? (values.value_aux / parseFloat(values.value)):
                values.operator ===  '+' ? (values.value_aux + parseFloat(values.value)):
                values.operator ===  '-' ? (values.value_aux - parseFloat(values.value)):0;
                setValues({
                    'result': result_aux,
                    'value': values.value,
                    'value_aux': result_aux,
                    'operator':'',
                    'number':1,    
                });
        };
    }
    return (
        <>
            <div class="fila2">
            <button class="btnRojo" key ="btnCle" onClick={handleClicCle}>CE</button>
            </div>
            <div class="fila2">
            <button class="btnAzul" key ="btnequ" onClick={handleClicEqu}>=</button>
            </div>
        </>
    );
};
export default Buttequ;
