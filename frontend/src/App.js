import "./App.css";
import { Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="h-[100vh] dark:bg-slate-700">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
