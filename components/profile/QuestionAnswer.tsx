import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


const TabL = styled(TabUnstyled)`
  font-family: Verdana;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  justify-content: center;

  &.${tabUnstyledClasses.selected} {
    background-color: #FFFFFF;
    border: 3px solid #69CB2D;
    color: #69CB2D;
  }
`;

const TabR = styled(TabUnstyled)`
  font-family: Verdana;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: center;

  &.${tabUnstyledClasses.selected} {
    background-color: #FFFFFF;
    border: 3px solid #69CB2D;
    color: #69CB2D;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: Verdana;
  padding: 20px 12px;
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  margin-top: 20px;
  min-width: 300px;
  background-color: #69CB2D;
  border-radius: 40px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

export default function QuestionAnswer() {
  return (
    <TabsUnstyled defaultValue={0}>

      <TabsList>
        <TabL>Мои вопросы</TabL>
        <TabR>Мои ответы</TabR>
      </TabsList>

      <TabPanel value={0}>Мои вопросы (какой-то вывод)</TabPanel>
      <TabPanel value={1}>Мои ответы (какой-то вывод)</TabPanel>
    </TabsUnstyled>
  );
}















































// import React from "react";
// import PropTypes from 'prop-types';
// import {Avatar, Grid, Typography, Box} from "@mui/material";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ButtonBase from '@mui/material/ButtonBase';
// import ButtonGroup from '@mui/material/ButtonGroup';


// const QuestionAnswer = () => {
//   return(
//    <>
//     <Grid container>
//       <ButtonGroup sx={{cursor: 'pointer'}}>
//         <ButtonBase sx={{
//           width: 288,
//           fontFamily: 'Verdana',  
//           fontSize: 20,  
//           fontWeight: 700,
//           border: '1px solid #69CB2D',
//           paddingY: 1,
//           borderTopLeftRadius: 30,
//           borderBottomLeftRadius: 30,
//           color: '#1C1D1E',
//         }}>
//           Мои вопросы
//         </ButtonBase>  

//         <ButtonBase sx={{
//           width: 288,
//           fontFamily: 'Verdana',    
//           fontSize: 20,  
//           fontWeight: 700,
//           border: '1px solid #69CB2D',
//           paddingY: 1,
//           borderTopRightRadius: 30,
//           borderBottomRightRadius: 30,
//           color: '#1C1D1E',
//         }}>
//           Мои ответы
//         </ButtonBase>      
//       </ButtonGroup>
//     </Grid>
//   </>
//   )
// }

// export default QuestionAnswer;