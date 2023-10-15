// Import axios or fetch
import axios from 'axios';

// Create a function to fetch the blockchain data
export async function fetchBlockchainData() {
    try {
        const response = await axios.get('http://localhost:8080'); // Replace with your server URL if needed
        return response.data; // Assuming the data is returned in JSON format
    } catch (error) {
        console.error('Error fetching blockchain data:', error);
        return null;
    }
}