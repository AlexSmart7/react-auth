import "./App.css";
import Header from "@/components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@/routes/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
