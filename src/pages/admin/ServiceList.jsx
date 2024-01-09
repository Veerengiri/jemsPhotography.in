// ServiceList.jsx

import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ServiceForm from './ServiceForm';
const serviceInfoArray = [
  {
    title: "Engagement Photography",
    text:
      "Immortalize your love story with enchanting engagement photography. Every glance and smile is elegantly captured, creating a visual narrative of your unique journey.",
    img: "../imgs/main-slider/6.jpg",
  },

  {
    title: "Wedding Photography",
    text:
      "Capture the magic of your special day with a blend of traditional elegance and contemporary style. Preserve every emotion and detail in timeless images.",
    img: "../imgs/main-slider/1.jpg",
  },
  {
    title: "Pre-Wedding Photography",
    text:
      "Celebrate the anticipation of your union with pre-wedding photography. Craft intimate portraits that reflect the excitement and romance preceding your wedding day.",
    img: "../imgs/main-slider/3.jpg",
  },
  {
    title: "Cinematography",
    text:
      "Elevate your wedding memories with cinematography services. We skillfully weave together moving visuals, emotions, and music, producing a captivating film that tells your unique love story.",
    img: "../imgs/main-slider/4.jpg",
  },
  {
    title: "Destination Wedding",
    text:
      "Transform your nuptials into an unforgettable adventure with destination wedding photography. We accompany you to the most scenic locations, ensuring a magical and picturesque experience.",
    img: "../imgs/main-slider/5.jpg",
  },
];
const ServiceList = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEdit = (service) => {
    setSelectedService(service);
    setOpenEditDialog(true);
  };

  const handleDelete = (service) => {
    // You can implement your delete logic here
    const confirmDelete = window.confirm(`Are you sure you want to delete ${service.title}?`);
    if (confirmDelete) {
      // Handle service deletion
      console.log(`Deleting service: ${service.title}`);
    }
  };

  const handleCloseEditDialog = () => {
    setSelectedService(null);
    setOpenEditDialog(false);
  };

  return (
    <div className='ser-list-cont'>
      <h2>Service List</h2>
      <div className="serr-flex">

      {serviceInfoArray.map((service, index) => (
          <div key={index} className="service-item">
        <div className="s-img-c">

          <img src={service.img} alt={service.title} className="service-imag" />
        </div>
        <div className="iif">

          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <Button variant="outlined" onClick={() => handleEdit(service)}>
            Edit
          </Button>
          <Button variant="outlined" color="error" onClick={() => handleDelete(service)}>
            Delete
          </Button>
        </div>
        </div>
        ))}

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog} maxWidth="md" fullWidth>
        <DialogTitle>Edit Service</DialogTitle>
        <DialogContent>
          {selectedService && <ServiceForm serviceToEdit={selectedService} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
            </div>
    </div>
  );
};

export default ServiceList;
