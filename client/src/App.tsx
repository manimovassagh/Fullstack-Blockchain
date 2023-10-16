import axios from 'axios';
import './App.css';
import Blockchain from './components/Blockchain';
import LoginButton from './components/LoginButton';

function App() {


  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") as string;

  return (
    <>
      <LoginButton></LoginButton>
      <Blockchain></Blockchain>
    </>
  )
}

export default App
