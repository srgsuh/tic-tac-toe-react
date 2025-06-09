import './App.css'
import TicTacToe from "./components/TicTacToe/TicTacToe";
import config from "./config/game.config";

function App() {
  return (
    <div>
      <TicTacToe size={config.size}/>
    </div>
  )
}

export default App
