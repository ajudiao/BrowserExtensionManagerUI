import { Filtered } from "./components/Filtered";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Filtered />
    </div>
  );
}
