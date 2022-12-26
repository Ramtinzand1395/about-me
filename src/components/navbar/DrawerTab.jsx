import { Tabs, Tab, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { tabsData } from './tabs/tabsData'
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
//component
import TopNav from "./TopNav";
const DrawerTab = ({ pageNumber, handlePageNumber, setDrawerOpen, handleMode }) => {
    const data = tabsData();
    const theme = useTheme();
    return (
        <>
            <TopNav />
            <Tabs
                orientation="vertical"
                variant="fullWidth"
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
                            my: 0.5,
                            mx: 1,
                            "&.MuiTab-root": {
                                minHeight: 50,
                            },
                        }}
                        onClick={() => setDrawerOpen(false)}
                        {...tab}
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
            </>
    );
};

export default DrawerTab;
