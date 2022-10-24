import React from "react";
import MemoNavBar from "../Header/NavBar";
import { Child } from "../../types/HeaderLinks";
import CardsCourse from "../../components/courses/CardsCourse";
import { Box } from "@mui/material";

const MainLayout: React.FC<Child> = ({children})=>{
  return (
      <>
        <Box mt={5}>
          <CardsCourse />
        </Box>
      </>
  );
};


export default MainLayout;

