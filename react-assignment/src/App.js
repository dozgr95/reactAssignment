import './App.css';
import AsyncAutoComplete from './AsyncAutoComplete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AsyncAutoComplete />
      </header>
    </div>
  );
}

const accounts = [
  {
    "login": "someWan",
    "id": 1
  },
  {
    "login": "anotherWan",
    "id": 2
  },
  {
    "login": "dozgr95",
    "id": 3
  },
]

export default App;
