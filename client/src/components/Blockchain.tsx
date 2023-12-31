import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Block } from '../types/Block';

export default function Blockchain() {
  const [blockchainData, setBlockchainData] = useState([]);
  const isLogin = useAuth()



  useEffect(() => {
    async function fetchData() {
      await axios.get('http://localhost:8080')
        .then((blocks) => {
          setBlockchainData(blocks.data)
          

        }).catch((err) => {
          console.log(err)
        })
    }

    fetchData();
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 bg-indigo-800">
      {isLogin ? (
        blockchainData.map((item: Block) => (
          <div key={item.index} className="bg-white rounded-lg shadow-lg p-6 m-4">
            <h2 className="text-xl font-semibold">Block Index: {item.index}</h2>
            <h1 className="mt-1 text-sky-800 text-xl font-semibold">
              Transfer amount: {item.amount}
            </h1>
            <p className="mt-2 text-purple-700">Crypto Unit: {item.unit}</p>
            <p
              className="mt-2 text-blue-800"
              style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              previousHash: {item.previousHash}
            </p>
            <p
              className="mt-2 text-blue-800"
              style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              blockHash: {item.blockHash}
            </p>
            <p
              className="mt-2 text-blue-800"
              style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              timestamp: {item.timestamp}
            </p>
          </div>
        ))
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );

}
