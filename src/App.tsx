import { useService, useSignals } from "impact-app";
import { Counter } from "./editor-services/Counter";

function App() {
  const counter = useService(Counter);

  return useSignals(() => (
    <div>
      <h1 className="text-8xl text-red-500">Hello World!</h1>
    </div>
  ));
}

export default App;
