import "./App.css";
import FunctionalCounter from "./components/Functional/Index";
import MyClass from "./components/MyClass/Index";

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Functional Component */}
      <FunctionalCounter />
      {/* Class Component */}
      <MyClass />
    </div>
  );
}

export default App;
