import { Button, Container } from '@mui/material';
import SideBar from '../components/SideBar';
import ActionAreaCard from './Card';
import img1 from '../assets/Frame427323083 (1).png'
import img2 from '../assets/Frame427323083.png'
import img3 from '../assets/Frame427323158 (1).png'
import img4 from '../assets/Frame427323158.png'
import img5 from '../assets/Frame427323083 (1).png'
import img6 from '../assets/Frame427323159 (1).png'
import img7 from '../assets/Frame427323159.png'
import img8 from '../assets/Frame427324416.png'
import Grid from '@mui/material/Grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Body() {
    return (
        <div style={{width:'80vw', margin:'20px'}}>
            <Container style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
                <div style={{display:'flex',paddingLeft:'20px'}}>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        <ArrowLeftIcon ></ArrowLeftIcon>
                    </Button>
                    <h2 style={{color:'white'}}>Academy</h2>

                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'flex-end' ,}}>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        All
                    </Button>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        Stocks
                    </Button>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        ETFs
                    </Button>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        Crypto
                    </Button>
                    <Button style={{backgroundColor:'transparent' ,color:'white'}}>
                        NFTs
                    </Button>
                </div>
                <div>

                </div>
            </Container>
            <Container style={{display:'flex',flexDirection:'column', alignItems:'flex-start', width:'100%',}}>
                <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', paddingLeft:'50px'}}>
                <h1 style={{color:'white'}}>New Playlist</h1>
                <Button style={{backgroundColor:'transparent' ,color:'white', marginRight:'50px'}}>
                    See all
                    <ArrowRightIcon></ArrowRightIcon>
                    
                </Button>
                </div>
                <Grid justifyContent={'center'} alignItems={'center'} marginTop={5} container spacing={5}>
                <ActionAreaCard src={img1}></ActionAreaCard>
                <ActionAreaCard src={img2}></ActionAreaCard>
                <ActionAreaCard src={img3}></ActionAreaCard>
                <ActionAreaCard src={img4}></ActionAreaCard>
                <ActionAreaCard src={img5}></ActionAreaCard>
                <ActionAreaCard src={img6}></ActionAreaCard>
                <ActionAreaCard src={img7}></ActionAreaCard>
                <ActionAreaCard src={img8}></ActionAreaCard>
                </Grid>


            </Container>
        </div>
    );
  }
  
  export default Body;