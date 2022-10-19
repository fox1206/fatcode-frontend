import React from 'react';
import Photo from './../../../public/coursedetails/Group404.jpg'
import {Avatar, Box, Container, Typography} from "@mui/material";
import Image from "next/image";

export const Center = () => {
    return (
        <Container sx={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#1C1D1E'}}>
            <Typography variant='h1' sx={{
                fontFamily: 'Verdana',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '64px',
                letterSpacing: 4,
                textAlign: 'center',
                color: '#FFFFFF',
            }}>
                Python для начинающих
            </Typography>
            <Box sx={{borderRadius: '50px'}}>
                <Image
                    src={Photo}
                    alt='photo'
                    width='500'
                    height='500'
                />
            </Box>
            <Box>
                <Typography
                    variant='subtitle1'
                    sx={{
                        fontFamily: 'Verdana',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        textAlign: 'center',
                        borderRadius: '40px',
                        bgcolor: '#69CB2D',
                        color: '#FFFFFF',
                    }}>
                    Михаил Омельченко
                </Typography>
                <Typography
                    variant='subtitle2'
                    sx={{
                        fontFamily: 'Verdana',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        color: '#FFFFFF',
                    }}>
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem
                    Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а
                    также реальное распределение букв и пробелов в абзацах.
                </Typography>
            </Box>
        </Container>
    );
};
