import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

export default function Filter() {
  const [filter, setFilter] = React.useState('None');

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value)
  };

  return (
    <>
      <FormControl style={{ background: '#ffffff', p: '5px 10px', display: 'flex', alignItems: 'center', width: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filter}
          onChange={handleChange}
          autoWidth
          label="Filter"
        >
          <MenuItem value="None">
            None
          </MenuItem>
          <MenuItem value={"alive"}>Alive</MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}