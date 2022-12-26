import React, { useState } from 'react'
import { Divider, Drawer, Fab, Box, useMediaQuery } from '@mui/material'
import { MenuRounded } from "@mui/icons-material";
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/material/styles";
//component
import TopNav from './TopNav'
//tabs
import DrawerTab from './DrawerTab';
import HeaderTabs from './tabs/HeaderTabs';
const Navbar = ({ pageNumber, handlePageNumber , handleMode }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (

    <>
      <nav style={{ backgroundColor:`${isMdUp ?  "#008ccf" : "transparent"}`, position: "absolute", width: "100%" , zIndex:"100" }}>
        {/**top */}
        {
          isMdUp
            ?
            <TopNav />
            :
            ""
        }
        <Divider color='white' variant='fullWidth' />
        {/**navbar */}
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Fab
            color="primary"
            aria-label="Sidebar"
            size="small"
            sx={{ m: 2 }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuRounded />
          </Fab>
        </Box>
        <Box
          sx={{
            backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[800]}` :"#008ccf" }`,
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <HeaderTabs pageNumber={pageNumber} handlePageNumber={handlePageNumber} handleMode={handleMode} />
        </Box>
        <Drawer
          open={drawerOpen}
          variant="temporary"
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 300,
              backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[800]}` :"#008ccf" }`,
            },
          }}
        >
          {/* Drawer */}
          <DrawerTab pageNumber={pageNumber} handlePageNumber={handlePageNumber} setDrawerOpen={setDrawerOpen} handleMode={handleMode} />
        </Drawer>
      </nav>
    </>
  )
}

export default Navbar