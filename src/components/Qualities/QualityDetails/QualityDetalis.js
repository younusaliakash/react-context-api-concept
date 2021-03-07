import React, { useContext } from 'react';
import { QualitiesQuantity } from '../../../App';

const QualityDetalis = () => {
    const countValue = useContext(QualitiesQuantity)
    return (
        <div>
            <h3>Quality</h3>
            <h6>Quantity : {countValue}</h6>
        </div>
    );
};

export default QualityDetalis;