import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import LinearWithValueLabel from './ProgressMyCoursesStart';

const TabL = styled(TabUnstyled)`
  font-family: Verdana;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
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
  font-size: 16px;
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

export default function StartCourses() {
  return (
    <TabsUnstyled defaultValue={0}>

      <TabsList>
        <TabL>Начатые курсы</TabL>
        <TabR>Пройденные курсы</TabR>
      </TabsList>

      <TabPanel value={0}>
        <LinearWithValueLabel />
      </TabPanel>

      <TabPanel value={1}>
        Пройденные курсы (какой-то вывод)
      </TabPanel>
    </TabsUnstyled>
  );
}