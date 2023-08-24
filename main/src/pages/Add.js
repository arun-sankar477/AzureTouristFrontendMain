import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Add = () => {
  const [formData, setFormData] = useState({
    branchName:'',
    place:'',
    website:'',
    contact:'',
    email:'',
    tariff:''
  })
  
  const API_URL = "http://localhost:8080";

  const handleChange = (key, value) => {
    setFormData(prevFormData=>{
      return {...prevFormData,[key]:value}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();


    // Form validation
    if (!formData.branchName || !formData.place || !formData.website || !formData.contact || !formData.email) {
      alert('Please fill in all the fields.');
      return;
    }
    if (!formData.website.includes('www')) {
      alert('Website should contain "www".');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Invalid email format.');
      return;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      alert('Contact number should be a 10-digit number.');
      return;
    }

    //call API
    try{
      const response = await axios.post(`${API_URL}/branch/add-places`, formData);
      if(response.status === 200 || response.status === 201){
        // Clear form fields
        setFormData({
          branchName:'',
          place:'',
          website:'',
          contact:'',
          email:'',
          tariff:''
        })
      }
    }catch(err){
      alert(err.message)
      return err;
    }
  };

  return (
    <div className="add-container">

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div>
        <h2>Add Company</h2>
        <Link to="/search" style={{ position: 'absolute', top: 80, right: 50 }}>

          Home

 </Link>
        <form style={{ maxWidth: '300px' }}>
          <label>
            Branch Name:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={formData.branchName} onChange={(e) => handleChange('branchName', e.target.value)} required />
          </label>
          <br />
          <label>
            Place:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={formData.place} onChange={(e) => handleChange('place', e.target.value)} required />
          </label>
          <br />
          <label>
            Website:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={formData.website} onChange={(e) => handleChange('website',e.target.value)} required />
          </label>
          <br />
          <label>
            Contact:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={formData.contact} onChange={(e) => handleChange('contact',e.target.value)} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" className="form-control" style={{ fontSize: '14px' }} value={formData.email} onChange={(e) => handleChange('email',e.target.value)} required />
          </label>
          <label>
            Tariff:
            <input type="text" className="form-control" style={{ fontSize: '14px' }} value={formData.tariff} onChange={(e) => handleChange('tariff',e.target.value)} required />
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Company</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Add;
