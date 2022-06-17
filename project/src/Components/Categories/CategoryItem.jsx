import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    flex:1;
    margin:3px;
    position:relative;
`
const Image = styled.img`
 width:100%
`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
 `
 const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`
const Button = styled.button`
    border:none;
    padding:20px;
    background-color:white;
    color:gray;
    cursor:pointer;
`
function CategoryItem({item}) {
  return (
    <Container >
        <Image src={item.img} alt="" />
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem