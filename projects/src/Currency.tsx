// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

// interface CurrencyOption {
//   id: number;
//   name: string;
//   symbol: string;
//   usd_rate: number;
//   default: false;
// }

// export default function CurrencySelector() {
//   const [options, setOptions] = useState<CurrencyOption[]>([]);
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   useEffect(() => {
//     fetch('https://api.bitdelta.com/api/v1/public/fiat-currency')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch options');
//         }
//         return response.json();
//       })
//       .then(data => setOptions(data.data.currencies))
//       .catch(error => console.error('Error fetching options:', error));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedValue(event.target.value as string);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         width:'10%',
        
//         top: '8.5%',
//         right: '39%',
//         transform: 'translate(50%, -50%)',
//         padding: '50px',
//         zIndex: 999,
//         background: 'white',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       }}
//     >
//       <FormControl>
//         <InputLabel variant="standard" htmlFor="currency-selector">
//           Select Currency
//         </InputLabel>
//         <NativeSelect
//           value={selectedValue}
//           onChange={handleChange}
//           inputProps={{
//             name: 'currency',
//             id: 'currency-selector',
//           }}
//         >
//           {options.map(option => (
//             <option key={option.id} value={option.symbol}>
//               {option.name} - {option.symbol}
//             </option>
//           ))}
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

// interface CurrencyOption {
//   id: number;
//   name: string;
//   symbol: string;
//   usd_rate: number;
//   default: boolean;
// }

// const CurrencySelector: React.FC = () => {
//   const [options, setOptions] = useState<CurrencyOption[]>([]);
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   useEffect(() => {
//     fetch('https://api.bitdelta.com/api/v1/public/fiat-currency')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch options');
//         }
//         return response.json();
//       })
//       .then(data => setOptions(data.data.currencies))
//       .catch(error => console.error('Error fetching options:', error));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedValue(event.target.value as string);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
        
//         width: '45%',
//         height: '10%',
//         top: '9%',
//         left:'25px',
//         // right: '5%',
//         transform: 'translate(50%, -50%)',
//         padding: '50px',
//         zIndex: 999,
//         background: 'white',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       }}
//     >
//       <FormControl>
//         <InputLabel variant="standard" htmlFor="currency-selector">
//           Select Currency
//         </InputLabel>
//         <NativeSelect
//           value={selectedValue}
//           onChange={handleChange}
//           inputProps={{
//             name: 'currency',
//             id: 'currency-selector',
//           }}
//           style={{ height: '200px', overflowY: 'scroll' }}
//         >
//           {options.map(option => (
//             <option key={option.id} value={option.symbol}>
//               {option.name} - {option.symbol}
//             </option>
//           ))}
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// };

// export default CurrencySelector;




import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

interface CurrencyOption {
  id: number;
  name: string;
  symbol: string;
  usd_rate: number;
  default: boolean;
}

const CurrencySelector: React.FC = () => {
  const [options, setOptions] = useState<CurrencyOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    fetch('https://api.bitdelta.com/api/v1/public/fiat-currency')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch options');
        }
        return response.json();
      })
      .then(data => setOptions(data.data.currencies))
      .catch(error => console.error('Error fetching options:', error));
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '25%',
        height: '10%',
        top: '9%',
        left: '25px',
        transform: 'translate(50%, -50%)',
        padding: '50px',
        zIndex: 999,
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <FormControl>
        <InputLabel variant="standard" htmlFor="currency-selector">
          Select Currency
        </InputLabel>
        <NativeSelect
          value={selectedValue}
          onChange={handleChange}
          inputProps={{
            name: 'currency',
            id: 'currency-selector',
          }}
          style={{ height: '100px', overflowY: 'scroll' }}
        >
          {options.map(option => (
            <option key={option.id} value={option.symbol}>
              {option.name} - {option.symbol}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default CurrencySelector;





