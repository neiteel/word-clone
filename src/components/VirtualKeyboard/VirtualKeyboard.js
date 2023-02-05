import React from "react";

const Rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function VirtualKeyboard({
  validatedGuesses,
  handleSubmit,
  guessTerm,
  setGuessTerm,
}) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="virtual-keyboard">
      {Rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map((letter) => (
            <input
              className={` ${statusByLetter[letter]}`}
              key={letter}
              type="button"
              value={letter}
              onClick={(e) => {
                if (guessTerm.length >= 5) return;
                const nextGuessTerm = guessTerm + e.target.value;
                setGuessTerm(nextGuessTerm);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
