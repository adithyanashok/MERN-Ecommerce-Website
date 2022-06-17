import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const Container = styled.div`
    display:flex;
    `
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;

`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${(props)=> props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    padding:0px;
    margin:0px;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right = styled.div`
    flex:1;
    padding:20px;
` 
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    height:50px;
`

function Footer() {
  return (
    <Container>
         <Left>
             <Logo>LAMA.</Logo>
             <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum possimus adipisci soluta perspiciatis, explicabo molestias nihil molestiae nam aperiam ipsam.</Desc>
             <SocialContainer>
                 <SocialIcon color="3B5999" >
                     <FacebookIcon/>
                 </SocialIcon>

                 <SocialIcon color="E4405F" >
                     <InstagramIcon/>
                 </SocialIcon>

                 <SocialIcon color="55ACEE" >
                     <TwitterIcon/>
                 </SocialIcon>
             </SocialContainer>
         </Left>
         <Center>
             <Title>Usefull Links</Title>
             <List>
             <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>

             </List>
         </Center>
         <Right>
             <Title>Contact</Title>
             <ContactItem>
               <RoomIcon/> 622 Dixie Path , South Tobinchester 98336
             </ContactItem>
             <ContactItem>
               <LocalPhoneIcon/> +91 445533885
             </ContactItem>
             <ContactItem>
            <EmailIcon/> Contact@lama.com
             </ContactItem>

             <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
         </Right>
    </Container>
  )
}

export default Footer