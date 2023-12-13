import "./App.css";
import { Footer, Header } from "./components/wrapper";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="h-[100vh] dark:bg-slate-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
