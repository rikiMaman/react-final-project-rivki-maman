// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'; // Add this line
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function FormPropsTextFields() {

//   const [readOnly, setReadOnly] = React.useState(true);
  

//   const handleChangeDetailsClick = () => {
//     // Toggle the read-only state
//     setReadOnly(!readOnly);
//     sendDataToServer();
//   };

//   const sendDataToServer = () => {
//     // Replace this with your actual data and server communication logic
//     const data = {
//       id: 123,
//       name: "Coding Academy",
//       address: "Rothschild 60 Tel Aviv",
//       phone: "03-1234567",
//       owner: "Yariv Katz",
//       logo: "logo",
//       description: "The best coding academy in the world",
//     }

//       // fetch('your-server-endpoint', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify(dataToSend),
//       // })

//       axios.post(`http://localhost:8787/businessData`, data)
//       .then(res => {
//         const r = res.data;
//         console.log(r)
//         setmassege(r)
//         setGood(true)
//       }).catch(err =>
//         setmassege(err.response.data)
//       )
//         .then(response => response.json())
//         .then(data => {
//           console.log('Success:', data);
//           // Handle success, if needed
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           // Handle error, if needed
//         });
//     };
  
    





//   return (
//     <>
    
//     {/* <Button onClick={handleChangeDetailsClick}>Change Personal Details</Button> */}
//     <span><button onClick={handleChangeDetailsClick} > Change Personal Details </button></span>

//     <Box id='AdminDetails'
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="פרטיים על בעל העסק"
//           InputProps={{
//             readOnly: true,
//           }}
//         // color='danger'
//         />
//         </div>
//         <div>
//         <TextField
//           id="filled-read-only-input"
//           defaultValue="id: 123"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           defaultValue="Coding Academy"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//               </div>
//               <div>
//         <TextField
//           id="filled-read-only-input"
//           // label="Read Only"
//           defaultValue="Rothschild 60 Tel Aviv"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />

//         <TextField
//           id="filled-read-only-input"
//           defaultValue="03-1234567"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//         </div>
//         <div>
//         <TextField
//           id="filled-read-only-input"
//           defaultValue="owner: Yariv Katz"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           defaultValue="logo"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//               </div>

//         <TextField
//           id="filled-read-only-input"
//           defaultValue="The best coding academy in the world"
//           InputProps={{
//             readOnly: readOnly,
//           }}
//           variant="filled"
//         />
//     </Box>
//     </>

//   );
// }




import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, userRole } from 'react';

export default function FormPropsTextFields({ userRole }) {
  const [readOnly, setReadOnly] = React.useState(true);
  const [formData, setFormData] = useState({
    id: 123,
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    logo: "logo",
    description: "The best coding academy in the world",
  });
  const [message, setMessage] = useState("");
  const [good, setGood] = useState(false);

  const handleInputChange = (fieldName, value) => {
    // Update the form data when an input field changes
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const sendDataToServer = () => {
    // Replace this with your actual data and server communication logic
    axios.post(`http://localhost:8787/businessData`, formData)
      .then(res => {
        const r = res.data;
        console.log(r);
        setMessage(r);
        setGood(true);
      })
      .catch(err => setMessage(err.response.data));
  };

  const handleChangeDetailsClick = () => {
    // Toggle the read-only state
    setReadOnly(!readOnly);
    if(!readOnly)
    {
      sendDataToServer();
    }
  };

  return (
    <>
    
      {/* <span><button onClick={handleChangeDetailsClick}> Change Personal Details </button></span> */}
      {userRole === 'admin' && (
        <span><button onClick={handleChangeDetailsClick}> Change Personal Details </button></span>
      )}

      <Box id='AdminDetails'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="פרטיים על בעל העסק"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-id"
            value={formData.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-owner"
            value={formData.owner}
            onChange={(e) => handleInputChange('owner', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-logo"
            value={formData.logo}
            onChange={(e) => handleInputChange('logo', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <TextField
          id="filled-read-only-input-description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          variant="filled"
          InputProps={{
            readOnly: readOnly,
          }}
        />
      </Box>
    </>
  );
}
