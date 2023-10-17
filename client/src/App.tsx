import axios from 'axios';
import './App.css';
import Blockchain from './components/Blockchain';

function App() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") as string;
  return (
    <>
      <Blockchain></Blockchain>
    </>
  )
}

export default App
