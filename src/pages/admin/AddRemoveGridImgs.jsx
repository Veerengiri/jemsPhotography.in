import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Card, CardActions,
  CardMedia,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const itemData = [
  { img: "../imgs/main-slider/1.jpg" },
  { img: "../imgs/main-slider/5.jpg" },
  { img: "../imgs/prt-img/p8.jpg" },
  { img: "../imgs/prt-img/p1.jpg" },
  { img: "../imgs/prt-img/p6.jpg" },
  { img: "../imgs/main-slider/6.jpg" },
  { img: "../imgs/main-slider/3.jpg" },
  { img: "../imgs/prt-img/p3.jpg" },
  { img: "../imgs/prt-img/p4.jpg" },
  { img: "../imgs/main-slider/4.jpg" },
  { img: "../imgs/prt-img/p2.jpg" },
  { img: "../imgs/prt-img/p5.jpg" },
  { img: "../imgs/main-slider/2.jpg" },
  { img: "../imgs/prt-img/p7.jpg" },
  { img: "../imgs/prt-img/p9.jpg" },
  { img: "../imgs/main-slider/7.jpg" },
  { img: "../imgs/prt-img/p10.jpg" },
];
const serviceInfoArray = [
  {
    title: "Engagement Photography",
    text:
      "Immortalize your love story with enchanting engagement photography. Every glance and smile is elegantly captured, creating a visual narrative of your unique journey.",
    img: "./imgs/main-slider/6.jpg",

    imgData: itemData,
  },

  {
    title: "Wedding Photography",
    text:
      "Capture the magic of your special day with a blend of traditional elegance and contemporary style. Preserve every emotion and detail in timeless images.",
    img: "./imgs/main-slider/1.jpg",

    imgData: itemData,
  },
  {
    title: "Pre-Wedding Photography",
    text:
      "Celebrate the anticipation of your union with pre-wedding photography. Craft intimate portraits that reflect the excitement and romance preceding your wedding day.",
    img: "./imgs/main-slider/3.jpg",

    imgData: itemData,
  },
  {
    title: "Cinematography",
    text:
      "Elevate your wedding memories with cinematography services. We skillfully weave together moving visuals, emotions, and music, producing a captivating film that tells your unique love story.",
    img: "./imgs/main-slider/4.jpg",

    imgData: itemData,
  },
  {
    title: "Destination Wedding",
    text:
      "Transform your nuptials into an unforgettable adventure with destination wedding photography. We accompany you to the most scenic locations, ensuring a magical and picturesque experience.",
    img: "./imgs/main-slider/5.jpg",

    imgData: itemData,
  },
];const AddRemoveGridImgs = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedServiceData, setSelectedServiceData] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const handleServiceChange = (event) => {
    const selectedServiceKey = event.target.value;
    const selectedServiceInfo = serviceInfoArray.find(
      (service) => service.title === selectedServiceKey
    );

    setSelectedService(selectedServiceKey);
    setSelectedServiceData(selectedServiceInfo ? selectedServiceInfo.imgData : []);
  };

  const handleDeleteImage = (index) => {
    const updatedServiceData = [...selectedServiceData];
    updatedServiceData.splice(index, 1);
    setSelectedServiceData(updatedServiceData);
  };

  const handleNewImageChange = (event) => {
    setNewImages([...newImages, event.target.files[0]]);
  };

  const handleAddMoreImages = () => {
    setNewImages([...newImages, null]);
  };

  // Assuming you have a submit function to handle the form submission
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Selected Service Data:", selectedServiceData);
    console.log("New Images:", newImages);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '25px', marginTop: '25px' }}>
        <Typography variant="h5" gutterBottom>
          Add or Remove Grid Images
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel shrink id="service-select-label">
              Select Service
            </InputLabel>
            <Select
              labelId="service-select-label"
              id="service-select"
              value={selectedService}
              onChange={handleServiceChange}
            >
              {serviceInfoArray.map((service, index) => (
                <MenuItem key={index} value={service.title}>
                  {service.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Section for adding new images */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {newImages.map((image, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <label htmlFor={`newImageInput-${index}`}>Select New Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    id={`newImageInput-${index}`}
                    onChange={handleNewImageChange}
                  />
                </div>
              ))}
              <Button variant="outlined" onClick={handleAddMoreImages}>
                Add More Images
              </Button>
            </Grid>
          </Grid>

          {/* Section for managing active images */}
          <Grid container spacing={3}>
            {selectedServiceData.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={`img-${index}`}
                    height="140"
                    image={image.img}
                    style={{ objectFit: 'cover' }}
                  />
                  <CardActions style={{ justifyContent: 'center', background: 'crimson', color: "#fff" }}>
                    <div
                      aria-label="delete"
                      onClick={() => handleDeleteImage(index)}
                    >
                      <DeleteIcon />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddRemoveGridImgs;