import { Divider, Chip, Box, Typography, LinearProgress } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after": {
                        borderColor: `${color}.main`,
                    },
                    mt: 1,
                }}
            >
                <Chip
                    icon={
                        <Box component="img" src={icon} sx={{ height: 30 }} />
                    }
                    color={color}
                    label={name}
                    sx={{ color: "white", p: 3 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 10,
                            borderRadius: 2,
                        }}
                    />
                </Box>
                <Box >
                    <Chip
                        color={color}
                        label={
                            <Typography
                                variant="body1"
                                color="white"
                                sx={{ textAlign: "right" }}
                            >
                                {Math.round(value)} %
                            </Typography>
                        }
                    />
                </Box>
            </Box>
        </>
    );
};

export default Skill;
