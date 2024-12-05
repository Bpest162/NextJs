"use client"

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-5 w-96 mr-0-auto">
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};
