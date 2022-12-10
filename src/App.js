import React from 'react'
import './App.css'
import Box from './components/Box'
import data from './data/data'

function App() {

  const [squares, setSquares] = React.useState(data);

  const toggle = (id) => {
    setSquares((prevSquares) => {
      // const newSquares = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on
      //     }
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }
      // return newSquares;

      return prevSquares.map((square) => {
        return (
          square.id === id ? { ...square, on: !square.on } : square
        )
      })
    })
  }

  const boxes = squares.map((square) => {
    return <Box
      key={square.id}
      on={square.on}
      id={square.id}
      toggle={toggle}
    />
  })

  console.log("App.js Rendered");

  return (
    <div>
      {boxes}
    </div>
  );
}

export default App;
