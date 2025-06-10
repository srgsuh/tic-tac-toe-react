import "./GameLabel.module.css";

interface GameLabelProps {
    text: string;
}

const GameLabel = ({text}: GameLabelProps) => {
    return (
        <div className="label">
            {text}
        </div>
    );
}

export default GameLabel;