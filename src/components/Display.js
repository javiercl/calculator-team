import react from 'react';

  
const Display = ({values}) => {
    return (
        <div className="display">

        <span>{values.result}</span>

        </div>
    );
}

export default Display
