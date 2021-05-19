import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
        className="App-logo"
        alt="logo" />
      </header>
      <main>
        <Dictionary />

      </main>
      <footer className="text-center">

        Coded by Sylwia Lis-Mila
      </footer>
    </div>
  );
}

export default App;
