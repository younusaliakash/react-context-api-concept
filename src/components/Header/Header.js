import React, { useContext, useState } from 'react';
import { QualitiesQuantity } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(QualitiesQuantity)
    return (
        <div>
            <h1>Header Count : {count}</h1>
            <button onClick={() => setCount(count +1)} >Increment</button>
        </div>
    );
};

export default Header;