import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#10564F",
    },
    secondary: {
      main: "#21B6A8",
    },
    Aqua:{
      main:"#30D9C8",
    },
    TiffanyBlue:{
      main:"#75E6DA",
    }
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },

 });
 export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#10564F",
    },
    secondary: {
      main: "#21B6A8",
    },
    Aqua:{
      main:"#30D9C8",
    },
    TiffanyBlue:{
      main:"#75E6DA",
    }
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          backgroundColor:"black",
          color:"white",
        }
      }
    },
    MuiTab:{
      styleOverrides:{
        root:{
          backgroundColor:"black",
          color:"black",
        }
      }
    }
  }
 });