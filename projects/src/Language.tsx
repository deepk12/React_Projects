// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

// interface LanguageOption {
//   lang: string;
//   slug: string;
//   default: boolean;
//   rtl: boolean;
// }

// export default function LanguageSelector() {
//   const [options, setOptions] = useState<LanguageOption[]>([]);
//   const [selectedValue, setSelectedValue] = useState<string>('');
  

//   useEffect(() => {
//     fetch('https://api-dev.bitdelta.com/api/v1/public/lang')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch options');
//         }
//         return response.json();
//       })
//       .then(data => setOptions(data.data))
//       .catch(error => console.error('Error fetching options:', error));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedValue(event.target.value as string);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         width:'8.5%',
//         height:'10%',
//         top: '9%',
//         right: '50%',
//        transform: 'translateX(50%,-50%)',
//         padding: '50px',
//         zIndex: 999,
//         background: 'white',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       }}
//     >
//       <FormControl>
//         <InputLabel variant="standard" htmlFor="language-selector">
//           Select Language
//         </InputLabel>
//         <NativeSelect
//           value={selectedValue}
//           onChange={handleChange}
//           inputProps={{
//             name: 'language',
//             id: 'language-selector',
//           }}
//         >
//           {options.map(option => (
//             <option key={option.slug} value={option.slug}>
//               {option.lang}
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

// interface LanguageOption {
//   lang: string;
//   slug: string;
//   default: boolean;
//   rtl: boolean;
// }

// const LanguageSelector: React.FC = () => {
//   const [options, setOptions] = useState<LanguageOption[]>([]);
//   const [selectedValue, setSelectedValue] = useState<string>('');

//   useEffect(() => {
//     fetch('https://api-dev.bitdelta.com/api/v1/public/lang')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch options');
//         }
//         return response.json();
//       })
//       .then(data => setOptions(data.data))
//       .catch(error => console.error('Error fetching options:', error));
//   }, []);

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedValue(event.target.value as string);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         width: '8%',
//         height: '10%',
//         top: '9%',
//         right: '50%',
//         transform: 'translateX(50%,-50%)',
//         padding: '50px',
//         zIndex: 999,
//         background: 'white',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       }}
//     >
//       <FormControl>
//         <InputLabel variant="standard" htmlFor="language-selector">
//           Select Language
//         </InputLabel>
//         <NativeSelect
//           value={selectedValue}
//           onChange={handleChange}
//           inputProps={{
//             name: 'language',
//             id: 'language-selector',
//           }}
//           style={{ height: '200px', overflowY: 'scroll' }}
//         >
//           {options.map(option => (
//             <option key={option.slug} value={option.slug}>
//               {option.lang}
//             </option>
//           ))}
//         </NativeSelect>
//       </FormControl>
//     </Box>
//   );
// };

// export default LanguageSelector;



import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

interface LanguageOption {
  lang: string;
  slug: string;
  default: boolean;
  rtl: boolean;
}

const LanguageSelector: React.FC = () => {
  const [options, setOptions] = useState<LanguageOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    fetch('https://api-dev.bitdelta.com/api/v1/public/lang')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch options');
        }
        return response.json();
      })
      .then(data => setOptions(data.data))
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
        right: '50%',
        transform: 'translateX(50%,-50%)',
        padding: '50px',
        zIndex: 999,
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <FormControl>
        <InputLabel variant="standard" htmlFor="language-selector">
          Select Language
        </InputLabel>
        <NativeSelect
          value={selectedValue}
          onChange={handleChange}
          inputProps={{
            name: 'language',
            id: 'language-selector',
          }}
          style={{ height: '100px', overflowY: 'scroll' }}
        >
          {options.map(option => (
            <option key={option.slug} value={option.slug}>
              {option.lang}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector;
