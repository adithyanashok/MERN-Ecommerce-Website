import React from 'react'
import styled from 'styled-components'
import './Slider.css'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const Arrow = styled.div`
height: 50px;
width: 50px;
background-color: rgb(248, 229, 229);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props)=> props.direction === "left" && "10px"};
right: ${(props)=> props.direction === "right" && "10px"};
cursor:pointer;
opacity:0.5;
margin: auto; 
` 
function Slider() { 
  return (
    <div className='slider-container' >
        <Arrow direction="left" >
            <ArrowLeftOutlinedIcon/>
        </Arrow> 
        <Arrow direction="right" > 
            <ArrowRightOutlinedIcon/> 
        </Arrow>
    </div>
  ) 
}

export default Slider