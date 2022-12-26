import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";

import { Button, CardActionArea, CardActions ,Slide,} from '@mui/material';
//data
import { rezomeDetails } from '../../utils/rezomeDetails'
export default function Cardrezome({loading}) {
    return (
        <>
        <Grid container spacing={2} xs={{mt:"10px"}}>
        {
            rezomeDetails.map((item , index) => (
                <Slide
                key={index}
                direction="up"
                in={loading}
                style={{
                    transitionDelay: loading ? `${index+1}99ms` : "0"
                }}
                >
                <Grid xs={12} sm={6} md={4} lg={4} sx={{mt:"10px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="190"
                            image={item.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {item.info}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            مشاهده بیشتر
                        </Button>
                    </CardActions>
                </Card>
        </Grid>
        </Slide>
            ))
        }
        </Grid>
</>
    );
}