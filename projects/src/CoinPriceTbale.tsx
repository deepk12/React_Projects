import React, { useState, useEffect } from 'react';
import './CoinPriceTable.css'; // Import CSS file for styling

interface Pair {
  id: string;
  symbol: string;
  last: number;
  open: number;
  order: number;
  currency1: string;
  currency2: string;
  status: string;
  // Add more properties based on the API response structure
}

const CoinPriceTable = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const apiKey = 'BitdeltaExchange';
  const apiEndpoint = 'https://api.bitdelta.com/api/v1/market/pairs';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          headers: {
            'X-API-Key': apiKey,
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Check if the data is an array before setting state
          if (Array.isArray(data.data.spot)) {
            setPairs(data.data.spot);
            console.log(pairs);
          }
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint, apiKey]);

  return (
    <div className="coin-price-table-container">
      <h2>Coin Price Table</h2>
      <table>
        <thead>
          <tr>
            <th>Pair</th>
            <th>Last Price</th>
            <th>Open</th>
            <th>Order</th>
            <th>Currency 1</th>
            <th>Currency 2</th>
            <th>Status</th>
            {/* Add more columns based on the API response structure */}
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair) => (
            <tr key={pair.id}>
              <td>{pair.symbol}</td>
              <td className={pair.last >= pair.open ? 'green' : 'red'}>{pair.last}</td>
              <td>{pair.open}</td>
              <td>{pair.order}</td>
              <td>{pair.currency1}</td>
              <td>{pair.currency2}</td>
              <td>{pair.status}</td>
              {/* Add more cells based on the API response structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinPriceTable;