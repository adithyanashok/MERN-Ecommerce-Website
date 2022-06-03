import React, { useState } from 'react'
import styled from 'styled-components'
import './Slider.css'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../data'
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
z-index:2;
` 
function Slider() { 
    const [Slide, setSlide] = useState(0)
    const handleClick = (direction) =>{

    }
  return (
    <div className='slider-container' >
        <Arrow direction="left" onClick={()=>handleClick("left")} >
            <ArrowLeftOutlinedIcon/> 
        </Arrow> 
        <div className="slide-wrapper">
                {sliderItems.map(item=>(

                    <div className="slide" bg={item.bg}>
                        <div className="img-container">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="info-container">
                            <h1 className="title">{item.title}</h1>
                            <p className="description">{item.desc}</p>
                            <button className='button'>SHOW NOW</button>
                        </div>
                    </div>
                    ))}
                
            
        </div>
        <Arrow direction="right" onClick={()=>handleClick("right")} > 
            <ArrowRightOutlinedIcon/> 
        </Arrow>
    </div>
  ) 
}

export default Slider