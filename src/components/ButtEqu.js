import React from 'react';

const Buttequ = ({values, setValues}) => {
    return (
        <div>
             <button onClick={(e)=>{
                e.preventDefault();
                let result=0;
                switch(values.operador){
                    case '+':
                        result=values.value+values.value_aux;
                    break;
                    case '-':
                        result=values.value-values.value_aux;
                    break;
                    case '*':
                        result=values.value*values.value_aux;
                    break;
                    case '/':
                        result=values.value/values.value_aux;
                    break;
                }

                setValues({
                    'result':result,
                    'value' : values.value,     // número actual
                    'value_aux' : values.value_aux,  // valor 1 de una operacion
                    'operator' : values.operador,  // operador tecleado
                    'number' : values.number  
                });
            }
            }>=</button>
        </div>
    );
}

export default Buttequ;