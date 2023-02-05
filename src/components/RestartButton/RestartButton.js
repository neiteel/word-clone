import React from "react";

import Button from "../Button";

function RestartButton({ handleRestart }) {
  return (
    <Button status="restart" onClick={handleRestart}>
      重玩
    </Button>
  );
}

export default RestartButton;
