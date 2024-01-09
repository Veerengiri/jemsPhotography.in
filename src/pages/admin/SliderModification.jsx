import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import DeleteIcon from '@mui/icons-material/Delete';

const SliderModification = () => {
  const mainSliderData = [
    { img: "../imgs/main-slider/1.jpg" },
    { img: "../imgs/main-slider/2.jpg" },
    { img: "../imgs/main-slider/3.jpg" },
    { img: "../imgs/main-slider/4.jpg" },
    { img: "../imgs/main-slider/5.jpg" },
    { img: "../imgs/main-slider/6.jpg" },
    { img: "../imgs/main-slider/7.jpg" },
  ];

  const portraitSliderData = [
    { img: "../imgs/prt-img/p1.jpg" },
    { img: "../imgs/prt-img/p2.jpg" },
    { img: "../imgs/prt-img/p3.jpg" },
    { img: "../imgs/prt-img/p4.jpg" },
    { img: "../imgs/prt-img/p5.jpg" },
    { img: "../imgs/prt-img/p6.jpg" },
    { img: "../imgs/prt-img/p7.jpg" },
    { img: "../imgs/prt-img/p8.jpg" },
    { img: "../imgs/prt-img/p9.jpg" },
    { img: "../imgs/prt-img/p10.jpg" },
  ];

  const [newImages, setNewImages] = useState([]);
  const [activeImages, setActiveImages] = useState(mainSliderData);
  const [selectedSlider, setSelectedSlider] = useState('mainSlider');

  const handleNewImageChange = (event) => {
    setNewImages([...newImages, event.target.files[0]]);
  };

  const handleAddMoreImages = () => {
    setNewImages([...newImages, null]);
  };

  const handleMoveRight = (index) => {
    const updatedActiveImages = [...activeImages];
    const removedImage = updatedActiveImages.splice(index, 1)[0];
    updatedActiveImages.splice(index + 1, 0, removedImage);
    setActiveImages(updatedActiveImages);
  };

  const handleMoveLeft = (index) => {
    const updatedActiveImages = [...activeImages];
    const removedImage = updatedActiveImages.splice(index, 1)[0];
    updatedActiveImages.splice(index - 1, 0, removedImage);
    setActiveImages(updatedActiveImages);
  };

  const handleDelete = (index) => {
    const updatedActiveImages = [...activeImages];
    updatedActiveImages.splice(index, 1);
    setActiveImages(updatedActiveImages);
  };

  const handleSliderChange = (event) => {
    setSelectedSlider(event.target.value);
    // Resetting newImages and activeImages based on the selected slider
    setNewImages([]);
    setActiveImages(event.target.value === 'mainSlider' ? mainSliderData : portraitSliderData);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Selected Slider:", selectedSlider);
    console.log("New Images:", newImages);
    console.log("Active Images:", activeImages);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Modify Slider
        </Typography>
        {/* Radio buttons for selecting slider type */}
        <RadioGroup
          row
          aria-label="slider-type"
          name="slider-type"
          value={selectedSlider}
          onChange={handleSliderChange}
        >
          <FormControlLabel value="mainSlider" control={<Radio />} label="Main Slider" />
          <FormControlLabel value="portraitSlider" control={<Radio />} label="Portrait Slider" />
        </RadioGroup>

        {/* Form for adding new images */}
        <form onSubmit={handleSubmit}>
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
              <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddMoreImages}>
                Add More Images
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Section for managing active images */}
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Active Images in Slider
          </Typography>
          <div id='modi-imgs'>
            {activeImages.map((image, index) => (
              <div key={index} className='seq-img'>
                <img
                  src={image.img}
                  alt={`img-${index}`}
                  style={{ width: '100%', height: 'auto'}}
                />
                <div className='modi-btns'>
                  <div className='m-left' onClick={() => handleMoveLeft(index)}>
                    <NavigateBeforeIcon />
                  </div>
                  <div className='m-del' onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </div>
                  <div className='m-rig' onClick={() => handleMoveRight(index)}>
                    <NavigateNextIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default SliderModification;
