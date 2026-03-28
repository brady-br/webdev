"use client"
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
import { useState, useEffect } from "react";

export default function ReduxExamples() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true));
  if (!isClient) return null;
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
};
