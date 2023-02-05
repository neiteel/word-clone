import React from "react";

import Banner from "../Banner";
import RestartButton from "../RestartButton";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad">
      <p>
        錯ㄌ，答案4: <strong>{answer}</strong>
      </p>
      <RestartButton handleRestart={handleRestart} />
    </Banner>
  );
}

export default LostBanner;
