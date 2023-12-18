import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./navigation/nav";
import Board from "./Board/board";
import Rules from "./About_game/About_game";
import PlayGame from "./side_bar/playGame";
import About_Baghchal from "./About_Baghchal/About_Baghchal";
import About_game from "./About_game/About_game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
                <Route path="/" element={<Board />} />
                 <Route path="/About_game" element={<About_game />} />
                 <Route path="/About_Baghchal" element={<About_Baghchal />} />
                <Route path="/PlayGame" element={<PlayGame />} /> */
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
