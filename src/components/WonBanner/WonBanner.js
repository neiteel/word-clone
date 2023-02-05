import React from "react";

import Banner from "../Banner";
import RestartButton from "../RestartButton";

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy">
      <p>
        <strong>{`猜 ${numOfGuesses} 次贏`}</strong>
      </p>
      <RestartButton handleRestart={handleRestart} />
    </Banner>
  );
}

export default WonBanner;
