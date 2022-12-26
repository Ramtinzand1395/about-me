import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import {
    Tooltip,
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Slide,
    useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

import DevInfo from "./Devinfo";
import Skill from "./Skills";
import { devSkills } from "../../utils/skills";
import { devWorkInfo } from "../../utils/details";
import { grey } from "@mui/material/colors";

const About = () => {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 82);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 73);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });

            setNodeJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 86);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 66);
            });
        }, 200);

        return () => {
            clearInterval(timer);
            setLoading(false);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
        devSkills;
const theme = useTheme()
    return (
        <Card
            sx={{
                marginTop:{
                    xs: "0",
                    sm: "0",
                    md: "110px",
                    lg: "110px",
                    xl: "110px", 
                },
                height: "100vh",
                backgroundColor:`${theme.palette.mode === "dark" ?  `${grey[600]}` :"whitesmoke" }`,
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>درباره من</title>
            </Helmet>
            <CardContent>
                <Divider
                    textAlign="left"
                    sx={{
                        "&::before, &::after": {
                            borderColor: "primary.main",
                        },
                    }}
                >
                    <Chip
                        color="primary"
                        icon={<CodeRounded />}
                        label={
                            <Typography
                                variant="body1"
                                color="white"
                                sx={{ textAlign: "right" }}
                            >
                                توسعه دهنده فول استک 
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
                <Grid container>
                <Slide
                direction="left"
                in={loading}
                style={{
                    transitionDelay: loading ? `500ms` : "0"
                }}
                >
                    <Grid xs={12} sm={12} md={9} lg={9}>
                        <DevInfo>
                            نام و نام خانوادگی : رامتین زندخاوری
                        </DevInfo>
                        <DevInfo>سن : 27</DevInfo>
                        <DevInfo>شهر : کرمان</DevInfo>
                        <DevInfo>
                            ramtinzand6@gmail.com : آدرس ایمیل
                        </DevInfo>
                        <DevInfo>شماره موبایل : 09138433385۲</DevInfo>
                    </Grid>
                    </Slide>
                    <Grid
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        sx={{
                            mt: 3,
                            display: {
                                xs: "none",
                                sm: "block",
                                md: "block",
                            },
                        }}
                    >
                        {devWorkInfo.map((item, index) => (
                             <Slide
                             key={index}
                             direction="left"
                             in={loading}
                             style={{
                                 transitionDelay: loading ? `${index+1}99ms` : "0"
                             }}
                             >
                            <Box
                                key={index}
                                component="div"
                                sx={{ width: 1, mb: 1 }}
                            >
                                <Tooltip
                                    title={item.tooltipTitle}
                                    placement="right"
                                    arrow
                                >
                                    <Chip
                                        icon={item.icon}
                                        label={
                                            <Typography
                                                variant="body1"
                                                color="whitesmoke"
                                            >
                                                <CountUp
                                                    start={0}
                                                    end={item.total}
                                                    duration={2}
                                                />
                                            </Typography>
                                        }
                                        sx={{
                                            p: 2,
                                            backgroundColor: item.color,
                                            width: 1,
                                        }}
                                    />
                                </Tooltip>
                            </Box>
                            </Slide>
                        ))}
                    </Grid>
                </Grid>
                <Divider
                    textAlign="center"
                    sx={{
                        "&::before, &::after": {
                            borderColor: "secondary.main",
                        },
                    }}
                >
                    <Chip
                        color="secondary"
                        icon={<SelfImprovementRounded />}
                        label={
                            <Typography
                                variant="body1"
                                color="white"
                                sx={{ textAlign: "center" }}
                            >
                                مهارت های من
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
                <Grid 
                container
                spacing={2}
                >
                    <Grid
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        >
                        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={html}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={javascript}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={reactJs}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}>
                        <Skill
                            name={nodeSkill.name}
                            icon={nodeSkill.icon}
                            color={nodeSkill.color}
                            value={nodeJs}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;
