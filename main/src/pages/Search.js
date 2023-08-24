
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../layouts/PageTitle';
import { Link } from 'react-router-dom';
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';



const Search = () => {
  const [criteria, setCriteria] = useState('place');
  const [criteriaValue, setCriteriaValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_URL = "http://localhost:8080";

  const handleSearch = async () => {
  if(criteriaValue===""){
    setSearchResults([])
    alert( "Fields can not be empty" )
  }
  else
  {
    try{
      //Search API call
    const response = await axios.get(`${API_URL}/admin/${criteria}/${criteriaValue}`);
    if(response.status === 200){
      setSearchResults(response.data?.sort(
            (a, b) => b.tariff - a.tariff
          ));
    }
    }catch(err){
      setSearchResults([])
      return err
    }
  }

};
    
    const name='Package Search'
    return (

      <>
      <Card >
      <div className='search-container'>

        <CardContent>
        <br/>
          <PageTitle name={name} />
          <br/>
          
            <>
              <Grid 
                container 
                alignItems='center' 
                display={'flex'}
                justify='center'
                direction="row"
                columnSpacing={2}
              >
                <Grid width='100%'item xs={12} md={6}>
                  {/* Select criteria */}
                  <div>
                  <InputLabel id="search-criteria-type">Select Search Criteria</InputLabel>
        <Select
          labelId="search-criteria-type"
          id=""
          value={criteria}
          onChange={(e)=>{
            setCriteria(e.target.value);
            setSearchResults([]);
            setCriteriaValue('')
          }}
          label="Criteria"
        >
          <MenuItem value={'branchId'}>Branch ID</MenuItem>
          <MenuItem value={'branchName'}>Branch Name</MenuItem>
          <MenuItem value={'place'}>Place</MenuItem>
        </Select>
                  </div>
                  <TextField 
                    label={`Search for ${criteria}`}
                    required
                    variant='standard'
                    size='small'
                    sx={{width:'100%'}}
                    value={criteriaValue}
                    onChange={e=>{
                      if(!e.target.value) setSearchResults([]);
                      setCriteriaValue(e.target.value)
                    }}
                    autoFocus
                  />
                </Grid>
                <Grid ml={4}>
                <Button className='btn btn-primary' variant='contained' size='small' type='submit' onClick ={handleSearch}>Search</Button>
                </Grid>
                <Grid ml={3}>
                  <Link to="/add" className="btn btn-primary ">Add</Link>
                </Grid>
                <Grid ml={3}>
                  <Link to = "/update" className = "btn btn-primary" > Update </Link>
                </Grid>
           <div>    

    <table align='center'>
      <thead>
        <tr>
          <th>Branch Id</th>
          <th>Branch Name</th>
          <th>Place</th>
          <th>Tariff</th>
          <th>Website</th>
          <th>Contact</th>
          <th>Email</th>

        </tr>
      </thead>

      <tbody>
        {searchResults.map((sample) => (
          <tr key={sample.branchId}>
            <td>{sample.branchId}</td>
            <td>{sample.branchName}</td>
            <td>{sample.place} </td>
            <td>{sample.tariff} </td>
            <td>{sample.website}</td> 
            <td>{sample.contact}</td>
            <td>{sample.email}</td>

          </tr>
        ))}
        </tbody>
        </table>
        </div>
      
              </Grid></>
           
        </CardContent>
        </div>
      </Card>
      
      </>

    );
    

}

export default Search;


