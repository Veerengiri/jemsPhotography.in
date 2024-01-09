// ServiceForm.jsx

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Form.css';

const ServiceForm = ({ serviceToEdit }) => {
  const [service, setService] = useState({
    serviceName: '',
    serviceDescription: '',
    poster: null,
    samplePhotos: [],
  });

  useEffect(() => {
    // If serviceToEdit prop is provided, update the form state with the service data
    if (serviceToEdit) {
      setService({
        serviceName: serviceToEdit.serviceName || '',
        serviceDescription: serviceToEdit.serviceDescription || '',
        poster: null, // You may want to handle poster editing separately
        samplePhotos: serviceToEdit.samplePhotos ? [...serviceToEdit.samplePhotos] : [],
      });
    }
  }, [serviceToEdit]);

  const handleInputChange = (field, value) => {
    setService({ ...service, [field]: value });
  };

  const handlePosterChange = (event) => {
    setService({ ...service, poster: event.target.files[0] });
  };

  const handleSamplePhotoChange = (event, index) => {
    const newSamplePhotos = [...service.samplePhotos];
    newSamplePhotos[index] = event.target.files[0];
    setService({ ...service, samplePhotos: newSamplePhotos });
  };

  const handleAddMorePhoto = () => {
    setService({ ...service, samplePhotos: [...service.samplePhotos, null] });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(service);
  };

  return (
    <Container>
      <Paper elevation={3} className="paper">
        <Typography variant="h5" gutterBottom>
          {serviceToEdit ? 'Edit Service' : 'Add New Service'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Service Name"
                fullWidth
                required
                value={service.serviceName}
                onChange={(e) => handleInputChange('serviceName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Service Description"
                fullWidth
                required
                multiline
                rows={4}
                value={service.serviceDescription}
                onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="posterInput">Select Poster Image</label>
              <input
                type="file"
                accept="image/*"
                id="posterInput"
                onChange={handlePosterChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Sample Photos
              </Typography>
              {service.samplePhotos.map((photo, index) => (
                <div key={index}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleSamplePhotoChange(e, index)}
                  />
                </div>
              ))}
              <Button
                variant="outlined"
                className="btn-m"
                startIcon={<AddIcon />}
                onClick={handleAddMorePhoto}
              >
                Add More Photo
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" className="btn-m" type="submit">
                {serviceToEdit ? 'Update' : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ServiceForm;
