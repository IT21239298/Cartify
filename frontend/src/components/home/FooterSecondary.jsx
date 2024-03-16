import React from 'react'
import {Box ,Typography} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (

    <>
<Box
    sx={{textAlign:"center" ,bgcolor:"rgb(241 245 249)" , color: "rgb(147 197 253)",hover:"rgb(23 37 84)" , p:1}}>

<Box   
sx={{
    my:3,
    "& svg":{
        fontSize : "50px",
        cursor:"pointer",
        mr:2
    },
    "& svg:hover" : {
        color:'rgb(23 37 84)',
        transform:'translateX(5px)',
        transition:'all 400ms'
    }

}}>
    <InstagramIcon/>
    <FacebookIcon/>
    <TwitterIcon/>
</Box>

<Typography
    variant='h5'
    sx={{
        "@media (mx-width:600px)":{
            fontSize: "1rem",

        },
    }}
>cartyfiy@copy</Typography>

</Box>

 </>
  )
}

export default Footer