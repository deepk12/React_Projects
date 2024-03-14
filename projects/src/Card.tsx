

// import { useState, useEffect } from 'react';
// import './Card.css'; // Import CSS file for styling
// import { FaBitcoin } from "react-icons/fa";
// import { FaEthereum } from "react-icons/fa";
// import { SiRipple } from "react-icons/si";


// interface Pair {
//   symbol: string;
//   last: number;
//   open: number;
//   order: number;
//   currency1: string;
//   currency2: string;
//   status: string;
//   // Add more properties based on the API response structure
// }

// const CoinPriceTable = () => {
//   const [pairs, setPairs] = useState<Pair[]>([]);
//   const apiKey = 'BitdeltaExchange';
//   const symbols = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT']; // Example list of pair symbols
//   const apiEndpoint = 'https://api.bitdelta.com/api/v1/market/pairs?symbol=';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const pairsData = await Promise.all(
//           symbols.map(async (symbol) => {
//             const response = await fetch(`${apiEndpoint}${symbol}`, {
//               headers: {
//                 'X-API-Key': apiKey,
//               },
//             });

//             if (response.ok) {
//               const data = await response.json();
//               return data.data.spot[0];
//             } else {
//               console.error(`Failed to fetch data for symbol ${symbol}`);
//               return null;
//             }
//           })
//         );

//         setPairs(pairsData.filter((pair): pair is Pair => pair !== null));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [apiEndpoint, apiKey, symbols]);

//   return (
//     <div className="coin-price-table-container">
//       <h2>Coin Price Table</h2>
//       <div className="card-container">
//         {pairs.map((pair, index) => (
//           <div key={pair.symbol} className="card" style={{ backgroundColor: index === 0 ? 'lightblue' : index === 1 ? 'lightgreen' : 'lightyellow' }}>
//             <div className="currency-info">
//               {index === 0 && <FaBitcoin />}
//               {index === 1 && <FaEthereum />}
//               {index === 2 && <SiRipple />}
//               <h3>{pair.symbol}</h3>
//               <p>{pair.currency1}</p>
              
//             </div>
//             <h3 className="last-price">Price $ {pair.last}</h3>
//             {/* <h3 className="open-price">Open Price $ {pair.open}</h3> */}
//             <div className='separator'>
//               <div>
              
//                 {/* <p>Order: {pair.order}</p> */}
//                 <h3>Status: {pair.status}</h3>
                
//               </div>
              
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoinPriceTable;





import { useState, useEffect } from 'react';
import './Card.css'; // Import CSS file for styling
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { SiRipple } from 'react-icons/si';

interface Pair {
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
  const symbols = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT']; // Example list of pair symbols
  const apiEndpoint = 'https://api.bitdelta.com/api/v1/market/pairs?symbol=';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pairsData = await Promise.all(
          symbols.map(async (symbol) => {
            const response = await fetch(`${apiEndpoint}${symbol}`, {
              headers: {
                'X-API-Key': apiKey,
              },
            });

            if (response.ok) {
              const data = await response.json();
              return data.data.spot[0];
            } else {
              console.error(`Failed to fetch data for symbol ${symbol}`);
              return null;
            }
          })
        );

        setPairs(pairsData.filter((pair): pair is Pair => pair !== null));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint, apiKey, symbols]);

  return (
    <div> <h2>Coins Price Table </h2>
    <div className="coin-price-table-container">
      
      <div className="card-container">
        {pairs.map((pair, index) => {
          const profitLoss = pair.last - pair.open;
          const isProfit = profitLoss > 0;
          const isLoss = profitLoss < 0;

          return (
            <div key={pair.symbol} className="card" style={{ backgroundColor: index === 0 ? 'lightblue' : index === 1 ? 'lightgreen' : 'lightyellow' }}>
              <div className="currency-info">
                {index === 0 && <FaBitcoin />}
                {index === 1 && <FaEthereum />}
                {index === 2 && <SiRipple />}
                <h3>{pair.symbol}</h3>
                <p>{pair.currency1}</p>
              </div>
              <h2 className="last-price"> $ {pair.last}</h2>
              {/* <h3 className="open-price">Open Price $ {pair.open}</h3> */}
              {isProfit && <span className="profit">Profit ▲</span>}
              {isLoss && <span className="loss">Loss ▼</span>}
              <div className='separator'>
                <div>
                  {/* <p>Order: {pair.order}</p> */}
                  <h3>Status: {pair.status}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default CoinPriceTable;
