import React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import '../styles/ImgGrid.css'; // Import your CSS file



const ImgGrid = ({ itemData }) => {
  return (
    <Box sx={{ width: 500, minHeight: 829 }} className='imgGd'>
      <Masonry columns={3} spacing={2}>
        {itemData && itemData.map((item, index) => (
          <div key={index}>
       
            <img
              src={`${item}`}
              alt={`Image ${index + 1}`}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default ImgGrid;
