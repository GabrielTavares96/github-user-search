import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ResultItem = ({text}:Props) => (
    <div className="result-info">
        <div className="result-text">{text}</div>
    </div>

);

export default ResultItem;