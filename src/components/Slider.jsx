import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img1 from '../assets/Frame427323083 (1).png'
import img2 from '../assets/Frame427323083.png'
import img3 from '../assets/Frame427323158 (1).png'
import img4 from '../assets/Frame427323158.png'
import img5 from '../assets/Frame427323083 (1).png'
import img6 from '../assets/Frame427323159 (1).png'
import img7 from '../assets/Frame427323159.png'
import img8 from '../assets/Frame427324416.png'
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const slides = [
  {
    title: 'Слайд 1',
    image: img1,
  },
  {
    title: 'Слайд 2',
    image: img2,
  },
  {
    title: 'Слайд 3',
    image: img3,
  },
  {
    title: 'Слайд 4',
    image: img4,
  },
  {
    title: 'Слайд 5',
    image: img5,
  },{
    title: 'Слайд 6',
    image: img6,
  },{
    title: 'Слайд 7',
    image: img7,
  },{
    title: 'Слайд 8',
    image: img8,
  },
];

const itemsPerPage = 3;

function CustomSlider() {
    const [activePage, setActivePage] = useState(0);
  
    const handleNextPage = () => {
      setActivePage((prev) => (prev === Math.ceil(slides.length / itemsPerPage) - 1 ? 0 : prev + 1));
    };
  
    const handlePrevPage = () => {
      setActivePage((prev) => (prev === 0 ? Math.ceil(slides.length / itemsPerPage) - 1 : prev - 1));
    };
  
    const transformX = `translateX(-${activePage * (100 / itemsPerPage)}%)`;
  
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginLeft: '-100px',
      background: "linear-gradient(to bottom, #EF7E3C 0%,#EF7E3C 30%, #EF7E3C 30%, #F7C64D 100%)"
    };
  
    const cardStyle = {
      background: 'rgba(255, 255, 255, 0)',
      
    };
  
    const sliderStyle = {
      display: 'flex',
      overflow: 'hidden',
    };
  
    const slideContainerStyle = {
      display: 'flex',
      transition: 'transform 0.3s ease',
      transform: transformX,
    };
  
    const slideStyle = {
      flex: '0 0 33.3333%',
      maxWidth: '53.3333%',
      padding: '8px',
      position: 'relative',
      transition: 'transform 0.5s ease',
      maxWidth: '330%',
      height:'auto'
    };
    const slideRotateStyle = {
      flex: '0 0 33.3333%',
      maxWidth: '43.3333%',
      padding: '8px',
      position: 'relative',
      transition: 'transform 0.5s ease',
      maxWidth: '30%',
      height:'300%'
    };
    
  
    const titleStyle = {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: 'white',
      zIndex: 1,
    };
  
    const rotatedSlideStyle = {
      ...slideStyle,
      transform: 'rotate(10deg)',
    };
  
    const rotatedLeftSlideStyle = {
      ...slideRotateStyle,
      transform: 'rotate(-10deg)',
      
      
    };
  
    const rotatedRightSlideStyle = {
      ...slideRotateStyle,
      transform: 'rotate(10deg)',
    };
  
    return (
      <div style={containerStyle}>
        <Container style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
                <div style={{display:'flex',paddingLeft:'20px'}}>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        <ArrowLeftIcon ></ArrowLeftIcon>
                    </Button>
                    <h2 style={{color:'white'}}>Academy</h2>

                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'flex-end' ,}}>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        skip
                    </Button>
                   
                </div>
                <div>

                </div>
            </Container>
        <Card style={cardStyle}>
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton onClick={handlePrevPage}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton onClick={handleNextPage}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <div style={sliderStyle}>
              <div style={slideContainerStyle}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    style={
                      index-1 === activePage
                        ? slideStyle
                        : index-1 >= activePage
                        ? rotatedRightSlideStyle
                        : index-1 <= activePage
                        ? rotatedLeftSlideStyle
                        :console.log('')
                    }
                  >
                    <Card style={{margin:'0 50px'}}>
                      <CardMedia component="img" alt={slide.title} height="450" image={slide.image} />
                      <CardContent style={titleStyle}>
                        <div>{slide.title}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default CustomSlider;