import React from 'react';
import { Typography, Box, ButtonBase} from '@mui/material';

const cardsObj = [
  {id: 1, title: '123', times: 14, links: ['Python', 'Django', 'Backend']},
  {id: 2, title: '654', times: 14, links: ['HTML']},
  {id: 3, title: 'faker.name.firstName()', times: 14, links: ['CSS']},
  {id: 4, title: 'faker.name.firstName()', times: 14, links: ['JS']},
];

const buttonsList = ["Frontend", "Backend", "Тестирование", "Кибербезопастность", "Другое",];


const CardsCourse = () => {
  return (
    <Box sx={{minHeight: '80vh', backgroundColor: '#E5E5E5'}}>
      <Box component='div'>
        {/* вывод кнопочныx элементов */}
        <Box 
        sx={{
          display: 'flex',
          columnGap: 2,
          justifyContent: 'center',
        }}>
          {buttonsList.map((button) => (
            <ButtonBase key={button} 
              sx={{
               borderRadius: 40,
               paddingX: 4,
               paddingY: 1, 
               backgroundColor: '#1C1D1E', 
               ':hover': {backgroundColor: '#69CB2D', transition: '.5s'}
              }}>
              {button}
            </ButtonBase>
          ))}
        </Box>

        {/* вывод элемента поиска */}

        {/* вывод карточек с курсами */}
      </Box>
    </Box>
  );
};

export default CardsCourse;