import React,{useState} from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material";
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Link } from 'react-router-dom';
import "../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  //handle menu click

  const handleDrawerToggleb = () =>{
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer =(
    <Box onClick = {handleDrawerToggleb} sx={{textAlign:'center'}}>

  <Typography color={'goldenrod'} variant = "h6" component="div" sx={{flexGrow:1}}>
                        <StorefrontTwoToneIcon/>
                        Cartify
                    </Typography>

                      <ul className="mobile-navigation">
                        <li>
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/Catergory"}>Catergory</Link>
                        </li>
                        <li>
                          <Link to={"/About"}>About</Link>
                        </li>
                        <li>
                          <Link to={"/Contact"}>Contact</Link>
                        </li>
                        
                      </ul>

                    

    </Box>
  )
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component={"nav"} sx={{bgcolor : "black"}}>
                <Toolbar>

                <IconButton 
                    color='inherit' 
                    aria-label='open drawer' 
                    edge="start" 
                    sx={{mr:2, display:{sm:"none"}}}

                    onClick={handleDrawerToggleb}
                >
            <MenuIcon/>
          </IconButton>
                    <Typography color={'goldenrod'} variant = "h6" component="div" sx={{flexGrow:1}}>
                        <StorefrontTwoToneIcon/>
                        Cartify
                    </Typography>
                    <Divider/>

                    <Box sx={{display:{ xs: "none", sm: "block"}}}>
                      <ul className="navigation-menu">
                        <li>
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/Catergory"}>Catergory</Link>
                        </li>
                        <li>
                          <Link to={"/About"}>About</Link>
                        </li>
                        <li>
                          <Link to={"/Contact"}>Contact</Link>
                        </li>
                        
                      </ul>

                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
              <Drawer variant="temporary" open ={mobileOpen}
              onClose={handleDrawerToggleb}
              sx={{display :{xs:'block', sm:'none', 
              "& .MuiDrawer-paper" :{
                boxSizing: "border-box",
                width:"240px",
              }}}}>
                {drawer}
              </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
