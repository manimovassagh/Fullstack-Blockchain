import { useEffect, useState } from 'react';
import { fetchBlockchainData } from '../hooks/useBlockchain';
import useAuth from '../hooks/useAuth';

export default function Blockchain() {
    const [blockchainData, setBlockchainData] = useState([]);
const isLogin=useAuth()
    console.log(blockchainData);
  
    useEffect(() => {
      // Fetch the blockchain data when the component mounts
      async function fetchData() {
        const data = await fetchBlockchainData();
        if (data) {
          setBlockchainData(data);
        }
      }
  
      fetchData();
    }, []);
  console.log(blockchainData);
  


    return (
        <>
      {isLogin && blockchainData.length > 0 && <h1>You are logged in </h1> }
        </>
        );
  }
