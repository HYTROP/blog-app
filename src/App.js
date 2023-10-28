import "./App.css";
import { routes } from "./router/routes";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
