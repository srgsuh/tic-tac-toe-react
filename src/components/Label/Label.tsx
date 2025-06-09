import React from 'react';
import './Label.css';

interface LabelProps {
    text: string;
}

const Label = ({text}: LabelProps) => {
    return (
        <div className="label">
            {text}
        </div>
    );
}

export default Label;