// Import axios or fetch
import axios from 'axios';

export async function fetchBlockchainData() {

    try {
        const response = await axios.get('http://localhost:8080');
        return response.data; 
        } catch (error) {
        console.error('Error fetching blockchain data:', error);
        return null;
    }
}