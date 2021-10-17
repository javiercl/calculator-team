import React, { useState } from 'react';

import Display from './Display';
import ButtNum from './ButtNum';
import ButtOpe from './ButtOpe';
import ButtEqu from './ButtEqu';


function App() {
  const [values, setValues] = useState({
    'result' : '0',   // valor que va en el display
    'value' : '',     // número actual
    'value_aux' : 0,  // valor 1 de una operacion
    'operator' : '',  // operador tecleado
    'number' : 0      // bandera indica si empezamos un nuevo número
  });
  
  return (
    <div class="calCuerpo">

      <Display values={values}/>
      <ButtNum values={values} setValues={setValues}/>
      <ButtOpe values={values} setValues={setValues}/>
      <ButtEqu values={values} setValues={setValues}/> 
      {console.log(values.operator)}
  
    </div>
  );
}

export default App;