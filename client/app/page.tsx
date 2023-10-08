"use client"
import { fetchBlockchainData } from "@/components/hook";
import { Block } from "@/types/Block";
import { useEffect, useState } from "react";

export default function Home() {
  const [blockchainData, setBlockchainData] = useState([]);

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

  // Render the blockchain data in your component
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 bg-indigo-800		">
      {blockchainData.map((item: Block) => (
        <div key={item.index} className="bg-white rounded-lg shadow-lg p-6 m-4">
          <h2 className="text-xl font-semibold">Block Index: {item.index}</h2>
          <h1 className="mt-1 text-sky-800	text-xl font-semibold">Transfer amount: {item.amount}</h1>
          <p className="mt-2 text-purple-700">Crypto Unit: {item.unit}</p>
          <p className="mt-2  text-blue-800 " style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>previousHash: {item.previousHash}</p>
          <p className="mt-2 text-blue-800" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>blockHash: {item.blockHash}</p>
          <p className="mt-2 text-blue-800" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            timestamp: {item.timestamp}
          </p>
        </div>
      ))}
    </div>
  );
}
