import React from "react";
import MemoNavBar from "../Header/NavBar";
import { Child } from "../../types/HeaderLinks";
import CardsCourse from "../../components/courses/CardsCourse";
import { Box } from "@mui/material";
import Footer from "../../components/footer/Footer";

const MainLayout: React.FC<Child> = ({children})=>{
  return (
      <>
        <Box maxWidth="xl" sx={{margin: '0 auto'}}>
          <CardsCourse />
        </Box>
        <Footer/>
      </>
  );
};


export default MainLayout;

