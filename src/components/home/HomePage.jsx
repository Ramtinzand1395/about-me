import React, {useEffect, useState } from 'react'
import { red } from '@mui/material/colors';
import { Avatar, Typography, Box } from '@mui/material';
//assets
import backgroud from '../../assets/bg_01.jpeg'
import avatar from '../../assets/Polish_20210624_083533556.jpg'
//text
import TextTransition, { presets } from "react-text-transition";
//particles
import Particle from '../particles/Particle';
const HomePage = () => {
  const [index, setIndex] = useState(0);
  const strings = [
    " توسعه دهنده فول استک هستم",
    " فریلنسر هستم",
    " محتواساز دنیای برنامه نویسی هستم",
  ];
  useEffect(() => {
    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(stringsTransition);
    };
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroud})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Particle />
      <Avatar sx={{ width: 300, height: 300 }} alt="Avatar" src={avatar} />
      <Typography variant='h4' color={"white"} sx={{ mt: "20px" }}>
        رامتین زندخاوری هستم.
      </Typography>
      <Box component="div" sx={{ display: "flex", mt: "40px" }}>
        <Typography variant='h4' color={red[500]} sx={{ fontWeight: "bold", mx: "5px" }}>
          من یک
        </Typography>
        <TextTransition springConfig={presets.slow}>
          <Typography variant='h4' color={"white"} >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  )
}

export default HomePage