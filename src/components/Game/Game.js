import React from "react";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
import VirtualKeyboard from "../VirtualKeyboard";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
// let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  const [guessTerm, setGuessTerm] = React.useState("");

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  function handleSubmitGuess(guessTerm) {
    // const nextGuesses = {
    //   value: guessTerm,
    //   id: crypto.randomUUID(),
    // };

    // setGuesses([...guesses, nextGuesses]);

    const nextGuesses = [...guesses, guessTerm];
    setGuesses([...guesses, guessTerm]);

    if (guessTerm.toUpperCase() === answer) {
      // console.log("win");
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // console.log("lost");
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    setGameStatus("running");
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        validatedGuesses={validatedGuesses}
      />
      <GuessForm
        guessTerm={guessTerm}
        setGuessTerm={setGuessTerm}
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <VirtualKeyboard
        guessTerm={guessTerm}
        setGuessTerm={setGuessTerm}
        validatedGuesses={validatedGuesses}
      />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
