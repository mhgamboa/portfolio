import logo from "./img/logo.svg";
import "./styles/App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Hero />
    </main>
  );
}

export default App;
