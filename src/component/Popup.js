import React from "react";
import { ScoreContext } from "../App";

export default function Popup() {
  const { value3 } = React.useContext(ScoreContext);
  const [open, setopen] = value3;
  return
  {
    open && (
      <div className="blackScreen">
        <div>

        </div>
      </div>
    );
  };
}
