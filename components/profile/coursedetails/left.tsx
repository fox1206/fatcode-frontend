import React from 'react';
import {Box, Typography} from "@mui/material";

export const Left = () => {
    return (
        <Box sx={{mt: 5}}>
            <Box component='div' sx={{width: 592, border: '1px solid #000000', borderRadius: 40}}>
                <Typography
                     sx={{width: 230, borderRadius: '40px', bgcolor: '#1C1D1E', color: '#FFFFFF', textAlign: 'center'}}>
                    Для чего?
                </Typography>
                В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных
                инструментах
                для обработки данных, которые помогут вам самостоятельно проводить анализ.
            </Box>
            <Box sx={{display: 'flex', mt: 5}}>
                <Box component='div' sx={{mr: '20px', width: 133, height: 133, bgcolor: '#69CB2D', textAlign: 'center'}}>
                    25 монет
                </Box>
                <Box component='div' sx={{mr: '20px', width: 133, height: 133, bgcolor: '#69CB2D', textAlign: 'center'}}>
                    11 видно
                </Box>
                <Box component='div' sx={{mr: '20px', width: 133, height: 133, bgcolor: '#69CB2D', textAlign: 'center'}}>
                    46 упражнений
                </Box>
                <Box component='div' sx={{width: 133, height: 133, bgcolor: '#69CB2D', textAlign: 'center'}}>
                    4700 опыта
                </Box>
            </Box>
            <Box component='div' sx={{mt: 5, width: 592, border: '1px solid #000000', borderRadius: 40}}>
                <Typography
                    sx={{width: 230, borderRadius: '40px', bgcolor: '#1C1D1E', color: '#FFFFFF', textAlign: 'center'}}>
                    Описание курса
                </Typography>
                Python – это высокоуровневый язык программирования общего назначения, который становится
                популярным
                как при создании простых web-сайтов, так и при разработке сложных моделей машинного обучения.
                Компании по всему миру используют Python для решения большого объема самых разноплановых проблем
                и
                задач. В нашем курсе "Python для начинающих" вы узнаете о мощных способах хранения и управления
                данными, а также о полезных инструментах для обработки данных, которые помогут вам
                самостоятельно
                проводить анализ. Начните онлайн-курс по Python в DeepSkills прямо сейчас.
            </Box>
        </Box>
    );
};
