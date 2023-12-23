import React, { useState } from 'react';
import './App.css';

function App() {

  const [btn, setbtn] = useState(['', '', '', '', '', '', '', '', '',]);
  const [sign, setsign] = useState('X');
  const [winner, setwinner] = useState(null);

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const game = (no) => {
    if (btn[no] === '' && !winner) {
      const newBtn = [...btn];
      newBtn[no] = sign;
      setbtn(newBtn);
      checkWinner(newBtn, sign);
      setsign(sign === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (btn, player) => {
    for (const combo of winCombos) {
      const [a, b, c] = combo;
      if (btn[a] === player && btn[b] === player && btn[c] === player) {
        setwinner(player);
        return;
      }
    }

    if (!btn.includes('')) {
      // It's a draw
      setwinner('Draw');
    }
  };

  const resetGame = () => {
    setbtn(Array(9).fill(''));
    setsign('X');
    setwinner(null);
  };



  return (
    <div>
      <div className="btn_grp">
        <input type="button" value={btn[0]} onClick={() => { game(0) }} />
        <input type="button" value={btn[1]} onClick={() => { game(1) }} />
        <input type="button" value={btn[2]} onClick={() => { game(2) }} />
        <input type="button" value={btn[3]} onClick={() => { game(3) }} />
        <input type="button" value={btn[4]} onClick={() => { game(4) }} />
        <input type="button" value={btn[5]} onClick={() => { game(5) }} />
        <input type="button" value={btn[6]} onClick={() => { game(6) }} />
        <input type="button" value={btn[7]} onClick={() => { game(7) }} />
        <input type="button" value={btn[8]} onClick={() => { game(8) }} />
      </div>
      <h1>{winner}</h1>
    </div>
  );
}

export default App;