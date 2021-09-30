import './App.css';
import { Button, Rating } from '@mui/material';
import News from './components/News/News';

function App() {

  return (
    <div className="App">
      <Button variant="contained">My First Button</Button>
      <br />
      <Rating name="read-only" value={5} readOnly />
      <div className="App">
      Welcome To our Daily News Paper.
      <News></News>
    </div>
    </div>
  );
}

export default App;
