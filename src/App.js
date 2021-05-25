import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>dic·tion·ar·y</h1>
         <hr />
         <h2> What word do you want to look up? </h2>
         <br />
      </header>
      <main>
        <Dictionary defaultKeyword="hallo" />

      </main>
      <footer className="App-foother">   
      <small> 
        <p>
              Coded by Sylwia Lis-Mila and is{""} 
               <a href="https://github.com/SylwiaLis-Mila/dictionary-project-sc" target="_blank"> open-sourced on GitHub </a>
               and hosted on Netlify
          </p>
        </small>    
               
      </footer>
     </div>

    </div>
  );
}
