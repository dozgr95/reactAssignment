import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Autocomplete
        id="account-search"
        options={accounts}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />
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
