"use client"
import { fetchBlockchainData } from "@/components/hook";
import { useEffect, useState } from "react";

export default function Home() {
  const [blockchainData, setBlockchainData] = useState(null);

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
    <div>
      {blockchainData ? (
        // Render the blockchain data as needed
        <pre>{JSON.stringify(blockchainData, null, 2)}</pre>
      ) : (
        <p>Loading blockchain data...</p>
      )}
    </div>
  );
}
