import React, {Component} from 'react';
import './Label.css';

interface LabelProps {
    text: string;
}

class Label extends Component<LabelProps> {
    render() {
        return (
            <div className="label">
                {this.props.text}
            </div>
        );
    }
}

export default Label;