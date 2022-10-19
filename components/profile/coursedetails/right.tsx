import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Link, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Right = () => {
    return (
        <Box sx={{width: '1088px'}}>
            <Link sx={{bgcolor: '#69CB2D', borderRadius: '40px', p: '10px', textDecoration: 'none', cursor: 'pointer'}}>
                Начать обучение
            </Link>
            <Typography
                sx={{
                    mt: '20px',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    fontSize: '38px',
                    textAlign: 'left',
                    color: '#000000',
                }}>
                1. Основы Python
            </Typography>
            <Typography
                sx={{
                    mt: '20px',
                    mb: '15px',
                    fontFamily: 'Verdana',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '20px',
                    textAlign: 'left',
                    color: '#000000',
                }}>
                Введение в основные понятия языка Python. Узнайте, как использовать Python в интерактивном
                режиме и
                с помощью скрипта. Создайте свои первые переменные и познакомьтесь с основными типами данных
                Python.
            </Typography>
            <Accordion sx={{border: '1px solid #1C1D1E', borderRadius: '40px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            color: '#1C1D1E',
                            textAlign: 'center',
                        }}>
                        Содержание раздела
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontFamily: 'Verdana',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            color: '#1C1D1E',
                            textAlign: 'left',
                        }}>
                        Функции
                    </Typography>
                    <Typography>
                        Знакомые функции
                    </Typography>
                    <Typography>
                        Помогите
                    </Typography>
                    <Typography>
                        Несколько аргументов
                    </Typography>
                    <Typography>
                        Методы
                    </Typography>
                    <Typography>
                        Методы строк
                    </Typography>
                    <Typography>
                        Методы списка
                    </Typography>
                    <Typography>
                        Методы списка 2
                    </Typography>
                    <Typography>
                        Пакеты
                    </Typography>
                    <Typography>
                        Импорт пакетов
                    </Typography>
                    <Typography>
                        Частичный импорт
                    </Typography>
                    <Typography>
                        Различные способы импорта
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography>
                2. Списки Python
                Изучите хранение, доступ и управление данными в списках. Сделайте первый шаг к эффективной
                работе с
                большими объемами данных.
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Содержание раздела</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography>
                3. Функции и пакеты
                Вы узнаете, как применять функции, методы и пакеты для эффективного использования кода,
                написанного
                лучшими разработчиками Python. Цель – сократить объем кода, необходимый для решения сложных
                задач!
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Содержание раздела</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Typography>
                4. NumPy
                NumPy – это базовый пакет Python для высокопроизводительных научных вычислений и анализа данных.
                Вы
                научитесь работать с мощными инструментами массива NumPy и приступите к анализу данных.
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Содержание раздела</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <Typography>
                        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
        ;
};
