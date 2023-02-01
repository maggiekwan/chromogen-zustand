import { create } from "zustand";
import CodePreview from "./components/CodePreview";
import Details from "./components/Details";
import code from "./resources/code";
import { ChromogenZustandObserver } from "chromogen";
import { chromogenZustandMiddleware } from "chromogen";

const useStore = create(
  chromogenZustandMiddleware((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 }))
  }))
);

function Counter() {
  const { count, inc } = useStore();
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="main">
      <div className="code">
        <div className="code-container">
          <ChromogenZustandObserver />
          <CodePreview code={code} />
          <Counter />
        </div>
      </div>
      <Details />
    </div>
  );
}
