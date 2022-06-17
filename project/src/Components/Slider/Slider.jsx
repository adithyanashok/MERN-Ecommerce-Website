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
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props)=>props.SlideIndex * -100 }vw ); 
`
function Slider() { 
    const [SlideIndex, setSlideIndex] = useState(0)
    console.log(SlideIndex)
    const handleClick = (direction) =>{
        if(direction==="left"){
            console.log("left");
            setSlideIndex(SlideIndex > 0 ? SlideIndex -1 : 2 );
        } else {
            setSlideIndex(SlideIndex < 2 ? SlideIndex +1 : 0);
        }
    }
  return (
    <div className='slider-container' >
        <Arrow direction="left" onClick={()=>handleClick("left")} >
            <ArrowLeftOutlinedIcon/> 
        </Arrow> 
        <Wrapper SlideIndex={SlideIndex} >
                {sliderItems.map((item)=>(
                     <div className="slide" bg={item.bg}>
                     <div className="img-container" key="{item1}">
                         <img src={item.img} alt="" />
                     </div>
                     <div className="info-container">
                         <h1 className="title" key="{item2}" >{item.title}</h1>
                         <p className="description" key="{item3}" >{item.desc}</p>
                         <button className='button'>SHOW NOW</button>
                     </div>
                 </div>
                   
                    ))} 
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")} > 
            <ArrowRightOutlinedIcon/> 
        </Arrow>
    </div>
  ) 
}

export default Slider