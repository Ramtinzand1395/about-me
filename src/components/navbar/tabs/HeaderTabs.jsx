import { Tabs, Tab, Button , Box } from "@mui/material";
import {tabsData} from './tabsData';
import { useTheme } from "@mui/material/styles";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
const HeaderTabs = ({pageNumber, handlePageNumber , handleMode}) => {
    const data = tabsData();
    const theme = useTheme();
    return (
        <Box
         sx={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
        }}
         >
        <Tabs
        orientation="horizontal"
        variant="standard"
        value={pageNumber}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handlePageNumber}
    >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[300]}` :"white" }`,
                        borderRadius: 2,
                        my: 1,
                        mx: 1,
                        "&.MuiTab-root": {
                            minHeight: 50,
                        },
                        fontFamily:"vazir"
                    }}
                />
            ))}
        </Tabs>
        <Button onClick={handleMode} variant="contained" color="primary">
        {theme.palette.mode === "dark" ? (
                    <WbSunnyOutlined sx={{ mr: 1 }} />
                ) : (
                    <NightlightOutlined sx={{ mr: 1 }} />
                )}
                {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
        </Button>
        </Box>
    );
};

export default HeaderTabs;
