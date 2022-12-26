import { Typography, useTheme } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const DevInfo = ({ children }) => {
    const theme = useTheme()
    return (
        <Typography
            variant="body1"
            textAlign="left"
            sx={{ 
                mt: 2,
                color:`${theme.palette.mode === "dark" ?  "white" :"black" }`,
            }}
        >
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color:`${theme.palette.mode === "dark" ?  "white" :"black" }`,
                }}
            />
            {children}
        </Typography>
    );
};

export default DevInfo;
