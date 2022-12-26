import React from 'react'
import { IconButton, Typography, useMediaQuery } from '@mui/material'
import { GitHub, Instagram, WhatsApp, Telegram } from '@mui/icons-material'
import { Box } from '@mui/system'
import { blue , grey } from "@mui/material/colors";
import { RandomReveal } from 'react-random-reveal';
import { alphabetPersian } from '../../utils/alphabetPersian'
import { useTheme } from "@mui/material/styles";
const TopNav = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        flexDirection:`${isMdUp ? "row" : "column"}`,
        justifyContent: "space-around",
        backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[800]}` :"#008ccf" }`,
      }}>
        <Box sx={{
          p: "5px",
        }}>
          <IconButton
            aria-label='github'
            sx={{
              ":hover": {
                backgroundColor: "black",
              }
            }}>
            <a href='/'
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <GitHub
                sx={{
                  color: "white",
                  ":hover": {
                    color: "white",
                  }
                }} />
            </a>
          </IconButton>

          <IconButton
            aria-label='github'
            sx={{
              ":hover": {
                backgroundColor: "white",
              }
            }}>
            <a href='/'
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Instagram
                sx={{
                  color: "white",
                  ":hover": {
                    color: "red",
                  }
                }} />
            </a>
          </IconButton>
          <IconButton
            aria-label='github'
            sx={{
              ":hover": {
                backgroundColor: "green",
                color: "white",
              }
            }}>
            <a href='/' target={"_blank"} rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <WhatsApp
                color='primary'
                sx={{
                  color:"white",
                  ":hover": {
                    backgroundColor: "green",
                    color: "white",
                  }
                }} />
            </a>
          </IconButton>
          <IconButton
            aria-label='github'
            sx={{
              ":hover": {
                backgroundColor: blue[400],
                color: "white",
              }
            }}>
            <a href='/' target={"_blank"} rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Telegram
                color='primary'
                sx={{
                  color:"white",
                  ":hover": {
                    backgroundColor: blue[400],
                    color: "white",
                  }
                }} />
            </a>
          </IconButton>
        </Box>
            <Typography variant='body1' color="white">
          <RandomReveal isPlaying duration={5} characters="به وب سایت من خوش آمدید." characterSet={alphabetPersian} />
        </Typography>
      </Box>
    </>
  )
}

export default TopNav