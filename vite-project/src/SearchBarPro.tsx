// Async Search Bar, not sure if it works yet bc the spotiy api calls aren't set up
// import React, { useState } from 'react';
// import axios from 'axios';
// import AsyncSelect from 'react-select/async';
// import { ColourOption, colourOptions } from './data';

// // User input state stuff
// const [inputValue, setInputValue] = useState('');
  
// const loadOptions = async (inputValue) => {
//   const response = await axios.get(
//     `https://api.spotify.com/v1/search?q=${inputValue}&type=album`
//   );
//   const albums = response.data.albums.items.map((album) => ({
//     value: album.id,
//     label: album.name,
//   }));
//   return albums;
// };

// // Export an async search bar
// export default () => (
//   <AsyncSelect
//   cacheOptions
//   defaultOptions
//   loadOptions={loadOptions}
//   onInputChange={(inputValue) => setInputValue(inputValue)}
//   />
// );

// NON-ASYNC SEARCH BAR
import React, { useState } from 'react';

import Select from 'react-select';
import { colourOptions } from './data';

export default () => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isClearable
        isSearchable
        name="color"
        placeholder="hello"
        classNames={{
          control: (state) =>
            state.isFocused ? 'border-red-600' : 'border-grey-300',
        }}
        options={colourOptions}
      />

      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
      </div>
    </>
  );
};