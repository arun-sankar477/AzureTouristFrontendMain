import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Update = () => {
  const [formData, setFormData] = useState({
    companyId:'',
    place:'',
    tariffValue:''
  })
  const [error, setError] = useState('');
  const API_URL = "http://localhost:8080";

  const handleChange = (key, value)=>{
    setFormData(prevformData=>{
      return {...prevformData, [key]:value}
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Reset error
    setError('');

    // Check if the company exists
    if (!formData.companyId || !formData.place) {
      setError('Please enter all fields');
      return;
    }

    // Validate and convert tariff values
    const updatedTariffValue = parseInt(formData.tariffValue);

    if (isNaN(updatedTariffValue) || updatedTariffValue < 50000 || updatedTariffValue > 100000) {
      setError('Invalid tariff value');
      return;
    }

    // Update API call
    try{
      const response = await axios.put(`${API_URL}/branch/update-tariff/${formData.companyId}`, {
        place:formData.place,
        tariff:formData.tariffValue
      });
      if(response.status === 200){
        // Clear the form inputs
        setFormData({
          companyId:'',
          place:'',
          tariffValue:''
        })
      }
    }catch(err){
      return err
    }
  
  };



  return (
    <div>
          <div className="update-container">

      <h2>Update Tariff Values</h2>
      <Link to="/search" style={{ position: 'absolute', top: 80, right: 50 }}>

          Home

 </Link>
      <form>
        <input
          type="text"
          value={formData.companyId}
          onChange={(e) => handleChange('companyId',e.target.value)}
          placeholder="Enter company branch Id"
        />
        <div>
        <input
          type="text"
          value={formData.place}
          onChange={(e) => handleChange('place',e.target.value)}
          placeholder="Enter Place Name"
        />
        </div>
        <div>
          <label>Tariff</label>
          <input
            type="number"
            value={formData.tariffValue}
            onChange={(e) => handleChange('tariffValue',e.target.value)}
            min="50000"
            max="100000"
            required
          />
        </div>
        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
    </div>
  );

};

export default Update;
