//import React, {useState} from "react";
import React from 'react';

import {AppBar, Toolbar, Box, Typography, Menu, MenuItem} from "@mui/material"

const handleNavigation = (url) => {
    console.log(`Navigating to: ${url}`);

    window.location.assign(url);
};


const NavigationBar = () =>{

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseComeIn = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMouseLeave = () => {
        setAnchorEl(null);
    }
    return(
        <AppBar position="static" sx={{backgroundColor: "rgba(0,0,0,0.21)", padding: "1vh 2vw", minWidth:"100%", overflow:"hidden"}}>
            <Toolbar sx={{display: "flex", justifyContent:"center", padding: 0, margin: 0, flexWrap: "nowrap"}}>
                <Box component="ul" sx={{display: "flex", listStyleType:"none", margin:0, padding:0}}>

                <Typography
                    component="li"
                    sx={{margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/")}
                >
                    HOME
                </Typography>

                <Typography
                    component="li"
                    sx={{margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/about-us")}
                >
                    ABOUT US
                </Typography>

                <Typography
                    component="li"
                    sx={{margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/mission-statement")}
                >
                    MISSION STATEMENT
                </Typography>

                <Typography
                    component="li"
                    sx={{margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/history")}
                >
                    HISTORY
                </Typography>

                <Typography
                    component="li"
                    sx={{margin:"0 2vw",color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/sensei-darren-hunter")}
                >
                    SENSEI
                </Typography>

                <Typography
                    component="li"
                    sx={{ margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    onClick={()=> handleNavigation("https://shuyokandojo.com/schedule")}
                >
                    SCHEDULE
                </Typography>

                <Box component="ul" sx={{display: "flex", listStyleType:"none", margin:0, padding:0}}
                     onMouseEnter={handleMouseComeIn} /* handles mouse entering more area*/
                     onMouseLeave={handleMouseLeave} /* handles mouse leaving more area*/
                >
                    <Typography
                        component="li"
                        sx={{ margin:"0 2vw", color:"black", cursor:"pointer", fontSize:"1.2vw", fontFamily:"roboto, arial, sans-serif", whiteSpace:"wrap" }}
                    >
                        MORE
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMouseLeave}
                        >
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/programs")}> Programs </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/events")}> Events </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/karatedo")}> Karatedo </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/judo")}> Judo </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/jiu-jitsu")}> Jiu Jitsu </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/gallery")}> Gallery </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/video")}> Video </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/shop")}> Shop </MenuItem>
                        <MenuItem onClick={() => handleNavigation("https://shuyokandojo.com/contact-us")}> Contact Us </MenuItem>

                    </Menu>
                </Box>
            </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;