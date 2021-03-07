import React, { useContext } from 'react';
import { QualitiesQuantity } from '../../App';

const Shipment = () => {
    const [count,setCount] =useContext(QualitiesQuantity)
    return (
        <div>
            <button onClick={()=> setCount(count +1)}>Add Count</button>
        </div>
    );
};

export default Shipment;