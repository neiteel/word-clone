import React from "react";

function GuessForm({ handleSubmitGuess, gameStatus, guessTerm, setGuessTerm }) {
  // const [guessTerm, setGuessTerm] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(guessTerm);

    setGuessTerm("");
  }

  function handleChange(e) {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity("只能打英文字母而且要打 5 葛齁");
    } else {
      e.target.setCustomValidity("");
    }
    const value = e.target.value.toUpperCase();
    setGuessTerm(value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          id="guess-input"
          type="text"
          required
          value={guessTerm}
          onChange={handleChange}
          disabled={gameStatus !== "running"}
        />
      </form>
    </>
  );
}

export default GuessForm;
