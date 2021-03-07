import React, { useContext } from 'react';
import { QualitiesQuantity } from '../../App';
import Qualities from '../Qualities/Qualities';

const Home = (props) => {
    const [count, setCount] = useContext(QualitiesQuantity)
    return (
        <div>
            <h2>Home Count : {count}</h2>
            <Qualities count={count}></Qualities>
        </div>
    );
};

export default Home;