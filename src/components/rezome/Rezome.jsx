import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import {
    Typography,
    Divider,
    Chip,
    Box,
    Slide,
    useTheme,
} from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
//component
import Cardrezome from "./Cradrezome";
import { grey } from "@mui/material/colors";
export default function Rezome() {
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
        return()=>{
            setLoading(false);
        }
    },[]);
    const theme = useTheme()
    return (
        <Box
        sx={{
            backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[600]}` :"whitesmoke" }`,
            mt: {
              xs: "0",
              sm: "0",
              md: "120px",
              lg: "120px",
              xl: "120px",
            },
          }}
        >
            <Helmet>
                <title>نمومه کار های من</title>
            </Helmet>
            <Slide
            direction="down"
            in={loading}
            style={{
                transitionDelay: loading ? "100ms" : "0"
            }}
            >
            <Divider
                textAlign="center"
                sx={{
                    "&::before, &::after": {
                        borderColor: "primary.main",
                    },
                }}
            >
                <Chip
                    color="primary"
                    icon={<SchoolRounded />}
                    label={
                        <Typography
                            variant="body1"
                            color="white"
                            sx={{ textAlign: "right" }}
                        >
                            نمونه کار های من
                        </Typography>
                    }
                    sx={{ p: 3 }}
                />
            </Divider>
            </Slide>

                    <Cardrezome loading={loading}/>
            </Box>
    );
}