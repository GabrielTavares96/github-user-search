import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div>
        <button className="btn-icon">
            <p className="btn-text">{text}</p>
        </button>
    </div>
)

export default ButtonIcon;