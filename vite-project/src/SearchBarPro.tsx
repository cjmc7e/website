// Async Search Bar, not sure if it works yet bc the spotiy api calls aren't set up
import React, { useState } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async';

const SearchBar = () => {
  // User input state stuff
  const [inputValue, setInputValue] = useState('');

  const onChange = async (e) => {
    var client_id = "685fe7b45b254865ae76e5ef47b00cbf";
    var client_secret = "6bd5fb3f26784a069b771f68efa0e209";

    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post", // Specify the HTTP method
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded", // Specify the content type
      },
      data: "grant_type=client_credentials",
    };

    try {
      const response = await axios(authOptions); // Use axios to make the POST request

      if (response.status === 200) {
        var token = response.data.access_token;
        console.log(`auth success! this is token: ${token}`)
      }

      const inputValue = e; // Get the input value

      const searchResponse = await fetch(
        "https://api.spotify.com/v1/search?q=" + inputValue + "&type=album",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(`searchResponse: ${searchResponse}`);
      const data = await searchResponse.json();
      console.log(`data: ${data}`);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const loadOptions = async (inputValue) => {
    console.log(`input value: ${inputValue}`)
    const response = await onChange(inputValue);
    const albums = response.albums.items.map((album) => ({
      value: album.id,
      label: album.name,
    }));
    console.log(`${albums}`);
    return albums;
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      placeholder={`Search any album...`}
      onChange={onChange}
      loadOptions={loadOptions}
      onInputChange={(inputValue) => setInputValue(inputValue)}
    />
  );
};

export default SearchBar;





// NON-ASYNC SEARCH BAR
// import React, { useState } from 'react';

// import Select from 'react-select';
// import { colourOptions } from './data';

// export default () => {
//   return (
//     <>
//       <Select
//         className="basic-single"
//         classNamePrefix="select"
//         defaultValue={colourOptions[0]}
//         isClearable
//         isSearchable
//         name="color"
//         placeholder="hello"
//         classNames={{
//           control: (state) =>
//             state.isFocused ? 'border-red-600' : 'border-grey-300',
//         }}
//         options={colourOptions}
//       />

//       <div
//         style={{
//           color: 'hsl(0, 0%, 40%)',
//           display: 'inline-block',
//           fontSize: 12,
//           fontStyle: 'italic',
//           marginTop: '1em',
//         }}
//       >
//       </div>
//     </>
//   );
// };