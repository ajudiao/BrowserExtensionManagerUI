import { Extensions } from "./components/Extentions";
import { Filtered } from "./components/Filtered";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="py-8">
        <Header />
        <Filtered />
        <Extensions />
    </div>
  )
}
