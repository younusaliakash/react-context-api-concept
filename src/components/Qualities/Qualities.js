import React, { useContext } from 'react';
import { QualitiesQuantity } from '../../App';
import QualityDetalis from './QualityDetails/QualityDetalis';

const Qualities = () => {
    const [count,setCount] = useContext(QualitiesQuantity)
    return (
        <div>
            <h2>Qualities Component</h2>
            <QualityDetalis count={count}></QualityDetalis>
        </div>
    );
};

export default Qualities;