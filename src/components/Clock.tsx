import React, { useEffect, useState } from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
};

const Clock = (props: Props) => {
  // let d=new Date()

  var {hours, minutes, seconds}=useClock()

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {hours}
      </h4>
      <span data-testid="clock-hours">
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
